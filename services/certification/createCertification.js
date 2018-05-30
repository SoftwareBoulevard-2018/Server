const {Certification} = require('../../models');

module.exports = (req, res) => {
	const{
	level, role, questions
	} = req.body;
	Certification
	.create({
		role, level, questions
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
