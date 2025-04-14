import { defineStore } from "pinia"
import axios from "axios"

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
        const res = await axios.get("http://localhost:3000/api/news")
        this.news = res.data
      } catch (err) {
        console.error("Failed to fetch news:", err)
        this.error = "Failed to fetch news. Please try again later."
      } finally {
        this.loading = false
      }
    }
  }
})
