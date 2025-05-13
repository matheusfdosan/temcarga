const authMiddleware = require("../../middlewares/authMiddleware.js")
const protectedRouteController = require("../../controllers/auth/protectedRouteController.js")

module.exports = async (server) => {
  server.get(
    "/protected",
    { preHandler: [authMiddleware] },
    protectedRouteController
  )
}
