const express = require("express");
const { isLogin, isAdmin } = require("../validator/auth");
const {
  getPayments,
  postPayment,
} = require("../controllers/paymentController");

const paymentRouter = express.Router();

paymentRouter.get("/payments", isLogin, isAdmin, getPayments);
paymentRouter.post("/payments", isLogin, postPayment);

module.exports = paymentRouter;
