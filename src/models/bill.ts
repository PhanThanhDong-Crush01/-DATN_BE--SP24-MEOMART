import mongoose from "mongoose";

const BillSchema = new mongoose.Schema<any>(
  {
    IdUser: {
      type: String,
      require: true,
    },
    Money: {
      type: Number,
      require: true,
    },
    Date: {
      type: String,
      required: true,
    },
    Adress: {
      type: String,
      required: true,
    },
    Tel: {
      type: Number,
      required: true,
    },
    IdVC: {
      type: String,
      required: true,
    },
    PayMentMethods: {
      type: String,
      required: true,
    },
    PaymentStatus: {
      type: String,
      required: true,
    },
    OrderStatus: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.model<any>("Bill", BillSchema);
