const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  country: { // — страна создания фильма. Обязательное поле-строка.
    type: String,
    required: true,
  },
  director: { // — режиссёр фильма. Обязательное поле-строка.
    type: String,
    required: true,
  },
  duration: { // — длительность фильма. Обязательное поле-число.
    type: Number,
    required: true,
  },
  year: { // — год выпуска фильма. Обязательное поле-строка.
    type: String,
    required: true,
  },
  description: { // — описание фильма. Обязательное поле-строка.
    type: String,
    required: true,
  },
  image: { // — ссылка на постер к фильму. Обязательное поле-строка. Запишите её URL-адресом.
    type: String,
    required: true,
    validate: {
      validator(v) {
        return /^https?:\/\/[a-z0-9A-z\\.\\-]*\.[a-z]{2,}\/?/.test(v);
      },
    },
  },
  trailer: { // — ссылка на трейлер фильма. Обязательное поле-строка. Запишите её URL-адресом.
    type: String,
    required: true,
    validate: {
      validator(v) {
        return /^https?:\/\/[a-z0-9A-z\\.\\-]*\.[a-z]{2,}\/?/.test(v);
      },
    },
  },
  thumbnail: { // — миниатюрное изображение постера к фильму. Обязательное поле-строка.
    type: String,
    required: true,
    validate: {
      validator(v) {
        return /^https?:\/\/[a-z0-9A-z\\.\\-]*\.[a-z]{2,}\/?/.test(v);
      },
    },
  },
  owner: { // — _id пользователя, который сохранил статью. Обязательное поле.
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  movieId: { // — id фильма, который содержится в ответе сервиса MoviesExplorer.
    type: Number,
    required: true,
  },
  nameRU: { // — название фильма на русском языке. Обязательное поле-строка.
    type: String,
    required: true,
    validate: {
      validator(v) {
        return /[а-я0-9А-я\-ёЁ\s\S]*/.test(v);
      },
    },
  },
  nameEN: { // — название фильма на английском языке. Обязательное поле-строка.
    type: String,
    required: true,
    validate: {
      validator(v) {
        return /[a-z0-9A-z\-\s!?]*/.test(v);
      },
    },
  },

});

module.exports = mongoose.model('movie', movieSchema);
