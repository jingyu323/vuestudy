<template>
	<view>
		<button  open-type="getUserInfo" @click="userInfo"> 登录</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			userInfo(){
				wx.getUserProfile({	
					desc:"用于完善会员资料",
					success: res => {
						
						console.log(res)
						wx.setStorage({
								key:"useinfo",
								data:JSON.stringify(res.userInfo),
						})
						wx.reLaunch({
							url:"/pages/personal/personal"
						})
					}
				});
				
			}
			 
		}
	}
</script>

<style lang="scss">

</style>
