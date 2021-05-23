var express = require('express');
var router = express.Router();
let User=require('./bean/user');
/* GET home page. */

router.post('/',(req,res)=>{
    let user= new User(req.body.regname,req.body.regpass);
    console.log(user); 
    req.session.user=user;
    res.send("注册成功"); 
    })
    module.exports = router;