# 📝 Mongoose Todo API

A robust RESTful API built with **Node.js**, **Express**, and **MongoDB Atlas**. This project handles full CRUD (Create, Read, Update, Delete) operations for a To-Do list application, featuring cloud database integration and secure environment variable management.

---

## 🚀 Features

- **Create**: Add new tasks via POST requests.
- **Read**: Fetch the entire list of tasks from MongoDB.
- **Update**: Toggle the `completed` status of a specific task by ID.
- **Delete**: Permanently remove a task from the database.
- **Cloud Integration**: Real-time data persistence with MongoDB Atlas.

---

## 🛠️ Tech Stack & Dependencies

### Core Backend

- **Node.js (v22.18.0)**: JavaScript runtime environment.
- **Express**: Fast, unopinionated web framework for Node.js.

### Database & Security

- **MongoDB Atlas**: Cloud-hosted NoSQL database.
- **Mongoose**: Elegant object modeling for Node.js.
- **Dotenv**: Loads environment variables from a `.env` file to protect sensitive credentials.

### Development Tools

- **Nodemon**: Development tool that automatically restarts the server on file changes.
- **Postman**: Used for API testing and verification.

---

## ⚙️ Setup & Installation

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/YOUR_USERNAME/todo-backend.git](https://github.com/YOUR_USERNAME/todo-backend.git)
   cd todo-backend
   ```
2. **Install Dependencies:**
   ```bash
   npm install
   ```
3. **Configure Environment Variables:**
   Create a .env file in the root directory and add your MongoDB connection string:
   ```bash
   MONGO_URI=mongodb+srv://<username>:<password>@cluster-name.mongodb.net/todoDB
   PORT=5000
   ```
