const newRequestController = require("../controllers/newRequestController.js")

module.exports = async (server) => {
  server.post("/new-request", newRequestController)
}