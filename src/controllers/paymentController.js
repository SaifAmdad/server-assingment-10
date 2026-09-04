const PaymentModel = require("../models/paymentModel");
const userModel = require("../models/userModel");

const getPayments = async (req, res) => {
  try {
    const payments = await PaymentModel.find();
    res.status(200).send({
      success: true,
      message: "Payments are returned Successfully",
      payments,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: `Server-Error ${error}`,
    });
  }
};

const postPayment = async (req, res) => {
  try {
    const paymentInfo = req.body;
    const id = req.params.id;
    await userModel.findByIdAndUpdate(id, { plan: "premium" });
    const payments = await PaymentModel.create(paymentInfo);
    res.status(200).send({
      success: true,
      message: "Payment Successfull",
      payments,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: `Server-Error ${error}`,
    });
  }
};

module.exports = { getPayments, postPayment };
