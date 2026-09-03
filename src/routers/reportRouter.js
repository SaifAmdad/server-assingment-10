const express = require("express");

const { isLogin } = require("../validator/auth");
const {
  createReport,
  getReport,
  resolveReport,
} = require("../controllers/reportController");

const reportRouter = express.Router();

reportRouter.post("/report", isLogin, createReport);
reportRouter.get("/report", isLogin, getReport);
reportRouter.delete("/report/:id", isLogin, resolveReport);

module.exports = reportRouter;
