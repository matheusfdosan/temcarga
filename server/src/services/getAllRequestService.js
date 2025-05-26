const getRequests = require("../repositories/getRequests.js")

const getAllRequestService = async (userId) => {
  const requests = await getRequests(userId)
  return requests
}

module.exports = getAllRequestService
