const sql = require("../configs/database.js")

const findByCPFOrCNPJ = async (cpf_cnpj) => {
  const [user] = await sql`
    SELECT * FROM client WHERE cpf_cnpj = ${cpf_cnpj}
  `
  return user || null
}

module.exports = findByCPFOrCNPJ
