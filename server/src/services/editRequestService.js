const editRequest = require("../repositories/editRequest.js")

const editRequestService = async (id, form) => {
  const request = await editRequest(id, form)
  return request
}

module.exports = editRequestService
