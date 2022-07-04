module.exports = (err, _req, res, _next) => {
  const { name, message } = err;
  switch (name) {
    case 'notFoundError':
      res.status(404).json({ message });
      break;
    default:
      res.sendStatus(500).json({ message });
  }
};