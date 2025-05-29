const sql = require("../configs/database.js")

const deleteRequest = async (id) => {
  try {
    const [request] = await sql`
      DELETE FROM request WHERE id = ${id}::numeric
      RETURNING id;
    `

    return request
  } catch (err) {
    throw new Error(`Erro ao deletar requisição: ${err.message}`)
  }
}

module.exports = deleteRequest
