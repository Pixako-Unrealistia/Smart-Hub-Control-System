FROM node:18-alpine

WORKDIR /app/delete-config

COPY package.json pnpm-lock.yaml ./

RUN npm install -g pnpm && pnpm install

COPY . .

EXPOSE 3014

CMD ["pnpm", "start"]
