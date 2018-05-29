const { chooseproject } = require('../../models');

module.exports = (req, res) => {
  const { projectId } = req.params;
  //const { id: userId } = req.user;

    chooseproject
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

      const user = data.toObject();
      res
        .status(200)
        .json(user);
    })
    .catch((error) => {
      res
        .status(500)
        .json({
          error: error.toString(),
        });
    });
};
