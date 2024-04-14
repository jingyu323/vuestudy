<template>
	<view>
	<view class="content">
		<image class="logo" src="/static/images/wangyiyanxuan.png"></image>
		<view class="search">
			<image class="icon-search" src="../../static/images/sousuo.png"></image>
			<input type="text" value="" placeholder="搜索"/>
		</view>
		<button type="default">网易</button>

	</view>
	<scroll-view  class="navgator" scroll-x="true" >
		<view class="naveItem active"  > dddds</view>
		<view class="naveItem"  :class="{active: naveindex===index ? true : false}" @click="changeindex(index)" v-for="(item,index) of indexnavdata"  :key="index"  >{{item}}</view>
				
	</scroll-view>
 </view>
</template>

<script>
	import request from '../../utils/request'
	export default {
		data() {
			return {
				title: 'Hello',
				indexnavdata:[],
				naveindex:-1,
			}
		},
		onLoad() {

		},
		created() {
			this.getindexdata();
		},
		mounted() {
			
		},
		methods: {
			
		 async	getindexdata(){
				const data =  await request('/indexnav')
				console.log(data)
				this.indexnavdata = data.navgation;
			},
			changeindex(index){
				console.log("index="+index)
				this.naveindex = index;
			}

		}
	}
</script>

<style>
	
	.navgator{
		display: flex;
		white-space: nowrap;
	
	}
	
	.navgator .naveItem{
		display: inline-block;
		height: 60rpx;
		width: 100rpx;
		margin: 5rpx;
		font-size: 30rpx;
		
	}
	.navgator    .active{
		color: red;
		
	}
	.icon-search{
		width: 50rpx;
		height: 50rpx;
		margin-left: 30rpx;
		margin: 10rpx 0;
	}

	.content {
		display: flex;
		flex-direction: row;
	
	}
	.content button{
		width: 140rpx;
		height: 60rpx;
		font-size: 26rpx;
	}

	.logo {
		height: 40rpx;
		width: 160rpx;
		margin: 14rpx 10rpx;
	}
	.search{
		width: 420rpx;
		height: 60rpx;
		display: flex;
		flex: row;

		
	}
	
	.search input{
		width: 360rpx;
		height: 60rpx;
		border: 1rpx solid #ccc;
		margin-left: 2rpx;
	}



	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
