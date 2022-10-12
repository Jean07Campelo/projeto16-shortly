import bcrypt from "bcrypt";
import dayjs from "dayjs";

import connection from "../db/database.js";

const TABLE_USERS = "users";

async function registerNewUser(req, res) {
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
  const dateNow = dayjs(Date.now()).locale("pt").format("YYYY-MM-DD HH:mm");

  await connection.query(
    `INSERT INTO ${TABLE_USERS} 
    (name, email, "passwordHash", "createdAt") 
    VALUES ($1, $2, $3, $4);`,
    [name, email, bcrypt.hashSync(password, 10), dateNow]
  );

  res.sendStatus(201);
}

async function accessAccount(req, res) {
  const { email, password } = req.body;

  //validates if user is registered
  const userRegistered = await connection.query(
    `SELECT * FROM ${TABLE_USERS} WHERE email = $1;`,
    [email]
  );

  if (userRegistered.rows.length === 0) {
    return res.status(401).send("User not registered");
  }

  //validates if the password is compatible
  const passwordIsValid = bcrypt.compareSync(
    password,
    userRegistered.rows[0].passwordHash
  );

  if (!passwordIsValid) {
    return res.status(401).send("Please confirm the password");
  }

  res.sendStatus(200);
}

export { registerNewUser, accessAccount };
