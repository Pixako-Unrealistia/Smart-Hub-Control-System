FROM node:18-alpine

WORKDIR /app/delete-meter-service

COPY package.json pnpm-lock.yaml ./

RUN npm install -g pnpm && pnpm install

COPY . .

EXPOSE 3007

CMD ["pnpm", "start"]