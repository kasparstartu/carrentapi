# Simple Car Rental db

CRUD api for car rental

## Getting Started


### Prerequisites

This project requires Node and Mongodb

### Installing

Clone repository

```
git clone https://github.com/kasparstartu/carrentapi
```

Install dependencies

```
npm install
```

Please change `dbServer` in the `app.js`

```
const dbServer = 'mongodb://db2.localnet:27017/stardata'
```

Start


```
npm start
```

## Examples

Currently api works on `localhost:3001` not to interfere with frontend api

Current api routes:

* GET `/api/1/cars` returns list of all cars
* GET `/api/1/cars/:id` returns individual car
* POST `/api/1/cars/:id` saves item data and returns saved data
* PUT `/api/1/cars/:id` updates item data
* DELETE `/api/1/cars/:id` deletes item


## Built With

* [Fastify](https://github.com/fastify/fastify) - Fastify - a NodeJS framework

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* [Carrent-client](https://github.com/kasparstartu/carrent-client) is related tool to interact with carrent api
* Please see my [WP Schema plugin](https://github.com/Milbergs/wp-schema-plugin)
* Pretty thank you for your time and opportunity :)
