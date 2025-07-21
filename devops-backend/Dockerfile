# devops-backend/Dockerfile
FROM node:16-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .

FROM node:16-alpine
WORKDIR /app
COPY --from=builder /app ./
RUN npm prune --production
EXPOSE 8080
CMD ["node", "server.js"]
