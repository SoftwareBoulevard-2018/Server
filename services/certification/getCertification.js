const {Certification} = require('../../models');

module.exports = (req, res) => {
	Certification
	.find()
	.then(result => res
      .status(200)
      .json(result))
    .catch(error => res
      .status(200)
      .json({ errors: error.toString() }));
};