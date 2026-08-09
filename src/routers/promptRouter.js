const express = require("express");
const {
  createPrompt,
  getAllPrompts,
  getPrompt,
} = require("../controllers/promptController");
const promptRouter = express.Router();

promptRouter.post("/add-prompt", createPrompt);
promptRouter.get("/all-prompts", getAllPrompts);
promptRouter.get("/prompt/:id", getPrompt);

module.exports = promptRouter;
