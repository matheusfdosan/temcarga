const sql = require("../configs/database.js")

const getRequests = async (userId) => {
  const requests = await sql`
    SELECT * FROM request WHERE client_id = ${userId}
  `
  return requests || null
}

module.exports = getRequests
