const { Estimation } = require('../../models');

module.exports = (req, res) => {

    const {
        projectManagerUsername,
        state,
    } = req.body;

    Estimation
        .find({ projectManagerUsername, state })
        .then((users) => {
            if (!users) {
                res
                    .status(404)
                    .json({
                        errors: ['ESTIMATION_NOT_FOUND'],
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