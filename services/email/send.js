const { Email } = require('../../models');
const { check, validationResult } = require('express-validator/check');

/*
module.exports= [checkSchema({
  sender :{

  },
  subject:{
    isLength:{
      errorMessage: "Subject must at least 3 char long",
      options:{min : 3},
      
    }
  },recivers,content}),]

*/
const sendValidation = [
  check('subject')
    .isLength({min:1,max:90})
    .withMessage('Subject is too long or empty')
    .matches(/[a-zA-Z0-9]/)
    .withMessage('Email must contain at least one character'),
  check('content')
    .not()
    .isEmpty()
    .withMessage('Content is empty'),
  check('receivers')
    .not()
    .isEmpty()
    .withMessage('Select minimum one receiver')
  ];

const send = (req, res) => {
  const { id: sender } = req.user;

  // TODO check whether client information is sanitize;
  // Check that receivers are allowed;

  // req.checkBody('subject').len({min:1,max:90}).withMessage('Subject is too long or empty');
  // req.checkBody('content').notEmpty().withMessage('Please insert a content');
  // req.checkBody('receivers').notEmpty().withMessage('Select minimun one reciever');
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(406)
      .json({
        errors: errors.mapped(),
      });
  }


  const {
    subject,
    receivers,
    content,
  } = req.body;

  Email
    .create({
      sender, receiver: receivers, subject, content,
    })
    .then((data) => {
      const { id } = data.toObject();
      res
        .status(200)
        .json({
          result_send_email: id,
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

module.exports = {sendValidation,send}