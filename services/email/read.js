const { Email } = require('../../models');

module.exports = (req, res) => {
  const { id: receivers } = req.user;

  Email
    .find({ receivers })
    .select(Email.publicFields())
    .sort({ createdAt: -1 })
    .then(result => res
      .status(200)
      .json({
        data: result.map(o => o.toObject()),
      }))
    .catch(error => res
      .status(500)
      .json({ errors: [error.message.toUpperCase()] }));
};
