const { Email } = require('../../models');

module.exports = (req, res) => {
  const { id: sender } = req.user;

  // TODO check whether client information is sanitize;
  // Check that receivers are allowed;

  req.checkBody('subject','Subject is too long or empty').len({min:1,max:90});
  req.checkBody('content','Please insert a content').notEmpty();
  req.checkBody('receivers','Select minimun one reciever').notEmpty();

  
  const errors = req.getValidationResult();
  if (!errors.isEmpty()) {
    return res
      .status(406)
      .json({
         errors: errors.mapped() 
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
