const { check } = require('express-validator/check');

const bodyValidation = require('../../helpers/bodyValidation');
const { Email } = require('../../models');


const sendValidation = [
  check('subject')
    .not()
    .isEmpty()
    .withMessage('Subject can\'t empty'),
  check('content')
    .not()
    .isEmpty()
    .withMessage('Content can\'t be empty'),
  check('receivers')
    .not()
    .isEmpty()
    .isArray()
    .matches(/^[a-fA-F0-9]{24}$/)
    .withMessage('Receivers are not in the correct format'),
  bodyValidation,
];

const send = (req, res) => {
  const { id: sender } = req.user;

  const {
    subject,
    receivers,
    content,
  } = req.body;

  Email
    .create({
      sender, receivers, subject, content,
    })
    .then((data) => {
      res
        .status(200)
        .json({
          data: data.toObject(),
        });
    })
    .catch((error) => {
      res
        .status(500)
        .json({
          result_send_email: error && error.message ? error.message : error.toString(),
        });
    });
};

module.exports = [...sendValidation, send];
