const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator(v) {
        // eslint-disable-next-line no-useless-escape
        return /^[a-z0-9A-z\-]*@[a-z0-9A-z\-]*\.[a-z0-9A-z\-]*/.test(v);
      },
    },
  },
  password: {
    type: String,
    required: true,
    select: false,
    minlength: 3,
    maxlength: 10,
  },
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },

});

// userSchema.statics.findUserByCredentials = function (email, password) {
//   return this.findOne({ email }).select('+password')
//     .then((user) => {
//       if (!user) {
//         throw new Unauthorized('Неправильные почта или пароль');
//       }

//       return bcrypt.compare(password, user.password)
//         .then((matched) => {
//           if (!matched) {
//             throw new Unauthorized('Неправильные почта или пароль');
//           }

//           return user;
//         });
//     });
// };

module.exports = mongoose.model('user', userSchema);