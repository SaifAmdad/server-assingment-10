const ReportModel = require("../models/reportModel");

const createReport = async (req, res) => {
  try {
    const report = req.body;

    const newReport = await ReportModel.create(report);

    res.status(200).send({
      success: true,
      message: "Reported successfully",
      payload: newReport,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: `${error._message} server-Error`,
    });
    console.log(error);
  }
};

const getReport = async (req, res) => {
  try {
    const reports = await ReportModel.find();
    res.status(200).send({
      success: true,
      message: "Reported successfully",
      reports,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: `${error._message} server-Error`,
    });
    console.log(error);
  }
};

const resolveReport = async (req, res) => {
  try {
    const id = req.params.id;
    const type = req.headers?.type;

    const resolve = await ReportModel.findByIdAndDelete(id);
    res.status(200).send({
      success: true,
      message: `Reporte ${type} successfully`,
      type,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: `${error._message} server-Error`,
    });
    console.log(error);
  }
};

module.exports = { createReport, getReport, resolveReport };
