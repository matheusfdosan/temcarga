// Configurações JWT
const fastifyPlugin = require("fastify-plugin")
const jwt = require("@fastify/jwt")
const { JWT_SECRET } = require("../../envVariables.js")

async function jwtFunc(server) {
  server.register(jwt, {
    secret: JWT_SECRET,
    expiresIn: "1h",
  })
}

module.exports = fastifyPlugin(jwtFunc)
