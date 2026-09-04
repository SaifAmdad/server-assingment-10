const { Schema, model } = require("mongoose");

const paymentSchema = new Schema(
  {
    payerId: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: [true, "User ID is required."],
    },
    amount: {
      type: Number,
      required: [true, "Payment amount is required."],
    },
    payerName: {
      type: String,
      required: [true, "Name is required."],
    },
    payerImage: {
      type: String,
    },
  },
  { timestamps: true },
);

const PaymentModel = model("payment", paymentSchema);
module.exports = PaymentModel;
