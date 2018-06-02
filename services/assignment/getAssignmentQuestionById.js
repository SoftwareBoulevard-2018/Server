const { Assignment } = require('../../models');

module.exports = (req, res) => {
    //const { id: receiver } = req.user;
    const { question } = req.params;
    Assignment
        .find({project: question})
        .then(result => res
            .status(200)
            .json(
                result.map(o => o.toObject()),
            ))
        .catch(error => res
            .status(500)
            .json({ errors: [error.message.toUpperCase()] }));
}