# specify base image (alpine version of node is the very basic image)
FROM node:alpine

# we donot want our files in root directory of container, so creating workdirectory
WORKDIR /usr/app/

# copy only dependecies first (efficient way)
COPY ./package.json ./

# install dependencies
RUN npm install

# copy rest of the files
COPY ./ ./

# default command
CMD ["npm","start"]

