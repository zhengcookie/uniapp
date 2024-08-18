<template>
	<view class="container">
		<uv-navbar>
			<template v-slot:left>
				<view></view>
			</template>
			<template v-slot:left>
				<view>会话</view>
			</template>
			<template v-slot:right>
				<view>
					<uv-icon name="search" size="30"></uv-icon>
				</view>
			</template>
		</uv-navbar>

		<view class="main">
			<view class="system_msg">
				<view class="msg_item">
					<view class="msg_item_top">
						<view class="info" @click="toMsgNotice" 
						style="background-color: violet; 
						border-radius: 20px;">
							<view class="title">
								<view>系统消息</view>
							</view>
						</view>
						<view class="info" @click="toMsgNotice" 
						style="background-color: pink;
						border-radius: 20px;">
							<view class="title">
								<view>通话记录</view>
							</view>

						</view>
						<view class="info" @click="toMsgNotice" 
						style="background-color: blue;
						border-radius: 20px;">
							<view class="title">
								<view>亲密列表</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="user_msg">
				<view class="msg_item">
					<view class="msg_item_left">
						<view class="avatar">
							<uv-avatar mode='aspectFill'
								src="https://img1.baidu.com/it/u=3521827782,324557115&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"></uv-avatar>
						</view>
						<view class="info">
							<view class="name">用户1</view>
							<view class="content">用户1发送的消息</view>
							<view class="time">4小时前</view>
						</view>
					</view>
					<view class="msg_item_right">
						<uv-badge type="error" max="99" :value="0"></uv-badge>
					</view>
				</view>
				<view class="msg_item">
					<view class="msg_item_left">
						<view class="avatar">
							<uv-avatar
								src="https://img1.baidu.com/it/u=2244837139,2932491966&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"></uv-avatar>
						</view>
						<view class="info">
							<view class="name">用户2</view>
							<view class="content">用户2发送的消息</view>
							<view class="time">1周前</view>
						</view>
					</view>
					<view class="msg_item_right">
						<uv-badge type="error" max="99" :value="1"></uv-badge>
					</view>
				</view>
				<view class="msg_item">
					<view class="msg_item_left">
						<view class="avatar">
							<uv-avatar
								src="https://img0.baidu.com/it/u=2314194900,2023368025&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"></uv-avatar>
						</view>
						<view class="info">
							<view class="name">用户3</view>
							<view class="content">用户3发送的消息</view>
							<view class="time">2023-7-2 13.12</view>
						</view>
					</view>
					<view class="msg_item_right">
						<uv-badge type="error" max="99" :value="5"></uv-badge>
					</view>
				</view>
				<view class="msg_item">
					<view class="msg_item_left">
						<view class="avatar">
							<uv-avatar
								src="https://img0.baidu.com/it/u=956724887,980022842&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"></uv-avatar>
						</view>
						<view class="info">
							<view class="name">用户4</view>
							<view class="content">用户4发送的消息</view>
							<view class="time">2023-5-2 16.22</view>
						</view>
					</view>
					<view class="msg_item_right">
						<uv-badge type="error" max="99" :value="4"></uv-badge>
					</view>
				</view>
				<view class="msg_item">
					<view class="msg_item_left">
						<view class="avatar">
							<uv-avatar src=""></uv-avatar>
						</view>
						<view class="info">
							<view class="name">用户5</view>
							<view class="content">用户5发送的消息</view>
							<view class="time">2023-7-6 13.12</view>
						</view>
					</view>
					<view class="msg_item_right">
						<uv-badge type="error" max="99" :value="2"></uv-badge>
					</view>
				</view>
				<view class="msg_item">
					<view class="msg_item_left">
						<view class="avatar">
							<uv-avatar src=""></uv-avatar>
						</view>
						<view class="info">
							<view class="name">用户6</view>
							<view class="content">用户6发送的消息</view>
							<view class="time">2023-7-6 13.12</view>
						</view>
					</view>
					<view class="msg_item_right">
						<uv-badge type="error" max="99" :value="2"></uv-badge>
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
			toMsgNotice() {
				uni.navigateTo({
					url: "/pages/message-notice/message-notice"
				})
			},
			toAppointment() {
				uni.navigateTo({
					url: "/pages/appointment-photos/appointment-photos"
				})
			}
		}
	}
</script>

<style scoped>
	@import url(./message.css);
</style>