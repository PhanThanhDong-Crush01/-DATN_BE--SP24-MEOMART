import Joi from "joi";
const BillSchema = Joi.object({
  IdUser: Joi.string().required(),
  Money: Joi.number().required().min(0),
  Date: Joi.string().required(),
  Adress: Joi.string().required(),
  Tel: Joi.string().required(),
  IdVC: Joi.string().required(),
  PayMentMethods: Joi.string().required(),
  PaymentStatus: Joi.string().required(),
  OrderStatus: Joi.string().required(),
});
export default BillSchema;
