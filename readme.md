# Mandate management API

## Quick start

### Prerequisites

-   Node 10.x

### Start the API

    npm install
    npm compile
    npm start

The default port is 3000.

## To build

### Build docker image

    docker build -t mandatorio/mandate-management-api .

### Run docker container

    docker run --name mandate-api -p 8080:3000 mandatorio/mandate-management-api
