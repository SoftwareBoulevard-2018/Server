const { Questions } = require('../../models');

module.exports = (req, res) => {

			const{
				role,
				description,
				answers = [{ description, veracity }, { description, veracity }, { description, veracity }, { description, veracity }]
			} = req.body;
			
			

	Questions
		  .create({
			role, description, answers
		  })
		  .then(() => {
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
