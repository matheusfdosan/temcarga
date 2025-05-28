const editRequestService = require("../services/editRequestService.js")

const editRequestController = async (request, reply) => {
  let form = request.body
  let id = request.params.id

  try {
    const request = await editRequestService(id, form)
    reply.status(201).send({ message: "Solicitação editada", request })
  } catch (err) {
    reply.status(401).send({ error: "Erro ao editar solicitação: " + err })
  }
}

module.exports = editRequestController
