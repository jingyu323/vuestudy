const exp = require("express");

 const app = exp();
 
 const router = require('./router/index.js')
 
 
 
 
 app.listen(7788,(res,req)=>{
	 console.log(" 服务端启动成功。。。")
	 
 })