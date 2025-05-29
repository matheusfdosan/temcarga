const sql = require("../configs/database.js")

const createUser = async (id, form) => {
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
    goods_value,
    additional_observations,
    collect_date,
    estimated_delivery_date,
    invoice_document,
    invoice_document_name,
    insurance_document,
    insurance_document_name,
    estimated_shipping_cost,
    distance,
    driver_id,
    status,
    client_id,
  } = form

  try {
    const [request] = await sql`
      UPDATE request SET 
        origin_cep = ${origin_cep ?? null}::text,
        origin_city = ${origin_city ?? null}::text,
        origin_state = ${origin_state ?? null}::text,
        origin_complete_address = ${origin_complete_address ?? null}::text,
        destination_cep = ${destination_cep ?? null}::text,
        destination_city = ${destination_city ?? null}::text,
        destination_state = ${destination_state ?? null}::text,
        destination_complete_address = ${
          destination_complete_address ?? null
        }::text,
        type = ${type ?? null}::text,
        weight = ${weight ?? null}::numeric,
        numAxles = ${numAxles ?? null}::numeric,
        truckType = ${truckType ?? null}::text,
        perishable = ${perishable ?? null}::boolean,
        fragile = ${fragile ?? null}::boolean,
        goods_value = ${goods_value ?? null}::numeric,
        additional_observations = ${additional_observations ?? null}::text,
        collect_date = ${collect_date ?? null}::date,
        estimated_delivery_date = ${estimated_delivery_date ?? null}::date,
        insurance_document = ${insurance_document ?? null}::text,
        insurance_document_name = ${insurance_document_name ?? null}::text,
        invoice_document = ${invoice_document ?? null}::text,
        invoice_document_name = ${invoice_document_name ?? null}::text,
        estimated_shipping_cost = ${estimated_shipping_cost ?? null}::numeric,
        distance = ${distance ?? null}::numeric,
        driver_id = ${driver_id ?? null}::text,
        status = ${status ?? "pending"}::text,
        client_id = ${client_id ?? null}::numeric
      WHERE id = ${id}::numeric
      RETURNING id;
    `

    return request
  } catch (err) {
    throw new Error("Erro ao editar requisição: " + err.message)
  }
}

module.exports = createUser
