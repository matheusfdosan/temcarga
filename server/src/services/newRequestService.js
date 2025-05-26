const createRequest = require("../repositories/createRequest.js")

const signUpService = async (form) => {
  const request = await createRequest(form)
  return request
}

module.exports = signUpService
