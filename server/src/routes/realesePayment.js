const realesePaymentController = require("../controllers/realesePaymentController.js")

module.exports = async (server) => {
  await server.put("/realease-payment/:id", realesePaymentController)
}
