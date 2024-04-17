<template>
	<view class="cart">
		<view class="cartList">
			<view class="cartItem">
				<text class="iconfont icon-xuanzhong"> </text>
				<view  class="goodsitem">
					<image src="../../static/logo.png"></image>
					<view class="goodsinfo">
						<view class="name">羊毛衫</view>
						<view class="price">￥ 9000</view>
					</view>
				</view>
				<view class="numctl">
					<text class="sub">-</text>
					<text class="num" >99</text>
					<text class="add">+</text>
				</view>
			</view>
			
		</view>
		 
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style  lang="scss"> 
.cart{
	  background-color: #f6f6f6;
	 .cartList{
		 .cartItem{
			 height: 200rpx;
			 width: 100%;
			 margin-top: 20rpx;
			 background-color: #fff;
			 display: flex;
			 position: relative;
			 .goodsitem{
				 display: flex;
				 margin: 10rpx 10rpx;
				 image{
					width: 172rpx;
					height: 172rpx;
				 				 
				 }
				 .goodsinfo{
					 margin: 10rpx 10rpx;
					 .name{
						 
					 }
					 .price{
						margin: 10rpx 0 ;
						 color: red;
					 }
				 }
			 }
	
			 .iconfont{
				 font-size: 40rpx;
				 line-height: 200rpx;
				 margin: 10rpx 30rpx;
			 }
			 .numctl{
				 position: absolute;
				 bottom: 30rpx;
				 right: 30rpx;
				 text{
					 border: 1px solid #ddd;
					 padding: 10rpx 26rpx;
					 &:nth-child(2){
						 border:none;
						 border-bottom: 1px solid #ddd;
						 border-top: 1px solid #ddd;
					 }
				 }
			 }
			 
		 }
		 
		 
	 }
	 
	
}

</style>
