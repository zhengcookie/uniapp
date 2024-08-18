<template>
	<view class="container">
		<uv-navbar>
			<template v-slot:center>
				<uv-tabs :list="tabList" @click="click" lineColor="#f56c6c"></uv-tabs>
			</template>
		</uv-navbar>

		<view class="main">
			<ul>
				<li class="ap-item">
					<view class="top">
						<view class="t-left">
							<view class="title">约摄影师 <span class="money">￥200</span> </view>
							<view class="time">2分钟前</view>
						</view>
						<view class="t-right">
							<uv-icon name="map" size="22"></uv-icon>
							<view>广州</view>
						</view>
					</view>

					<view class="center">
						<view class="content">第一条的内容</view>
						<view class="img-list">
							<image
								src="https://img2.baidu.com/it/u=638898484,1964740158&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
								mode="aspectFill"></image>
							<image
								src="https://img2.baidu.com/it/u=793183070,586971136&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
								mode="aspectFill"></image>
							<image
								src="https://img2.baidu.com/it/u=185911472,2346830546&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
								mode="aspectFill"></image>
						</view>
						<view class="count">
							3
						</view>
					</view>

					<view class="fotter">
						<view class="type">
							<view>处理中...</view>
						</view>
						<view class="btn">
							<button class="cancel_btn">取消</button>
							<button class="confirm_btn">确认</button>
						</view>
					</view>
				</li>

				<li class="ap-item">
					<view class="top">
						<view class="t-left">
							<view class="title">约模特 <span class="money">￥200</span> </view>
							<view class="time">2小时前</view>
						</view>
						<view class="t-right">
							<uv-icon name="map" size="22"></uv-icon>
							<view>深圳</view>
						</view>
					</view>

					<view class="center">
						<view class="content">这是第二条的内容</view>
						<view class="img-list">
							<image
								src="https://img0.baidu.com/it/u=2125522214,2438893336&fm=253&fmt=auto&app=138&f=JPEG?w=501&h=500"
								mode="aspectFill"></image>
							<image
								src="https://img0.baidu.com/it/u=658751364,427006201&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400"
								mode="aspectFill"></image>
							<image
								src="https://img1.baidu.com/it/u=2594648397,3418346546&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
								mode="aspectFill"></image>
						</view>
						<view class="count">
							4
						</view>
					</view>

					<view class="fotter">
						<view class="type">
							<view>处理中...</view>
						</view>
						<view class="btn">
							<button class="cancel_btn">取消</button>
							<button class="confirm_btn">确认</button>
						</view>
					</view>
				</li>

				<li class="ap-item">
					<view class="top">
						<view class="t-left">
							<view class="title">约化妆师 <span class="money">￥200</span> </view>
							<view class="time">2小时前</view>
						</view>
						<view class="t-right">
							<uv-icon name="map" size="22"></uv-icon>
							<view>北京</view>
						</view>
					</view>

					<view class="center">
						<view class="content">第三条的内容</view>
						<view class="img-list">
							<image
								src="https://img1.baidu.com/it/u=3423295322,3710518433&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
								mode="aspectFill"></image>
							<image
								src="https://img0.baidu.com/it/u=2687706649,610570956&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
								mode="aspectFill"></image>
							<image
								src="https://img0.baidu.com/it/u=1058237607,2246521563&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
								mode="aspectFill"></image>
						</view>
						<view class="count">
							3
						</view>
					</view>

					<view class="fotter">
						<view class="type">
							<view>处理中...</view>
						</view>
						<view class="btn">
							<button class="cancel_btn">取消</button>

							<button class="confirm_btn">确认</button>
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
				tabList: [{
						name: '约拍',
					},
					{
						name: '进行中',
					},
					{
						name: '已完成',
					}
				]
			}
		},
		methods: {

		}
	}
</script>

<style scoped>
	@import url(./appointment-photos.css);
</style>