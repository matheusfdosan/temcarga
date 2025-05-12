const mongoose = require("mongoose")
const { MONGODB } = process.env

// Conexão com o Mongo
const connectDB = async () => {
  await mongoose.connect(MONGODB, {
    useNewURLParser: true,
    useUnifiedTopology: true,
  })
  console.log("Mongoose Connected Baby ;)")
}

module.exports = connectDB
