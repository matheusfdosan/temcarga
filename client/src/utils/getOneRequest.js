import axios from "axios"

const getOneRequest = async (id) => {
  try {
    const response = await axios.get(
      `http://localhost:3000/request/${id}`
    )

    return response?.data?.request
  } catch (error) {
    console.error(
      "Erro ao buscar a solicitação:",
      error.response?.data || error.message
    )

    throw error
  }
}

export default getOneRequest
