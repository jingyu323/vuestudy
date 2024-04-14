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
		<view class="naveItem"  :class="{active: naveindex===index ? true : false}" @click="changeindex(index)" v-for="(item,index) of indexnavdata"  :key="index"  >{{item}}</view>
				
	</scroll-view>
	<view v-if="naveindex==0">
		<view class="policylist">
			<view class="pilicyitem"><image src="../../static/images/yi.png"><text>网易自营品牌</text></view>
			<view class="pilicyitem"><image src="../../static/images/dun.png"><text>30天无忧退货</text></view>
			<view class="pilicyitem"><image src="../../static/images/mony.png"><text>48小时快速退款</text></view>
		</view>
		<swiper autoplay interval="2000" indicator-dots="">
			<swiper-item><image src="https://yanxuan.nosdn.127.net/hxm/oly-picture/a241aececce23a2bb0f1a8dde15dc9bf.jpg?type=webp&amp;imageView&amp;quality=75&amp;thumbnail=750x0"></image></swiper-item>
			<swiper-item><image src="https://yanxuan.nosdn.127.net/hxm/oly-picture/f0b3fb8a6fa6473b8741fcaeb03c341d.jpg?type=webp&imageView&quality=75&thumbnail=750x0"></image></swiper-item>
		</swiper>
		<view class="kingKonglist">
			<view class="kingKongitem" v-for="item  in kingKonData"  :key="item.desc"><image :src="item.img"><text>{{item.desc}}</text></view>
		</view>
		<view class="catgoryList">
			<view class="catgoryItem"   v-for="item  in catgoryList" :key="item.picurl">
				<image  class="catgoryItemimg" :src="item.picurl"></image>
				<scroll-view scroll-x="true" class="catgoryItemscroll">
					<view class="goodsitem" v-for="goods  in item.goodsitems" :key="goods.showimgurl">
						<image :src="goods.showimgurl"></image>
						<view class="goodstext">{{goods.goodstext}}</view>
					</view>  
				</scroll-view>
			</view>
		</view>
	</view>
	<CateList v-else  :L1id="L1id"     ></CateList>
 </view>
</template>

<script>
	import request from '../../utils/request'
	import CateListVue from '../../components/CateList/CateList.vue';
	export default {
		components: {
		    CateListVue,
		  },
		data() {
			return {
				title: 'Hello',
				indexnavdata:[],
				naveindex:0,
				kingKonData:[{"img":"https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png","desc":"新品首发"},
				{"img":"https://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png","desc":"床品"},
				{"img":"https://yanxuan.nosdn.127.net/896a3beac514ae8f40aafe028e5fec56.png","desc":"服饰鞋包"},
				{"img":"https://yanxuan.nosdn.127.net/37520d1204a0c55474021b43dac2a69e.png","desc":"乳饮酒水"},
				{"img":"https://yanxuan.nosdn.127.net/6c3bd9d885c818b1f73e497335a68b47.png","desc":"家庭清洁"},
				{"img":"https://yanxuan.nosdn.127.net/559d2a240ec20b096590a902217009ff.png","desc":"母婴亲子"},
				{"img":"https://yanxuan.nosdn.127.net/5c088559ebcc3f0ffcda663f04dfbeb2.png","desc":"运动旅行"},
				{"img":"https://yanxuan.nosdn.127.net/static-union/1687343272e1b463.png","desc":"平台清仓"},
				{"img":"https://yanxuan.nosdn.127.net/static-union/1642506913355bb9.png","desc":"宠物生活"},
				{"img":"https://yanxuan.nosdn.127.net/static-union/16644541382b06e4.png","desc":"每日抄底"}],
				catgoryList:[
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
				]}],
				L1id:'111',
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
				this.L1id = index;
				console.log(this.L1id)
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
		width: 120rpx;
		margin: 5rpx;
		font-size: 30rpx;
		text-align: center;
		
	}
	.navgator    .active{
		color: red;
		border-bottom: 3rpx solid #BB2C08
		
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
	.policylist{
		display: flex;
		flex-direction: row;
		margin: 20rpx 0 ;
		padding: 0 10rpx;
	 
	}
	.policylist .pilicyitem{
		flex: 1; 
		display: inline-block;
		display: flex;
		height: 50rpx;
		font-size: 28rpx;
		line-height: 50rpx;
		align-items: center;
		
	}
	  .pilicyitem image { 
		height: 50rpx;
		width: 50rpx;
	}
	.kingKonglist{
		margin: 15rpx 0 ;
		display: flex;
		flex-wrap: wrap;
	}
	.kingKonglist .kingKongitem{ 
		width: 20%;
		font-size: 26rpx;
		text-align: center;
		margin: 10rpx 0 ;
	}
	 .kingKongitem image{
		 height: 130rpx;
		 width: 130rpx;
	}
	.catgoryItem{
		margin: 30rpx 0rpx;
	}
	.catgoryItemimg{
		  height: 370rpx;
		  width: 100%;
	}
	.catgoryItemscroll{
		height: 310rpx;
		display: flex;
		white-space: nowrap;
		 
	}
	.goodsitem  {
		height: 300rpx;
		width: 200rpx;
		display: inline-block;
		margin: 5rpx 10rpx;
		
	}
	
	.goodsitem image{
		height: 200rpx;
		width: 200rpx;
		
	}
	.goodstext{
		height: 100rpx;
		text-align: center;
		white-space: pre-wrap;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
	}



	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
