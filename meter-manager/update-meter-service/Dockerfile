FROM node:18-alpine

WORKDIR /app/update-meter-service

COPY package.json pnpm-lock.yaml ./

RUN npm install -g pnpm && pnpm install

COPY . .

EXPOSE 3009

CMD ["pnpm", "start"]