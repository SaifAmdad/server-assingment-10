const express = require("express");
const {
  bookmarkPost,
  deleteBookmark,
  getBookmark,
} = require("../controllers/bookmarkController");
const { isLogin } = require("../validator/auth");

const bookmarkRouter = express.Router();

bookmarkRouter.post("/bookmark", isLogin, bookmarkPost);
bookmarkRouter.delete("/bookmark/:id", isLogin, deleteBookmark);
bookmarkRouter.get("/bookmark/:id", isLogin, getBookmark);
module.exports = bookmarkRouter;
