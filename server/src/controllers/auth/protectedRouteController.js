const protectedRouteController = async (request, reply) => {
  const user = request.user

  reply.send({ message: "Rota protegida acessada", user })
}

module.exports = protectedRouteController
