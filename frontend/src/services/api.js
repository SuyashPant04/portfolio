import axios from "axios"

const API_BASE_URL = "http://localhost:8080"

export async function sendMessage(message) {

  try {

    const response = await axios.post(
      `${API_BASE_URL}/chat`,
      {
        message: message,
      }
    )

    return response.data.response

  } catch (error) {

    console.error("Chatbot Error:", error)

    return "Unable to connect to chatbot."

  }
}