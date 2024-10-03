FROM node:18-alpine

WORKDIR /app/create-hub-service

COPY package.json pnpm-lock.yaml ./

RUN npm install -g pnpm && pnpm install

COPY . .

EXPOSE 3002

CMD ["pnpm", "start"]
