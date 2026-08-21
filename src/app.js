const express = require("express");
const promptRouter = require("./routers/promptRouter");
const reviewRouter = require("./routers/reviewRouter");
const bookmarkRouter = require("./routers/bookmarkRouter");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(promptRouter);
app.use(reviewRouter);
app.use(bookmarkRouter);

app.get("/", (req, res) => {
  res.json({
    status: 200,
    message: "Hello server",
  });
});

module.exports = app;
