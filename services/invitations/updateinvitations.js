const { invitations } = require('../../models');

module.exports = (req, res) => {
  const { invitationsId } = req.params;
  // const { id: sender } = req.user;
  // TODO check whether client information is sanitize;
  // Check that receivers are allowed;

    invitations
    .findByIdAndUpdate(invitationsId, req.body)
    .then((data) => {
      if (!data) {
        res
          .status(404)

          .json({
            errors: ['INVITATION_NOT_FOUND, CANT_MAKE_THE_UPDATE', invitationsId, req.body],
          });
        return;
      }
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
