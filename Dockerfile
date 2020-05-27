FROM node:8.11.2-alpine
CMD node /app/index.js2
COPY . /app
WORKDIR /app
RUN npm install
CMD node /app/index.js
