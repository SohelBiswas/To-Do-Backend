import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./routes/todoRoutes.js";

dotenv.config({
  path: "./.env",
});

const app = express();
app.use(express.json());
const port = process.env.PORT;
console.log(`The port is ${port}`);

const mongoURI = process.env.MONGOURI;

async function connectDB() {
  try {
    await mongoose.connect(mongoURI);
    console.log("DB connected ✅");
  } catch (error) {
    console.error("DB not connected ❌", error);
  }
}
connectDB();

// let todos = [];

app.use("/todos", router);

// app.post("/todos", (req, res) => {
//   console.log("Incoming body:", req.body);

//   const newTodo = {
//     id: todos.length + 1,
//     title: req.body.title,
//     completed: false,
//   };
//   todos.push(newTodo);
//   res.status(201).json(newTodo);
// });

// app.get("/todos", (req, res) => {
//   res.json(todos);
// });

// app.get("/todos/:id", (req, res) => {
//   const id = parseInt(req.params.id);
//   const todo = todos.find((item) => item.id === id);
//   if (!todo) {
//     return res.send(404).send("task not found");
//   }
//   res.json(todo);
// });

// app.put("/todos/:id", (req, res) => {
//   todos.title = req.body.newTitle;
// });

// app.delete("/todos/:id", (req, res) => {
//   const id = parseInt(req.params.id);
//   const itemExists = todos.some((item) => item.id === id);
//   if (!itemExists) {
//     return res.send(404).json({ message: "task not found" });
//   }
//   todos = todos.filter((item) => item.id !== id);
//   res.send(204).send();
// });

app.get("/", (req, res) => {
  res.send("To-Do API is running!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
