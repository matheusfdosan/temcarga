const bcrypt = require("bcrypt")
const sql = require("../configs/database.js")

const createUser = async (name, cpf_cnpj, email, password, phone) => {
  const hashedPassword = await bcrypt.hash(password, 10)
  const hashedCpfCnpj = await bcrypt.hash(cpf_cnpj, 10)

  try {
    const [user] = await sql`
      INSERT INTO client (name, email, cpf_cnpj, phone, password)
      VALUES (${name}, ${email}, ${hashedCpfCnpj}, ${phone}, ${hashedPassword})
      RETURNING id, name, email, phone;
    `

    return user
  } catch (err) {
    throw new Error("Erro ao criar cliente: " + err)
  }
}

module.exports = createUser
