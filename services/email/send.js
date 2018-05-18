const { Email } = require('../../models');
const { checkSchema } = require('express-validator/check');


module.exports= [checkSchema({
  sender :{

  },
  subject:{
    isLength:{
      errorMessage: "Subject must at least 3 char long",
      options:{min : 4},
      
    }
  },recivers,content})]

/*module.exports = (req, res) => {
  const { id: sender } = req.user;

  // TODO check whether client information is sanitize;
  // Check that receivers are allowed;

  req.checkBody('subject','Subject is too long or empty').len({min:1,max:90});
  req.checkBody('content','Please insert a content').notEmpty();
  req.checkBody('receivers','Select minimun one reciever').notEmpty();



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
*/

