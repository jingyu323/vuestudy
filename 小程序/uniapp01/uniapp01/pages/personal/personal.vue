<template>
	<view class="personal">
		<view class="header"> 
			
			<!-- 登录状态 -->
			
			<template v-if="userInfo.nickName">		
				<image  class="userimg" :src="userInfo.avatarUrl"></image>
				<text>{{userInfo.nickName}}</text>
				<button class="exit"  @click="exit"> 退出登录</button>
				
			</template>
			
			<!-- 未登录状态 -->
			<template v-else>
				<image  class="userimg" src="../../static/images/weidenglu.jpeg"></image>
				<view class="login"  @click="goLogin"> 去登录</view>
				 
				
			</template>
		
		</view>
		 
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userInfo:{}
				
			}
		},
		methods: {
			goLogin(){
				console.log("goLogin....")
				wx.reLaunch({
					url:'/pages/login/login'
				})
				
			},
			exit(){
				wx.setStorage({
						key:"useinfo",
						data:"",
				})
				
				wx.reLaunch({
					url:'/pages/login/login'
				})
			}
			
		},
		mounted() {
			wx.getStorage({
				key:"useinfo",
				success:res=> {
					
					 console.log(res)
					 
					 this.userInfo = JSON.parse(res.data)
					
				}
			});
		}
	}
</script>

<style lang="scss">
	.header{
		height: 300rpx;
		line-height: 200rpx;
		background-color: #EED7b5;
		display: flex;
		
		.userimg{
			height: 100rpx;
			width: 100rpx;
			vertical-align: middle;
			margin: 50rpx;

			
		}
		.exit{
			height: 85rpx;
			line-height: 85rpx;
		    margin: 50rpx;
		}
		
	}

</style>
