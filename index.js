module.exports = (req, res) => {
  const SEND_URL = 'https://app.bookmein.xyz';
  const PATH = req.url;
  const Location = `${SEND_URL}${PATH}`;
  res.writeHead(301, { Location });
  res.end();
};
