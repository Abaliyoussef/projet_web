var express = require('express');
var router = express.Router();
const usersRepo = require('../repositories/users')
/* GET users listing. */

router.get('/', async function(req, res, next) { // localhost:3000/users 
  res.send(  await usersRepo.getAllUsers() );
});


router.get('/:id', async function(req, res, next) { // localhost:3000/users/18 
  res.send(  await usersRepo.getUser(req.params.id) );
});


module.exports = router;
