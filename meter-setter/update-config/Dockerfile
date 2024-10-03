FROM node:18-alpine

WORKDIR /app/update-config

COPY package.json pnpm-lock.yaml ./

RUN npm install -g pnpm && pnpm install

COPY . .

EXPOSE 3016

CMD ["pnpm", "start"]
