const express = require("express");
const {
  bookmarkPost,
  deleteBookmark,
  getBookmark,
} = require("../controllers/bookmarkController");

const bookmarkRouter = express.Router();

bookmarkRouter.post("/bookmark", bookmarkPost);
bookmarkRouter.delete("/bookmark/:id", deleteBookmark);
bookmarkRouter.get("/bookmark/:id", getBookmark);
module.exports = bookmarkRouter;
