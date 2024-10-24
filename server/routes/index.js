import express from 'express';

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'My Student ID is 20908566. Welcome to Express' });
  res.send('My Student ID is IT21163272. Welcome to Express');
});

export default router;
