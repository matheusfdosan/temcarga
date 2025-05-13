const signUpController = require("../../controllers/auth/signUpController.js")

module.exports = async (server) => {
  server.post("/signup", signUpController)
}
