const fastifyPlugin = require("fastify-plugin")

const login = require("../routes/auth/login.js")
const signup = require("../routes/auth/signup.js")
const protected = require("../routes/auth/protected.js")

async function allRoutes(server) {
  server.register(login)
  server.register(signup)
  server.register(protected)
}

module.exports = fastifyPlugin(allRoutes)
