const { User } = require("../models/models");

const findUser = async (username) => {
  let user = await User.findOne({ username: username })
    .then((userFound) => {
      if (!userFound) {
        return null;
      }
      return userFound;
    })
    .catch((err) => {
      return "something went wrong";
    });

  return user;
};

const findAllUsers = async () => {
  let allUsers = await User.find()
    .then((usersFound) => {
      if (usersFound.length <= 0) {
        return null;
      }
      return usersFound;
    })
    .catch((err) => {
      return "Something went wrong";
    });

  return allUsers;
};

module.exports = { findUser, findAllUsers };
