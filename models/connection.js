const mongoose = require('mongoose');
const Promise = require('bluebird');
const { mongodb: { uri }} = require('../config');

mongoose.Promise = Promise;

const db = mongoose.connection;
db.on('error', err => logger.error('connection error: ', err));
db.once('open', () => logger.debug('connection opened with DB'));

const connection = mongoose.createConnection(uri, {});

module.exports = connection;
