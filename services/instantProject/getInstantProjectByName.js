const { InstantProject } = require('../../models');

module.exports = (req, res) => {
    const { name } = req.params;
    //const { id: userId } = req.user;

    InstantProject
        .findOne({ name: name })
        .then((data) => {
            if (!data) {
                res
                    .status(404)
                    .json({
                        errors: ['PROJECT_NOT_FOUND'],
                    });
                return;
            }
            /*if ((data.sender !== userId) || (!data.receiver.find(r => r === userId))) {
              res
                .status(401)
                .json({
                  errors: ['UNAUTHORIZED'],
                });

              return;
            }*/
            const project = data.toObject();
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