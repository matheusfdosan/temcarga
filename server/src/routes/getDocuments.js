const getDocumentsController = require("../controllers/getDocumentsController.js")

module.exports = async (server) => {
  server.get("/documents/:userid", getDocumentsController)
}