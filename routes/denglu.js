const { json } = require('express');
var express = require('express');
var router = express.Router();
var path =require('path');
var fs =require('fs');
var mysql =require('mysql');

router.get('/',(req,res,next) => {
    res.render("dl")
  });
 
router.post('/',(req,res)=>{
    let name= req.body.name;
    let pass= req.body.pass;
    if(req.session.user !=undefined&& name==req.session.user.regname&&
     pass==req.session.user.regpass){
      res.redirect('pet'); 
    }else{
      res.send("登录失败");
    }
   })
   module.exports = router;