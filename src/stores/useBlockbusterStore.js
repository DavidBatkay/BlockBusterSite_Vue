import { defineStore } from "pinia"
import axios from "axios"

export const useBlockbusterStore = defineStore("movies", {
  state: () => ({
    movies: [],
    loading: false,
    error: null,
    selectedMovie: {},
    loggedIn: false
  }),

  actions: {
    logOut() {
      this.loggedIn = false
    },
    logIn() {
      this.loggedIn = true
    },
    async getRandomMovie() {
      this.loading = true
      this.error = null

      try {
        const res = await axios.get(`http://localhost:3000/api/movies/random`)
        this.selectedMovie = res.data
      } catch (err) {
        console.error("Failed to fetch movie:", err)
        this.error = "Failed to fetch movie. Please try again later."
      } finally {
        this.loading = false
      }
    },
    async fetchMovie(id) {
      this.loading = true
      this.error = null

      try {
        const res = await axios.get(`http://localhost:3000/api/movies/${id}`)
        this.selectedMovie = res.data
      } catch (err) {
        console.error("Failed to fetch movie:", err)
        this.error = "Failed to fetch movie. Please try again later."
      } finally {
        this.loading = false
      }
    },

    async fetchMovies() {
      this.loading = true
      this.error = null

      try {
        const res = await axios.get("http://localhost:3000/api/movies")
        this.movies = res.data
      } catch (err) {
        console.error("Failed to fetch movies:", err)
        this.error = "Failed to fetch movies. Please try again later."
      } finally {
        this.loading = false
      }
    }
  }
})
