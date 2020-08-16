# production build

# Build Phase 
FROM node:alpine
WORKDIR '/app'
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Run Phase
FROM nginx
# expose this port from this container to outside elastic bean stalk
EXPOSE 80
# copy from another phase and from folder : to folder
COPY --from=builder /app/build /usr/share/nginx/html