const { BiddingProject } = require('../../models');

module.exports = (req, res) => {
    const { projectId } = req.params;
    //const { id: userId } = req.user;

    BiddingProject
        .findById(projectId)
        .then((data) => {
            if (!data) {
                res
                    .status(404)
                    .json({
                        errors: ['PROJECT_NOT_FOUND'],
                    });
                return;
            }
           
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