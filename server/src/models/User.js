const sql = require("../configs/database.js");

async function createTable() {
  try {
    // Cria a extensão separadamente
    await sql`CREATE EXTENSION IF NOT EXISTS pgcrypto`;

    // Cria a tabela separadamente
    await sql`
      CREATE TABLE IF NOT EXISTS client (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        cpf_cnpj TEXT UNIQUE NOT NULL,
        phone TEXT,
        password TEXT NOT NULL
      )
    `;

    console.log("Tabela de clientes foi criada!");
    process.exit();
  } catch (err) {
    console.error("Erro ao criar tabela:", err);
    process.exit(1);
  }
}

createTable();
