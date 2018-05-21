const { Company } = require('../../models');

module.exports = (req, res) => {
  const { companyId } = req.params;
  // const { id: sender } = req.user;

  // TODO check whether client information is sanitize;
  // Check that receivers are allowed;

  Company
    .findByIdAndUpdate(companyId, req.body)
    .then((data) => {
      if (!data) {
        res
          .status(404)
          .json({
            errors: ['COMPANY_NOT_FOUND'],
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
