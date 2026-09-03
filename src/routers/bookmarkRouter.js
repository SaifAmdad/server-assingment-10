const express = require("express");
const {
  bookmarkPost,
  deleteBookmark,
  getBookmark,
  copyCountInc,
} = require("../controllers/bookmarkController");
const { isLogin } = require("../validator/auth");

const bookmarkRouter = express.Router();

bookmarkRouter.post("/bookmark", isLogin, bookmarkPost);
bookmarkRouter.delete("/bookmark/:id", isLogin, deleteBookmark);
bookmarkRouter.get("/bookmark/:id", isLogin, getBookmark);
bookmarkRouter.get("/copy/:id", copyCountInc);
module.exports = bookmarkRouter;
