import axios from "axios"

const newRequestService = async (form) => {
  const userId = JSON.parse(localStorage.getItem('login')).auth.id
  
  try {
    const response = await axios.post(
      "http://192.168.0.3:3000/new-request",
      JSON.stringify({
        destination_cep: form.location.destination.cep,
        destination_city: form.location.destination.city,
        destination_state: form.location.destination.state,
        destination_complete_address:
          form.location.destination.complete_address,
        origin_cep: form.location.origin.cep,
        origin_city: form.location.origin.city,
        origin_state: form.location.origin.state,
        origin_complete_address: form.location.origin.complete_address,
        type: form.load_description.type,
        weight: parseFloat(form.load_description.weight),
        length: parseFloat(form.load_description.size.length),
        width: parseFloat(form.load_description.size.width),
        height: parseFloat(form.load_description.size.height),
        numAxles: Number(form.load_description.numAxles),
        perishable: form.load_description.features.perishable,
        fragile: form.load_description.features.fragile,
        insurance_included: form.load_description.features.insurance_included,
        goods_value: parseFloat(form.load_description.goods_value),
        additional_observations: form.load_description.additional_observations,
        collect_date: form.dates.collect_date,
        estimated_delivery_date: form.dates.estimated_delivery_date,
        invoice_document: form.invoice_document,
        estimated_shipping_cost: parseFloat(form.estimated_shipping_cost),
        driver_name: "",
        location: "",
        status: "pending",
        client_id: userId,
      }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )

    return response.data
  } catch (error) {
    console.error(
      "Erro ao criar nova requisição:",
      error.response?.data || error.message
    )

    throw error
  }
}

export default newRequestService
