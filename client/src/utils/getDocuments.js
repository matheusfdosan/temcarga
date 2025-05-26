import axios from "axios"

const getOneRequest = async (id) => {
  try {
    const response = await axios.get(
      `http://192.168.0.3:3000/documents/${id}`
    )

    return response?.data?.documents
  } catch (error) {
    console.error(
      "Erro ao buscar documentos:",
      error.response?.data || error.message
    )

    throw error
  }
}

export default getOneRequest
