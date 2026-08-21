const { Schema, model } = require("mongoose");

const promptSchema = new Schema(
  {
    creatorID: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: [true, "User ID is required."],
    },
    img: {
      type: String,
    },

    title: {
      type: String,
      required: [true, "Prompt Title is required."],
    },
    description: {
      type: String,
      required: [true, "Prompt description is required."],
    },
    content: {
      type: String,
      required: [true, "Prompt content is required."],
    },
    category: {
      type: String,
      required: [true, "Prompt category is required."],
    },
    tags: {
      type: Array,
      required: [true, "Prompt tags are required."],
    },
    aiToolName: {
      type: String,
      required: [true, "AI Tool-Name is required."],
    },
    difficultyLevel: {
      type: String,
      required: [true, "Prompt level is required."],
    },
    usageInstructions: {
      type: String,
      required: [true, "Prompt usage Instruction is required."],
    },
    copyCount: {
      type: Number,
      default: 0,
    },
    visibility: {
      type: String,
      required: [true, "Prompt Visibility (Public/Privet) is required."],
    },
    creator: {
      type: String,
    },
    creatorImg: {
      type: String,
    },

    status: {
      type: String,
      default: "pending",
    },
  },
  {
    timestamps: true,
  },
);

const PromptModel = model("prompts", promptSchema);
module.exports = PromptModel;
