FROM node:18-alpine

WORKDIR /app/get-hub-service

COPY package.json pnpm-lock.yaml ./

RUN npm install -g pnpm && pnpm install

COPY . .

EXPOSE 3004

CMD ["pnpm", "start"]
