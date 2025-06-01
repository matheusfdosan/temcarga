const realesePaymentService = require("../services/realesePaymentService.js")

const realesePaymentController = async (request, reply) => {
  let id = request.params.id

  try {
    const request = await realesePaymentService(id)
    reply.status(201).send({ message: "Solicitação concluída", request })
  } catch (err) {
    reply.status(401).send({ error: "Erro ao concluir solicitação: " + err })
  }
}

module.exports = realesePaymentController
