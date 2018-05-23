const express = require('express');

const router = express.Router();

// GET /logout
router.get('/', (req, res, next) => {
  if (req.session) {
    // delete session object
    req.session.destroy((err) => {
      if (err) {
        return next(err);
      }
      return res.redirect('/');
    });
  }
});

module.exports = router;
