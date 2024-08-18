<template>
	<!-- 作品展示 -->
	<view class="container">
		<uv-navbar>
			<template v-slot:left>
				<view></view>
			</template>
			<template v-slot:center>
				<view class="index_top_center">
					<uv-tabs lineColor="#f56c6c" itemStyle="padding-left: 15px; padding-right: 15px; height: 34px; "
						:current='index' :list="top_list" @click="change"></uv-tabs>
				</view>
			</template>
		</uv-navbar>
		
		<view class="main">
			<scroll-view scroll-y class="page">
				<waterFall v-if="index==0"></waterFall>
				<album v-else></album>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import waterFall from "@/componects/waterfall.vue"
	import album from "@/pages/albums/albums.vue"
	export default {
		components:{
			waterFall,
			album
		},
	    data(){
			return{
				index:0,
				top_list: [{
					name: '作品',
				}, {
					name: '专辑',
				}],
			}
		},
		methods:{
			change(e){
				this.index = e.index
			}
		},
	}
</script>

<style scoped>
	@import url(./model-works.css);
</style>
