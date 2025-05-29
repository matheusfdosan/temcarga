const cancelRequestController = require("../controllers/cancelRequestController.js")

module.exports = async (server) => {
  await server.put("/cancel-request/:id", cancelRequestController)
}
