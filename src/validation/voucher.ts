import Joi from "joi";

const voucherSchema = Joi.object({
  CodeVC: Joi.number().required().min(0),
  Status: Joi.string().required(),
  Decrease: Joi.number().required().min(0),
  Expiry: Joi.string().required(),
  Conditions: Joi.number().required().min(0),
});

export default voucherSchema;
