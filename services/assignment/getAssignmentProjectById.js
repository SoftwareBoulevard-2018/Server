/*const { Assignment } = require('../../models');

module.exports = (req, res) => {
    const { projectId } = req.params;
    //const { id: userId } = req.user;

    Assignment
        .find({projectId: projectId})
        .then((data) => {
            if (!data) {
                res
                    .status(404)
                    .json({
                        errors: ['ASSIGNMENT(putoel que lo lea)_NOT_FOUND'],
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
            /*
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
};*/
const { Assignment } = require('../../models');

module.exports = (req, res) => {
    //const { id: receiver } = req.user;
    const { projectId } = req.params;
    Assignment
        .find({project: projectId})
        .then(result => res
            .status(200)
            .json(
                result.map(o => o.toObject()),
            ))
        .catch(error => res
            .status(500)
            .json({ errors: [error.message.toUpperCase()] }));
};