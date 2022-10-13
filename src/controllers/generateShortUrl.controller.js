import { nanoid } from "nanoid";
import connection from "../db/database.js";
import { generateDate } from "../generateDate.js";

const TABLE_URLS = "urls";

async function generateShortUrl(req, res) {
  const { userId } = res.locals;
  const { url } = req.body;

  const pattern = /https:/;
  const urlIsValid = url.match(pattern);
  if (!urlIsValid) {
    return res.status(422).send(`"${url}" is not valid`);
  }

  const shortUrl = nanoid();
  const timeNow = generateDate();

  try {
    const shortUrlSuccessful = await connection.query(
      `INSERT INTO ${TABLE_URLS} 
        ("userId", url, "shortUrl", "createdAt") 
        VALUES ($1, $2, $3, $4);`,
      [userId, url, shortUrl, timeNow]
    );

    if (shortUrlSuccessful.rowCount === 1) {
      try {
        const urlRegistered = await connection.query(
          `SELECT id, "shortUrl", url FROM ${TABLE_URLS} WHERE url = $1;`,
          [url]
        );
        res.status(201).send(urlRegistered.rows[0]);
      } catch (error) {
        console.log(error);
        return res.status(500).send(error.detail);
      }
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send(error.detail);
  }
}

export { generateShortUrl };
