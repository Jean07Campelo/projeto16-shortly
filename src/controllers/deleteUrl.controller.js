import conncetion from "../db/database.js";

const TABLE_URLS = "urls";
async function deleteUrl (req, res) {
    const { id } = req.params;
    const { userId } = res.locals;
    
    //validate if shortUrl belong to user
    const urlBelong = await conncetion.query(`SELECT * FROM ${TABLE_URLS} WHERE "userId" = $1 AND id = $2;`, [userId, id]);

    console.log(urlBelong.rows)

    res.sendStatus(200)
}

export { deleteUrl };