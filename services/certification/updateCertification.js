const {Certification} = require('../../models');

module.exports = (req, res) => {
	const{id} =req.params;
	Certification
	.findByIdAndUpdate(id,req.body)
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