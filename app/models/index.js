'use strict';

const { TABLES } = require('../constants');
const { v4: uuidv4 } = require('uuid');
// const pg = require('pg');
// const pghstore = require('pg-hstore')
// const sequelize = require('sequelize');
const { Sequelize } = require('sequelize');
const config =require('../../config');
const {logger }=require('../lib/report')

const role = require('./users')
const users =require('./roles')

exports.plugin = {
	pkg: require('./package.json'),
	name:'database',
	multiple: false,

	register: async(server, options)=>{
		try {
			let uri = config.DB
			let databaseConnection = new Sequelize(uri)
			
			databaseConnection.authenticate().then(() => {
				logger.debug('Connection has been established successfully.');
			}).catch(err => {
				logger.error('Unable to connect to the database:', err);
			});
			role(databaseConnection, Sequelize)
			users(databaseConnection, Sequelize)

		} catch (error) {
			logger.error('Unable to connect to the database:', error);
		}

	}
}
