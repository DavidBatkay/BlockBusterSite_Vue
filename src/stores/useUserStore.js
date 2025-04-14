import { defineStore } from "pinia"
import axios from "axios"

export const useUserStore = defineStore("user", {
  state: () => ({
    user: { subscriptionPlan: "", email: "" },
    isLoggedIn: false,
    loading: false,
    error: null
  }),

  actions: {
    logOut() {
      this.isLoggedIn = false
    },
    async fetchUser(email, password) {
      this.loading = true
      this.error = null
      try {
        const res = await axios.post("http://localhost:3000/api/user/login", {
          email,
          password
        })
        this.user = res.data
        this.isLoggedIn = true
      } catch (err) {
        console.error("Login failed:", err)
        this.error = "Invalid credentials"
        this.isLoggedIn = false
      } finally {
        this.loading = false
      }
    },

    async createUser(email, password) {
      this.loading = true
      this.error = null
      try {
        const res = await axios.post("http://localhost:3000/api/user/register", {
          email,
          password
        })
        this.user = res.data
        this.isLoggedIn = true
      } catch (err) {
        console.error("Registration failed:", err)
        this.error = "Failed to create account"
        this.isLoggedIn = false
      } finally {
        this.loading = false
      }
    },
    async updateSubscription(newPlan) {
      this.loading = true
      this.error = null
      try {
        const res = await axios.put("http://localhost:3000/api/user/subscription", {
          email: this.user.email,
          subscriptionPlan: newPlan
        })
        this.user = res.data.user
      } catch (err) {
        console.error("Subscription update failed:", err)
        this.error = "Failed to update subscription"
      } finally {
        this.loading = false
      }
    }
  }
})
