const { Puzzle } = require('../../models');

module.exports = (req, res) => {



	 Puzzle
	  .create(req.body)
	  .then( () => {
		 res
			.status(200)
			.json({
				result: 'success',
			});
	  })
		.catch((error) => {
			res
			.status(500)
			.json({
				result: error && error.message ? error.message : error.toString(),
			});
		});
	};