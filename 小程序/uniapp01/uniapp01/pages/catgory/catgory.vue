<template>
	<view class="catgory">
		 <view class="header">
			 <view class="search">商品搜索</view>
		 </view>
		 
		 <view class="content">
			 <view class="left">
				 <scroll-view class="navscroll" scroll-y="true">
					 <view  class="naveItem "  @click="changeindex(index)"  :class="{active: index === navnum  ? true : false}" v-for="(item,index) in navelist" :key="index">{{item}}</view>
				 </scroll-view>
				 <image src="../../static/images/chuang.png"></image>
			 </view>
			 <view class="right">
				
				 <scroll-view class="contentscroll" scroll-y="true">
					  <image class="topimg" :src="catgoryitem.picurl"></image>
					  <view class="catgoryList">
						  <view   class="contentItem"  v-for="item in catgoryitem.goodsitems" :key="item" @click="gotoDetail(item)" >
						  						  <image :src="item.showimgurl"></image>
						  						  <view class="goodsname">{{item.goodstext}}</view>
						  </view>
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
				"navnum":0,
				"navelist":["家具生活","服饰鞋包","美食酒水","个护清洁","母婴亲子","运动旅游","数码家电","服饰鞋包","美食酒水","个护清洁","母婴亲子","运动旅游","数码家电","服饰鞋包","美食酒水","个护清洁","母婴亲子","运动旅游","数码家电","服饰鞋包","美食酒水","个护清洁","母婴亲子","运动旅游","数码家电","服饰鞋包","美食酒水","个护清洁","母婴亲子","运动旅游","数码家电"],
				"catgoryitem":{"picurl":"https://yanxuan.nosdn.127.net/static-union/1712830059be0861.png?quality=75&type=webp&imageView&thumbnail=375x0",
					"goodsitems":[
					{"showimgurl":"../../static/images/chuang.png","goodstext":"菊花茶"},
					{"showimgurl":"../../static/images/chuang.png","goodstext":"菊花茶"},
					{"showimgurl":"../../static/images/chuang.png","goodstext":"菊花茶"},
					{"showimgurl":"../../static/images/chuang.png","goodstext":"菊花茶 "},
					{"showimgurl":"../../static/images/chuang.png","goodstext":"菊花茶"},
					{"showimgurl":"../../static/images/chuang.png","goodstext":"菊花茶"}
				]},
 
				"catgoryList":[
					{"picurl":"https://yanxuan.nosdn.127.net/static-union/1712830059be0861.png?quality=75&type=webp&imageView&thumbnail=375x0",
					"goodsitems":[
					{"showimgurl":"https://yanxuan.nosdn.127.net/ed6400e5be573e1524cdef0b5c9e462d.png?quality=75&type=webp&imageView","goodstext":"菊花茶"},
					{"showimgurl":"https://yanxuan.nosdn.127.net/6b89bb53923f2c1d6d205f6fa3f8dd0b.png?quality=75&type=webp&imageView","goodstext":"菊花茶"},
					{"showimgurl":"https://yanxuan.nosdn.127.net/6b89bb53923f2c1d6d205f6fa3f8dd0b.png?quality=75&type=webp&imageView","goodstext":"菊花茶"},
					{"showimgurl":"https://yanxuan.nosdn.127.net/ed6400e5be573e1524cdef0b5c9e462d.png?type=webp&imageView&quality=75&thumbnail=750x0","goodstext":"菊花茶菊花茶菊花茶菊花茶菊花茶菊花茶菊花茶菊花茶菊花茶菊花茶菊花茶菊花茶"},
					{"showimgurl":"https://yanxuan.nosdn.127.net/ed6400e5be573e1524cdef0b5c9e462d.png?type=webp&imageView&quality=75&thumbnail=750x0","goodstext":"菊花茶"}
				]},
				{"picurl":"https://yanxuan.nosdn.127.net/static-union/171283006293a3f0.png",
				"goodsitems":[{"showimgurl":"https://yanxuan.nosdn.127.net/ed6400e5be573e1524cdef0b5c9e462d.png?quality=75&type=webp&imageView","goodstext":"菊花茶"},
				{"showimgurl":"https://yanxuan.nosdn.127.net/6b89bb53923f2c1d6d205f6fa3f8dd0b.png?quality=75&type=webp&imageView","goodstext":"菊花茶"},
				{"showimgurl":"https://yanxuan.nosdn.127.net/ed6400e5be573e1524cdef0b5c9e462d.png?type=webp&imageView&quality=75&thumbnail=750x0","goodstext":"菊花茶菊花茶菊花茶菊花茶菊花茶菊花茶菊花茶菊花茶菊花茶菊花茶菊花茶菊花茶"},
				{"showimgurl":"https://yanxuan.nosdn.127.net/ed6400e5be573e1524cdef0b5c9e462d.png?type=webp&imageView&quality=75&thumbnail=750x0","goodstext":"菊花茶"},
				{"showimgurl":"https://yanxuan.nosdn.127.net/ed6400e5be573e1524cdef0b5c9e462d.png?type=webp&imageView&quality=75&thumbnail=750x0","goodstext":"菊花茶"}
				]}]
				
			};
		},
		methods:{
			changeindex(index){
				console.log("index="+index)
				this.navnum = index;
			 
				console.log(this.navnum)
			},
			gotoDetail(goods){
				console.log(goods)
				wx.navigateTo({
					url:"/pages/goodsdetail/goodsdetail?goods="+JSON.stringify(goods)
				})
				
			}
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
			height: calc(100vh - 102rpx);
			border-top: #ccc solid 3rpx;
			.left{
				width: 20%;
				border-right: #ccc solid 3rpx;
				height: 100%;
				.navscroll{
					height:100%;
					height: calc(100vh - 102rpx);
					.naveItem{
						height: 70rpx;
						line-height: 70rpx;
						font-size: 30rpx;
						text-align: center;
						position: relative;
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
				height: 100%;
				text-align: center;

				.contentscroll{
					.topimg{
						height: 200rpx;
						width: 96%;	 
						margin: 0 auto;
						display: block;
					}
					// height: calc(100vh - 302rpx);
					height: 100%;
		
					.catgoryList{
						display: flex;
						flex-wrap: wrap;
						.contentItem{
							width: 33%;
							height: 200rpx;
							image{
								width: 33%;
								height:140rpx;
							}
							.goodsname{
								
							}
							 
						 
						}
					}
	
					
				}
				 
			}
		}
		
	} 

</style>
