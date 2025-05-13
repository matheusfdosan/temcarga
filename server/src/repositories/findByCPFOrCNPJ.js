const User = require("../models/User.js")

const findByCPFOrCNPJ = async (cpf_cnpj) => {
  return await User.findOne({ cpf_cnpj })
}

module.exports = findByCPFOrCNPJ
