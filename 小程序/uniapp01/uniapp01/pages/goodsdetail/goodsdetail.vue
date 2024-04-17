<template>
	<view>
		<view> ming</view>
		<scroll-view scroll-y="true">
			
			<image :src="goodsobj.showimgurl" mode=""></image>
			<view class="tag">sds</view>
			<view class="price"></view>
			
		</scroll-view>
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

</style>
