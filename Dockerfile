# Build stage
FROM oven/bun:1 as builder
WORKDIR /app
COPY package.json bun.lockb ./
RUN bun install
COPY . .
RUN bun run build

# Production stage
FROM nginx:alpine
COPY --from=builder /app/.output/public /usr/share/nginx/html
COPY --from=builder /app/.output/server /app/server
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
