import bcrypt from "bcrypt";

import connection from "../db/database.js";

const TABLE_USERS = "users";

async function RegisterNewUser(req, res) {
  const { name, email, password, confirmPassword } = req.body;

  //validate if user is registered
  try {
    const userRegistered = await connection.query(
      `SELECT * FROM ${TABLE_USERS} WHERE email = $1;`,
      [email]
    );

    if (userRegistered.rows.length > 0) {
      return res
        .status(409)
        .send(`Existing an user registered with email "${email}"`);
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }

  //register new user
  await connection.query(
    `INSERT INTO ${TABLE_USERS} (name, email, "passwordHash") VALUES ($1, $2, $3);`,
    [name, email, bcrypt.hashSync(password, 10)]
  );

  res.sendStatus(201);
}

export { RegisterNewUser };
