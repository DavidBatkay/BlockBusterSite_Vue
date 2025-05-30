import { defineStore } from "pinia"
import axios from "axios"
import { ws } from "../ws"
const url = import.meta.env.VITE_API_BASE_URL
export const useNewsStore = defineStore("news", {
  state: () => ({
    news: [],
    loading: false,
    error: null
  }),

  actions: {
    async fetchNews() {
      this.loading = true
      this.error = null

      try {
        const res = await axios.get(`${url}/api/news`)
        this.news = res.data
      } catch (err) {
        console.error("Failed to fetch news:", err)
        this.error = "Failed to fetch news. Please try again later."
      } finally {
        this.loading = false
      }
    },
    async addNews(newItem) {
      try {
        const res = await axios.post(`${url}/api/news`, newItem)
        this.news = res.data.news // Update with latest from server
        ws.send(JSON.stringify(this.news)) // Send current news to server
      } catch (err) {
        console.error("Failed to add news:", err)
        this.error = "Could not post news. Please try again."
      }
    }
  }
})
