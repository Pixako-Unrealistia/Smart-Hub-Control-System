
FROM node:18-alpine


RUN npm install -g pnpm

WORKDIR /app/auth

COPY package.json pnpm-lock.yaml ./

RUN pnpm install --no-frozen-lockfile

COPY . .

RUN pnpm run build

EXPOSE 3001

CMD ["pnpm", "start"]
