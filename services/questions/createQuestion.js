const { Questions } = require('../../models');

module.exports = (req, res) => {

			const{
				role,
				question,
				description,
				answer1,
				veracity1,
				answer2,
				veracity2,
				answer3,
				veracity3,
				answer4,
				veracity4
			} = req.body;


	Questions
		  .create({
			role, question, description, answer1, veracity1, answer2, veracity2, answer3, veracity3,answer4, veracity4
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
