const { Email } = require('../../models');

module.exports = (req, res) => {
  const { emailId } = req.params;
  const { id: userId } = req.user;

  Email
    .findById(emailId)
    .select(Email.publicFields())
    .then((data) => {
      if (!data) {
        res
          .status(404)
          .json({
            errors: ['EMAIL_NOT_FOUND'],
          });

        return;
      }

      if ((data.sender !== userId) || (!data.receiver.find(r => r === userId))) {
        res
          .status(401)
          .json({
            errors: ['UNAUTHORIZED'],
          });

        return;
      }

      const email = data.toObject();

      res
        .status(200)
        .json(email);
    })
    .catch((error) => {
      res
        .status(500)
        .json({
          error: error.toString(),
        });
    });
};
