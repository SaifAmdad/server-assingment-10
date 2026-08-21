const { Schema, model } = require("mongoose");

const bookmarkSchema = new Schema({
  promptId: {
    type: Schema.Types.ObjectId,
    ref: "prompts",
    required: [true, "Prompt ID is required."],
  },
  promptTitle: {
    type: String,
    required: [true, "Rating is required."],
  },

  promptCategory: {
    type: String,
    required: [true, "Review is required."],
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: [true, "User ID is required."],
  },
});

const bookmarkModel = model("bookmark", bookmarkSchema);
module.exports = bookmarkModel;
