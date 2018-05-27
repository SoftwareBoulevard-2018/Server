const { Record } = require('../../models');

module.exports = (req, res) => {
    const { company } = req.params;
    // const { id: userId } = req.user;

    Record
        .find({company})

        .then((data) => {
            if (!data) {
                res
                    .status(404)
                    .json({
                        errors: ['RECORD_NOT_FOUND'],
                    });
                return;
            }
            /* if ((data.sender !== userId) || (!data.receiver.find(r => r === userId))) {
              res
                .status(401)
                .json({
                  errors: ['UNAUTHORIZED'],
                });

              return;
            } */
            const record = data;
            res
                .status(200)
                .json(record);
        })
        .catch((error) => {
            res
                .status(500)
                .json({
                    error: error.toString(),
                });
        });
};
