const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
// const bodyParser = require('body-parser');

const routes = require('./routes');
const { createUser, login } = require('./controllers/users');
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
// eslint-disable-next-line no-console
mongoose.connection.on('open', () => console.log('DB connected!'));

// app.use(bodyParser.json());
app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));

app.use(requestLogger);
app.post('/signin', login);
app.post('/signup', createUser);
app.get('/signup', routes); // для ошибки 404
app.get('/signin', routes); // для ошибки 404

app.use('/', routes);

app.use(errorLogger);
app.use(errorHandler);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening on port ${PORT}`);
});
