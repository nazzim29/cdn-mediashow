from node:14.17.5-alpine


WORKDIR /app

COPY . .

RUN npm install


CMD [ "node", "server.js" ]