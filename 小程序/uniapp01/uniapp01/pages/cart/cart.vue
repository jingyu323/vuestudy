<template>
	<view class="cart">
		<view class="cartList">
			<view class="cartItem" v-for=" i in 3">
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
		 <view class="footer">
			 <text class="iconfont icon-xuanzhong">已选择2 </text>
			 <view class="right">
				 <view class="btn">合计:￥999 </view>
				 <view class="btn order">下单</view>
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
	  background-color: #ccc;
	  margin-top: 10rpx;
	 .cartList{
		  background-color: #ccc;
		  margin-top: 10rpx;
		 .cartItem{
			 height: 200rpx;
			 width: 100%;
			margin: 10rpx 0;
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
	 .footer{
		 height: 120rpx;
		 display: flex;
		 position: fixed;
		 line-height: 80rpx;
		 left: 0;
		 bottom: 0;
		 right: 0;
		
		 .right{
			 flex: 1;
			 right: 0;
			 position: absolute;
			  display: flex;
			 .btn{
				 width: 200rpx;
				 height: 80rpx;
				 line-height: 80rpx;
				 font-size: 35rpx;
				 text-align: center;
				 
				 &.order{
				 	background-color: #dd1a21;
				 	color: #fff;
				 }
			 }
		 }
	 }
	 
	
}

</style>
