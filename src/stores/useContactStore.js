import { defineStore } from "pinia"
import axios from "axios"

export const useContactStore = defineStore("contact", {
  state: () => ({}),

  actions: {
    async sendForm(formData) {
      try {
        await axios.post("http://localhost:3000/api/form", formData)
      } catch (err) {
        console.error("Failed to send form:", err)
      } finally {
      }
    }
  }
})
