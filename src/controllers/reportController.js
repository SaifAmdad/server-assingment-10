const ReportModel = require("../models/reportModel");
const userModel = require("../models/userModel");

const createReport = async (req, res) => {
  try {
    const report = req.body;

    const newPrompt = await ReportModel.create(report);

    res.status(200).send({
      success: true,
      message: "Reported successfully",
      payload: newPrompt,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: `${error._message} server-Error`,
    });
    console.log(error);
  }
};

module.exports = { createReport };
