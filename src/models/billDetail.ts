import mongoose from "mongoose";
const BillDetailSchema = new mongoose.Schema<any>(
  {
    IdBill: {
      type: String,
      // require: true,
    },
    IdUser: {
      type: String,
      // require: true,
    },
    IdPro: {
      type: String,
      required: true,
    },
    IdProType: {
      type: String,
      required: true,
    },
    Quantity: {
      type: Number,
      required: true,
    },
    Money: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.model<any>("BillDetail", BillDetailSchema);
