import connection from "../db/database.js";

const TABLE_SESSIONS = "sessions";

async function validateToken(req, res, next) {
  let token = req.headers.authorization;

  if (!token) {
    return res.status(401).send("Token invalid");
  }
  token = token.replace("Bearer Token ", "");

  try {
    const tokenIsValid = await connection.query(
      `SELECT * FROM ${TABLE_SESSIONS} WHERE token = $1;`,
      [token]
    );

    if (!tokenIsValid.rows[0]) {
      console.log("TOKEN INVÁLIDO");
      return res.status(404).send("Token invalid");
    }

    res.locals.userId = tokenIsValid.rows[0].userId;

  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }

  
  next();
}

export default validateToken;
