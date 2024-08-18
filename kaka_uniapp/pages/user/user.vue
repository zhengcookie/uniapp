<template>
	<view class="container">
		<uv-navbar>
			<template v-slot:left>
				<view></view>
			</template>
			<template v-slot:right>
				<uv-icon name="setting" size="22"></uv-icon>
			</template>
		</uv-navbar>

		<view class="main">
			<!-- top -->
			<view class="user">

				<view class="user_left">
					<view class="avatar">
						<uv-avatar mode='aspectFill' src="https://img2.baidu.com/it/u=3412909306,1442259109&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500" size="100"></uv-avatar>
					</view>
					<view class="username_info">
						<view class="ul-username">
							<view class="username">小赵</view>
							<uv-icon name="man" size="22" color="#2979ff"></uv-icon>
						</view>
						<view class="ul-sf">
							<view class="sf1">摄影师</view>
							<view class="sf1">|</view>
							<view class="sf1">广州</view>
							<view class="sf1">185****5162</view>
						</view>
						<view class="sm">
							<view class="sm_icon">
								<uv-icon name="file-text" size="13" color="#fff"></uv-icon>
								<view>未认证</view>
							</view>
							<view class="sm_icon">
								<uv-icon name="account" size="13" color="#fff"></uv-icon>
								<view>未实名</view>
							</view>
						</view>
					</view>

				</view>
			</view>
			<!-- end -->

			<view class="tff">
				<view class="tff_item">
					<view class="tff_count">20</view>
					<view class="tff_title">粉丝</view>
				</view>
				<view class="tff_item">
					<view class="tff_count">292</view>
					<view class="tff_title">关注</view>
				</view>
				<view class="tff_item">
					<view class="tff_count">86</view>
					<view class="tff_title">好友</view>
				</view>
			</view>

			<view class="recharge">
				<view class="left">
					<view class="rl_top">
						<uv-icon name="level" color="#fea4a6"></uv-icon>
						<view class="rl_bottom">
							尊享会员特权
						</view>
					</view>
				</view>
				<view class="right">
					<view class="r_box">
						<view style="padding-right: 10px;">前往开通</view>
						<view style="padding-right: 20px;">▶</view>
						
					</view>
				</view>
			</view>

			<view class="works">
				<view class="wl_title">
					账户余额
				</view>
				<view class="wl_top">
					<view class="wl_left">
						0
					</view>
					<view class="wl_right">
						立即充值
					</view>
				</view>
			</view>
			<view class="rz">
				<view class="rz_title">
					其他
				</view>
				<view class="rz_top_left">
					<view class="rz_top_item">
						<view class="">
							<uv-icon name="kefu-ermai" color="#000" style="margin-left: 25rpx;" size="30"></uv-icon>
						</view>
						<view class="">在线客服</view>
					</view>
					<view class="rz_top_item">
						<uv-icon name="checkmark-circle" color="#000" style="margin-left: 25rpx;" size="30"></uv-icon>
						<view class="">任务中心</view>
					</view>
					<view class="rz_top_item">
						<uv-icon name="coupon" color="#000" style="margin-left: 25rpx;" size="30"></uv-icon>
						<view class="">我的卡券</view>
					</view>
				</view>
				</view>
				<view class="">
					
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
			toUserInfo() {
				uni.navigateTo({
					url: "/pages/userInfo/userInfo"
				})
			},
			toWorks(){
				uni.navigateTo({
					url:"/pages/model-works/model-works"
				})
			}
		}
	}
</script>

<style scoped>
	@import url(./user.css);
</style>