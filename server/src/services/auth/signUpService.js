const findByCPFOrCNPJ = require("../../repositories/findByCPFOrCNPJ.js")
const createUser = require("../../repositories/createUser.js")

const signUpService = async (name, cpf_cnpj, email, password) => {
  const existingUser = await findByCPFOrCNPJ(cpf_cnpj)
  if (existingUser) throw new Error("Esse usuário já existe")

  const user = await createUser(name, cpf_cnpj, email, password)
  await user.save()
  return user
}

module.exports = signUpService
