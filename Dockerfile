FROM node:99-alpine
WORKDIR /app
COPY package.json 
RUN npm installx
COPY . .
EXPOSE 3000
CMD ["node", "server.js"]
