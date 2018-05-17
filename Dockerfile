FROM node:carbon


WORKDIR /usr/src/app

# install app dependencies
# widwcard ensures both package.json and package-lock.json are included
# NOTE: this uses cached Docker Layers http://bitjudo.com/blog/2014/03/13/building-efficient-dockerfiles-node-dot-js/

COPY package*.json ./

RUN npm install


COPY . .

EXPOSE 8080
CMD [ "npm", "start" ]
