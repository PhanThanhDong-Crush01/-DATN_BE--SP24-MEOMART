import Joi from "joi";
const BillDetailSchema = Joi.object({
  IdBill: Joi.string(),
  IdUser: Joi.string(),
  IdPro: Joi.string().required(),
  IdProType: Joi.string().required(),
  Quantity: Joi.number().required().min(0),
  Money: Joi.number().required().min(0),
});
export default BillDetailSchema;
