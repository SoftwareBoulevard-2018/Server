const { TrainingAttempt } = require('../../models');

/*module.exports = (req, res) => {

    const {user} = req.params;

    TrainingAttempt
        .find({user})
        .then((trainingAttempts) => {
            if (!trainingAttempts) {
                res
                    .status(404)
                    .json({
                        errors: ['NO_TRAINING_ATTEMPTS_FOUND'],
                    });
                return;
            }
            res
                .status(200)
                .json(trainingAttempts);
        })
        .catch((error) => {
            res
                .status(500)
                .json({
                    error: error.toString(),
                });
        });
};*/

module.exports = (req, res) => {
    // const { id: receiver } = req.user;
    TrainingAttempt
      .find()
      .then(result => res
        .status(200)
        .json({
          data: result.map(o => o.toObject()),
        }))
      .catch(error => res
        .status(500)
        .json({ errors: [error.message.toUpperCase()] }));
  };
  