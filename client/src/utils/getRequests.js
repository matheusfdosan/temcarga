import axios from "axios"

const getRequests = async (id) => {
  try {
    const response = await axios.get(
      `http://localhost:3000/user-requests/${id}`
    )

    return response?.data?.request
  } catch (error) {
    console.error(
      "Erro ao buscar solicitações:",
      error.response?.data || error.message
    )

    throw error
  }
}

export default getRequests
