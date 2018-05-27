const { Record } = require('../../models');

module.exports = (req, res) => {
    // const { id: sender } = req.user;
    // TODO check whether client information is sanitize;
    // Check that receivers are allowed;

    Record
        .create(req.body, function(err){
            if (err){
                res
                    .status(500)
                    .json({
                        result: error && error.message ? error.message : error.toString(),
                    });
            }
            else {
                res
                    .status(200)
                    .json({
                        success: "Sizas si funca"
                    });
            }
        });
};