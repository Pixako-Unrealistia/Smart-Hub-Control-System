FROM node:18-alpine

WORKDIR /app/update-hub-service

COPY package.json pnpm-lock.yaml ./

RUN npm install -g pnpm && pnpm install

COPY . .

EXPOSE 3005

CMD ["pnpm", "start"]
