FROM node:15-alpine AS builder

# Set working directory
WORKDIR /app
# Copy our node module specification
COPY package.json package.json
# install node modules and build assets
RUN npm install

COPY . .

# Create production build of React App
RUN npm run build

FROM nginx:alpine

# Set working directory to nginx asset directory
WORKDIR /usr/share/nginx/html
# Remove default nginx static assets
RUN rm -rf *
# Copy static assets from builder stage
COPY --from=builder /app/build .

# Entry point when Docker container has started
ENTRYPOINT ["nginx", "-g", "daemon off;"]