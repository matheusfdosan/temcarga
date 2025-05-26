const getRequest = require("../repositories/getRequest.js")

const getOneRequestService = async (requestid) => {
  const requests = await getRequest(requestid)
  return requests
}

module.exports = getOneRequestService
