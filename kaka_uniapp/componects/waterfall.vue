<template>
	<uv-waterfall  ref="waterfall" v-model="list" column-gap="8" @changeList="changeList">
		<!-- 第一列数据 -->
		<template v-slot:list1>
			<!-- 为了磨平部分平台的BUG，必须套一层view -->
			<view>
				<view v-for="(item, index) in list1" :key="item.id" class="waterfall-item">
					<view class="waterfall-item__image">
						<image :src="item.image" mode="widthFix" @click="toMain()"></image>
					    <view class="img-count">
					    	3
					    </view>
					    <view class="videoTag">
					    	<uv-icon name="play-circle" color="#7a7a7a" size="20"></uv-icon>
					    </view>
					</view>
	
					<view class="card">
						<view class="card_title">这是一个标题</view>
						<view class="card_main">
							<view class="card_main_left">
								<view class="card_main_left_avatar">
									<uv-avatar src="" mode="cover" size="28"></uv-avatar>
								</view>
								<view class="card_main_left_main">
									<view class="card_main_left_main_top">
										<view class="name">名字</view>
										<view class="sex"><uv-icon name="man" color="#2979ff"></uv-icon>
										</view>
									</view>
									<view class="card_main_left_main_bottom">
										<view>摄影师</view>
										<view class="split">|</view>
										<view>重庆</view>
									</view>
								</view>
							</view>
							<view class="card_main_right">
								<uv-icon name="heart"></uv-icon>
								<view class="agree_nums">22</view>
							</view>
						</view>
					</view>
				</view>
	
			</view>
		</template>
		<!-- 第二列数据 -->
		<template v-slot:list2>
			<!-- 为了磨平部分平台的BUG，必须套一层view -->
			<view>
				<view v-for="(item, index) in list2" :key="item.id" class="waterfall-item">
					<view class="waterfall-item__image">
						<image :src="item.image" mode="widthFix" @click="toMain()"></image>
					    <view class="img-count">
					    	3
					    </view>
					    <view class="videoTag">
					    	<uv-icon name="play-circle" color="#7a7a7a" size="20"></uv-icon>
					    </view>
					</view>
	
					<view class="card">
						<view class="card_title">这是一个标题</view>
						<view class="card_main">
							<view class="card_main_left">
								<view class="card_main_left_avatar">
									<uv-avatar src="" mode="cover" size="28"></uv-avatar>
								</view>
								<view class="card_main_left_main">
									<view class="card_main_left_main_top">
										<view class="name">名字</view>
										<view class="sex"><uv-icon name="man" color="#2979ff"></uv-icon>
										</view>
									</view>
									<view class="card_main_left_main_bottom">
										<view>摄影师</view>
										<view class="split">|</view>
										<view>重庆</view>
									</view>
								</view>
							</view>
							<view class="card_main_right">
								<uv-icon name="heart"></uv-icon>
								<view class="agree_nums">22</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</template>
	</uv-waterfall>
</template>

<script>
	export default {
		data(){
			return{
				list: [], // 瀑布流全部数据
				list1: [], // 瀑布流第一列数据
				list2: [], // 瀑布流第二列数据
			}
		},
		
		async created() {
			const {
				data
			} = await this.getData()
			console.log(data)
			this.list = data;
		},
		
		methods: {
			
			// 这点非常重要：e.name在这里返回是list1或list2，要手动将数据追加到相应列
			changeList(e) {
				this[e.name].push(e.value);
			},
			
			// 模拟的后端数据
			getData() {
				console.log(11)
				return new Promise((resolve) => {
					const imgs = [
						"https://img2.baidu.com/it/u=3412909306,1442259109&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
						"https://img1.baidu.com/it/u=3849409103,1180457666&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
						"https://img2.baidu.com/it/u=918835821,3340688162&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=1082",
						"https://img2.baidu.com/it/u=1955395411,639086901&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
						"https://img1.baidu.com/it/u=2119313609,766967026&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
						"https://img2.baidu.com/it/u=3082804013,660672339&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
						"https://img0.baidu.com/it/u=2670794157,1132550665&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=889",
						"https://img0.baidu.com/it/u=1925646985,257133815&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
						"https://img0.baidu.com/it/u=2989421989,3819802583&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
						"https://img1.baidu.com/it/u=2825332760,3336729467&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
						"https://img0.baidu.com/it/u=979887732,3636171879&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
						"https://img1.baidu.com/it/u=3784852545,2548785503&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
						"https://img2.baidu.com/it/u=1242120849,2077793669&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=505",
						"https://img1.baidu.com/it/u=151556987,1690211059&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
					];
					let list = [];
					const doFn = (i) => {
						const randomIndex = Math.floor(Math.random() * 10);
						return {
							id: 1,
							image: imgs[randomIndex],
							title: i % 2 == 0 ? `(${this.list.length + i + 1})体验uv-ui框架` :
								`(${this.list.length + i +1})uv-ui支持多平台`,
							desc: i % 2 == 0 ? `(${this.list.length + i + 1})欢迎使用uv-ui，uni-app生态专用的UI框架` :
								`(${this.list.length + i})开发者编写一套代码， 可发布到iOS、Android、H5、以及各种小程序`
						}
					};
					// 模拟异步
					setTimeout(() => {
						for (let i = 0; i < 20; i++) {
							list.push(doFn(i));
						}
						resolve({
							data: list
						});
					}, 200)
				})
			}
		}
	}
</script>

<style scoped>
	image{
		width: 100%;
		border-top-left-radius: 8px;
		border-top-right-radius: 8px;
	}
	
	.waterfall-item{
		background-color: #fff;
		border-radius: 8px;
		margin-bottom: 5px;
		padding-bottom: 5px;
		border: 1px solid #f4f4f4;
	}
	
	.waterfall-item__image{
		position: relative;
	}
	
	.img-count{
		background-color: #7a7a7a;
		position: absolute;
		text-align: center;
		width: 30rpx;
		height: 45rpx;
		right: 10rpx;
		bottom: 14rpx;
		opacity: 0.5;
		color: #fff;
	}
	
	.videoTag{
		position: absolute;
		right: 10rpx;
		top: 14rpx;
		opacity: 0.5;
	}
	
	.card{
		margin: auto;
		width: 95%;
	}
	/* 显示省略号 */
	.card_title{
		width: 300rpx;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		font-size: 28rpx;
	}
	
	.card_main{
		margin-top: 5px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	
	.card_main_left{
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	
	.card_main_left_main{
		
	}
	
	.card_main_left_main_top{
		display: flex;
		justify-content: left;
		align-items: center;
	}
	
	.card_main_left_main_top .name{
		font-size: 26rpx;
	}
	
	.card_main_left_main_bottom{
		color: #646464;
		font-size: 24rpx;
		display: flex;
		justify-content: left;
		align-items: center;
	}
	
	.card_main_left_main_bottom .split{
		margin-left: 5px;
		margin-right: 5px;
	}
	
	.card_main_right{
		display: flex;
		justify-content: left;
		align-items: center;
	}
	
	.card_main_right .agree_nums{
		font-size: 24rpx;
		color: #bfbfbf;
	}
</style>