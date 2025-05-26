const userRequestController = require("../controllers/userRequestController.js")

module.exports = async (server) => {
  server.get("/user-requests/:userid", userRequestController)
}