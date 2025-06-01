const findDriverById = require("../repositories/getDriver.js")

const getDriverServices = async (requestId) => {
  const requests = await findDriverById(requestId)
  return requests
}

module.exports = getDriverServices
