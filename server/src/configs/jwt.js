// Configurações JWT
const jwt = require("fastify-jwt")

module.exports = fastify.register(jwt, {
  secret: process.env.JWT_SECRET,
  expiresIn: "1h",
})
