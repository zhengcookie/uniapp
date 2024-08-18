<template>
	<view class="container">
		<uv-navbar>
			<template v-slot:left>
				<view></view>
			</template>
			<template v-slot:center>
				<view class="top">
					<view class="top_search">
						<!-- <uv-search placeholder="请输入搜索内容" v-model="keyword" :showAction="false"></uv-search> -->
						<uv-search placeholder="请输入搜索内容" :showAction="false"></uv-search>
					</view>
					<view class="nav">
						<ul>
							<li class="nav_item">
								<view class="nav_tag">广州</view>
							</li>
							<li class="nav_item">
								<view class="nav_tag">时尚</view>
							</li>
							<li class="nav_item">
								<view class="nav_tag">摄影师</view>
							</li>
							<li class="nav_item">
								<view class="nav_tag">模特</view>
							</li>
							<li class="nav_item">
								<view class="nav_tag">化妆师</view>
							</li>
							<li class="nav_item">
								<view class="nav_tag">韩系</view>
							</li>
							<li class="nav_item">
								<view class="nav_tag">日系</view>
							</li>
							<li class="nav_item">
								<view class="nav_tag">cosplay</view>
							</li>
						</ul>
					</view>
					<view class="right_icon">
						<uv-tags text="筛选" type="error" plain plainFill size="mini" @click="open"></uv-tags>
					</view>

				<!-- 	<uv-popup ref="popup" @change="change">
						<screen @closePopup='close'></screen>
					</uv-popup> -->
					<uv-popup ref="popup">
						<screen @closePopup='close'></screen>
					</uv-popup>
				</view>
			</template>
			<template v-slot:right>
				<view>
				</view>
			</template>
		</uv-navbar>

		<view class="main">
			<!-- 这一段是有bug的 -->
			<!-- <scroll-view scroll-y class="page" refresher-background='#f4f4f4' @scrolltolower="loadData" refresher-enabled="true"
				:refresher-triggered="triggered" @refresherrefresh="onRefresh" @scroll="scroll" :scroll-top="scrollTop" -->>
				<scroll-view scroll-y class="page" refresher-background='#f4f4f4'  refresher-enabled="true"
				:refresher-triggered="triggered" @refresherrefresh="onRefresh" @scroll="scroll" :scroll-top="scrollTop"
				<ul>
					<li class="user_item">
						<view class="main_top">
							<view class="main_top_left">
								<view class="mtl_avatar">
									<uv-avatar src="https://img1.baidu.com/it/u=2932772446,2464263128&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=1082" mode="aspectFill" size="32"></uv-avatar>
								</view>
								<view class="mtl_user">
									<view class="mtl_user_top">
										<view class="name">张三</view>
										<view class="sex"><uv-icon name="man" color="#2979ff"></uv-icon>
										</view>
										<view class="time">4小时前</view>
									</view>
									<view class="mtl_user_bottom">
										<view style="margin-right: 5px;">摄影师</view>
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
									第一个人的标题
								</view>
								<view class="mc_content word">
									星期四，地点广州
								</view>
							</view>
							<view class="mc_imgs">
								<image mode="aspectFill" src="https://img1.baidu.com/it/u=3849409103,1180457666&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"></image>
								<image mode="aspectFill" src="https://img0.baidu.com/it/u=2253025809,1908049581&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"></image>
								<image mode="aspectFill" src="https://img2.baidu.com/it/u=3082804013,660672339&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"></image>
								<view class="img_count">
									3
								</view>
							</view>

							<view class="mc_tags">
								<view class="tag_item">
									<uv-tags text="化妆" type="error" size="mini" plain plainFill></uv-tags>
								</view>
								<view class="tag_item">
									<uv-tags text="cosplay" type="error" size="mini" plain plainFill></uv-tags>
								</view>
								<view class="tag_item">
									<uv-tags text="时尚" type="error" size="mini" plain plainFill></uv-tags>
								</view>
							</view>
						</view>
						<view class="main_bottom">
							<view class="mb_w">
								<uv-icon name="camera"></uv-icon>
								<view class="count">5</view>
							</view>
							<view class="mb_w">
								<uv-icon name="chat"></uv-icon>
								<view class="count">20</view>
							</view>
							<view class="mb_w">
								<uv-icon name="thumb-up"></uv-icon>
								<view class="count">31</view>
							</view>
						</view>
					</li>
					<li class="user_item">
						<view class="main_top">
							<view class="main_top_left">
								<view class="mtl_avatar">
									<uv-avatar  src="https://img2.baidu.com/it/u=1955395411,639086901&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500" mode="aspectFill" size="32"></uv-avatar>
								</view>
								<view class="mtl_user">
									<view class="mtl_user_top">
										<view class="name">李四</view>
										<view class="sex"><uv-icon name="man" color="#2979ff"></uv-icon>
										</view>
										<view class="time">8小时前</view>
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
									这是第二个人标题
								</view>
								<view class="mc_content word">
									这是第二个人内容介绍
								</view>
							</view>
							<view class="mc_imgs">
								<image mode="aspectFill" src="https://img1.baidu.com/it/u=1458259494,1117602960&fm=253&fmt=auto&app=138&f=JPEG?w=502&h=500"></image>
								<image mode="aspectFill" src="https://img0.baidu.com/it/u=867945760,3309784505&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"></image>
								<image mode="aspectFill" src="https://img2.baidu.com/it/u=1462417885,2781970460&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=1028"></image>
								<view class="img_count">
									3
								</view>
							</view>

							<view class="mc_tags">
								<view class="tag_item">
									<uv-tags text="摄影" type="error" size="mini" plain plainFill></uv-tags>
								</view>
								<view class="tag_item">
									<uv-tags text="时尚" type="error" size="mini" plain plainFill></uv-tags>
								</view>
							</view>
						</view>
						<view class="main_bottom">
							<view class="mb_w">
								<uv-icon name="camera"></uv-icon>
								<view class="count">3</view>
							</view>
							<view class="mb_w">
								<uv-icon name="chat"></uv-icon>
								<view class="count">20</view>
							</view>
							<view class="mb_w">
								<uv-icon name="thumb-up"></uv-icon>
								<view class="count">1</view>
							</view>
						</view>
					</li>
					<li class="user_item">
						<view class="main_top">
							<view class="main_top_left">
								<view class="mtl_avatar">
									<uv-avatar src="https://img2.baidu.com/it/u=1533744753,2457505042&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500 " mode="aspectFill" size="32"></uv-avatar>
								</view>
								<view class="mtl_user">
									<view class="mtl_user_top">
										<view class="name">王五</view>
										<view class="sex"><uv-icon name="man" color="#2979ff"></uv-icon>
										</view>
										<view class="time">8小时前</view>
									</view>
									<view class="mtl_user_bottom">
										<view style="margin-right: 5px;">模特</view>
										<view class="mtl_user_bottom_rz">已认证</view>
									</view>
								</view>
							</view>
							<view class="main_top_right">
								<uv-icon name="empty-address" size="32rpx"></uv-icon>
								<view class="address">重庆</view>
							</view>
						</view>
						<view class="main_center">
							<view class="mc_text">
								<view class="mc_title word">
									这是第三个人标题
								</view>
								<view class="mc_content word">
									这是第三个人的内容介绍
								</view>
							</view>
							<view class="mc_imgs">
								<image mode="aspectFill" src="https://img2.baidu.com/it/u=682404923,1159279038&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"></image>
								<image mode="aspectFill" src="https://img2.baidu.com/it/u=3929490156,3367109101&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"></image>
								<image mode="aspectFill" src="https://img1.baidu.com/it/u=4058949291,567051643&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=1422"></image>
								<view class="img_count">
									5
								</view>
							</view>

							<view class="mc_tags">
								<view class="tag_item">
									<uv-tags text="时尚" type="error" size="mini" plain plainFill></uv-tags>
								</view>
								<view class="tag_item">
									<uv-tags text="cosplay" type="error" size="mini" plain plainFill></uv-tags>
								</view>
							</view>
						</view>
						<view class="main_bottom">
							<view class="mb_w">
								<uv-icon name="camera"></uv-icon>
								<view class="count">2</view>
							</view>
							<view class="mb_w">
								<uv-icon name="chat"></uv-icon>
								<view class="count">1</view>
							</view>
							<view class="mb_w">
								<uv-icon name="thumb-up"></uv-icon>
								<view class="count">22</view>
							</view>
						</view>
					</li>
				</ul>

			</scroll-view>
		</view>

	</view>
</template>

<script>
	import screen from "@/pages/screen/screen.vue"
	export default {
		components: {
			screen
		},
		data() {
			return {
				list: [{
					name: '关注',
				}, {
					name: '推荐',
				}, {
					name: '电影'
				}, {
					name: '科技'
				}, {
					name: '音乐'
				}, {
					name: '美食'
				}, {
					name: '文化'
				}, {
					name: '财经'
				}, {
					name: '手工'
				}]
			}
		},
		methods: {
			open() {
				uni.hideTabBar()
				this.$refs.popup.open('bottom');
			},

			close() {
				uni.showTabBar()
				this.$refs.popup.close();
			}

		}
	}
</script>

<style scoped>
	@import url(./category.css);
</style>