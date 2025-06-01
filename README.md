# 🎬 Blockbuster Platform — Y2 Course Project

This is my Year 2 course project: a full-stack movie streaming platform built with modern web technologies. It demonstrates full CRUD capability, authentication, dynamic content rendering, and database integration.

## 🚀 Tech Stack

### 🔧 Backend
- **Node.js** with **Express** for building RESTful APIs
- **Sequelize** as ORM for SQL operations
- **MySQL** as the relational database
- **WebSocket** for real-time features
- **Docker** for containerized deployment and MySQL service

### 🎨 Frontend
- **Vue 3** with Composition API
- **Pinia** as the state management solution
- **Axios** for HTTP communication
- **Tailwind CSS** for responsive styling

## 📦 Features
- 🔐 User authentication & registration
- 💳 Card management (add/update/delete)
- 🎥 Browse & filter movies by genre
- 🧠 Smart movie suggestions (by genre)
- 📬 Contact form integration
- 📰 News management system (admin-only)
- 👪 Parental control toggle
- 🧾 Subscription plan updates with validation

## 🧱 SQL Entities
This project includes 5 main Sequelize entities:
- `User`
- `Movie`
- `Card`
- `ContactForm`
- `News`

## 📡 API Overview
- **GET**: 6 endpoints
- **POST**: 5 endpoints
- **PUT**: 4 endpoints
- **DELETE**: 2 endpoints

## 🧹 Code Quality
Run the following to automatically fix formatting and linting issues:
```bash
npx eslint --fix .
npx prettier --write .
```

## 📁 Based On
This project was inspired by the downfall of Blockbuster and the rise of Netflix, imagining a reality where Blockbuster makes a comeback.
