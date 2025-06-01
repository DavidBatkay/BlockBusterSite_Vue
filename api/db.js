import { Sequelize, DataTypes } from "sequelize"

export const sequelize = new Sequelize("blockbuster", "blockbuster", "blockbuster", {
  host: "mysql.blockbuster",
  port: 3306,
  dialect: "mysql",
  timezone: "+00:00",
  logging: console.log
})

export const User = sequelize.define("User", {
  email: DataTypes.STRING,
  password: DataTypes.STRING,
  subscriptionPlan: DataTypes.STRING,
  image: DataTypes.STRING,
  isKidsAccount: DataTypes.BOOLEAN,
  isAdmin: DataTypes.BOOLEAN
})

export const Card = sequelize.define("Card", {
  number: DataTypes.STRING,
  name: DataTypes.STRING,
  expiration: DataTypes.STRING,
  cvc: DataTypes.STRING
})

export const Movie = sequelize.define("Movie", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  title: DataTypes.STRING,
  genre: DataTypes.STRING,
  image: DataTypes.STRING,
  thumbnail: DataTypes.STRING,
  description: DataTypes.TEXT
})

export const News = sequelize.define("News", {
  title: DataTypes.STRING,
  content: DataTypes.TEXT
})

export const ContactForm = sequelize.define("ContactForm", {
  firstName: DataTypes.STRING,
  lastName: DataTypes.STRING,
  email: DataTypes.STRING,
  issueCategory: DataTypes.STRING,
  message: DataTypes.TEXT
})

User.hasMany(Card)
Card.belongsTo(User)
