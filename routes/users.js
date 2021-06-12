var express = require('express');
var router = express.Router();
const usersRepo = require('../repositories/users')
/* GET users listing. */

router.get('/', async function(req, res, next) { // localhost:3000/users 
  res.send(  await usersRepo.getAllUsers() );
});

module.exports = router;