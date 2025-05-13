const server = require("fastify")({ logger: true })
// const server = require("fastify")
const { PORT } = require("../envVariables.js")
const jwt = require("./configs/jwt.js")
// const cors = require("./configs/cors.js")
const routes = require("./configs/routes.js")
const database = require("./configs/database.js")

server.register(jwt)
// server.register(cors)
server.register(routes)
server.register(database)

server.listen({ port: PORT, host: "0.0.0.0" }, (err) => {
  if (err) throw err
  console.log("Server running http://localhost:3000")
})
