const User = require('./schemas/user');
const UserStatistic = require('./schemas/userStatistic');
const dataUsers = require('./users.json');
const dataUserStatistic = require('./users_statistic.json');

const listContacts = async () => {
  const users = await User.find({});
  if (users.length === 0) {
    const updatedUsers = await User.create(dataUsers);
    console.log('hello');
    return updatedUsers;
  }
  return users;
};

const getContactById = async userId => {
  const statistics = await UserStatistic.find({});

  if (statistics.length === 0) {
    // const updatedUserStatistic = await UserStatistic.create(dataUserStatistic);
    await UserStatistic.create(dataUserStatistic);
    console.log('hello');
    // return updatedUserStatistic;
  }

  const userStatistic = await UserStatistic.find({ user_id: userId });

  return userStatistic;
};

module.exports = {
  listContacts,
  getContactById,
};
