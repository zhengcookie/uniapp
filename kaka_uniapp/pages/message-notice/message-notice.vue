<template>
	<view class="container">
		<uv-navbar>
			<template v-slot:left>
				
			</template>
			<template v-slot:center>
				通知消息
			</template>
		</uv-navbar>
		
		<view class="main">
			
			<ul>
				<li class="notice-box">
					<view class="time">2分钟前</view>
					<view class="center">
						<view class="title">这是第一条通知</view>
					</view>
					
				</li>
				<li class="notice-box">
					<view class="time">1小时前</view>
					
					<view class="center">
						<view class="title">这是第2条通知</view>
						<view class="content">
							打算把的那瞬间那不能骄傲北京晚报覅囧 
						</view>
					</view>
					
				</li>
				<li class="notice-box">
					<view class="time">2023-07-16 14:20</view>
					
					<view class="center">
						<view class="title">这是第三条标题</view>
						<view class="content">
							东南蚕丝哦你玩吧不得不i豆瓣不爱护我华松祭祀哦那
						</view>
					</view>
					
				</li>
				<li class="notice-box">
					<view class="time">2023-6-3 14:20</view>
					
					<view class="center">
						<view class="title">这是第四条标题</view>
						<view class="content">
							内胆吵闹八四哦加哦脾气五年是否还不能把八十四哦霍金斯哦奥i
						</view>
					</view>
					
				</li>
			</ul>
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
@import url(./message-notice.css);
</style>
