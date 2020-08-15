# production build

# Build Phase (named as builder)
FROM node:alpine as builder
WORKDIR '/app'
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

# Run Phase
FROM nginx
# copy from another phase and from folder : to folder
COPY --from=builder /app/build /usr/share/nginx/html