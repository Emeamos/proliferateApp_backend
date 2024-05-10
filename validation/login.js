import Joi from "joi";

export const loginValidation = Joi.object({
  email: Joi.string().email().min(3).max(70).lowercase().required(),
  password: Joi.string().required(),
});
export default loginValidation;
