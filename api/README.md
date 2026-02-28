# API Directory

This directory is intended for your API service files.
You can create files here to organize your API calls.

Example: `api/products.ts`

```typescript
// api/products.ts
export const getProducts = () => {
  return useStrapiFetch('/products')
}

export const getProduct = (id: string) => {
  return useStrapiFetch(`/products/${id}`)
}
```

You can then import these functions in your components or pages.
