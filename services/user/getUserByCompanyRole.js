const { User } = require('../../models');

module.exports = (req, res) => {

    const {
        companyId,
        role,
    } = req.body;

    User
        .findOne({ companyId, role })
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
};