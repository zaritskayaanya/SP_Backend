const User = require("../models/user");

const getUsers = (request, response) => {
  return User.find({})
    .then((users) => {
      if (!users) {
        return response.status(404).send("Пользователи не найдены");
      }
      response.status(200).send(users);
    })
    .catch((e) => {
      response.status(500).send(e.message);
    });
};

const getUser = (request, response) => {
  const { user_id } = request.params;
  return User.findById(user_id)
    .then((user) => {
      if (!user) {
        return response.status(404).send("Пользователь не найден");
      }
      response.status(200).send(user);
    })
    .catch((e) => {
      response.status(500).send(e.message);
    });
};

const createUser = (request, response) => {
  return User.create({ ...request.body })
    .then((user) => {
      response.status(201).send(user);
    })
    .catch((e) => {
      response.status(500).send(e.message);
    });
};

const updateUser = (request, response) => {
  const { user_id } = request.params;
  return User.findByIdAndUpdate(user_id, { ...request.body }, { new: true })
    .then((user) => {
      if (!user) {
        return response.status(404).send("Пользователь не найден");
      }
      response.status(200).send(user);
    })
    .catch((e) => {
      response.status(500).send(e.message);
    });
};

const deleteUser = (request, response) => {
  const { user_id } = request.params;
  return User.findByIdAndDelete(user_id)
    .then((user) => {
      if (!user) {
        return response.status(404).send("Пользователь не найден");
      }
      response.status(200).send("Success");
    })
    .catch((e) => {
      response.status(500).send(e.message);
    });
};

module.exports = {
  getUser,
  getUsers,
  updateUser,
  createUser,
  deleteUser,
};