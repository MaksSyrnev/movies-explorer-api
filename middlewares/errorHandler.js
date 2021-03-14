const errorHandler = (err, req, res, next) => {
  const { statusCode = 500, message, name } = err;
  if (name === 'CastError' || name === 'ValidationError') {
    res
      .status(400)
      .send({ message: 'Переданы некорректные данные' });
  } else if (name === 'JsonWebTokenError') {
    res
      .status(401)
      .send({ message: 'Необходима авторизация' });
  } else {
    res
      .status(statusCode)
      .send({
        message: statusCode === 500
          ? 'На сервере произошла ошибка'
          : message,
      });
  }
  next();
};

module.exports = errorHandler;
