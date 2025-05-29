import axios from "axios"

const deleteRequestService = async (id) => {
  try {
    const response = await axios.delete(
      `http://localhost:3000/delete-request/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )

    return response.data
  } catch (error) {
    console.error(
      "Erro ao deletar requisição:",
      error.response?.data || error.message
    )

    throw error
  }
}

export default deleteRequestService
