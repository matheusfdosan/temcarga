const Driver = require("../models/Driver.js")

const findDriverById = async (id) => {
  return await Driver.findById(id)
}

module.exports = findDriverById
