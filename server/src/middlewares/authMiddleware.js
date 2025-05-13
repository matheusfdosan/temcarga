const jwt = require("jsonwebtoken")
const { secret } = require("../configs/jwt.js")

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1]
  if (!token) return res.status(401).json({ error: "Nenhum token oferecido" })
  try {
    const decoded = jwt.verify(token, secret)
    req.user = decoded
    next()
  } catch (error) {
    res.code(401).send({ error: "Token inválido" })
  }
}

module.exports = authMiddleware
