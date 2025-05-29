const deleteRequest = require("../repositories/deleteRequest.js")

const deleteRequestService = async (id) => {
  const request = await deleteRequest(id)
  return request
}

module.exports = deleteRequestService
