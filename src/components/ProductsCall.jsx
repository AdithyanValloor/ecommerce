import axios from "axios";
const backendURL =  import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000'

export const getProducts = async (category) => {
    try {
      const response = await axios.get(`${backendURL}/products${category ? "/category/" : ""}${category ? category : ""}`)
      console.log(response);
      
      return response
    } catch (error) {
      console.error("Error:", error.response?.data?.error)
    }
}