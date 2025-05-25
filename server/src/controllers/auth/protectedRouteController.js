const protectedRouteController = async (request, reply) => {
  let user = request.user

  reply.send({ message: "Rota protegida acessada", user })
}

module.exports = protectedRouteController
