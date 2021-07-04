const express = require('express');
const { User, Company } = require('../../models');

const router = express.Router();

router.get('/', (req, res) => {
    statistics = [User.count({}),Company.count({})]
    Promise.all(statistics).then((values) => {
        res
            .status(200)
            .json({
                users: values[0],
                companies: values[1]
            });
    })
});

module.exports = router;
