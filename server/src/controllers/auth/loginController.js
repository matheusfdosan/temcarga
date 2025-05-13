const loginService = require("../../services/auth/loginService.js")
const { secret, expiresIn } = require("../../configs/jwt.js")

const loginController = async (request, reply) => {
  const { email, password } = request.body

  try {
    const user = await loginService(email, password)
    const token = request.server.jwt.sign(
      { id: user._id, email: user.email },
      secret,
      { expiresIn }
    )
    reply.send({ acess: true, token })
  } catch (err) {
    reply.status(401).send({ acess: false, error: "Erro ao fazer cadastro: " + err })
  }
}

module.exports = loginController
