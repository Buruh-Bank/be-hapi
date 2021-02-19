const Boom = require('boom')
const {logger} =require('../../lib/report')
//const Role = require('../../models/roles')
const uuidv4 = require('uuid')
const roles = require('../../models/roles')
const postgresPool = require('../../lib/database/postgrest').pool
const TAG = 'server.services.roles'


async function createNewRole(roleName) {
    logger.info(TAG, 'createNewRole begin')
        const dateNow = new Date().getTime()
        //new Date().toISOString()
        console.log('asuuuuuuu',dateNow, roleName);
        logger.debug(TAG,dateNow);
        console.log(postgresPool);
        const sql = await postgresPool.query(
            `INSERT INTO ilham.kuntul.auth_roles (id, name, create_date, update_date,delete_date) VALUES (${uuidv4}, ${roleName})`
            )
        console.log('asuuuuuuu1',sql);
        // logger.debug(sql)
        logger.debug(TAG, sql, 'createNewRole')
        return sql
    
}

async function getAllRoleExist() {
    logger.info(TAG, 'getAllRoleExist begin')
        const result =[]
        // await postgresPool.query(
        //     `select * from ilham.kuntul.auth_roles ar`
        // );       
        logger.debug(TAG, "getAllRoleExist", result.rows )
        const row = result.rows        
        return row
    }

    // } catch (error) {
    //     return error
    //     const { statusCode } = error
    //     logger.error(TAG, statusCode)
    //     if (statusCode && statusCode === 401) { 
    //         throw Boom.unauthorized('Cant get roles') 
    //     }
    //     logger.error(TAG, 'Get Role error catch', { error })
    //         throw Boom.gatewayTimeout()
    // }


async function getRoleDetails(idRole) {
    try {
        
    } catch (error) {
        
    }
    
}

module.exports=[
    {
        name: 'services.auth.getRoles',
        method: getAllRoleExist
    },
    {
        name:'service.auth.createRoles',
        method: createNewRole
    },
    {
        name:'service.auth.roleDetail',
        method: getRoleDetails
    }
]