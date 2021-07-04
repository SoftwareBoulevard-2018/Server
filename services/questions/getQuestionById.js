const { Questions } = require('../../models');

module.exports = (req, res) => {
    const { id } = req.params;
    //const { id: userId } = req.user;

    Questions
        .findById(id)
        .then((data) => {
            if (!data) {
                res
                    .status(404)
                    .json({
                        errors: ['QUESTION_NOT_FOUND'],
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
            const question = data.toObject();
            res
                .status(200)
                .json(question);
        })
        .catch((error) => {
            res
                .status(500)
                .json({
                    error: error.toString(),
                });
        });
};