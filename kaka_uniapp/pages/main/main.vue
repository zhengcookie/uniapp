<template>
	<view class="container">
		<uv-navbar>
			<template v-slot:left>

			</template>
			<template v-slot:center>
				<view class="avatar">
					<uv-avatar src='https://img2.baidu.com/it/u=661118040,54795593&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500' size="28"></uv-avatar>
				</view>
				<view class="username">小赵</view>
				<view class="follow">
					<uv-button type='error' shape='circle' :plain="true" text="关注" size="mini "></uv-button>
				</view>
			</template>
			<template v-slot:right>
				<uv-icon name="more-dot-fill" size="24"></uv-icon>
			</template>
		</uv-navbar>

		<view class="main">
			<view class="img-list">
				<!-- 重做图片显示模块 -->
				<view class="img-list-one" v-if="count==1">
					<img src="https://img0.baidu.com/it/u=1954123079,62244880&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500" width="100%"></img>
				</view>

				<view class="img-list-two" v-if="count==2">
					<image src="https://img2.baidu.com/it/u=4106341224,2924435310&fm=253&fmt=auto&app=138&f=JPEG?w=291&h=499" mode="widthFix"></image>
					<image src="https://img0.baidu.com/it/u=1954123079,62244880&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500" mode="widthFix"></image>
				</view>

				<view class="img-list-five" v-if="count==5">
					<view class="img-list-five-top">
						<image src="https://img0.baidu.com/it/u=1954123079,62244880&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500" mode="aspectFill" style="width: 50%;height: 600rpx;"
							class="fadeImg"></image>
						<image src="https://img1.baidu.com/it/u=15652192,3284714245&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=889" mode="aspectFill" style="width: 50%;height: 600rpx;"
							class="fadeImg"></image>
					</view>
					<view class='img-list-five-down'>
						<image src="https://img0.baidu.com/it/u=2025772959,2581006240&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=1083" mode="aspectFill"></image>
						<image src="https://img2.baidu.com/it/u=1196632544,116923444&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500" mode="aspectFill"></image>
						<image src="https://img0.baidu.com/it/u=522748515,4079143323&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=889" mode="aspectFill"></image>
					</view>
				</view>

				<uv-grid :border="false" v-if="count==3||count==4||count==6||count==8">
					<uv-grid-item v-for="item in 3 " :key="index">
						<image src="../../static/logo.png" mode="aspectFill" style="width: 100%;height: 600rpx;"
							class="fadeImg"></image>
					</uv-grid-item>

				</uv-grid>


				<view v-if="count==7">
					<view class="img-list-five-top">
						<image src="../../static/logo.png" mode="aspectFill" style="height: 500rpx;"></image>
						<image src="../../static/logo.png" mode="aspectFill" style="height: 500rpx;"></image>
					</view>
					<view class="img-list-five-top">
						<image src="../../static/logo.png" mode="aspectFill" style="height: 500rpx;"></image>
						<image src="../../static/logo.png" mode="aspectFill" style="height: 500rpx;"></image>
					</view>
					<view class='img-list-five-down'>
						<image src="../../static/logo.png" mode="aspectFill"></image>
						<image src="../../static/logo.png" mode="aspectFill"></image>
						<image src="../../static/logo.png" mode="aspectFill"></image>
					</view>
				</view>


				<uv-grid :border="false" v-if="count==9">
					<uv-grid-item v-for="item in 9">
						<view class="card">
							<image src="../../static/logo.png" mode="aspectFill" style="width: 300rpx;height: 300rpx;"
								class="fadeImg" />
						</view>
					</uv-grid-item>
				</uv-grid>
			
			    <view class="img-tags">
			    	<view class="tag-item">
			    		<uv-tags text="标签" plain size="mini" type="error" plainFill ></uv-tags>
			    	</view>
					<view class="tag-item">
						<uv-tags text="标签" plain size="mini" type="error" plainFill></uv-tags>
					</view>
			    </view>
			
			</view>
			
			

			<view class="userInfo">
				<view class="ui-top">
					<view class="ui-top-left">
						<view class="uitf-avatar">
							<uv-avatar src='https://img2.baidu.com/it/u=661118040,54795593&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500' size="44"></uv-avatar>
						</view>
						<view class="uitf-user">
							<view class="uitf-name">
								<view class="un-username">小赵</view>
								<view class="icon"></view>
							</view>
							<view class="uitf-info">
								<view class="ui-item">摄影师</view>
								<view class="ui-item">|</view>
								<view class="ui-item">广州</view>
							</view>
						</view>
					</view>
					<view class="ui-top-right">
						<uv-button type="error" :plain="true" text="+关注" size="mini"></uv-button>
					</view>
				</view>
				<view class="ui-center">
					<view class="ui-info">
						<view class="uc-item">
							<view class="uc-item-top">作品</view>
							<view class="uc-item-count">7</view>
						</view>
						<view class="uc-item">
							<view class="uc-item-top">好评率</view>
							<view class="uc-item-count">95%</view>
						</view>
						<view class="uc-item">
							<view class="uc-item-top">来到咔咔</view>
							<view class="uc-item-count">6.7年</view>
						</view>
					</view>
				</view>
				<view class="ui-bottom">
					<view class="other-imgs">
						<image src="https://img0.baidu.com/it/u=1954123079,62244880&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500" mode="aspectFill"></image>
						<image src="https://img0.baidu.com/it/u=1376296541,291656036&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500" mode="aspectFill"></image>
						<image src="https://img2.baidu.com/it/u=3319777290,4251232858&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500" mode="aspectFill"></image>
						<image src="https://img1.baidu.com/it/u=3349240689,1251335324&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500" mode="aspectFill"></image>
					</view>
				</view>
			</view>

			<view class="comment">
				<view class="comment-input">
					<view class="ci-avatar">
						<uv-avatar src="https://img2.baidu.com/it/u=661118040,54795593&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500" size="30"></uv-avatar>
					</view>
					<view class="ci-lable">请输入内容</view>
				</view>

				<view class="comment-main">
					<ul>
						<li v-for="(commentOne, index ) in 8" :key="index" >
							<view class="item">
								<view class="comment-one">
									<view class="comment-item">
										<view class="item-top">
											<view class="left">
												<uv-avatar src="https://img2.baidu.com/it/u=661118040,54795593&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"  size="28"></uv-avatar>
												<view class="username">小赵</view>
												<view class="tag">作者</view>
											</view>

											<view class="right">
												<uv-icon name="thumb-up"  size="22"></uv-icon>
												<view class="ziti">12</view>
											</view>
										</view>

										<view class="item-main">
											第一条评论<span class="time">4小时前</span>
										</view>
									</view>
								</view>

								<view>
									<view class="comment-two" v-for="(commentTwo, index2) in  3" :key="index2">
										<view class="comment-item">
											<view class="item-top">
												<view class="left">
													<uv-avatar src="https://img2.baidu.com/it/u=2792248394,912586866&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=499" size="28"></uv-avatar>
													<view class="username">张三</view>
													<!-- <view class="tag">作者</view> -->
												</view>

												<view class="right">
													<uv-icon name="thumb-up"  size="22"></uv-icon>
													<!-- <tui-icon v-else @click="addAgree(commentTwo, index , index2)"
														name="like" size="15"></tui-icon> -->
													<view class="ziti">32</view>
												</view>
											</view>

											<view class="item-main">
												回复<span
													class="reply">小赵</span>:22
												<span class="time">3小时前</span>
											</view>

											<!-- <view class="item-main" @click="clickItem(commentTwo, index)" v-else>
												回复<span
													class="reply">{{ commentTwo.replyName }}</span>:{{ commentTwo.content }}
												<span class="time">{{ commentTwo.time }}</span>
											</view> -->
										</view>
									</view>

									<view class="other">
										<view>
											点击加载更多</view>
									</view>

								</view>
							</view>
						</li>
					</ul>
				</view>
			</view>
		</view>



		<view class="fotter">
			<view class="f-left">
				
				<view class="f-item">
					<view class="money">￥220</view>
				</view>
				
				<view class="f-item">
					<uv-icon name="eye" size="24"></uv-icon>
					<view class="count">12</view>
				</view>
				<view class="f-item">
					<uv-icon name="thumb-up" size="24"></uv-icon>
					<view class="count">12</view>
				</view>
			</view>
			<view class="f-right">
				<button class="rel-btn">联系</button>
				<button class="pho-btn">视频呼叫</button>
			</view>
		</view>

	</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				count: 5
			}
		},
		methods: {

		}
	}
</script>

<style scoped>
	@import url(./main.css);
</style>