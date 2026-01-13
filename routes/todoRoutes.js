import express, { Router } from "express";
import { Todo } from "../models/todoModels.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ Message: "Server error fetching tasks" });
  }
});

router.post("/", async (req, res) => {
  try {
    const newTodo = new Todo({
      title: req.body.title,
    });
    const savedTodo = await newTodo.save();
    res.status(201).json({ Message: "Fetched the title and saved", savedTodo });
  } catch (error) {
    res.status(500).json({ Message: "Todo not saved" }, error.Message);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(
      req.params.id,
      { completed: req.body.completed },
      { new: true }
    );
    if (!updatedTodo) {
      res.status(404).json({ Message: "Task not found" });
    }
    res.status(200).json({ Message: "Updated Successful", updatedTodo });
  } catch (error) {
    res.status(400).json({ Message: "Update failed", error: error.Message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
    if (!deletedTodo) {
      res.status(404).json({ Message: "Task not found", error: error.Message });
    }
    res.status(200).json({ Message: "Deleted Successsfully", deletedTodo });
  } catch (error) {
    res.status(500).json({ Message: "Delete Failed", error: error.Message });
  }
});

export default router;
