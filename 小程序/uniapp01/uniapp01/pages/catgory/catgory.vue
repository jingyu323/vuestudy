<template>
	<view class="catgory">
		 <view class="header">
			 <view class="search">商品搜索</view>
		 </view>
		 
		 <view class="content">
			 <view class="left">
				 <scroll-view class="navscroll" scroll-y="true">
					  <view  class="naveItem active"   >家具生活</view>
					 <view  class="naveItem "  v-for="item in navelist" :key="item">{{item}}</view>
				 </scroll-view>
			 </view>
			 <view class="right">
				 <image class="topimg" :src="catgoryitem.picurl"></image>
				 <scroll-view class="contentscroll" scroll-y="true">
					 <view   class="contentItem"  v-for="item in catgoryitem.goodsitems" :key="item" >
						  <image :src="item.showimgurl"></image>
						  <view>{{item.goodstext}}</view>
					 </view>
				 </scroll-view>
			 </view>
		 </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				"navelist":["家具生活","服饰鞋包","美食酒水","个护清洁","母婴亲子","运动旅游","数码家电","服饰鞋包","美食酒水","个护清洁","母婴亲子","运动旅游","数码家电","服饰鞋包","美食酒水","个护清洁","母婴亲子","运动旅游","数码家电","服饰鞋包","美食酒水","个护清洁","母婴亲子","运动旅游","数码家电","服饰鞋包","美食酒水","个护清洁","母婴亲子","运动旅游","数码家电"],
				"catgoryitem":{"picurl":"https://yanxuan.nosdn.127.net/static-union/1712830059be0861.png?quality=75&type=webp&imageView&thumbnail=375x0",
					"goodsitems":[
					{"showimgurl":"https://yanxuan.nosdn.127.net/static-union/1712829159cbbb06.png?quality=75&type=webp&imageView&thumbnail=250x0","goodstext":"菊花茶"},
					{"showimgurl":"https://yanxuan.nosdn.127.net/hxm/oly-picture/a241aececce23a2bb0f1a8dde15dc9bf.jpg?type=webp&imageView&quality=75&thumbnail=750x0","goodstext":"菊花茶"},
					{"showimgurl":"https://yanxuan.nosdn.127.net/hxm/oly-picture/a241aececce23a2bb0f1a8dde15dc9bf.jpg?type=webp&imageView&quality=75&thumbnail=750x0","goodstext":"菊花茶"},
					{"showimgurl":"https://yanxuan.nosdn.127.net/hxm/oly-picture/a241aececce23a2bb0f1a8dde15dc9bf.jpg?type=webp&imageView&quality=75&thumbnail=750x0","goodstext":"菊花茶菊花茶菊花茶菊花茶菊花茶菊花茶菊花茶菊花茶菊花茶菊花茶菊花茶菊花茶"},
					{"showimgurl":"https://yanxuan.nosdn.127.net/hxm/oly-picture/a241aececce23a2bb0f1a8dde15dc9bf.jpg?type=webp&imageView&quality=75&thumbnail=750x0","goodstext":"菊花茶"}
				]},
 
				"catgoryList":[
					{"picurl":"https://yanxuan.nosdn.127.net/static-union/1712830059be0861.png?quality=75&type=webp&imageView&thumbnail=375x0",
					"goodsitems":[
					{"showimgurl":"https://yanxuan.nosdn.127.net/static-union/1712829159cbbb06.png?quality=75&type=webp&imageView&thumbnail=250x0","goodstext":"菊花茶"},
					{"showimgurl":"https://yanxuan.nosdn.127.net/hxm/oly-picture/a241aececce23a2bb0f1a8dde15dc9bf.jpg?type=webp&imageView&quality=75&thumbnail=750x0","goodstext":"菊花茶"},
					{"showimgurl":"https://yanxuan.nosdn.127.net/hxm/oly-picture/a241aececce23a2bb0f1a8dde15dc9bf.jpg?type=webp&imageView&quality=75&thumbnail=750x0","goodstext":"菊花茶"},
					{"showimgurl":"https://yanxuan.nosdn.127.net/hxm/oly-picture/a241aececce23a2bb0f1a8dde15dc9bf.jpg?type=webp&imageView&quality=75&thumbnail=750x0","goodstext":"菊花茶菊花茶菊花茶菊花茶菊花茶菊花茶菊花茶菊花茶菊花茶菊花茶菊花茶菊花茶"},
					{"showimgurl":"https://yanxuan.nosdn.127.net/hxm/oly-picture/a241aececce23a2bb0f1a8dde15dc9bf.jpg?type=webp&imageView&quality=75&thumbnail=750x0","goodstext":"菊花茶"}
				]},
				{"picurl":"https://yanxuan.nosdn.127.net/static-union/171283006293a3f0.png",
				"goodsitems":[{"showimgurl":"https://yanxuan.nosdn.127.net/static-union/1712829159cbbb06.png?quality=75&type=webp&imageView&thumbnail=250x0","goodstext":"菊花茶"},
				{"showimgurl":"https://yanxuan.nosdn.127.net/hxm/oly-picture/a241aececce23a2bb0f1a8dde15dc9bf.jpg?type=webp&imageView&quality=75&thumbnail=750x0","goodstext":"菊花茶"},
				{"showimgurl":"https://yanxuan.nosdn.127.net/hxm/oly-picture/a241aececce23a2bb0f1a8dde15dc9bf.jpg?type=webp&imageView&quality=75&thumbnail=750x0","goodstext":"菊花茶菊花茶菊花茶菊花茶菊花茶菊花茶菊花茶菊花茶菊花茶菊花茶菊花茶菊花茶"},
				{"showimgurl":"https://yanxuan.nosdn.127.net/hxm/oly-picture/a241aececce23a2bb0f1a8dde15dc9bf.jpg?type=webp&imageView&quality=75&thumbnail=750x0","goodstext":"菊花茶"},
				{"showimgurl":"https://yanxuan.nosdn.127.net/hxm/oly-picture/a241aececce23a2bb0f1a8dde15dc9bf.jpg?type=webp&imageView&quality=75&thumbnail=750x0","goodstext":"菊花茶"}
				]}]
				
			};
		}
	}
</script>

<style lang="scss">
	
	$topHeight: 900rpx;
	.catgory{
		.header{
			margin: 10rpx 0;
			padding: 10rpx 0 ;
			.search{
				margin: 0 auto;
				width: 90%;
				line-height: 60rpx;
				background-color: #ddd;
				border-radius: 4rpx;
				text-align: center;
			}
			
		}
		.content{
			display: flex;
			// height: calc(100vh - 708);
			height:calc(100% - 620rpx);
			border-top: #ccc solid 3rpx;
			.left{
				width: 20%;
				border-right: #ccc solid 3rpx;
				height:calc(100% - 620rpx);
				.navscroll{
					height:calc(100% - 620rpx);
					.naveItem{
						height: 70rpx;
						line-height: 70rpx;
						font-size: 30rpx;
						text-align: center;
						&.active::before{
							content: "";
							width: 2rpx;
							height: 50rpx;
							background-color: red;
							position: absolute;
							left: 10rpx;
							top: 10rpx;
						}
					}
				}

			}
			.right{
				width: 80%;
				height: 800rpx;
				text-align: center;
				.topimg{
					height: 200rpx;
					width: 96%;
					margin: 15rpx 0 ;
				}
				.contentscroll{
					height: 200rpx;
					
				}
				 
			}
		}
		
	} 

</style>
