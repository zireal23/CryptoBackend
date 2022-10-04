FROM node:12-alpine3.14
WORKDIR /app
COPY package.json /app
RUN npm install 
COPY . /app 
CMD node src/index.ts 
EXPOSE 5000 8082