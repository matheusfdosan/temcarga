const oneRequestController = require("../controllers/oneRequestController.js")

module.exports = async (server) => {
  server.get("/request/:requestid", oneRequestController)
}