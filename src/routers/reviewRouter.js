const express = require("express");
const { reviewPost, getReview } = require("../controllers/reviewController");

const reviewRouter = express.Router();

reviewRouter.post("/review", reviewPost);
reviewRouter.get("/review/:id", getReview);

module.exports = reviewRouter;
