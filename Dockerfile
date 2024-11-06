FROM node:18-alpine AS builder
LABEL maintainer="DevOps"
WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build

FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/.env.production .env
EXPOSE 3000
CMD ["node", "server.js"]