const { Company } = require('../../models');

module.exports = (req, res) => {
  const { companyId } = req.params;
  // const { id: userId } = req.user;

  Company
    .findById(companyId)
    .then((data) => {
      if (!data) {
        res
          .status(404)
          .json({
            errors: ['COMPANY_NOT_FOUND'],
          });
        return;
      }
      /* if ((data.sender !== userId) || (!data.receiver.find(r => r === userId))) {
        res
          .status(401)
          .json({
            errors: ['UNAUTHORIZED'],
          });

        return;
      } */
      const company = data.toObject();
      res
        .status(200)
        .json(company);
    })
    .catch((error) => {
      res
        .status(500)
        .json({
          error: error.toString(),
        });
    });
};
