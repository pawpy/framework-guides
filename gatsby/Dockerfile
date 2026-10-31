FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM caddy:2-alpine
COPY --from=build /app/public /srv
CMD ["sh", "-c", "exec caddy file-server --root /srv --listen :${PORT:-8080}"]
