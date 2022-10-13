import connection from "../db/database.js";

const TABLE_URLS = "urls";

async function accessShortUrl(req, res) {
  const { shortUrl } = req.params;

  try {
    const shortUrlRegistered = await connection.query(
      `SELECT * FROM ${TABLE_URLS} WHERE "shortUrl" = $1;`,
      [shortUrl]
    );

    if (!shortUrlRegistered.rows[0]) {
      return res.status(404).send(`The shortUrl "${shortUrl}" is not exists`);
    }

    const { url } = shortUrlRegistered.rows[0];

    return res.redirect(200, url);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error.detail);
  }
}

export { accessShortUrl };
