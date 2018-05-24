const { BiddingProject } = require("../../models"); 

module.exports = (req, res) => {
  // const { id: sender } = req.user;
  // TODO check whether client information is sanitize;
  // Check that receivers are allowed;

  BiddingProject
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
}
