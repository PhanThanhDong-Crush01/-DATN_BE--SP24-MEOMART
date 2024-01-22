import mongoose from "mongoose";
const VoucherSchema = new mongoose.Schema<any>(
  {},
  { timestamps: true, versionKey: false }
);

export default mongoose.model<any>("Voucher", VoucherSchema);
