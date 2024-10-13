FROM node:18-alpine

WORKDIR /app/creat-meter-service

COPY package.json ./

RUN npm install -g pnpm && pnpm install

COPY . .

EXPOSE 3006

CMD ["pnpm", "start"]