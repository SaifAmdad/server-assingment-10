const PromptModel = require("../models/promptModel");
const reviewModel = require("../models/reviewRatingModel");
const userModel = require("../models/userModel");

const reviewPost = async (req, res) => {
  try {
    let review = req.body;

    const user = await userModel.findById(review.reviewerId);
    if (!user) {
      return res.status(404).send({
        message: "User not found with this ID",
        successs: false,
      });
    }

    const prompt = await PromptModel.findById(review.promptId);
    if (!prompt) {
      return res.status(404).send({
        message: "Prompt not found with this ID",
        successs: false,
      });
    }

    review.reviewer = user.name;
    review.reviewerImg = user.image;

    const newReview = await reviewModel.create(review);
    res.status(200).send({
      success: true,
      payload: newReview,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error._message,
    });
  }
};

// Get review by prompt ID
const getReview = async (req, res) => {
  try {
    const id = req.params.id;
    const reviews = await reviewModel.find({ promptId: id });
    res.status(200).send({
      success: true,
      payload: reviews,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error._message,
    });
  }
};

// get review by user ID
const getReviewsByUserId = async (req, res) => {
  try {
    const id = req.params.id;
    const reviews = await reviewModel.find({ reviewerId: id });
    res.status(200).send({
      success: true,
      payload: reviews,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error._message,
    });
  }
};

// get review by user ID
const deleteReview = async (req, res) => {
  try {
    const id = req.params.id;
    const review = await reviewModel.findByIdAndDelete(id);
    res.status(200).send({
      success: true,
      review,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error._message,
    });
  }
};

module.exports = { reviewPost, getReview, getReviewsByUserId, deleteReview };
