const { Email } = require('../../models');

module.exports = function (req, res, next) {
  console.log('Gonna create and send email');
  // TODO extract the sender from user session;
  // TODO check whether client information is sanitize;
  // Check that receivers are allowed;
  const {
    subject,
    receiver,
    content,
  } = req.body;

  // Define with user auth module;
  const sender = req.user.id;

  Email.create({
    subject,
    sender,
    receiver,
    content,
  }, (error, result) => {
    if (error) {
      res
        .status(500)
        .json({
          error,
        });
    }

    res
      .status(200)
      .json({
        data: result,
      });
  });
};
