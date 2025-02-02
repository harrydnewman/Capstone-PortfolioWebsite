# Use Node 20 Alpine as the base image
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Install git before running npm install
RUN apk add --no-cache git

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Install PM2 globally for background process management
RUN npm install -g pm2 serve

# Copy the entire application
COPY . .

# Build the React app
RUN npm run build

# Expose the React port and backend server port
EXPOSE 3000 3001

# Use pm2-runtime to keep processes running inside Docker
CMD ["pm2-runtime", "start", "--json", "--no-daemon", "--merge-logs", "--log-date-format", "YYYY-MM-DD HH:mm:ss", "--", "server.js", "--name", "backend", "&&", "serve", "-s", "dist"]
