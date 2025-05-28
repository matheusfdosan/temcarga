const fastifyPlugin = require("fastify-plugin")
const cors = require("@fastify/cors")

function corOptions(server) {
  server.register(cors, {
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  })
}

module.exports = fastifyPlugin(corOptions)
