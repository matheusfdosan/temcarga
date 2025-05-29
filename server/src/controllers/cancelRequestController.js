const cancelRequestService = require("../services/cancelRequestService.js")

const cancelRequestController = async (request, reply) => {
  let id = request.params.id

  try {
    const request = await cancelRequestService(id)
    reply.status(201).send({ message: "Solicitação cancelada", request })
  } catch (err) {
    reply.status(401).send({ error: "Erro ao cancelar solicitação: " + err })
  }
}

module.exports = cancelRequestController
