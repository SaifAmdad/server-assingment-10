const { Schema, model } = require("mongoose");

const reviewRatingSchema = new Schema({
  promptId: {
    type: Schema.Types.ObjectId,
    ref: "prompts",
    required: [true, "Prompt ID is required."],
  },
  rating: {
    type: Number,
    required: [true, "Rating is required."],
  },

  review: {
    type: String,
    required: [true, "Review is required."],
  },
  reviewerId: {
    type: String,
    required: [true, "ReviewerId is required."],
  },
});
