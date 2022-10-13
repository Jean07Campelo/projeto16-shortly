async function generateShortUrl(req, res) {
  const { token } = res.locals;
  const { url } = req.body;

  const pattern = /https:/;
  const urlIsValid = url.match(pattern);
  if (!urlIsValid) {
    return res.status(422).send(`"${url}" is not valid`);
  }

  res.sendStatus(200);
}

export { generateShortUrl };
