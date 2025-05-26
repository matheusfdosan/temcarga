const getAllRequestService = require("../services/getAllRequestService.js")

const userRequestController = async (request, reply) => {
  let userId = request.params.userid

  try {
    const request = await getAllRequestService(userId)
    reply.status(201).send({ message: "Solicitações encontradas", request })
  } catch (err) {
    reply.status(401).send({ error: "Erro ao fazer busca por solicitações: " + err })
  }
}

module.exports = userRequestController
