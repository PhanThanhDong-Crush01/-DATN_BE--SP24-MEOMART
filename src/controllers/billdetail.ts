import BillDetail from "../models/BillDetail";
import BillDetailSchema from "../validation/billdetail";

export const createBillDetail = async (req, res) => {
  try {
    const body = req.body;
    const data = await BillDetail.create(body);
    console.log(data);
    const { error } = BillDetailSchema.validate(req.body, {
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
        message: "Tạo mới hóa đơn chi tiết thất bại!",
      });
    }

    return res.status(200).json({
      message: "Tạo mới hóa đơn chi tiết thành công!",
      datas: data,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
