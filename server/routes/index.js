import express from 'express';

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My Student ID is 20908566 and name is Madawanage Visal Asani Fernando. Welcome to Express' });
});

export default router;
