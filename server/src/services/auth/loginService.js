const findByEmail = require("../../repositories/findByEmail")
const comparePasswords = require("../../repositories/comparePasswords")

const loginService = async (email, password) => {
  const user = await findByEmail(email)
  if (!user) throw new Error("Usuário não encontrado")

  const isValid = await comparePasswords(password, user.password)
  if (!isValid) throw new Error("Senha incorreta")

  return {
    id: user.id,
    name: user.name,
    email: user.email,
    cpf_cnpj: user.cpf_cnpj,
    phone: user.phone,
  }
}

module.exports = loginService
