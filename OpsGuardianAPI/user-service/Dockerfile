# ------------------------
# Builder Stage
# ------------------------
FROM node:18-alpine AS builder

WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install ALL dependencies including devDependencies
RUN pnpm install --prod=false

# Copy source
COPY . .

# Build NestJS
RUN ./node_modules/.bin/nest build

# ------------------------
# Runner Stage
# ------------------------
FROM node:18-alpine AS runner

WORKDIR /app

RUN npm install -g pnpm

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY package.json ./

EXPOSE 3000
CMD ["node", "dist/main.js"]
