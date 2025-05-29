const sql = require("../configs/database.js")

async function createTableRequest() {
  try {
    // Cria a tabela separadamente
    await sql`
      CREATE TABLE request (
        id SERIAL PRIMARY KEY,
        origin_cep VARCHAR(9),
        origin_city VARCHAR(100),
        origin_state VARCHAR(20),
        origin_complete_address TEXT,
        destination_cep VARCHAR(9),
        destination_city VARCHAR(100),
        destination_state VARCHAR(20),
        destination_complete_address TEXT,
        type VARCHAR(50),
        weight NUMERIC,
        numAxles INTEGER,
        truckType TEXT,
        perishable BOOLEAN,
        fragile BOOLEAN,
        goods_value NUMERIC,
        additional_observations TEXT,
        collect_date DATE,
        estimated_delivery_date DATE,
        invoice_document TEXT,
        invoice_document_name VARCHAR(100),
        insurance_document TEXT,
        insurance_document_name VARCHAR(100),
        estimated_shipping_cost NUMERIC,
        distance TEXT,
        driver_id TEXT,
        status VARCHAR(20) DEFAULT 'pending',
        client_id INTEGER NOT NULL,
        CONSTRAINT fk_client FOREIGN KEY (client_id)
        REFERENCES client(id)
      );
    `

    console.log("Tabela de solicitações foi criada!")
    process.exit()
  } catch (err) {
    console.error("Erro ao criar tabela:", err)
    process.exit(1)
  }
}

createTableRequest()
