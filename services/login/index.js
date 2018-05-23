const express = require('express');
const { User } = require('../../models');

const router = express.Router();

router.post('/', (req, res) => {
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
      res
        .status(200)
        .json(user.toObject());
    })
    .catch((error) => {
      res
        .status(500)
        .json({
          error: error.toString(),
        });
    });
});

router.get('/', (req, res) => {
  if (!req.session.user) {
    res
      .status(401)
      .json({
        errors: ['UNAUTHORIZED SESSION'],
      });
    return;
  }
  res
    .status(200)
    .json(req.session.user);
});

module.exports = router;
