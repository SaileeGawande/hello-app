FROM node:20-alpine
WORKDIR /app
COPY package.json .
RUN npm instal
COPY . .
EXPOSE 300
CMD ["node", "server.js"]
