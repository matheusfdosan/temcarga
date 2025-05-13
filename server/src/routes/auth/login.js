const loginController = require("../../controllers/auth/loginController.js")

module.exports = async (server) => {
  server.post("/login", loginController)
}
