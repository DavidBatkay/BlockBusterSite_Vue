import express from "express"
import bodyParser from "body-parser"
import { sequelize, User, Card, Movie, News, ContactForm } from "./db.js"

const api = express()
const port = 3000

api.use(bodyParser.json())
api.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE")
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type")
  res.setHeader("Access-Control-Allow-Credentials", true)
  next()
})

// Helper imagine default
function getRandomImage() {
  const images = [
    "https://static-00.iconduck.com/assets.00/profile-circle-icon-2048x2048-cqe5466q.png",
    "https://i.pinimg.com/736x/64/c0/7c/64c07cd56fee2c3b0423168c5b10e58c.jpg",
    "https://w7.pngwing.com/pngs/205/731/png-transparent-default-avatar-thumbnail.png"
  ]
  return images[Math.floor(Math.random() * images.length)]
}

// ======================= CONTACT FORM =======================
api.post("/api/form", async (req, res) => {
  const data = req.body
  if (!data || Object.keys(data).length === 0) {
    return res.status(400).json({ error: "Form data is required!" })
  }
  try {
    const created = await ContactForm.create(data)
    res.status(201).json(created)
  } catch (err) {
    console.log(err)

    res.status(500).json({ error: "Failed to save contact form", details: err.message })
  }
})

// ======================= MOVIES =======================
api.get("/api/movies", async (req, res) => {
  const genre = req.query.genre?.toLowerCase()
  try {
    const movies = await Movie.findAll({
      where: genre && genre !== "all" ? { genre } : undefined
    })
    res.json(movies)
  } catch (err) {
    console.log(err)

    res.status(500).json({ error: "Failed to fetch movies" })
  }
})

api.get("/api/movies/kids", async (req, res) => {
  try {
    const movies = await Movie.findAll({ where: { genre: "animated" } })
    res.json(movies)
  } catch (err) {
    console.log(err)

    res.status(500).json({ error: "Failed to fetch kids movies" })
  }
})

api.get("/api/movies/random", async (req, res) => {
  try {
    const movies = await Movie.findAll()
    if (movies.length === 0) return res.status(404).json({ error: "No movies available" })
    const randomMovie = movies[Math.floor(Math.random() * movies.length)]
    res.json(randomMovie)
  } catch (err) {
    console.log(err)

    res.status(500).json({ error: "Failed to fetch movie" })
  }
})

api.get("/api/movies/:id", async (req, res) => {
  try {
    const movie = await Movie.findByPk(req.params.id)
    if (!movie) return res.status(404).json({ error: "Movie not found" })
    res.json(movie)
  } catch (err) {
    console.log(err)

    res.status(500).json({ error: "Error fetching movie" })
  }
})

// ======================= NEWS =======================
api.get("/api/news", async (req, res) => {
  try {
    const news = await News.findAll({ order: [["createdAt", "DESC"]], limit: 3 })
    res.json(news)
  } catch (err) {
    console.log(err)

    res.status(500).json({ error: "Error fetching news" })
  }
})

api.post("/api/news", async (req, res) => {
  const { title, content } = req.body
  if (!title || !content) return res.status(400).json({ error: "Title and content are required." })
  try {
    await News.create({ title, content })
    const latest = await News.findAll({ order: [["createdAt", "DESC"]], limit: 3 })
    res.json({ success: true, news: latest })
  } catch (err) {
    console.log(err)

    res.status(500).json({ error: "Error creating news" })
  }
})

// ======================= USERS =======================
api.post("/api/user/register", async (req, res) => {
  const { email, password } = req.body
  try {
    const exists = await User.findOne({ where: { email } })
    if (exists) return res.status(409).json({ error: "User already exists" })
    const user = await User.create({
      email,
      password,
      subscriptionPlan: "Free Plan",
      isKidsAccount: false,
      isAdmin: false,
      image: getRandomImage()
    })
    res.status(201).json(user)
  } catch (err) {
    console.log(err)

    res.status(500).json({ error: "Error creating user" })
  }
})

api.post("/api/user/login", async (req, res) => {
  const { email, password } = req.body
  try {
    const user = await User.findOne({ where: { email, password } })
    if (!user) return res.status(401).json({ error: "Invalid email or password" })
    res.json(user)
  } catch (err) {
    console.log(err)

    res.status(500).json({ error: "Login error" })
  }
})

