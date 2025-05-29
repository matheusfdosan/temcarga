import axios from "axios"

const signUpService = async (form) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/signup",
      JSON.stringify({
        name: form.name,
        email: form.email,
        cpf_cnpj: form.cpf_cnpj,
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

export default signUpService
