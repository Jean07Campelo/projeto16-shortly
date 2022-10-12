import joi from "joi";

const UserSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().required().empty(" "),
});

export default UserSchema;
