const User = require('./schemas/user');
const UserStatistic = require('./schemas/userStatistic');
const dataUsers = require('./users.json');
const dataUserStatistic = require('./users_statistic.json');

const listContacts = async () => {
  // const { limit, page } = query;
  const users = await User.find({});
  if (users.length === 0) {
    const updatedUsers = await User.create(dataUsers);
    // const updatedUsers = await User.create(dataUsers);
    console.log('hello');
    return updatedUsers;
  }
  const statistics = await UserStatistic.find({});
  if (statistics.length === 0) {
    // const updatedUserStatistic = await UserStatistic.create(dataUserStatistic);
    await UserStatistic.create(dataUserStatistic);
    console.log('hello');
    // return updatedUserStatistic;
  }

  const usersData = await User.find({});
  // const { usersData } = results;
  // const { docs: usersData, totalDocs: total } = results;
  // return { usersData, statistics };
  return { usersData, statistics };
  // return { total, limit, page, usersData, statistics };

  // return users;
};

const getContactsTotalClicks = async () => {
  const statistics = await UserStatistic.find({});

  if (statistics.length === 0) {
    // const updatedUserStatistic = await UserStatistic.create(dataUserStatistic);
    await UserStatistic.create(dataUserStatistic);
    console.log('hello');
    // return updatedUserStatistic;
  }

  const userStatisticsClicks = await UserStatistic.find({ user_id: userId });

  return userStatisticsClicks;
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
  getContactsTotalClicks,
};
