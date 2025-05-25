const signUpService = require("../../services/auth/signUpService.js")

const signUpController = async (request, reply) => {
  let { name, cpf_cnpj, email, password, phone = "" } = request.body

  try {
    const user = await signUpService(name, cpf_cnpj, email, password, phone = "")
    reply.status(201).send({ message: "Usuário registrado", user })
  } catch (err) {
    reply.status(401).send({ error: "Erro ao fazer cadastro: " + err })
  }
}

module.exports = signUpController
