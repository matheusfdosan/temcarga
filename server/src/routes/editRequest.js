const editRequestController = require("../controllers/editRequestController.js")

module.exports = async (server) => {
  await server.put("/edit-request/:id", editRequestController)
}
