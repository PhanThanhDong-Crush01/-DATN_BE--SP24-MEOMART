import ProductModel from "../models/product";
import { typeProductSchema } from "../validation/product";

export const create = async (req: any, res: any) => {
  try {
    const { error } = typeProductSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        message: error.details[0].message,
      });
    }
    const product = await ProductModel.create(req.body);
    if (!product) {
      return res.json({
        message: "Thêm sản phẩm thất bại",
      });
    }
    return res.json({
      message: "Thêm sản phẩm thành công",
      data: product,
    });
  } catch (error) {
    return res.status(400).json({
      message: error,
    });
  }
};
