const { invitations } = require('../../models');

module.exports = (req, res) => {

    const {
        id
    } = req.body;

    invitations
        .findOne({ id })
        .then((invitation) => {
            if (!invitation) {
                res
                    .status(404)
                    .json({
                        errors: ['INVITATION_NOT_FOUND'],
                    });
                return;
            }
            res
                .status(200)
                .json(invitation);
        })
        .catch((error) => {
            res
                .status(500)
                .json({
                    error: error.toString(),
                });
        });
};