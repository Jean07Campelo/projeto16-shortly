import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";

import connection from "../db/database.js";
import { generateDate } from "../generateDate.js";

const TABLE_USERS = "users";
const TABLE_SESSIONS = "sessions";

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
  const dateNow = generateDate();

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
  const userId = userRegistered.rows[0].id;

  //validates if the password is compatible
  const passwordIsValid = bcrypt.compareSync(
    password,
    userRegistered.rows[0].passwordHash
  );

  if (!passwordIsValid) {
    return res.status(401).send("Please confirm the password");
  }

  const token = uuid();
  const dateNow = generateDate();

  await connection.query(
    `INSERT INTO ${TABLE_SESSIONS} ("userId", token, "createdAt") 
  VALUES ($1, $2, $3);`,
    [userId, token, dateNow]
  );

  res.status(200).send({ token });
}

export { registerNewUser, accessAccount };
