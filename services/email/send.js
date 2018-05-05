module.exports = function (req, res, next) {
  // TODO do some logic;
  console.log('Hit on route /emails/send');
  res.json({ status: 'running' });
};
