const server = require("fastify")({ logger: true })
const { PORT } = require("../envVariables.js")
const jwt = require("./configs/jwt.js")
const cors = require("./configs/cors.js")
const routes = require("./configs/routes.js")

server.register(jwt)
server.register(cors)
server.register(routes)

server.listen({ port: PORT, host: "0.0.0.0" }, (err) => {
  if (err) throw err
  console.log("Server running http://localhost:3000")
})
