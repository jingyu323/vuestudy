// 添加代解决开发跨域问题
module.exports={
	devServer:{
		proxy:{
			'/api':{
				target:"http://localhost:7788",
				ws:true,
				changeOrigin:true,
				pathRewrite:{
					"^/api":""
				}
			}
		}
	}
}