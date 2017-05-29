FROM node:6.9.5-alpine

# Prepare app directory
RUN mkdir -p /usr/src/app
ADD . /usr/src/app

# Install dependencies
WORKDIR /usr/src/app

# Install Yarn and Node.js dependencies
RUN npm install yarn --global --no-progress --silent --depth 0 && \
    yarn --no-progress

# Build the app
RUN yarn run build

# Expose the app port
EXPOSE 3000

# Start the app
CMD yarn start
