FROM node:18-alpine

WORKDIR /app/set-meter-by-id-service

COPY package.json pnpm-lock.yaml ./

RUN npm install -g pnpm && pnpm install

COPY . .

EXPOSE 3010

CMD ["pnpm", "start"]
