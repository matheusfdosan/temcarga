const sql = require("../configs/database.js")

const getDocuments = async (userId) => {
  const documents = await sql`
    SELECT invoice_document, invoice_document_name FROM request WHERE client_id = ${userId}
  `
  return documents || null
}

module.exports = getDocuments
