const mongoose = require("mongoose")
const fastifyPlugin = require("fastify-plugin")
const { MONGODB_URI } = require("../../envVariables.js")

async function connectDB(fastify, opts) {
  if (!MONGODB_URI) throw new Error("MONGODB não está definido no .env")

  try {
    await mongoose.connect(MONGODB_URI)
    fastify.log.info("MongoDB conectado com sucesso")
    console.log("MongoDB Conectado Baby ;)")
  } catch (err) {
    fastify.log.error("Erro ao conectar no MongoDB:", err)
    throw err
  }
}

module.exports = fastifyPlugin(connectDB)
