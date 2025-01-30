FROM node:20-alpine

WORKDIR /app

# Install git before running npm install
RUN apk add --no-cache git

COPY package.json .

RUN npm install

RUN npm i -g serve

COPY . .

RUN npm run build

EXPOSE 3000

CMD [ "serve", "-s", "dist" ]
