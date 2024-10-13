FROM node:18-alpine

WORKDIR /app/set-all-meters-by-hub-id-service

COPY package.json pnpm-lock.yaml ./

RUN npm install -g pnpm && pnpm install

COPY . .

EXPOSE 3011

CMD ["pnpm", "start"]
