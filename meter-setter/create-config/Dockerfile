FROM node:18-alpine

WORKDIR /app/create-config

COPY package.json pnpm-lock.yaml ./

RUN npm install -g pnpm && pnpm install

COPY . .

EXPOSE 3013

CMD ["pnpm", "start"]