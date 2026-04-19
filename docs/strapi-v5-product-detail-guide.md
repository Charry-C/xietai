# Strapi v5 产品详情查询规范（Product + ProductStyle）

> 适用于当前项目：`xietai` 前端对接 `trade-strapi`（Strapi v5）。

## 1. 本次问题结论

- `populate=*` 只能稳定覆盖 1 层，不会自动把 `product_styles` 里的媒体（`coverImage` / `detailImages`）完整带出来。
- 在当前后端环境中，`populate[image]=*` 会触发校验错误：
  - `400 ValidationError: Invalid key related at image.related`
- 可用方案：使用 **字段级 nested populate**（`fields + populate[...][fields]`）

## 2. 已验证可用的查询形态

`documentId` 查询（推荐）：

```text
GET /api/products?
filters[documentId][$eq]={DOCUMENT_ID}&
pagination[pageSize]=1&
locale={LOCALE}&
fields[0]=name&
fields[1]=specs&
populate[image][fields][0]=url&
populate[image][fields][1]=formats&
populate[product_styles][fields][0]=name&
populate[product_styles][fields][1]=sort&
populate[product_styles][fields][2]=specs&
populate[product_styles][populate][coverImage][fields][0]=url&
populate[product_styles][populate][coverImage][fields][1]=formats&
populate[product_styles][populate][detailImages][fields][0]=url&
populate[product_styles][populate][detailImages][fields][1]=formats
```

## 3. 前端当前实现位置

- 详情页请求参数：`/Users/charry/Projects/trade-website/xietai/pages/products/[id].vue`
- 请求逻辑：`fetchProduct()` 中的 `strapiRequest('/products', 'get', query, ...)`
- 关键映射逻辑：
  - `mapImageList()`
  - `mapProduct()`
  - `resolvedImages` / `resolvedSpecs`

## 4. 为什么“款式切换主图不变”

根因不是切换逻辑，而是接口没返回款式详情图：

- 当 `product_styles[].detailImages` 为空时，前端会回退 `product.images`
- 所以界面看起来“切了样式，但主图没变化”

## 5. 新增字段时的操作清单（Checklist）

每次 Strapi 新增字段（尤其 relation/media/component）后，按下面顺序做：

1. 后端确认字段名（区分大小写）
2. 把字段加入查询参数（`fields` 或 nested `populate`）
3. 用 curl 单测该字段是否返回
4. 更新前端类型定义（TypeScript interface）
5. 更新前端映射函数（`mapProduct` / `mapXXX`）
6. 加回退逻辑（字段缺失时不崩）
7. 本地页面联调（目标语言 `locale` 也要测）

## 6. 常见坑

- `populate=*` 不等于“所有层级都展开”
- `populate[relation]=*` 在某些 v5 校验配置下会报错
- i18n 开启后，不同 locale 下媒体可能为空
- Token 权限不足会导致字段“看起来像没返回”

## 7. 调试建议（最快路径）

1. 先用 curl 拿最小字段集（`name + 目标字段`）
2. 再看前端映射结果（`detailImages.length`）
3. 最后看 UI 逻辑（是否触发了回退）

---

如果后续新增 `ProductStyle` 字段（例如 `priceTag`、`badge`、`video`），直接按这份文档第 5 节执行即可。
