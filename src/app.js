'use strict'

const path = require('path')
const mongoose = require('mongoose')
const fastifyCors = require('fastify-cors')
const fastify = require('fastify')({
  logger: true
})

// allow cross origin
fastify.register(fastifyCors, { origin: false })

// require index.js from routes
const routes = require('./routes')

// configurations
const dbServer = 'mongodb://db2.localnet:27017/stardata'

// Connect to DB
mongoose.connect(dbServer)
 .then(() => console.log('MongoDB connected'))
 .catch(err => console.log(err))



 // routes
 routes.forEach((route, index) => {
  fastify.route(route)
 })

// Run the server!
const start = async () => {
  try {
    await fastify.listen(3001)
    fastify.log.info(`server listening on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
