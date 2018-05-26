const { Question } = require('../../models');

module.exports = (req, res) => {
  const { questionId } = req.params;

  Question
    .findByIdAndUpdate(questionId, req.body)
    .then((data) => {
      if (!data) {
        res
          .status(404)
          .json({
            errors: ['QUESTION_NOT_FOUND'],
          });
        return;
      }
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
