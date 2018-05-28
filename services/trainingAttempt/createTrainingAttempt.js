const { TrainingAttempt } = require('../../models');

module.exports = (req, res) => {
    const {
      number,
      state,
      project,
      question,
      answer,
      user,
    } = req.body;
  
    TrainingAttempt
      .create({
        number,
        state,
        project,
        question,
        answer,
        user,
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
  