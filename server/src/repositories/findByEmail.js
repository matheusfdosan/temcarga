const User = require("../models/User.js")

const findByEmail = async (email) => {
  return await User.findOne({ email })
}

module.exports = findByEmail