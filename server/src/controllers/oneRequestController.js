const getOneRequestService = require("../services/getOneRequestService.js")

const oneRequestController = async (request, reply) => {
  let requestid = request.params.requestid

  try {
    const request = await getOneRequestService(requestid)
    reply.status(201).send({ message: "Solicitação encontrada", request })
  } catch (err) {
    reply.status(401).send({ error: "Erro ao fazer busca a solicitação: " + err })
  }
}

module.exports = oneRequestController
