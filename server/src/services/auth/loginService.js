const findByEmail = require("../../repositories/findByEmail.js")
const comparePasswords = require("../../repositories/comparePasswords.js")

const loginService = async (email, password) => {
  const user = await findByEmail(email)
  if (!user) throw new Error("Usuário não encontrado")

  const isValid = await comparePasswords(password, user.password)
  if (!isValid) throw new Error("Senha incorreta")
  return user
}

module.exports = loginService
