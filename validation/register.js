import Joi from "joi";

export const registerValidation = Joi.object({
  firstname: Joi.string().required(),
  lastname: Joi.string().required(),
  email: Joi.string().email().min(3).max(70).lowercase().required(),
  password: Joi.string().min(6).required(),
});

export default registerValidation;
