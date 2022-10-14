import connection from "../db/database.js";

const TABLE_URLS = "urls";
const TABLE_USERS = "users";

async function getUser(req, res) {
  const { userId } = res.locals;

  try {
    const dataUser = await connection.query(
      `SELECT 
      ${TABLE_USERS}.id,
      ${TABLE_USERS}.name,
    SUM(urls.visits) AS "visitCount"
    FROM ${TABLE_USERS} JOIN ${TABLE_URLS} ON ${TABLE_USERS}.id = ${TABLE_URLS}."userId" 
    WHERE ${TABLE_USERS}.id = $1
    GROUP BY ${TABLE_USERS}.id;`,
      [userId]
    );

    const dataUrls = await connection.query(
      `SELECT 
          id,
          "shortUrl",
          url,
          visits AS "visitCount"	
        FROM ${TABLE_URLS}
        WHERE "userId" = $1
        ORDER BY visits DESC;`,
      [userId]
    );

    const compiledResult = {
      ...dataUser.rows[0],
      shortenedUrls: dataUrls.rows,
    };

    return res.status(200).send(compiledResult);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error.detail);
  }
}

export { getUser };
