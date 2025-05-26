const sql = require("../configs/database.js")

const createUser = async (form) => {
  const {
    origin_cep,
    origin_city,
    origin_state,
    origin_complete_address,
    destination_cep,
    destination_city,
    destination_state,
    destination_complete_address,
    type,
    weight,
    length,
    width,
    height,
    numAxles,
    perishable,
    fragile,
    insurance_included,
    goods_value,
    additional_observations,
    collect_date,
    estimated_delivery_date,
    invoice_document,
    invoice_document_name,
    estimated_shipping_cost,
    driver_name,
    location,
    status,
    client_id,
  } = form

  try {
    const [request] = await sql`
      INSERT INTO request (
        origin_cep,
        origin_city,
        origin_state,
        origin_complete_address,
        destination_cep,
        destination_city,
        destination_state,
        destination_complete_address,
        type,
        weight,
        length,
        width,
        height,
        numAxles,
        perishable,
        fragile,
        insurance_included,
        goods_value,
        additional_observations,
        collect_date,
        estimated_delivery_date,
        invoice_document,
        invoice_document_name,
        estimated_shipping_cost,
        driver_name,
        location,
        status,
        client_id
      )
      VALUES (
        ${origin_cep ?? null},
        ${origin_city ?? null},
        ${origin_state ?? null},
        ${origin_complete_address ?? null},
        ${destination_cep ?? null},
        ${destination_city ?? null},
        ${destination_state ?? null},
        ${destination_complete_address ?? null},
        ${type ?? null},
        ${weight ?? null},
        ${length ?? null},
        ${width ?? null},
        ${height ?? null},
        ${numAxles ?? null},
        ${perishable ?? null},
        ${fragile ?? null},
        ${insurance_included ?? null},
        ${goods_value ?? null},
        ${additional_observations ?? null},
        ${collect_date ?? null},
        ${estimated_delivery_date ?? null},
        ${invoice_document ?? null},
        ${invoice_document_name ?? null},
        ${estimated_shipping_cost ?? null},
        ${driver_name ?? null},
        ${location ?? null},
        ${status ?? "pending"},
        ${client_id ?? null}
      )
      RETURNING id;
    `

    return request
  } catch (err) {
    throw new Error("Erro ao criar requisição: " + err.message)
  }
}

module.exports = createUser
