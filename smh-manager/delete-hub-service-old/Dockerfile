FROM node:18-alpine

WORKDIR /app/delete-hub-service

COPY package.json pnpm-lock.yaml ./

RUN npm install -g pnpm && pnpm install

COPY . .

EXPOSE 3003

CMD ["pnpm", "start"]
