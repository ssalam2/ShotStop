FROM node:lts-bookworm-slim

WORKDIR /app

COPY ./package*.json ./
RUN npm install

COPY . ./

ENV PORT=4000
EXPOSE 80

ENTRYPOINT [ "npm", "run" , "dev" ]