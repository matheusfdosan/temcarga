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
    numAxles,
    truckType,
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
    distance,
    driver_id,
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
        numAxles,
        truckType,
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
        distance,
        driver_id,
        status,
        client_id
      )
      VALUES (
        ${origin_cep ?? null}::text,
        ${origin_city ?? null}::text,
        ${origin_state ?? null}::text,
        ${origin_complete_address ?? null}::text,
        ${destination_cep ?? null}::text,
        ${destination_city ?? null}::text,
        ${destination_state ?? null}::text,
        ${destination_complete_address ?? null}::text,
        ${type ?? null}::text,
        ${weight ?? null}::numeric,
        ${numAxles ?? null}::numeric,
        ${truckType ?? null}::text,
        ${perishable ?? null}::boolean,
        ${fragile ?? null}::boolean,
        ${insurance_included ?? null}::boolean,
        ${goods_value ?? null}::numeric,
        ${additional_observations ?? null}::text,
        ${collect_date ?? null}::date,
        ${estimated_delivery_date ?? null}::date,
        ${invoice_document ?? null}::text,
        ${invoice_document_name ?? null}::text,
        ${estimated_shipping_cost ?? null}::numeric,
        ${distance ?? null}::numeric,
        ${driver_id ?? null}::text,
        ${status ?? "pending"}::text,
        ${client_id ?? null}::numeric
      )
      RETURNING id;
    `

    return request
  } catch (err) {
    throw new Error("Erro ao criar requisição: " + err.message)
  }
}

module.exports = createUser
