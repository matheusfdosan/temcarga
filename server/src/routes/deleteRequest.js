const deleteRequestController = require("../controllers/deleteRequestController.js")

module.exports = async (server) => {
  await server.delete("/delete-request/:id", deleteRequestController)
}
