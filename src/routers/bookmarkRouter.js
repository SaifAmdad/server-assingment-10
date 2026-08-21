const express = require("express");
const {
  bookmarkPost,
  deleteBookmark,
} = require("../controllers/bookmarkController");

const bookmarkRouter = express.Router();

bookmarkRouter.post("/bookmark", bookmarkPost);
bookmarkRouter.delete("/bookmark/:id", deleteBookmark);
module.exports = bookmarkRouter;
