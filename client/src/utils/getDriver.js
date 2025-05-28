import axios from "axios"

const getDriver = async (id) => {
  try {
    const response = await axios.get(`http://localhost:3001/coordinates`)

    return response?.data
  } catch (error) {
    console.error(
      "Erro ao buscar as coordernadas: ",
      error.response?.data || error.message
    )

    throw error
  }
}

export default getDriver
