import conncetion from "../db/database.js";

const TABLE_URLS = "urls";
async function deleteUrl(req, res) {
  const { id } = req.params;
  const { userId } = res.locals;

  //validate if url exists
  try {
    const urlExists = await conncetion.query(
      `SELECT * FROM ${TABLE_URLS} WHERE id = $1;`,
      [id]
    );

    if (!urlExists.rows[0]) {
      return res.status(404).send("The url selected don't exists");
    }

    //validate if shortUrl belong to user
    const userCreatedUrl = urlExists.rows[0].userId;

    if (userCreatedUrl !== userId) {
      return res.status(401).send("The url don't belong to the user");
    }

    const deletedSuccessful = await conncetion.query(
      `DELETE FROM ${TABLE_URLS} WHERE id = $1;`,
      [id]
    );

    if (deletedSuccessful.rowCount === 1) {
      return res
        .status(204)
        .send(`The url by id "${id}" has deleted successfully`);
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send(error.detail);
  }
}

export { deleteUrl };