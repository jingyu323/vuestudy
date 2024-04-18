<template>
	<view class="detail">
		<view class="header"> 我是名称</view>
		<scroll-view  class="detailscroll" scroll-y="true">
			
			<image :src="goodsobj.showimgurl" mode=""></image>
			<view class="tag">我是标签</view>
			<view class="price">￥ 1000.99</view>
			<view>
				这是内容荣这是内容荣这是内容荣这是内容荣这是内容荣这是内容荣这是内容荣这是内容荣这是内容荣这是内容荣这是内容荣这是内容荣这是内容荣这是内容荣这是内容荣这是内容荣这是内容荣这是内容荣这是内容荣这是内容荣这是内容荣这是内容荣这是内容荣这是内容荣这是内容荣这是内容荣这是内容荣这是内容荣这是内容荣这是内容荣这是内容荣这是内容荣这是内容荣这是内容荣这是内容荣这是内容荣这是内容荣这是内容荣这是内容荣这是内容荣这是内容荣这是内容荣这是内容荣这是内容荣这是内容荣这是
				内容荣这是内容荣这是内容荣这是内容荣这是内容荣这是内容荣这是内容荣这是内容荣这是内容荣这是内容荣这是内容荣
				这是内容荣这是内容荣这是内容荣这是内容荣这是内容荣这是内容荣这是内容荣这是内容荣
				这是内容荣这是内容荣这是内容荣这是内容荣这是内容荣这是内容荣这是内容荣这是内容荣
				这是内容荣这是内容荣这是内容荣这是内容荣这是内容荣这是内容荣这是内容荣这是内容荣
			</view>
			
		</scroll-view>
		<view class="footer">
			<view class="img">
				<image src="../../static/images/yi.png" mode=""></image>
			</view>
			<view class="btn">立即购买</view>
			<view class="btn cart">加入购物车</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				goodsobj:{}
			};
		},
		methods:{
			
		},
		onLoad(options) {
			console.log(options.goods);
			this.goodsobj =JSON.parse(options.goods) ;
			console.log(this.goodsobj);
			
		},
		mounted() {
			
		}
	}
</script>

<style lang="scss">
	.detail{
		.header{
			height: 90rpx;
			width: 100%;
			line-height: 90rpx;
			font-size: 40rpx;
			text-align: center;
		}
		.detailscroll{
			height: calc(100vh -90rpx);
			width: 100%;
			image{
				width: 100%;
			}
			.tag{
				width: 90%;
				height: 100rpx;
				background-color: red;
				text-align: center;
				line-height: 100rpx;
				color: #fff;
				margin:  20rpx auto;
				border-radius: 10rpx;
			}
			.price{
					color: red;
					height: 100rpx;
			}
		}
		.footer{
			display: flex;
			position: fixed;
			height: 120rpx;
			line-height: 120rpx;
			background-color: #fff;
			left: 0;
			bottom: 0;
			right: 0;
			border-top: 1rpx  solid #ccc;
			.img{
				flex: 1;
				margin: 30rpx 0;
				image{
					height: 60rpx;
					display: block;
					margin: 0 auto;
					width: 60rpx;
				}
			}
	
			.btn{
				flex: 2;
				border-left: 1px solid #ccc;
				text-align: center;
				&.cart{
					background-color: #dd1a21;
					color: #fff;
				}
			}
			
			
		}
	}

</style>
