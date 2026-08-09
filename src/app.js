const express = require("express");
const promptRouter = require("./routers/promptRouter");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(promptRouter);

app.get("/", (req, res) => {
  res.json({
    status: 200,
    message: "Hello server",
  });
});

module.exports = app;
