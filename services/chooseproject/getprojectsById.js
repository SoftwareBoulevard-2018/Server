const { chooseproject } = require('../../models');

module.exports = (req, res) => {

    const {
        id
    } = req.body;

    chooseproject
        .findOne({ id })
        .then((project) => {
            if (!project) {
                res
                    .status(404)
                    .json({
                        errors: ['PROJECT_NOT_FOUND'],
                    });
                return;
            }
            res
                .status(200)
                .json(project);
        })
        .catch((error) => {
            res
                .status(500)
                .json({
                    error: error.toString(),
                });
        });
};