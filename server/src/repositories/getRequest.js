const sql = require("../configs/database.js")

const getRequest = async (requestid) => {
  const requests = await sql`
    SELECT * FROM request WHERE id = ${requestid}
  `
  return requests || null
}

module.exports = getRequest
