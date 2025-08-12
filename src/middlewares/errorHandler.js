const errorHandler = (err, req, res, next) => {
  console.error(err); // Konsola yazmak loglama için faydalı

  res.status(err.status || 500).json({
    status: err.status || 500,
    message: err.message || 'Something went wrong',
    data: err.data || null,
  });
};

module.exports = errorHandler;
