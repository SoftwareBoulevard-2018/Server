const { Email } = require('../../models');

module.exports = (req, res) => {
  const { id } = req.params;
  Email
    .find()
    .where("receivers").equals(id)
    .select(Email.publicFields())
    .sort({ createdAt: -1 })
    .then(result => res
      .status(200)
      .json({
        data: result.map(o => o.toObject())    
      }))
    .catch(error => res
      .status(200)
      .json({ errors: error.toString() }));
};
