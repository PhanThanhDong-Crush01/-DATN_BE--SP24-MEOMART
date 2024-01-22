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

export const getAll = async (req: any, res: any) => {
  try {
    const {
      _sort = "price",
      _order = "asc",
      _limit = 50,
      _page = 1,
    } = req.query;

    const options = {
      page: _page,
      limit: _limit,
      sort: {
        [_sort]: _order === "desc" ? -1 : 1,
      },
    };
    // const { data } = await axios.get(`${API_URL}/Product`);
    const data = await ProductModel.paginate({}, options);

    if (!data || data.length === 0) {
      return res.status(404).json({
        message: "Không tìm thấy sản phẩm",
      });
    }

    return res.status(200).json({
      message: "Gọi danh sách sản phẩm thành công!",
      datas: data,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
}; //phân trang, lọc, xắp xếp
export const storage = async (req: any, res: any) => {
  try {
    const id = req.params.id;
    // const { data } = await axios.put(`${API_URL}/Product/${id}`, body);
    const data = await ProductModel.findByIdAndUpdate(
      id,
      { status: false },
      { new: true }
    );

    console.log(data);
    if (!data) {
      return res.status(404).json({
        message: "Lưu trữ sản phẩm thất bại!",
      });
    }

    return res.status(200).json({
      message: "Lưu trữ sản phẩm thành công!",
      datas: data,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
}; //lưu trữ pro
export const restore = async (req, res: any) => {
  try {
    const id = req.params.id;
    // const { data } = await axios.put(`${API_URL}/Product/${id}`, body);
    const data = await ProductModel.findByIdAndUpdate(
      id,
      { status: true },
      { new: true }
    );

    console.log(data);
    if (!data) {
      return res.status(404).json({
        message: "Phục hồi sản phẩm thất bại!",
      });
    }

    return res.status(200).json({
      message: "Phục hồi sản phẩm thành công!",
      datas: data,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
}; //phụ hồi pro
