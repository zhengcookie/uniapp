<template>
	<view class="container">

		<view class="locate">
			<view class="loc_left">地点</view>
			<view class="loc_right">
				<view>佛山市</view>
				<uv-icon name="arrow-right" size="18"></uv-icon>
			</view>
		</view>
		<view class="screen">
			<view class="screen_top">选择性别</view>
			<view class="screen_main">
				<view class="sm_tag">
					<uv-tags text="标签" type="error" size="large"></uv-tags>
				</view>
				<view class="sm_tag">
					<uv-tags text="标签" type="error" size="large"></uv-tags>
				</view>
				<view class="sm_tag">
					<uv-tags text="标签" type="error" size="large"></uv-tags>
				</view>
				<view class="sm_tag">
					<uv-tags text="标签" type="error" size="large"></uv-tags>
				</view>
				<view class="sm_tag">
					<uv-tags text="标签" type="error" size="large"></uv-tags>
				</view>
				<view class="sm_tag">
					<uv-tags text="标签" type="error" size="large"></uv-tags>
				</view>
				<view class="sm_tag">
					<uv-tags text="标签" type="error" size="large"></uv-tags>
				</view>
				<view class="sm_tag">
					<uv-tags text="标签" type="error" size="large"></uv-tags>
				</view>
				<view class="sm_tag">
					<uv-tags text="标签" type="error" size="large"></uv-tags>
				</view>
			</view>
		</view>
		<view class="screen">
			<view class="screen_top">爱好</view>
			<view class="screen_main">
				<view class="sm_tag">
					<uv-tags text="标签" type="error" size="large"></uv-tags>
				</view>
				<view class="sm_tag">
					<uv-tags text="标签" type="error" size="large"></uv-tags>
				</view>
				<view class="sm_tag">
					<uv-tags text="标签" type="error" size="large"></uv-tags>
				</view>
			</view>
		</view>
		<view class="screen">
			<view class="screen_top">地点</view>
			<view class="screen_main">
				<view class="sm_tag">
					<uv-tags text="标签" type="error" size="large"></uv-tags>
				</view>
				<view class="sm_tag">
					<uv-tags text="标签" type="error" size="large"></uv-tags>
				</view>
				<view class="sm_tag">
					<uv-tags text="标签" type="error" size="large"></uv-tags>
				</view>
			</view>
		</view>

		<view class="fotter">
			<view class="confirm_btn">
				<uv-button type="error" text="确定"></uv-button>
			</view>
			<view class="cancel_btn">
				<uv-button type="info " text="取消" @click="cancel"></uv-button>
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
			cancel() {
               this.$emit('closePopup',null);
			}
		}
	}
</script>

<style scoped>
	@import url(./screen.css);
</style>