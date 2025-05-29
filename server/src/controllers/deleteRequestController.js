const deleteRequestService = require("../services/deleteRequestService.js")

const deleteRequestController = async (request, reply) => {
  let id = request.params.id

  try {
    const request = await deleteRequestService(id)
    reply.status(201).send({ message: "Solicitação deletada", request })
  } catch (err) {
    reply.status(401).send({ error: "Erro ao deletar solicitação: " + err })
  }
}

module.exports = deleteRequestController
