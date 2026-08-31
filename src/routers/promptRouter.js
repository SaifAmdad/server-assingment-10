const express = require("express");
const {
  createPrompt,
  getAllPrompts,
  getPrompt,
  updatePrompt,
  deletePrompt,
  getPromptByCreatorId,
} = require("../controllers/promptController");
const { isLogin } = require("../validator/auth");
const promptRouter = express.Router();

promptRouter.post("/add-prompt", isLogin, createPrompt);
promptRouter.get("/all-prompts", getAllPrompts);
promptRouter.get("/prompt/:id", isLogin, getPrompt);
promptRouter.get("/creator-prompt", isLogin, getPromptByCreatorId);
promptRouter.delete("/delete-prompt/:id", isLogin, deletePrompt);
promptRouter.patch("/update-prompt/:id", isLogin, updatePrompt);

module.exports = promptRouter;
