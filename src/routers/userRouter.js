const express = require("express");
const { isLogin, isAdmin } = require("../validator/auth");
const { getAllUser, updateUser } = require("../controllers/userController");
const userRouter = express.Router();

userRouter.get("/all-users", isLogin, isAdmin, getAllUser);
userRouter.patch("/update-user/:id", isLogin, isAdmin, updateUser);

module.exports = userRouter;
