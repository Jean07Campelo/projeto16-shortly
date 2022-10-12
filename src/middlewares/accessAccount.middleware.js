import userSchema from "../schemas/accessAccount.schema.js";

function validateUser(req, res, next) {
  const validationUser = userSchema.validate(req.body, {
    abortEarly: false,
  });
  if (validationUser.error) {
    const errors = validationUser.error.details.map(
      (detail) => detail.message
    );
    return res.status(422).send(errors);
  }
  next();
}

export default validateUser;
