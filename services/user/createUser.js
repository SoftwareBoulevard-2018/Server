const { User } = require('../../models');

module.exports = (req, res) => {
  // const { id: sender } = req.user;
  // TODO check whether client information is sanitize;
  // Check that receivers are allowed;

  /**
   * function to validate if the user has permissions
   * TODO activate when frontend sends sessions
   */
  /*if(!req.session.user || req.session.user.role != 'Game Administrator'){
    res.status(401).json({
      errors: req.session,
      ses: req.session.user
    });
    return
  }*/

  const {
    name,
    username,
    password,
    role,
  } = req.body;

  User
    .create({
      name, username, password, role,
    })
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
};
