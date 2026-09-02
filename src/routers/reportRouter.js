const express = require("express");

const { isLogin } = require("../validator/auth");
const { createReport } = require("../controllers/reportController");

const reportRouter = express.Router();

reportRouter.post("/report", isLogin, createReport);

module.exports = reportRouter;
