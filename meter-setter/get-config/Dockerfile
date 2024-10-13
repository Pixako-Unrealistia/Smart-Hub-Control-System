FROM node:18-alpine

WORKDIR /app/get-config

COPY package.json pnpm-lock.yaml ./

RUN npm install -g pnpm && pnpm install

COPY . .

EXPOSE 3015

CMD ["pnpm", "start"]
