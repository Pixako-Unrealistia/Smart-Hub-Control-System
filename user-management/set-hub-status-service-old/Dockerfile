FROM node:18-alpine

WORKDIR /app/set-hub-status-service

COPY package.json pnpm-lock.yaml ./

RUN npm install -g pnpm && pnpm install

COPY . .

EXPOSE 3012

CMD ["pnpm", "start"]
