import axios from "axios"

const loginService = async (form) => {
  try {
    const response = await axios.post(
      "http://192.168.0.3:3000/login",
      JSON.stringify({
        email: form.email,
        password: form.password,
      }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )

    return response.data
  } catch (error) {
    console.error("Erro ao cadastrar:", error.response?.data || error.message)

    throw error
  }
}

export default loginService
