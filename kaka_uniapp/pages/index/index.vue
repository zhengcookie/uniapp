<template>
	<view class="container">
		<uv-navbar>
			<template v-slot:left>
				<view></view>
			</template>
			<template v-slot:center>
				<view class="index_top_center">
					<uv-tabs lineColor="#f56c6c" itemStyle="padding-left: 15px; padding-right: 15px;  " :current='index'
						:list="top_list" @click="change"></uv-tabs>
				</view>
			</template>

		</uv-navbar>

		<view class="index_center">
			<follow-trend v-if='index==0'></follow-trend>

			<!-- 瀑布流 start-->
			<view v-if='index==1'>
				<scroll-view scroll-y class="page" refresher-background='#f4f4f4' :refresher-enabled='true'>

					<uv-waterfall ref="waterfall" v-model="list" column-gap="8" @changeList="changeList"
						class="waterfall">
						<!-- 第一列数据 -->
						<template v-slot:list1>
							<!-- 为了磨平部分平台的BUG，必须套一层view -->
							<view>
								<view v-for="(item, index) in list1" :key="index" class="waterfall-item">
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
													<uv-avatar :src="item.image" mode="cover" size="28"></uv-avatar>
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
								<view v-for="(item, index) in list2" :key="index" class="waterfall-item">
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
													<uv-avatar :src="item.image" mode="cover" size="28"></uv-avatar>
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
				</scroll-view>
			</view>
			<!-- 瀑布流 end-->
		</view>



	</view>
</template>

<script>
	import followTrend from "@/pages/follow-trends/follow-trends.vue"

	export default {
		components: {
			followTrend
		},
		data() {
			return {
				index: 1,
				top_list: [{
						name: '聊天',
					}, {
						name: '视频',
					},{
						name: '足球宝贝'
					},{
						name:"高额"
					},{
						name:"中文"
					},{
						name:"热门"
					}
				],

				list_tags: [{
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
				}],

				list: [], // 瀑布流全部数据
				list1: [], // 瀑布流第一列数据
				list2: [], // 瀑布流第二列数据

			}
		},
		async onLoad() {
			const {
				data
			} = await this.getData();
			this.list = data;
		},
		methods: {

			toSearch() {
				uni.navigateTo({
					url: "/pages/search/search"
				})
			},

			toMain() {

				uni.navigateTo({
					url: "/pages/main/main"
				})
			},

			change(e) {
				this.index = e.index
			},

			// 这点非常重要：e.name在这里返回是list1或list2，要手动将数据追加到相应列
			changeList(e) {
				this[e.name].push(e.value);
			},
			// 模拟的后端数据
			getData() {
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
							allowEdit: i == 0,
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
	@import url(./index.css);
</style>