api.delete("/api/user/delete", async (req, res) => {
  const { email, password } = req.body
  try {
    const user = await User.findOne({ where: { email } })
    if (!user) return res.status(404).json({ error: "User not found" })
    if (user.password !== password) return res.status(401).json({ error: "Incorrect password" })
    await user.destroy()
    res.json({ message: "User deleted successfully" })
  } catch (err) {
    console.log(err)

    res.status(500).json({ error: "Delete failed" })
  }
})

api.put("/api/user/subscription", async (req, res) => {
  const { email, subscriptionPlan } = req.body
  try {
    const user = await User.findOne({ where: { email } })
    if (!user) return res.status(404).json({ error: "User not found" })
    user.subscriptionPlan = subscriptionPlan
    await user.save()
    res.json({ message: "Subscription updated", user })
  } catch (err) {
    console.log(err)

    res.status(500).json({ error: "Failed to update subscription" })
  }
})

api.put("/api/user/image", async (req, res) => {
  const { email, newImageUrl } = req.body.data
  try {
    const user = await User.findOne({ where: { email } })
    if (!user) return res.status(404).json({ error: "User not found" })
    user.image = newImageUrl
    await user.save()
    res.json({ message: "Image updated", user })
  } catch (err) {
    console.log(err)

    console.log(err)
    res.status(500).json({ error: "Failed to update image" })
  }
})

api.put("/api/user/parental", async (req, res) => {
  const { email, isKidsAccount } = req.body
  try {
    const user = await User.findOne({ where: { email } })
    if (!user) return res.status(404).json({ error: "User not found" })
    user.isKidsAccount = isKidsAccount
    await user.save()
    res.json({ message: "Parental setting updated", user })
  } catch (err) {
    console.log(err)

    console.log(err)

    res.status(500).json({ error: "Failed to update parental controls" })
  }
})

// ======================= CARD MANAGEMENT =======================
api.get("/api/user/cards", async (req, res) => {
  const { email } = req.query
  try {
    const user = await User.findOne({ where: { email }, include: Card })
    if (!user) return res.status(404).json({ error: "User not found" })
    res.json(user.Cards)
  } catch (err) {
    console.log(err)

    res.status(500).json({ error: "Error fetching cards" })
  }
})

api.post("/api/user/card", async (req, res) => {
  const { email, card } = req.body
  try {
    const user = await User.findOne({ where: { email } })
    if (!user) return res.status(404).json({ error: "User not found" })
    const exists = await Card.findOne({ where: { number: card.number, UserId: user.id } })
    if (exists) return res.status(400).json({ error: "Card already exists" })
    const newCard = await Card.create({ ...card, UserId: user.id })
    res.status(201).json({ message: "Card added", card: newCard })
  } catch (err) {
    console.log(err)

    res.status(500).json({ error: "Failed to add card" })
  }
})

api.put("/api/user/card/update", async (req, res) => {
  const { email, cardNumber, updatedCard } = req.body
  try {
    const user = await User.findOne({ where: { email } })
    const card = await Card.findOne({ where: { number: cardNumber, UserId: user.id } })
    if (!card) return res.status(404).json({ error: "Card not found" })
    await card.update(updatedCard)
    res.json({ message: "Card updated", card })
  } catch (err) {
    console.log(err)

    res.status(500).json({ error: "Failed to update card" })
  }
})

api.delete("/api/user/card/delete", async (req, res) => {
  const { email, cardNumber } = req.body
  try {
    const user = await User.findOne({ where: { email } })
    const card = await Card.findOne({ where: { number: cardNumber, UserId: user.id } })
    if (!card) return res.status(404).json({ error: "Card not found" })
    await card.destroy()
    res.json({ message: "Card removed" })
  } catch (err) {
    console.log(err)

    res.status(500).json({ error: "Failed to delete card" })
  }
})

// ======================= PORNEȘTE SERVERUL =======================
sequelize.sync().then(() => {
  api.listen(port, () => {
    console.log(`Server running on port ${port}`)
  })
})
