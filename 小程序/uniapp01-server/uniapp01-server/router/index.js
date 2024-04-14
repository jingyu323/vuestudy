const exp = require("express");
const router  = exp.Router()

const indexnavdata = require('../datas/index.json')

router.get('/test',(req,res)=>{
		 console.log(" 测试成功。。。")
		 res.send(" 测试成功。。。")
})
router.get('/indexnav',(req,res)=>{
		 console.log(" 测试成功。。。")
		 res.send(indexnavdata)
})

module.exports=router;