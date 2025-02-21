const express = require("express");
const router = express.Router();

// Temporary in-memory storage for posts
let posts = [];

// Get all posts
router.get("/", (req, res) => {
  res.json(posts);
});

// Create a new post
router.post("/", (req, res) => {
  const post = req.body;
  posts.push(post);
  res.status(201).json(post);
});

// Update a post by index
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const updatedPost = req.body;
  posts[id] = updatedPost;
  res.json(updatedPost);
});

// Delete a post by index
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  posts.splice(id, 1);
  res.status(204).send();
});

module.exports = router;
