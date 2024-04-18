<template>
	<view class="cart">
		<view class="cartList">
			<view class="cartItem" v-for=" (item,index) in cartList" :key="item.id">
				<text class="iconfont icon-xuanzhong" :class="{selected:item.isSelected == true}" @click="changeSelect(item.isSelected,index)" > </text>
				<view  class="goodsitem">
					<image :src="item.img"></image>
					<view class="goodsinfo">
						<view class="name">{{item.desc}}</view>
						<view class="price">￥{{item.price}}</view>
					</view>
				</view>
				<view class="numctl">
					<text class="sub" @click="changeCount(false,index)">-</text>
					<text class="num" >{{item.buyCount}}</text>
					<text class="add"  @click="changeCount(true ,index)" >+</text>
				</view>
			</view>
			
		</view>
		 <view class="footer">
			 <text class="iconfont icon-xuanzhong" :class="{selected:isAllSelected== true}" @click="changeAllSelected()" >已选择{{totalCount}} </text>
			 <view class="right">
				 <view class="btn">合计:￥{{totalPrice}} </view>
				 <view class="btn order">下单</view>
			 </view>
		 </view>
	</view>
</template>

<script>
	
	import {mapState,mapMutations,mapGetters} from 'vuex' 
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			...mapMutations('cart',['changeCountMutations','changeSelectedMutations','changeAllSelectedMutations']),
			changeCount(isAdd,index){
					console.log(index+ " ss  " + isAdd )
				this.changeCountMutations({isAdd,index})
			},
			changeSelect(isSelected,index){
				this.changeSelectedMutations({isSelected,index})
				console.log(index+ " changeSelect  " + isSelected )
			},
			changeAllSelected(){
				this.changeAllSelectedMutations(this.isAllSelected)
			}
		},
		mounted() {
			console.log("ss   s " +this.cartList)
			
		},
		computed:{
			...mapState({
					cartList:state => state.cart.cartList
			}),
			...mapGetters("cart",['isAllSelected','totalCount','totalPrice']),
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
				 &.selected{
					 	color:#dd1a21;
				 }
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
		.iconfont{
					 font-size: 40rpx;
					 line-height: 200rpx;
					 margin: 10rpx 30rpx;
					 &.selected{
							color:#dd1a21;
					 }
	}
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
