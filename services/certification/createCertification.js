const {Certification} = require('../../models');

module.exports = (req, res) => {
	const{
		questions,
		role,
		level
	} = req.body;
	Certification
	.create({
		role, level, quiestions
	})
	.then((data) => {
      res
        .status(200)
        .json({
          data: data.toObject(),
        });
    })
    .catch((error) => {
      res
      .status(200)
      .json({ errors: error.toString() })
    });
};
