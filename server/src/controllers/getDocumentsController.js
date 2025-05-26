const getDocumentsServices = require("../services/getDocumentsServices.js")

const getDocumentsController = async (request, reply) => {
  const userId = request.params.userid

  try {
    const documents = await getDocumentsServices(userId)
    reply.status(201).send({ message: "Documentos encontrados", documents })
  } catch (err) {
    reply.status(401).send({ error: "Erro ao buscar documentos: " + err })
  }
}

module.exports = getDocumentsController
