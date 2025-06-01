const realesePayment = require("../repositories/realesePayment.js")

const realesePaymentService = async (id) => {
  const request = await realesePayment(id)
  return request
}

module.exports = realesePaymentService
