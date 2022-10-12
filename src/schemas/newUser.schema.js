import joi from "joi";

const newUserSchema = joi.object({
  name: joi.string().required().empty(" "),
  email: joi.string().email().required(),
  password: joi.string().required().empty(" "),
  confirmPassword: joi.ref("password"),
});

export default newUserSchema;
