const sql = require("../configs/database.js")

const findByEmail = async (email) => {
  const [user] = await sql`
    SELECT * FROM client WHERE email = ${email}
  `
  return user || null
}

module.exports = findByEmail
