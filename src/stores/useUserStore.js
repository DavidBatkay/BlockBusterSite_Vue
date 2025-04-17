import { defineStore } from "pinia"
import axios from "axios"

export const useUserStore = defineStore("user", {
  state: () => ({
    user: { subscriptionPlan: "", email: "", image: "", isKidsAccount: false },
    isLoggedIn: false,
    loading: false,
    error: null
  }),

  actions: {
    logOut() {
      this.isLoggedIn = false
    },
    async toggleKidsAccount() {
      this.loading = true
      try {
        const response = await axios.put("http://localhost:3000/api/user/parental", {
          email: this.user.email,
          isKidsAccount: !this.user.isKidsAccount
        })
        this.user.isKidsAccount = response.data.user.isKidsAccount
        this.error = null
      } catch (err) {
        this.error = err.response?.data?.error || "Failed to update setting"
      } finally {
        this.loading = false
      }
    },
    async updateUserPicture(newImageUrl) {
      this.loading = true
      this.error = null
      const email = this.user.email
      try {
        await axios.put(`http://localhost:3000/api/user/image`, {
          data: { email, newImageUrl }
        })
        this.user.image = newImageUrl
      } catch (err) {
        console.error("Update failed:", err)
        this.error = "Failed to update user image"
      } finally {
        this.loading = false
      }
    },
    async deleteUser(password) {
      this.loading = true
      this.error = null
      const email = this.user.email
      try {
        await axios.delete(`http://localhost:3000/api/user/delete`, {
          data: { email, password }
        })
        this.user = null
        this.logOut()
      } catch (err) {
        console.error("Delete failed:", err)
        this.error = "Failed to delete user"
      } finally {
        this.loading = false
      }
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
