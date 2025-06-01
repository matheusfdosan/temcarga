
import axios from "axios"

const releasePaymentService = async (id) => {
  try {
    const response = await axios.put(
      `http://localhost:3000/realease-payment/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )

    return response.data
  } catch (error) {
    console.error(
      "Erro ao concluir a requisição:",
      error.response?.data || error.message
    )

    throw error
  }
}

export default releasePaymentService
