const { Schema, model } = require("mongoose");

const reportSchema = new Schema(
  {
    promptId: {
      type: Schema.Types.ObjectId,
      ref: "prompts",
      required: [true, "Prompt ID is required."],
    },
    reason: {
      type: String,
      required: [true, "Rating is required."],
    },

    message: {
      type: String,
      required: [true, "Review is required."],
    },
    promptTitle: {
      type: String,
      required: [true, "Title is required."],
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: [true, "User ID is required."],
    },
  },
  { timestamps: true },
);

const ReportModel = model("report", reportSchema);
module.exports = ReportModel;
