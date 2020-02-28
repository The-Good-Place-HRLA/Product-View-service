FROM node:13-alpine

RUN apk add g++ make python

RUN mkdir -p /Users/brianprice/Desktop/Coding/Hack_Reactor/Projects/System_Design_Capstone/Product-View-service

WORKDIR /Users/brianprice/Desktop/Coding/Hack_Reactor/Projects/System_Design_Capstone/Product-View-service

COPY . /Users/brianprice/Desktop/Coding/Hack_Reactor/Projects/System_Design_Capstone/Product-View-service

RUN npm install

EXPOSE 3333

CMD ["npm", "start"]