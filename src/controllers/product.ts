import ProductModel from "../models/product";
import { productSchema } from "./../validation/product";
export const create = async (req: any, res: any) => {
  try {
    const { error } = productSchema.validate(req.body);
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
export const update = async (req: any, res: any) => {};

export const getAll = async (req: any, res: any) => {}; //phân trang, lọc, xắp xếp
export const remove = async (req: any, res: any) => {}; //lưu trữ pro
export const restore = async (req, res: any) => {}; //phụ hồi pro
