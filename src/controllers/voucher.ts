import Voucher from "../models/voucher";
export const createVoucher = async (req, res) => {
  try {
    const data = await Voucher.create(req.body);
    if (!data) {
      return res.status(404).json({
        message: "failed create",
      });
    }
    return res.status(200).json({
      message: "successful create ",
      datas: data,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
export const getAllVoucher = async (req, res) => {
  try {
    const data = await Voucher.find({});
    if (!data) {
      return res.status(404).json({
        message: "failed getAllVoucher",
      });
    }
    return res.status(200).json({
      message: "successful getAll ",
      datas: data,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
export const getDetailVoucher = async (req, res) => {
  try {
    const data = await Voucher.findById(req.params.id);
    if (!data) {
      return res.status(404).json({
        message: "failed getDetail",
      });
    }
    return res.status(200).json({
      message: "successful getDetail ",
      datas: data,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
export const removeVoucher = async (req, res) => {
  try {
    const data = await Voucher.findByIdAndDelete(req.params.id);
    if (!data) {
      return res.status(404).json({
        message: "failed delete",
      });
    }
    return res.status(200).json({
      message: "successful removeVoucher ",
      datas: data,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const updateVoucher = async (req, res) => {
  try {
    const data = await Voucher.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!data) {
      return res.status(404).json({
        message: "failed update",
      });
    }
    return res.status(200).json({
      message: "successful updateVoucher ",
      datas: data,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
