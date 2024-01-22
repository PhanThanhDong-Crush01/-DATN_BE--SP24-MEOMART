import mongoose from "mongoose";
import { IProduct } from "../interfaces/product";

const productSchema = new mongoose.Schema<IProduct>(
  {},
  { timestamps: true, versionKey: false }
);

export default mongoose.model<IProduct>("Product", productSchema);
