
FROM node:18-alpine

WORKDIR /app/set-hub-status-service

RUN npm install -g pnpm

COPY package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile --production

COPY dist ./dist

EXPOSE 3012

CMD ["node", "dist/app.js"]
