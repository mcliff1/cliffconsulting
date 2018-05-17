FROM node:carbon
MAINTAINER Matt@DenverCliffs.com

# carbon is node 8 (8.11 currently)

RUN mkdir /app
WORKDIR /app

COPY build-docker.sh /

# install app dependencies
# widwcard ensures both package.json and package-lock.json are included
# NOTE: this uses cached Docker Layers http://bitjudo.com/blog/2014/03/13/building-efficient-dockerfiles-node-dot-js/

CMD [ "/build-docker.sh" ]
