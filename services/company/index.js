const express = require('express');

const router = express.Router();

const getCompanies = require('./getCompanies');
const createCompany = require('./createCompany');
const updateCompany = require('./updateCompany');
const getCompanyById = require('./getCompanyById');

router.get('/', getCompanies);
router.post('/', createCompany);
router.put('/:companyId', updateCompany);
router.get('/:companyId', getCompanyById);

module.exports = router;
