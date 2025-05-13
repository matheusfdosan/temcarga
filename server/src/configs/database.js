const mongoose = require("mongoose")
const { MONGODB_URI } = require("../../envVariables.js")
const fastifyPlugin = require("fastify-plugin")

// Conexão com o Mongo
const connectDB = async () => {
  try {
    if (!MONGODB_URI) throw new Error("MongoDB não está definido em .env")

    await mongoose.connect(MONGODB_URI, {
      useNewURLParser: true,
      useUnifiedTopology: true,
    })
    console.log("MongoDB Conectado Baby ;)")
  } catch (err) {
    console.error("Erro ao se conectar com o MongoDB: " + err)
  }
}

module.exports = fastifyPlugin(connectDB)
