const { Record } = require('../../models');

module.exports = (req, res) => {

    const {
        finishDate,
        company,
    } = req.body;

    Record
        .findOne({ finishDate, company })
        .then((users) => {
            if (!users) {
                res
                    .status(404)
                    .json({
                        errors: ['RECORD_NOT_FOUND'],
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