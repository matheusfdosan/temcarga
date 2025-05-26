const newRequestService = require("../services/newRequestService.js")

const newRequestController = async (request, reply) => {
  let form = request.body

  try {
    const request = await newRequestService(form)
    reply.status(201).send({ message: "Solicitação registrada", request })
  } catch (err) {
    reply.status(401).send({ error: "Erro ao fazer solicitação: " + err })
  }
}

module.exports = newRequestController
