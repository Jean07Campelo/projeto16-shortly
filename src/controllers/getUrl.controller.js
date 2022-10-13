import connection from "../db/database.js";

const TABLE_URLS = "urls";

async function getUrlById(req, res) {
  const { id } = req.params;

  try {
    const urlRegistered = await connection.query(
      `SELECT id, "shortUrl", url FROM ${TABLE_URLS} WHERE id = $1;`,
      [id]
    );

    //case where Id is invalid
    if (!urlRegistered.rows[0]) {
      return res.status(404).send(`The id "${id}" is invalid"`);
    }

    return res.status(200).send(urlRegistered.rows[0]);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error.detail);
  }
}

export { getUrlById };
