const { Assignment } = require('../../models');

module.exports = (req, res) => {
    //const { id: receiver } = req.user;
    const { questionId } = req.params;
    Assignment
        .find({projectId: questionId})
        .then(result => res
            .status(200)
            .json(
                result.map(o => o.toObject()),
            ))
        .catch(error => res
            .status(500)
            .json({ errors: [error.message.toUpperCase()] }));
};