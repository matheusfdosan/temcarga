const sql = require("../configs/database.js")

const cancelRequest = async (id) => {
  try {
    const [request] = await sql`
      UPDATE request SET 
        status = 'canceled'
      WHERE id = ${id}::numeric
      RETURNING id;
    `

    return request
  } catch (err) {
    throw new Error(`Erro ao cancelar requisição: ${err.message}`)
  }
}

module.exports = cancelRequest