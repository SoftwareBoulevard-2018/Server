const { Email } = require('../../models');

module.exports = function (req, res) {
  const { id: receiver } = req.user;

  Email.find({ receiver }, {
    sender: 1,
    subject: 1,
    createdAt: 1,
    acknowledgement: 1, // TODO map read value;
  }, (err, result) => {
    if (err) {
      res
      .status(500)
      .json({
        error,
      });
    }

    res.json({
      data: result.map(o => o.toObject()),
    });
  });
};
