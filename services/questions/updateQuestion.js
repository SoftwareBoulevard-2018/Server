const { Questions } = require('../../models');

module.exports = (req, res) => {
  const { id } = req.params;
  const{
    role,
    description,
    answers = [{ description, veracity }, { description, veracity }, { description, veracity }, { description, veracity }]
  } = req.body;
  Questions
    .findByIdAndUpdate(id, req.body)
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
