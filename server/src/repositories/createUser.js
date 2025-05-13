const User = require("../models/User.js")

const createUser = async (name, cpf_cnpj, email, password) => {
  return await User.create({ name, cpf_cnpj, email, password })
}

module.exports = createUser
