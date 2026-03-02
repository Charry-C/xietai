FROM node:20-alpine AS base
ENV NODE_ENV=production
WORKDIR /app
RUN corepack enable

FROM base AS deps
COPY package.json ./
RUN corepack use pnpm@10.30.3 && pnpm install --no-frozen-lockfile
COPY . .
RUN pnpm build

FROM node:20-alpine AS runner
ENV NODE_ENV=production
WORKDIR /app
COPY --from=deps /app/.output ./.output
EXPOSE 3000
ENV PORT=3000
CMD ["node", ".output/server/index.mjs"]
