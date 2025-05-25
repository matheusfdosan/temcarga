const fastifyPlugin = require("fastify-plugin")
const cors = require("@fastify/cors")

function corOptions(server) {
  server.register(cors, {
    origin: "*",
  })
}

module.exports = fastifyPlugin(corOptions)
