# base image
FROM node:18-alpine3.15

# set working directory
WORKDIR /build

# add `/usr/src/app/node_modules/.bin` to $PATH
#ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /build/package.json
RUN npm install
COPY . .
RUN npm install react-scripts -g
#RUN npm build
# start app
CMD ["npm", "start"]
