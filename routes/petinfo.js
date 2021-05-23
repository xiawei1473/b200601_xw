const { json } = require('express');
var express = require('express');
var router = express.Router();


router.post('/',(req,res)=>{
    
    res.render('index');
  });
  module.exports = router;
 