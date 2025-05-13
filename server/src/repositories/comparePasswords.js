const bcrypt = require("bcrypt")

const comparePasswords = async (password, userPassword) => {
  return bcrypt.compare(password, userPassword)
}

module.exports = comparePasswords