<template>
	<view class="catelist">
		 <swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
		 	<swiper-item v-for="(item,index) in goodsitems">
		 		<view class="swiper-item"><image :src="item.showimgurl"></image></view>
		 	</swiper-item>
		 </swiper>
		 <view class="title">人气好物放心购</view>
		 <view class="desc">人气好物放心购</view>
		 <view class="goodslist">
			 <view class="goodslistiem" v-for="(item,index) in goodsitems" :key="item.goodsprice">
				 <image :src="item.showimgurl"></image>
				 <view class="goods-desc">{{item.goodstext}}</view>
				 <view class="goods-price">{{item.goodsprice}}</view>
			 </view>
		 </view>
	</view>
</template>

<script>
	export default {
		name:"CateList",
		props:['L1id'],
		data() {
			return { 
				"goodsitems":[
					{"showimgurl":"https://yanxuan.nosdn.127.net/hxm/oly-picture/a241aececce23a2bb0f1a8dde15dc9bf.jpg?type=webp&imageView&quality=75&thumbnail=750x0","goodstext":"菊花茶1","goodsprice":"9.9"},
					{"showimgurl":"https://yanxuan.nosdn.127.net/hxm/oly-picture/a241aececce23a2bb0f1a8dde15dc9bf.jpg?type=webp&imageView&quality=75&thumbnail=750x0","goodstext":"菊花茶2","goodsprice":"92.3"},
					{"showimgurl":"https://yanxuan.nosdn.127.net/hxm/oly-picture/a241aececce23a2bb0f1a8dde15dc9bf.jpg?type=webp&imageView&quality=75&thumbnail=750x0","goodstext":"菊花茶3","goodsprice":"192.3"},
					{"showimgurl":"https://yanxuan.nosdn.127.net/hxm/oly-picture/a241aececce23a2bb0f1a8dde15dc9bf.jpg?type=webp&imageView&quality=75&thumbnail=750x0","goodstext":"菊花茶","goodsprice":"32.3"},
					{"showimgurl":"https://yanxuan.nosdn.127.net/hxm/oly-picture/a241aececce23a2bb0f1a8dde15dc9bf.jpg?type=webp&imageView&quality=75&thumbnail=750x0","goodstext":"菊花茶","goodsprice":"52.3"},
					{"showimgurl":"https://yanxuan.nosdn.127.net/hxm/oly-picture/a241aececce23a2bb0f1a8dde15dc9bf.jpg?type=webp&imageView&quality=75&thumbnail=750x0","goodstext":"菊花茶菊花茶菊花茶菊花茶菊花茶菊花茶菊花茶菊花茶菊花茶菊花茶菊花茶菊花茶","goodsprice":"93.9"},
					{"showimgurl":"https://yanxuan.nosdn.127.net/hxm/oly-picture/a241aececce23a2bb0f1a8dde15dc9bf.jpg?type=webp&imageView&quality=75&thumbnail=750x0","goodstext":"菊花茶","goodsprice":"19.9"}
				],
				
			};
		},
		created() { 
		},
		mounted() { 
		}
	}
</script>

<style lang="scss">
	.title{
		font-size: 40rpx;
		line-height: 80rpx;
		color: #333;
		text-align: center;
	}
	.desc{
		font-size: 30rpx;
		line-height: 40rpx;
		color: #666;
		text-align: center;
	}
	.goodslist{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		&::after{
			content: '';
			width: 344rpx;
		}
		.goodslistiem{
			width: 344rpx;
			height: 480rpx;
			
			image{
				width: 344rpx;
				height: 344rpx;
			}
			.goods-desc{
				margin: 5rpx 0;
				height: 40rpx;
				line-height: 40rpx;
			    white-space: nowrap;
			    overflow: hidden;
				text-overflow: ellipsis;
			}
			.goods-price{
				color: red;
				font-size: 48rpx;
			}
		}
		
	}

</style>