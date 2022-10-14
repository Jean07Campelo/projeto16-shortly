import connection from "../db/database.js";

const TABLE_USERS = "users";
const TABLE_URLS = "urls";

async function getRanking(req, res) {
  try {
    const ranking = await connection.query(
      `SELECT
        ${TABLE_URLS}."userId",
        ${TABLE_USERS}.name,
        COUNT(${TABLE_URLS}."shortUrl") AS "linksCount",
        SUM(${TABLE_URLS}.visits) AS "visitCount"
    FROM ${TABLE_URLS} 
    JOIN ${TABLE_USERS} ON ${TABLE_URLS}."userId" = ${TABLE_USERS}.id
    GROUP BY ${TABLE_URLS}."userId", ${TABLE_USERS}.name 
    ORDER BY "visitCount" DESC LIMIT 10;`
    );

    return res.status(200).send(ranking.rows);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error.detail);
  }
}

export { getRanking };
