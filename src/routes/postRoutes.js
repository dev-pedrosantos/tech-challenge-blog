const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");

router.post("/posts", postController.createPost); // <-- ESSA LINHA É O POST
router.get("/posts", postController.getPosts);
router.get("/posts/search", postController.searchPosts);
router.get("/posts/:id", postController.getPostById);
router.put("/posts/:id", postController.updatePost);
router.delete("/posts/:id", postController.deletePost);

module.exports = router;
