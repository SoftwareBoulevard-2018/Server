const { Email } = require('../../models');

module.exports = (req, res) => {
  const { id } = req.session.user._id;
  Email
    .find()
    .where("receivers").equals(id)
    .select(Email.publicFields())
    .sort({ createdAt: -1 })
    .then(result => res
      .status(200)
      .json({
        data: result.map(o => o.toObject())    
      })
      .json({culpa: [req.params.value]}))
    .catch(error => res
      .status(200)
      .json({ errors: error.toString() }));
};
