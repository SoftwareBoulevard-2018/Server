const { Record } = require('../../models');

module.exports = (req, res) => {
  const { recordId } = req.params;
  // const { id: sender } = req.user;

  // TODO check whether client information is sanitize;
  // Check that receivers are allowed;

  Record
    .findByIdAndUpdate(recordId, req.body)
    .then((data) => {
      if (!data) {
        res
          .status(404)
          .json({
            errors: ['RECORD_NOT_FOUND'],
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
