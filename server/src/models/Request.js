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
        destination_state VARCHAR(2),
        destination_complete_address TEXT,
        type VARCHAR(50),
        weight NUMERIC,
        length NUMERIC,
        width NUMERIC,
        height NUMERIC,
        perishable BOOLEAN,
        fragile BOOLEAN,
        insurance_included BOOLEAN,
        goods_value NUMERIC,
        additional_observations TEXT,
        collect_date DATE,
        estimated_delivery_date DATE,
        invoice_document TEXT,
        estimated_shipping_cost NUMERIC,
        driver_name VARCHAR(100),
        location TEXT,
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
