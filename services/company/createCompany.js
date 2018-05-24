const { Company } = require('../../models');

module.exports = (req, res) => {
    // const { id: sender } = req.user;
    // TODO check whether client information is sanitize;
    // Check that receivers are allowed;

    Company
        .create(req.body, function(err, newCompany){
            if (err){
                res
                    .status(500)
                    .json({
                        result: error && error.message ? error.message : error.toString(),
                    });
            }
            else {
                res
                    .status(200)
                    .json({
                        id: newCompany.id,
                    });
            }
    });
};

/* const { Company } = require('../../models');

module.exports = (req, res) => {
  // const { id: sender } = req.user;
  // TODO check whether client information is sanitize;
  // Check that receivers are allowed;

  Company
    .create(req.body)
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
}; */
