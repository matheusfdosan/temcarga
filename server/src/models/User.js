const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const userSchema = new mongoose.Schema({
  name: { type: String, require: true },
  email: { type: String, required: true, unique: true },
  cpf_cnpj: { type: String, required: true, unique: true },
  phone: { type: String },
  password: { type: String, required: true },
})

// Criptografar senha antes de salvar
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10)
  }
  next()
})

userSchema.pre("save", async function (next) {
  if (this.isModified("cpf_cnpj")) {
    this.cpf_cnpj = await bcrypt.hash(this.cpf_cnpj, 10)
  }
  next()
})

module.exports = mongoose.model("User", userSchema)
