# ---------- Build stage ----------
FROM node:20-alpine AS build

WORKDIR /app

# Enable pnpm
RUN corepack enable && corepack prepare pnpm@9.0.0 --activate

COPY package.json pnpm-lock.yaml ./

# Install all dependencies including devDependencies (needed for build)
RUN pnpm install --frozen-lockfile --prod=false

COPY . .

# Build React app
RUN pnpm build


# ---------- Runtime stage ----------
FROM nginx:alpine

# Remove default nginx config
RUN rm /etc/nginx/conf.d/default.conf

# SPA routing config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy build output (Vite → dist)
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
