import { defineStore } from "pinia"
import axios from "axios"
const url = import.meta.env.VITE_API_BASE_URL

export const useContactStore = defineStore("contact", {
  state: () => ({}),

  actions: {
    async sendForm(formData) {
      try {
        await axios.post(`${url}/api/form`, formData)
      } catch (err) {
        console.error("Failed to send form:", err)
      }
    }
  }
})
