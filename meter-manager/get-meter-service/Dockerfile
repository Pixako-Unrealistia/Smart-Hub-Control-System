FROM node:18-alpine

WORKDIR /app/get-meter-service

COPY package.json ./

RUN npm install -g pnpm && pnpm install 

COPY . .

EXPOSE 3008

CMD ["pnpm", "start"]