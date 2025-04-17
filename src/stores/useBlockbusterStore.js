import { defineStore } from "pinia"
import axios from "axios"
export const useBlockbusterStore = defineStore("movies", {
  state: () => ({
    movies: [],
    loading: false,
    error: null,
    selectedMovie: {},
    similarMovies: [],
    isKidsAccount: false
  }),

  actions: {
    async getSimilarMovies(movieId) {
      this.loading = true
      this.error = null
      try {
        const res = await axios.get(`http://localhost:3000/api/movies`)
        this.movies = res.data

        const selected = this.movies.find(m => m.id === movieId)
        if (!selected) throw new Error("Selected movie not found.")

        this.selectedMovie = selected
        const similar = this.movies.filter(
          m => m.genre === selected.genre && m.id !== this.selectedMovie.id
        )
        this.similarMovies = similar.slice(0, 3)
      } catch (err) {
        console.error("Failed to fetch movie:", err)
        this.error = "Failed to fetch movie. Please try again later."
      } finally {
        this.loading = false
      }
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
        const movie = res.data
        console.log(this.isKidsAccount && movie.genre !== "animated")
        if (this.isKidsAccount && movie.genre !== "animated") {
          this.selectedMovie = {}
          this.error = "Access denied: Not a kids-friendly movie."
        } else this.selectedMovie = movie
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
        let res
        if (this.isKidsAccount) res = await axios.get("http://localhost:3000/api/movies/kids")
        else res = await axios.get("http://localhost:3000/api/movies")
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
