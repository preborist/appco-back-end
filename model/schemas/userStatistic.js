const mongoose = require('mongoose');
const { Schema } = mongoose;

const userStatisticSchema = new Schema(
  {
    user_id: {
      type: String,
    },

    date: {
      type: String,
    },
    clicks: {
      type: String,
    },
    page_views: {
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

const UserStatistic = mongoose.model('userstatistic', userStatisticSchema);

module.exports = UserStatistic;
