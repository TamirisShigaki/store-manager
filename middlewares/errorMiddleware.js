module.exports = (err, _req, res, _next) => {
  const statusByErrorCode = {
    'any.required': 400,
    'string.min': 422,
    notFound: 404,
    invalidData: 400,
  };

  console.error(err);
  if (err.isJoi) {
    const status = statusByErrorCode[err.code] || 500;

    return res.status(status).json({ message: err.details[0].message });
  }

  if (err.code) {
    const status = statusByErrorCode[err.code] || 500;

    return res.status(status).json(err);
  }

  return res.status(500).json({ message: 'internal server error' });
};