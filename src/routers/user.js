const Router = require('express').Router();

const {createUser, listUser} = require ('../controllers/user');


Router.route('/users').get(listUser).post(createUser);


module.exports = Router;

