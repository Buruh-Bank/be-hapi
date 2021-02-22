const Boom = require('boom');
const {logger} =require('../../lib/report');
const postgresPool = require('../../lib/database/postgrest').pool;
const Roles = require('../../database/models/roles').Roles
const { createConnection, getConnection, getRepository} = require('typeorm');
// const roleRepository = getRepository(Roles)

const TAG = 'server.services.roles'
const roleRepository = getRepository(Roles)

async function getAllRoleExist() {
    logger.info(TAG, 'getAllRoleExist begin')
    // try {
        const result = await getRepository.find(Roles)
        console.log(result);
    return result

    // } catch (error) {
    //     const { statusCode, response } = error
    //     logger.error(TAG, 'introspect error catch', {error})
    //     return { err: { statusCode, data: response } }
    // }    
}

async function createNewRole(roleName) {
    let rolesModel = Model.findAll()
    logger.info(TAG, 'createNewRole begin')
        const dateNow = new Date().getTime()
        //new Date().toISOString()
        console.log('asuuuuuuu',dateNow, roleName);
        return dateNow
    
}

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