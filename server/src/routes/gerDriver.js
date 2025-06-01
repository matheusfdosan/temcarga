const getDriverController = require("../controllers/getDriverController.js")

module.exports = async (server) => {
  server.get("/driver/:requestId", getDriverController)
}