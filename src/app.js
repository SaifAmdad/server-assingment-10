const express = require("express");
const cors = require("cors");
const promptRouter = require("./routers/promptRouter");
const reviewRouter = require("./routers/reviewRouter");
const bookmarkRouter = require("./routers/bookmarkRouter");
const reportRouter = require("./routers/reportRouter");
const userRouter = require("./routers/userRouter");
const paymentRouter = require("./routers/paymentRouter");
const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(promptRouter);
app.use(reviewRouter);
app.use(bookmarkRouter);
app.use(reportRouter);
app.use(userRouter);
app.use(paymentRouter);

app.get("/", (req, res) => {
  res.json({
    status: 200,
    message: "Hello server",
  });
});

module.exports = app;
