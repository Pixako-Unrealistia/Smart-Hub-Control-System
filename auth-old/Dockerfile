FROM node:18-alpine

WORKDIR /app/auth

COPY package.json pnpm-lock.yaml ./

RUN npm install -g pnpm && pnpm install

COPY . .

EXPOSE 3001

CMD ["pnpm", "start"]