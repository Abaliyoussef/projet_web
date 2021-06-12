var express = require('express');
var router = express.Router();
const usersRepo = require('../repositories/users')
/* GET users listing. */

router.get('/', async function(req, res, next) { // localhost:3000/users 
  res.send(  await usersRepo.getAllUsers() );
});

router.get('/', async function(req, res, next) { 
  res.send(  await usersRepo.getUsers(req.query.off,req.query.lim) );
});
router.get('/:id', async function(req, res, next) { 
  res.send(  await usersRepo.getUser(req.params.id) );
});
router.put('/', async function(req, res, next) { 
  res.send(  await usersRepo.updateUser(req.body.user) );
});
router.post('/', async function(req, res, next) { 
  res.send(  await usersRepo.addUser(req.body.user) );
});
router.delete('/:id', async function(req, res, next) { 
  res.send(  await usersRepo.deleteUser(req.params.id) );
});
module.exports = router;
