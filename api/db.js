import { Sequelize } from "sequelize"

const db = {
  NAME: "blockbuster",
  USERNAME: "blockbuster",
  PASSWORD: "blockbuster",

  options: {
    dialect: "mysql",
    timezone: "+00:00",
    host: "mysql.blockbuster",
    port: 3306,
    logging: function (str) {
      console.log(str)
    }
  }
}

export const sequelize = new Sequelize(db.NAME, db.USERNAME, db.PASSWORD, db.options)

export const Card = sequelize.define("Card", {})

export const User = sequelize.define("User", {})

export const Movie = sequelize.define("Movie", {})
// export const List = sequelize.define(
//   "List",
//   {
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       validate: {
//         notEmpty: true
//       }
//     }
//   },
//   {
//     sequelize,
//     freezeTableName: true,
//     paranoid: true
//   }
// )

// export const Task = sequelize.define(
//   "Task",
//   {
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       validate: {
//         notEmpty: true
//       }
//     },
//     color: {
//       type: DataTypes.STRING,
//       allowNull: true
//     }
//   },
//   {
//     sequelize,
//     freezeTableName: true,
//     paranoid: true
//   }
// )

// List.hasMany(Task)
// Task.belongsTo(List)
User.hasMany(Card)
Card.belongsTo(User)
