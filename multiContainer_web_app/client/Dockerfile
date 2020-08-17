FROM node:alpine as builder
WORKDIR '/app'
COPY ./package*.json ./
RUN npm install
COPY ./ ./
# this is mistake, which is a statement generally used to assign start command and triggers only when docker run is used
# CMD ["npm", "run", "build"]
RUN npm run build

FROM nginx
EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html