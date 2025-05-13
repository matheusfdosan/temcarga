const protectedRouteController = async (req, res) => {
  const user = req.user
  res.json({ message: "Rota protegida acessada", user })
}

module.exports = protectedRouteController
