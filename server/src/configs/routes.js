const fastifyPlugin = require("fastify-plugin")

const login = require("../routes/auth/login.js")
const signup = require("../routes/auth/signup.js")
const protected = require("../routes/auth/protected.js")
const newRequest = require("../routes/newRequest.js")
const userRequests = require("../routes/userRequests.js")
const oneRequest = require("../routes/oneRequest.js")

async function allRoutes(server) {
  server.register(login)
  server.register(signup)
  server.register(protected)
  server.register(newRequest)
  server.register(userRequests)
  server.register(oneRequest)
}

module.exports = fastifyPlugin(allRoutes)
