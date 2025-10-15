FROM node:22-alpine AS base

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --omit=dev

COPY . .

EXPOSE 3000

CMD ["sh", "-c", "npm run db:create && npm run db:migrate && npm start"]
