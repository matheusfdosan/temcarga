const cancelRequest = require("../repositories/cancelRequest.js")

const cancelRequestService = async (id) => {
  const request = await cancelRequest(id)
  return request
}

module.exports = cancelRequestService
