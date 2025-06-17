FROM node:lts-buster
RUN git clone https://github.com/Ormam87/ORMAN_XMD/root/Orman87
WORKDIR /root/Orman87
RUN npm install && npm install -g pm2 || yarn install --network-concurrency 1
COPY . .
EXPOSE 9090
CMD ["npm", "start"]
