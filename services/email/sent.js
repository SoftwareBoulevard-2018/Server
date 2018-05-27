const { Email } = require('../../models');

module.exports = (req, res) => {

  if (!(typeof req.session.user === "undefined")) {
    const { _id: id } = req.session.user;

    Email
      .find()
      .where("sender").equals(id)
      .sort({ createdAt: -1 })
      .then(result => res
        .status(200)
        .json({
          data: result.map(o => o.toObject()),
        }))
      .catch(error => res
        .status(500)
        .json({ errors: [error.message.toUpperCase()] }));
  }
  else {
    res
      .status(401)
      .json({ errors: "user_not_logged" });
  }


};
