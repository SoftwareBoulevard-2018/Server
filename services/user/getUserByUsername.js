const { User } = require('../../models');

module.exports = (req, res) => {
  const { usernameSearch } = req.params;
  // const { id: userId } = req.user;
  User
    .findOne({ username: usernameSearch })
    .then((data) => {
      if (!data) {
        res
          .status(404)
          .json({
            errors: ['USER_NOT_FOUND', usernameSearch],
          });
        return;
      }
      /* if ((data.sender !== userId) || (!data.receiver.find(r => r === userId))) {
        res
          .status(401)
          .json({
            errors: ['UNAUTHORIZED'],
          });

        return;
      } */
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
