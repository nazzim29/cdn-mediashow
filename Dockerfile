from node:14.17.5-alpine


WORKDIR /app

COPY . .

RUN npm install

EXPOSE 80

CMD [ "node", "server.js" ]