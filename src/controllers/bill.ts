import Bill from "../models/Bill";
import BillSchema from "../validation/bill";

export const createBill = async (req, res) => {
  try {
    const body = req.body;
    const data = await Bill.create(body);
    console.log(data);
    const { error } = BillSchema.validate(req.body, {
      abortEarly: false,
    });
    if (error) {
      const errors = error.details.map((err) => err.message);
      return res.status(400).json({
        message: errors,
      });
    }
    if (!data) {
      return res.status(404).json({
        message: "Tạo mới hóa đơn thất bại!",
      });
    }

    return res.status(200).json({
      message: "Tạo mới hóa đơn thành công!",
      datas: data,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
export const getAllBill = async (req, res) => {
  try {
    // const { data } = await axios.get(`${API_URL}/typeVoucher`);
    const data = await Bill.find();

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
};
