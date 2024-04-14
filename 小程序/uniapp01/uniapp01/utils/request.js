import base  from './base.js'

export default(url,data={},method='GET')=>{
	return new Promise((resolve,reject)=>{
		uni.request({
			url:base.host+url,
				// url ,
			data,
			method,
			success:(res)=>{
				resolve(res.data)
			},
			fail:(err)=>{
				reject(err)
			}
		});
		
	})
}