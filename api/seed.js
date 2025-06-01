import { sequelize, User, Card, Movie, News } from "./db.js"

await sequelize.sync({ force: true })

const user = await User.create({
  email: "test@blockbuster.com",
  password: "123456",
  subscriptionPlan: "Free Plan",
  image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEMzCoyblGoqPIHLfuITVfQ0Pe6snLXFxWpQ&s",
  isKidsAccount: false,
  isAdmin: true
})

await Card.create({
  number: "1234567890123456",
  name: "Block Buster",
  expiration: "12/26",
  cvc: "123",
  UserId: user.id
})

const moviesData = [
  {
    genre: "action",
    image:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg",
    thumbnail: "https://images.static-bluray.com/reviews/3549_1.jpg",
    title: "Inception",
    description:
      "A skilled thief enters dreams to steal secrets but faces a risky job: planting an idea in a target’s mind. As reality blurs, he navigates a maze of dreams within dreams to uncover the truth."
  },
  {
    genre: "thriller",
    image:
      "https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_.jpg",
    thumbnail:
      "https://external-preview.redd.it/bq0Phy_hbuf2i1tdzclIFZD7b39zZ6Ltr_pRUrCiJvI.jpg?auto=webp&s=acd6847e49e03490909cdc8d6c1477297ed0404b",

    title: "Interstellar",
    description:
      "In a dying Earth, a former pilot leads astronauts through a wormhole to find a new home for humanity. Time twists as they face cosmic challenges and personal sacrifices."
  },
  {
    genre: "action",
    image:
      "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg",
    thumbnail:
      "https://preview.redd.it/batman-color-removed-3440-x-1440-v0-i3fcm42jq89c1.png?width=1080&crop=smart&auto=webp&s=f598d757992fd9586a21e9b8c1e872678120a594",
    title: "The Dark Knight",
    description:
      "Batman battles the Joker, a chaotic criminal tearing Gotham apart. As the stakes rise, Bruce Wayne faces tough choices to protect the city from madness."
  },
  {
    genre: "sci-fi",
    image:
      "https://m.media-amazon.com/images/M/MV5BMDEzMmQwZjctZWU2My00MWNlLWE0NjItMDJlYTRlNGJiZjcyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    thumbnail: "https://i0.wp.com/jasonsmovieblog.com/wp-content/uploads/2022/12/TDyLzgA.jpg",
    title: "Avatar",
    description:
      "A Marine on the alien planet Pandora joins the Na’vi to protect their vibrant world from human greed. Stunning visuals bring this epic clash of cultures to life."
  },
  {
    genre: "action",
    image:
      "https://m.media-amazon.com/images/M/MV5BN2NmN2VhMTQtMDNiOS00NDlhLTliMjgtODE2ZTY0ODQyNDRhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    thumbnail: "https://4kwallpapers.com/images/walls/thumbs_3t/15947.jpg",
    title: "The Matrix",
    description:
      "A hacker discovers reality is a simulation controlled by machines. Joining rebels, he fights to free humanity in a mind-bending world of action and illusion."
  },
  {
    genre: "adventure",
    image:
      "https://m.media-amazon.com/images/M/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE@._V1_.jpg",
    title: "Jurassic Park",
    description:
      "Scientists bring dinosaurs back to life on a remote island park. When the creatures break free, a group fights to survive amid prehistoric chaos."
  },
  {
    genre: "animated",
    image:
      "https://m.media-amazon.com/images/M/MV5BYzdjY2VmZDgtMWFlOS00NjAyLWIyYzQtMjNjNzY3YTgxODRjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    title: "Bakugan Battle Brawlers",
    description:
      "Kids wield powerful creatures called Bakugan in thrilling card battles. Dan and his friends uncover a deeper mystery as their games impact two worlds."
  },
  {
    genre: "drama",
    image: "http://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
    title: "Titanic",
    description:
      "A young artist and an aristocrat fall in love aboard the doomed Titanic. Their romance unfolds against the backdrop of the ship’s tragic sinking."
  },
  {
    genre: "action",
    image:
      "https://m.media-amazon.com/images/M/MV5BNGE0YTVjNzUtNzJjOS00NGNlLTgxMzctZTY4YTE1Y2Y1ZTU4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    thumbnail:
      "https://4kwallpapers.com/images/wallpapers/avengers-hulk-thor-iron-man-captain-america-black-widow-2560x1080-1140.jpg",
    title: "The Avengers",
    description:
      "Earth’s mightiest heroes unite to stop Loki and an alien invasion. Iron Man, Thor, and others must team up to save the world from chaos."
  },
  {
    genre: "action",
    image:
      "https://m.media-amazon.com/images/M/MV5BNGQ0YTQyYTgtNWI2YS00NTE2LWJmNDItNTFlMTUwNmFlZTM0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    title: "Spider-Man 2",
    description:
      "Peter Parker struggles to balance life and heroism as Spider-Man. Facing Dr. Octopus, he fights to save New York while chasing love and purpose."
  },
  {
    genre: "animated",
    image:
      "https://m.media-amazon.com/images/M/MV5BN2FkMTRkNTUtYTI0NC00ZjI4LWI5MzUtMDFmOGY0NmU2OGY1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    title: "Shrek",
    description:
      "A grumpy ogre teams with a chatty donkey to rescue a princess for a scheming lord. Their quest flips fairy tales with humor and heart."
  },
  {
    genre: "animated",
    image:
      "https://m.media-amazon.com/images/M/MV5BZTA3OWVjOWItNjE1NS00NzZiLWE1MjgtZDZhMWI1ZTlkNzYwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    title: "Toy Story",
    description:
      "Toys come alive when humans aren’t looking. Woody, a cowboy doll, leads his crew through rivalry and adventure to return to their kid."
  },
  {
    genre: "adventure",
    image:
      "https://m.media-amazon.com/images/M/MV5BMjIwMjE1Nzc4NV5BMl5BanBnXkFtZTgwNDg4OTA1NzM@._V1_FMjpg_UX1000_.jpg",
    title: "The Lion King",
    description:
      "Young lion Simba flees after his father’s death, unaware of his royal destiny. Guided by friends, he returns to reclaim his place as king."
  },
  {
    genre: "animated",
    image:
      "https://m.media-amazon.com/images/M/MV5BMTQ1MjQwMTE5OF5BMl5BanBnXkFtZTgwNjk3MTcyMDE@._V1_.jpg",
    title: "Frozen",
    description:
      "Princess Anna journeys to find her sister Elsa, whose icy powers trap their kingdom in winter. Love and courage thaw their bond and land."
  },
  {
    genre: "animated",
    image:
      "https://m.media-amazon.com/images/M/MV5BNzE3M2I3NDctMTE2OC00ZjMwLWI0NzctZGJiMDQyNWNkYmI3XkEyXkFqcGc@._V1_.jpg",
    title: "Finding Nemo",
    description:
      "A clownfish dad braves the ocean to find his lost son, Nemo. With a forgetful fish friend, he faces dangers in a vibrant underwater quest."
  }
]

await Movie.bulkCreate(moviesData)

await News.bulkCreate([
  {
    title: "New Movie Release!",
    content: "Don't miss the latest blockbusters releasing this weekend."
  },
  {
    title: "Exclusive Interview",
    content: "An exclusive interview with the director of the most anticipated movie of the year."
  }
])

console.log("Seed complete!")

process.exit(0)
