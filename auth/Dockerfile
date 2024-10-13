
FROM node:18-alpine

WORKDIR /app/auth

RUN npm install -g pnpm



COPY package.json pnpm-lock.yaml ./

RUN pnpm install --no-frozen-lockfile

COPY . .

RUN pnpm run build

EXPOSE 3001

CMD ["pnpm", "start"]
