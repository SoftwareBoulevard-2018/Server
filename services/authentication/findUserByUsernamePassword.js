const { User } = require('../../models');

module.exports = (req, res) => {
  // const { userId } = req.params;
  // const { id: userId } = req.user;

  const {
    newUsername,
    // newPassword,
  } = req.body;

  User
    .findOne({ username: newUsername })
    .then((data) => {
      if (!data) {
        res
          .status(404)
          .json({
            errors: ['USER_NOT_FOUND'],
          });
        return;
      }
      const user = data.toObject();
      res
        .status(200)
        .json(user);
    })
    .catch((error) => {
      res
        .status(500)
        .json({
          error: error.toString(),
        });
    });
};
