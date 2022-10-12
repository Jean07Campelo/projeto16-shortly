import newUserSchema from "../schemas/newUser.js";

function validateUser(req, res, next) {
  const validationNewUser = newUserSchema.validate(req.body, {
    abortEarly: false,
  });
  if (validationNewUser.error) {
    const errors = validationNewUser.error.details.map(
      (detail) => detail.message
    );
    return res.status(422).send(errors);
  }
  next();
}

export default validateUser;
