const { param } = require('express-validator/check');

const { Email } = require('../../models');
const bodyValidation = require('../../helpers/bodyValidation');

const requestValidation = [
  param('emailId')
    .exists()
    .not()
    .isEmpty()
    .isString()
    .matches(/^[a-fA-F0-9]{24}$/)
    .withMessage('Email identificator'),
  bodyValidation,
];

module.exports = [
  ...requestValidation,
  (req, res) => {
    const { emailId } = req.params;
    const { _id: userId } = req.session.user;

    Email
      .findById(emailId)
      .select(Email.publicFields())
      .then((data) => {
        if (!data) {
          res
            .status(404)
            .json({
              errors: ['EMAIL_NOT_FOUND'],
            });

          return;
        }

        if ((data.sender !== userId) && (!data.receivers.find(r => r === userId))) {
          res
            .status(401)
            .json({
              errors: ['USER_UNAUTHORIZED'],
            });

          return;
        }

        res
          .status(200)
          .json(data.toObject());
        
        Email
          .update({ _id : emailId} ,{ $addToSet : {acknowledgment : userId}})
          .exec();
      })
      .catch((error) => {
        res
          .status(500)
          .json({
            error: error.toString(),
          });
      });
  },
];
