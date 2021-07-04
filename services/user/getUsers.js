const { User } = require('../../models');

module.exports = (req, res) => {
  // const { id: receiver } = req.user;
  User
    .find()
    .then(result => res
      .status(200)
      .json({
        data: result.map(o => o.toObject()),
      }))
    .catch(error => res
      .status(500)
      .json({ errors: [error.message.toUpperCase()] }));
};
