// import mongoose from "mongoose";

// const categorySchema = new mongoose.Schema<any>(
//   {},
//   { timestamps: true, versionKey: false }
// );

// export default mongoose.model<any>("Category", categorySchema);
import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
  },
  { timestamps: true, versionKey: false }
);

export default mongoose.model("Category", categorySchema);
