FROM node:10.5.0-alpine

# https://github.com/yelp/dumb-init allows CTRL+C to be passed to the yarn start cmd, allowing us to kill the container
ADD https://github.com/Yelp/dumb-init/releases/download/v1.1.1/dumb-init_1.1.1_amd64 /usr/local/bin/dumb-init
RUN chmod +x /usr/local/bin/dumb-init

WORKDIR /usr/src/app
EXPOSE 8080
CMD ["dumb-init", "yarn", "start"]

# Set environment variables
ENV NODE_ENV=production
ENV POSTGRES_URL=postgres://Sinnott@host.docker.internal:5432/pwadb

# Install dependencies
COPY package*.json yarn.lock ./
RUN yarn install --production

# Copy application
COPY . .
