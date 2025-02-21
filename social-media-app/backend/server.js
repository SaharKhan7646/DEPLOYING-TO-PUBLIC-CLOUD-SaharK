const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Define example routes
app.get("/", (req, res) => {
  res.send("Welcome to the Social Media API!");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
const express = require("express");
const router = express.Router();

let posts = [];

// Get all posts
router.get("/", (req, res) => {
  res.json(posts);
});

// Create a post
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

const postRoutes = require("./routes/posts");
app.use("/posts", postRoutes);
