[![CircleCI](https://circleci.com/gh/damla/starducks-server/tree/main.svg?style=svg&circle-token=359ede319a88a8b675f77fa361b1cf2b0fa89493)](https://circleci.com/gh/damla/starducks-server/tree/main)

# ☕️ Starducks Server

- [🔗 Client](https://starducks-client.netlify.app)
- [🔗 Server](https://starducks-server.herokuapp.com/api-docs)

## Description

- This repository is created with Express JS, to develop a REST API for CRUD processes of coffee data given by company. Because of the given YAML file, Swagger UI preferred for documentation. Deployment process done on Heroku and CI/CD pipelines managed by using CircleCI.

## Dependencies

- Cors: Used to enable CORS policy
- Morgan: Used as a logger
- MongoDB: Used as database
- Mongoose: Used for object modeling
- Nodemon: Used to restart server automatically
- Swagger UI Express: Used to serve Swagger
- Swagger JSDoc: Used to read annotated source code and generate OpenAPI specs.
- UUID: Used to generate random UUIDs

## Installation

```bash
# install packages
yarn

#start application with node
yarn start

# start application with nodemon to see changes on server instantly
yarn dev

# test application
yarn test
```
