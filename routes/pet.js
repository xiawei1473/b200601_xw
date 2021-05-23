const { json } = require('express');
var express = require('express');
var router = express.Router();


router.get('/',(req,res)=>{
    
    res.render('pet');
  });
  module.exports = router;
 