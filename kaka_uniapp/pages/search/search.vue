<template>
	<view class="container">
		<uv-navbar>
			<template v-slot:left>
				<view class="top">
					<uv-search placeholder="请输入搜索内容" v-model="keyword" :showAction="false"></uv-search>
				</view>
			</template>
			
			<template v-slot:right>
				<view>
		            取消
				</view>
			</template>
		</uv-navbar>
		
		<view class="center">
			<view class="search-record">
				<view class="sr-title">
					<view class="sr-left">
						历史记录
					</view>
					<uv-icon name="trash" size="22"></uv-icon>
				</view>
				<view class="records">
					<view class="tag-item">
						<uv-tags type="error" text="标签" plain  shape="circle"></uv-tags>
					</view>
					<view class="tag-item">
						<uv-tags type="error" text="标签" plain  shape="circle"></uv-tags>
					</view>
					<view class="tag-item">
						<uv-tags type="error" text="标签" plain  shape="circle"></uv-tags>
					</view>
					<view class="tag-item">
						<uv-tags type="error" text="标签" plain  shape="circle"></uv-tags>
					</view>
					<view class="tag-item">
						<uv-tags type="error" text="标签" plain  shape="circle"></uv-tags>
					</view>
					<view class="tag-item">
						<uv-tags type="error" text="标签" plain  shape="circle"></uv-tags>
					</view>
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

<style scoped>
	@import url(./search.css);
</style>