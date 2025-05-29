import axios from "axios"

const cancelRequest = async (id) => {
  try {
    const response = await axios.put(
      `http://localhost:3000/cancel-request/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )

    return response.data
  } catch (error) {
    console.error(
      "Erro ao cancelar requisição:",
      error.response?.data || error.message
    )

    throw error
  }
}

export default cancelRequest
