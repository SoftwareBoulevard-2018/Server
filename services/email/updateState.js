const { check } = require('express-validator/check');

const bodyValidation = require('../../helpers/bodyValidation');
const { Email } = require('../../models');
module.exports = (req, res) => {
    const { emailId } = req.params;

  Email
   .findByIdAndUpdate(emailId, req.body)
    .then((data) => {
      console.log(data);
        if (!data) {
          res
            .status(404)
            .json({
              errors: ['EMAIL_NOT_FOUND'],
            });

          return;
        }
        res
          .status(200)
          .json(data.toObject());
      })
      .catch((error) => {
        res
          .json({
            error: error.toString(),
          });
      });
};
