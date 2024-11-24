# Use the official Node.js image as the base
FROM node:16 as build

# Set working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React application
RUN npm run build

# Serve the built app with a static server
FROM nginx:alpine

# Copy the build folder to the nginx container
COPY --from=build /app/build /usr/share/nginx/html

# Expose the port for nginx
EXPOSE 80

# Run nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
