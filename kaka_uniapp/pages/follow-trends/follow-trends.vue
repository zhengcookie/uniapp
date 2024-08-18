<template>
	<view class="follow-container">
		<scroll-view scroll-y class="page" refresher-background='#f4f4f4' refresher-enabled="true">	
			<ul>
				<li class="user_item">
					<view class="main_top">
						<view class="main_top_left">
							<view class="mtl_avatar">
								<uv-avatar mode='aspectFill' src="https://img1.baidu.com/it/u=3134486172,2216363735&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=501"  size="32"></uv-avatar>
							</view>
							<view class="mtl_user">
								<view class="mtl_user_top">
									<view class="name">张三</view>
									<view class="sex"><uv-icon name="woman" color="#f56c6c"></uv-icon>
									
									</view>
									<view class="time">3分钟前</view>
								</view>
								<view class="mtl_user_bottom">
									<view style="margin-right: 5px;">模特</view>
									<view class="mtl_user_bottom_rz">已认证</view>
								</view>
							</view>
						</view>
						<view class="main_top_right">
							<uv-icon name="empty-address" size="32rpx"></uv-icon>
							<view class="address">广州</view>
						</view>
					</view>
					<view class="main_center">
						<view class="mc_text">
							<view class="mc_title word">
								这是第一个标题
							</view>
							<view class="mc_content word">
								这是第一个内容介绍
							</view>
						</view>
						<view class="mc_imgs">
							<image mode="aspectFill" src="https://img2.baidu.com/it/u=1636765663,1838356209&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"></image>
							<image mode="aspectFill" src="https://img1.baidu.com/it/u=1648585916,4164826103&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=889"></image>
							<image mode="aspectFill" src="https://img2.baidu.com/it/u=3269714936,2452794335&fm=253&fmt=auto&app=138&f=JPEG?w=660&h=500"></image>
						</view>
					</view>
					<view class="main_bottom">
						<view class="mb_w">
							<uv-icon name="camera"></uv-icon><view class="count">12</view>
						</view>
						<view class="mb_w">
							<uv-icon name="chat"></uv-icon><view class="count">29</view>
						</view>
						<view class="mb_w">
							<uv-icon name="thumb-up"></uv-icon><view class="count">2</view>
						</view>
					</view>
				</li>
				<li class="user_item">
					<view class="main_top">
						<view class="main_top_left">
							<view class="mtl_avatar">
								<uv-avatar src="https://img0.baidu.com/it/u=267795247,105016899&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"  size="32"></uv-avatar>
							</view>
							<view class="mtl_user">
								<view class="mtl_user_top">
									<view class="name">李四</view>
									<view class="sex"><uv-icon name="man" color="#2979ff"></uv-icon>
									</view>
									<view class="time">1小时前</view>
								</view>
								<view class="mtl_user_bottom">
									<view style="margin-right: 5px;">摄影师</view>
									<view class="mtl_user_bottom_rz">已认证</view>
								</view>
							</view>
						</view>
						<view class="main_top_right">
							<uv-icon name="empty-address" size="32rpx"></uv-icon>
							<view class="address">深圳</view>
						</view>
					</view>
					<view class="main_center">
						<view class="mc_text">
							<view class="mc_title word">
								这是第二个标题
							</view>
							<view class="mc_content word">
								这是他的内容介绍
							</view>
						</view>
						<view class="mc_imgs">
							<image mode="aspectFill" src="https://img2.baidu.com/it/u=185911472,2346830546&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"></image>
							<image  mode="aspectFill" src="https://img1.baidu.com/it/u=1597248371,2544743665&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=711"></image>
							<image  mode="aspectFill" src="https://img1.baidu.com/it/u=525788690,1509409723&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"></image>
							<image mode="aspectFill" src="https://img1.baidu.com/it/u=2672183734,1742732695&fm=253&fmt=auto&app=138&f=JPEG?w=224&h=398"></image>
							<image  mode="aspectFill" src="https://img2.baidu.com/it/u=444584931,751325476&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"></image>
							<image  mode="aspectFill" src="https://img0.baidu.com/it/u=3786302325,3173299289&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"></image>
						</view>
					</view>
					<view class="main_bottom">
						<view class="mb_w">
							<uv-icon name="camera"></uv-icon><view class="count">11</view>
						</view>
						<view class="mb_w">
							<uv-icon name="chat"></uv-icon><view class="count">4</view>
						</view>
						<view class="mb_w">
							<uv-icon name="thumb-up"></uv-icon><view class="count">2</view>
						</view>
					</view>
				</li>
				<li class="user_item">
					<view class="main_top">
						<view class="main_top_left">
							<view class="mtl_avatar">
								<uv-avatar src="https://img2.baidu.com/it/u=300418185,1902570475&fm=253&fmt=auto&app=138&f=JPEG?w=300&h=300" mode="cover" size="32"></uv-avatar>
							</view>
							<view class="mtl_user">
								<view class="mtl_user_top">
									<view class="name">咔咔</view>
									<view class="sex"><uv-icon name="man" color="#2979ff"></uv-icon>
									</view>
									<view class="time">一天前</view>
								</view>
								<view class="mtl_user_bottom">
									<view style="margin-right: 5px;">摄影师</view>
									<view class="mtl_user_bottom_rz">已认证</view>
								</view>
								
							</view>
						</view>
						<view class="main_top_right">
							<uv-icon name="empty-address" size="32rpx"></uv-icon>
							<view class="address">上海</view>
						</view>
					</view>
					<view class="main_center">
						<view class="mc_text">
							<view class="mc_title word">
								这是第三个人标题
							</view>
							<view class="mc_content word">
								这是第三个人内容介绍
							</view>
						</view>
						<view class="mc_imgs">
							<image src="../../static/logo.png"></image>
							<image src="../../static/logo.png"></image>
							<image src="../../static/logo.png"></image>
						</view>
					</view>
					<view class="main_bottom">
						<view class="mb_w">
							<uv-icon name="camera"></uv-icon><view class="count">22</view>
						</view>
						<view class="mb_w">
							<uv-icon name="chat"></uv-icon><view class="count">22</view>
						</view>
						<view class="mb_w">
							<uv-icon name="thumb-up"></uv-icon><view class="count">22</view>
						</view>
					</view>
				</li>
			</ul>
					
		</scroll-view>
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
 @import url(./follow-trends.css);
</style>
