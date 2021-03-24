const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const rateLimit = require('express-rate-limit');
const { errors } = require('celebrate');
const helmet = require('helmet');
const routes = require('./routes');
const errorHandler = require('./middlewares/errorHandler');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const { PORT = 3000 } = process.env;
const app = express();

mongoose.connect('mongodb://localhost:27017/bitfilmsdb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});
// mongoose.connection.on('open', () => console.log('DB connected!'));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // за 15 минут
  max: 100, // максимум 100 запросов с одного IP
});

app.use(helmet());
app.use(express.json());
app.use(requestLogger);
app.use(limiter);

app.use('/', routes);

app.use(errorLogger);
app.use(errors());
app.use(errorHandler);

app.listen(PORT, () => {
  //  console.log(`App listening on port ${PORT}`);
});
