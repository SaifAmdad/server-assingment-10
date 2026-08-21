const express = require("express");
const {
  createPrompt,
  getAllPrompts,
  getPrompt,
  updatePrompt,
  deletePrompt,
} = require("../controllers/promptController");
const promptRouter = express.Router();

promptRouter.post("/add-prompt", createPrompt);
promptRouter.get("/all-prompts", getAllPrompts);
promptRouter.get("/prompt/:id", getPrompt);
promptRouter.delete("/prompt/:id", deletePrompt);
promptRouter.patch("/update-prompt/:id", updatePrompt);

module.exports = promptRouter;
