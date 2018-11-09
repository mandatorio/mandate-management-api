FROM node:10-slim
LABEL maintainer="joscelyn.jean@gmail.com"

# Create app directory
WORKDIR /usr/src/app

COPY . .

RUN npm install && \
    npm run-script clean && \
    npm run-script prettier && \
    npm run-script tslint && \
    npm run-script build && \
    npm prune --production

CMD ["npm", "start"]

EXPOSE 3000
