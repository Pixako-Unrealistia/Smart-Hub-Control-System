FROM node:18-alpine

WORKDIR /app/frontend

COPY package.json pnpm-lock.yaml ./

RUN npm install -g pnpm && pnpm install

COPY . .

RUN pnpm run build

EXPOSE 3000

CMD ["next", "start"]