const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    id: {
      type: String,
    },

    first_name: {
      type: String,
    },
    last_name: {
      type: String,
    },
    email: {
      type: String,
    },
    gender: {
      type: String,
    },
    ip_address: {
      type: String,
    },
  },
  {
    versionKey: false,
    timestamps: true,
    toObject: {
      virtuals: true,
      transform: function (doc, ret) {
        delete ret._id;
        return ret;
      },
    },
    toJSON: {
      virtuals: true,
      transform: function (doc, ret) {
        delete ret._id;
        return ret;
      },
    },
  },
);

// contactSchema.path('name').validate(value => {
//   const re = /[A-Z]\w+/;
//   return re.test(String(value));
// });

const User = mongoose.model('user', userSchema);

module.exports = User;
