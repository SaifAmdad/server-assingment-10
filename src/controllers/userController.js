const userModel = require("../models/userModel");

const getAllUser = async (req, res) => {
  try {
    const users = await userModel.find();

    res.status(200).send({
      success: true,
      message: "users were returned successfully",
      users,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: `${error} Server-controller-Error`,
    });
  }
};

// ----------------
const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const role = req.body;
    const users = await userModel.findByIdAndUpdate(id, role);

    res.status(200).send({
      success: true,
      message: "users were returned successfully",
      users,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: `${error} Server-controller-Error`,
    });
  }
};

module.exports = { getAllUser, updateUser };
