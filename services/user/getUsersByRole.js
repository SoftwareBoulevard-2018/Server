const { User } = require('../../models');

module.exports = (req, res) => {

    const {
        role1,
    } = req.body;

    User
        .find({ role: role1 })
        .then((users) => {
            if (!users) {
                res
                    .status(404)
                    .json({
                        errors: ['USER_NOT_FOUND'],
                    });
                return;
            }
            res
                .status(200)
                .json(users);
        })
        .catch((error) => {
            res
                .status(500)
                .json({
                    error: error.toString(),
                });
        });
};