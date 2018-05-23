const express = require('express');
const { User } = require('../../models');

const router = express.Router();

router.post('/', (req, res) => {
  // const { userId } = req.params;
  // const { id: userId } = req.user;

  const {
    username,
    password,
  } = req.body;

  User
    .findOne({ username, password })
    .then((user) => {
      if (!user) {
        res
          .status(404)
          .json({
            errors: ['USER_NOT_FOUND'],
          });
        return;
      }
      req.session.user = user;
      res.status(200).send('Login success');
    })
    .catch((error) => {
      res
        .status(500)
        .json({
          error: error.toString(),
        });
    });
});

module.exports = router;
