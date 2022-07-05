module.exports = (err, _req, res, _next) => {
    if (err.isJoi) return res.status().json({ error: { message: err.details[0].message } });

    if (err.code) {
        const statusByErrorCode = {
            invalidData: 400,
            notFound: 404,
        };
        
        const status = statusByErrorCode[err.code] || 500;
        
        return res.status(status).json(err);
    }

    console.error(err);

    return res.status(500).json({ message: 'internal server error' });
};