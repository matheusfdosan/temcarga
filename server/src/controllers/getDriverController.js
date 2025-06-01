const getDriverServices = require("../services/getDriverServices.js")

const getDriverController = async (request, reply) => {
  const requestId = request.params.requestId

  try {
    const driver = await getDriverServices(requestId)
    reply.status(201).send({ message: "Motorista encontrado", driver })
  } catch (err) {
    reply.status(401).send({ error: "Erro ao buscar motorista: " + err })
  }
}

module.exports = getDriverController
