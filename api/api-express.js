// api.js (Express setup)
import express from "express"
import bodyParser from "body-parser"

const api = express()
const port = 3000

let movies = [
  {
    id: "1",
    image:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg",
    title: "Inception",
    description:
      "A skilled thief enters dreams to steal secrets but faces a risky job: planting an idea in a target’s mind. As reality blurs, he navigates a maze of dreams within dreams to uncover the truth."
  },
  {
    id: "2",
    image:
      "https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_.jpg",
    title: "Interstellar",
    description:
      "In a dying Earth, a former pilot leads astronauts through a wormhole to find a new home for humanity. Time twists as they face cosmic challenges and personal sacrifices."
  },
  {
    id: "3",
    image:
      "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg",
    title: "The Dark Knight",
    description:
      "Batman battles the Joker, a chaotic criminal tearing Gotham apart. As the stakes rise, Bruce Wayne faces tough choices to protect the city from madness."
  },
  {
    id: "4",
    image:
      "https://m.media-amazon.com/images/M/MV5BMDEzMmQwZjctZWU2My00MWNlLWE0NjItMDJlYTRlNGJiZjcyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    title: "Avatar",
    description:
      "A Marine on the alien planet Pandora joins the Na’vi to protect their vibrant world from human greed. Stunning visuals bring this epic clash of cultures to life."
  },
  {
    id: "5",
    image:
      "https://m.media-amazon.com/images/M/MV5BN2NmN2VhMTQtMDNiOS00NDlhLTliMjgtODE2ZTY0ODQyNDRhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    title: "The Matrix",
    description:
      "A hacker discovers reality is a simulation controlled by machines. Joining rebels, he fights to free humanity in a mind-bending world of action and illusion."
  },
  {
    id: "6",
    image:
      "https://m.media-amazon.com/images/M/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE@._V1_.jpg",
    title: "Jurassic Park",
    description:
      "Scientists bring dinosaurs back to life on a remote island park. When the creatures break free, a group fights to survive amid prehistoric chaos."
  },
  {
    id: "7",
    image:
      "https://m.media-amazon.com/images/M/MV5BYzdjY2VmZDgtMWFlOS00NjAyLWIyYzQtMjNjNzY3YTgxODRjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    title: "Bakugan Battle Brawlers",
    description:
      "Kids wield powerful creatures called Bakugan in thrilling card battles. Dan and his friends uncover a deeper mystery as their games impact two worlds."
  },
  {
    id: "8",
    image: "http://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
    title: "Titanic",
    description:
      "A young artist and an aristocrat fall in love aboard the doomed Titanic. Their romance unfolds against the backdrop of the ship’s tragic sinking."
  },
  {
    id: "9",
    image:
      "https://m.media-amazon.com/images/M/MV5BNGE0YTVjNzUtNzJjOS00NGNlLTgxMzctZTY4YTE1Y2Y1ZTU4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    title: "The Avengers",
    description:
      "Earth’s mightiest heroes unite to stop Loki and an alien invasion. Iron Man, Thor, and others must team up to save the world from chaos."
  },
  {
    id: "10",
    image:
      "https://m.media-amazon.com/images/M/MV5BNGQ0YTQyYTgtNWI2YS00NTE2LWJmNDItNTFlMTUwNmFlZTM0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    title: "Spider-Man 2",
    description:
      "Peter Parker struggles to balance life and heroism as Spider-Man. Facing Dr. Octopus, he fights to save New York while chasing love and purpose."
  },
  {
    id: "11",
    image:
      "https://m.media-amazon.com/images/M/MV5BN2FkMTRkNTUtYTI0NC00ZjI4LWI5MzUtMDFmOGY0NmU2OGY1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    title: "Shrek",
    description:
      "A grumpy ogre teams with a chatty donkey to rescue a princess for a scheming lord. Their quest flips fairy tales with humor and heart."
  },
  {
    id: "12",
    image:
      "https://m.media-amazon.com/images/M/MV5BZTA3OWVjOWItNjE1NS00NzZiLWE1MjgtZDZhMWI1ZTlkNzYwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    title: "Toy Story",
    description:
      "Toys come alive when humans aren’t looking. Woody, a cowboy doll, leads his crew through rivalry and adventure to return to their kid."
  },
  {
    id: "13",
    image:
      "https://m.media-amazon.com/images/M/MV5BMjIwMjE1Nzc4NV5BMl5BanBnXkFtZTgwNDg4OTA1NzM@._V1_FMjpg_UX1000_.jpg",
    title: "The Lion King",
    description:
      "Young lion Simba flees after his father’s death, unaware of his royal destiny. Guided by friends, he returns to reclaim his place as king."
  },
  {
    id: "14",
    image:
      "https://m.media-amazon.com/images/M/MV5BMTQ1MjQwMTE5OF5BMl5BanBnXkFtZTgwNjk3MTcyMDE@._V1_.jpg",
    title: "Frozen",
    description:
      "Princess Anna journeys to find her sister Elsa, whose icy powers trap their kingdom in winter. Love and courage thaw their bond and land."
  },
  {
    id: "15",
    image:
      "https://m.media-amazon.com/images/M/MV5BNzE3M2I3NDctMTE2OC00ZjMwLWI0NzctZGJiMDQyNWNkYmI3XkEyXkFqcGc@._V1_.jpg",
    title: "Finding Nemo",
    description:
      "A clownfish dad braves the ocean to find his lost son, Nemo. With a forgetful fish friend, he faces dangers in a vibrant underwater quest."
  }
]

api.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE")
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type")
  res.setHeader("Access-Control-Allow-Credentials", true)
  next()
})

api.use(bodyParser.json())
const contactForms = [] // This array holds submitted forms in memory

api.post("/api/form", (req, res) => {
  const newForm = req.body

  if (!newForm || Object.keys(newForm).length === 0) {
    return res.status(400).json({ error: "Form data is required!" })
  }

  contactForms.push(newForm)
  res.status(201).json(newForm)
})

api.get("/api/movies", (req, res) => {
  res.json(movies)
})

api.get("/api/movies/random", (req, res) => {
  if (!movies || movies.length === 0) {
    return res.status(404).json({ error: "No movies available" })
  }

  const randomIndex = Math.floor(Math.random() * movies.length)
  const randomMovie = movies[randomIndex]
  res.json(randomMovie)
})

api.get("/api/movies/:id", (req, res) => {
  const movie = movies.find(m => m.id === req.params.id)
  movie ? res.json(movie) : res.status(404).json({ error: "Movie not found" })
})

const newsData = [
  {
    title: "New Movie Release!",
    content: "Don't miss the latest blockbusters releasing this weekend."
  },
  {
    title: "Exclusive Interview",
    content: "An exclusive interview with the director of the most anticipated movie of the year."
  }
]

api.get("/api/news", (req, res) => {
  res.json(newsData)
})

api.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
