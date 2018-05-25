const { check } = require('express-validator/check');

const bodyValidation = require('../../helpers/bodyValidation');
const { Email } = require('../../models');


const updateStateValidation = [
    check('emailId')
      .exists()
      .not()
      .isEmpty()
      .isString()
      .matches(/^[a-fA-F0-9]{24}$/)
      .withMessage('Email identificator'),
    bodyValidation,
];

const updateState = (req, res) => {
    const { emailId } = req.body;
    const { id: userId } = req.user;

  Email
    .update({
        _id:emailId
    },
    {
        $addToSet : {acknowledgment : userId}
    })
    .then((data) => {
        if (!data) {
          res
            .status(404)
            .json({
              errors: ['EMAIL_NOT_FOUND'],
            });

          return;
        }

        if ((!data.receivers.find(r => r === userId))) {
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
      })
      .catch((error) => {
        res
          .status(500)
          .json({
            error: error.toString(),
          });
      });
};

module.exports = [...updateStateValidation, updateState];
