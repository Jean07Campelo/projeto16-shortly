//import connection from "../db/database.js";

async function RegisterNewUser(req, res) {
  const { name, email, password, confirmPassword } = req.body;


  res.sendStatus(201);
}

export { RegisterNewUser };
