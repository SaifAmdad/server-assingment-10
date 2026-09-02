const express = require("express");
const {
  reviewPost,
  getReview,
  getReviewsByUserId,
  deleteReview,
} = require("../controllers/reviewController");
const { isLogin } = require("../validator/auth");

const reviewRouter = express.Router();

reviewRouter.post("/review", isLogin, reviewPost);
reviewRouter.get("/review/:id", getReview);
reviewRouter.delete("/review/:id", isLogin, deleteReview);
reviewRouter.get("/reviews/:id", isLogin, getReviewsByUserId);

module.exports = reviewRouter;
