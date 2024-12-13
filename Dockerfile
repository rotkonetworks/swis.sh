# Build stage
FROM oven/bun:1 as builder
WORKDIR /app

# Copy and install dependencies first
COPY package.json bun.lockb ./
RUN bun install --no-cache

# Copy source code
COPY . .

# Debug: Show what's being built
RUN echo "Content of src directory:" && ls -la src/

# Add verbose logging to build
RUN bun run build || (echo "Build failed. Showing error details:" && ls -la && exit 1)

# Production stage
FROM nginx:alpine
WORKDIR /usr/share/nginx/html

# Copy built files
COPY --from=builder /app/.output/public .
COPY --from=builder /app/.output/server /app/server
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Use standard Nginx port
EXPOSE 80

# Add healthcheck
HEALTHCHECK --interval=30s --timeout=3s \
  CMD wget -q --spider http://localhost:80/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
