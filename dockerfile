FROM node:alpine

# Create app directory
WORKDIR /eatsnow-premium

# Copy package.json
COPY package.json .

# Install app dependencies
RUN npm install

# Copy app source
COPY . .

# Expose port and start application
CMD [ "npm", "run", "start" ]