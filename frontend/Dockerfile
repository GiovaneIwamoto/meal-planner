FROM node:20-alpine

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 4000

ENTRYPOINT [ "node", "./src/app.js" ]