import base  from './base.js'

export default(url,data={},method='GET')=>{
	return new Promise((resolve,reject)=>{
		uni.request({
			url:base.host+url,
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