<template>
	<view class="container">
		<uv-navbar>
			<template v-slot:center>
				发布作品
			</template>
			<template v-slot:right>
				<uv-button shape="circle" type="error" text="发布" size="mini"></uv-button>
			</template>
		</uv-navbar>
		<view class="main">
			<view class="img-upload">
				<uv-upload :fileList="fileList" name="3" multiple :maxCount="9" :previewFullImage="true"></uv-upload>
			</view>
			<view class="center">
				<uv-textarea height='100' v-model="value" border="bottom" count placeholder="请输入内容"
					maxlength='300'></uv-textarea>
			</view>

			<view class="info">
				<ul>
					<li class="info-item">
						<view class="item-left">
							<uv-icon name="map"></uv-icon>
							<view style="margin-left: 2px;">约拍地点</view>
						</view>
						<view class="item-right" @click="openPicker">
							<view class="address">广州</view>
							<uv-icon name="arrow-right"></uv-icon>
							<uv-picker ref="picker" :columns="columns" @confirm="confirm"></uv-picker>
						</view>
					</li>
					<li class="info-item">
						<view class="item-left">
							<uv-icon name="order"></uv-icon>
							<view style="margin-left: 2px;">详细地址</view>
						</view>
						<view class="item-right">
							<uv-input placeholder="请输入详细地址" border='none' v-model="value" @change="change"></uv-input>
						</view>
					</li>
					<li class="info-item">
						<view class="item-left">
							<uv-icon name="clock"></uv-icon>
							<view style="margin-left: 2px;">约拍时间</view>
							
						</view>
						<view class="item-right" @click="open">
							<uv-icon name="arrow-right"></uv-icon>
							<uv-calendar ref="calendar" @confirm="confirm"></uv-calendar>
						</view>
					</li>
					<li class="info-item">
						<view class="item-left">
							<uv-icon name="red-packet"></uv-icon>
							<view style="margin-left: 2px;">价格</view>
							
						</view>
						<view class="item-right">
							<uv-input placeholder="0.00" border='none' v-model="value" @change="change"></uv-input>
						</view>
					</li>
				</ul>
			</view>

			<view class="tags">
				<view class="tag-title">选择标签</view>
				<view class="tag-list">
					<view class="tag">
						<uv-tags text="标签" plain size="mini" type="error"></uv-tags>
					</view>
					<view class="tag">
						<uv-tags text="标签" plain size="mini" type="error"></uv-tags>
					</view>
					<view class="tag">
						<uv-tags text="标签" plain size="mini" type="error"></uv-tags>
					</view>
					<view class="tag">
						<uv-tags text="标签" plain size="mini" type="error"></uv-tags>
					</view>
					<view class="tag">
						<uv-tags text="标签" plain size="mini" type="error"></uv-tags>
					</view>
					<view class="tag">
						<uv-tags text="标签" plain size="mini" type="error"></uv-tags>
					</view>
					<view class="tag">
						<uv-tags text="标签" plain size="mini" type="error"></uv-tags>
					</view>
					<view class="tag">
						<uv-tags text="标签" plain size="mini" type="error"></uv-tags>
					</view>
					<view class="tag">
						<uv-tags text="标签" plain size="mini" type="error"></uv-tags>
					</view>
					<view class="tag">
						<uv-tags text="标签" plain size="mini" type="error"></uv-tags>
					</view>
					<view class="tag">
						<uv-tags text="标签" plain size="mini" type="error"></uv-tags>
					</view>
					<view class="tag">
						<uv-tags text="标签" plain size="mini" type="error"></uv-tags>
					</view>
					<view class="tag">
						<uv-tags text="标签" plain size="mini" type="error"></uv-tags>
					</view>
					<view class="tag">
						<uv-tags text="标签" plain size="mini" type="error"></uv-tags>
					</view>
					<view class="tag">
						<uv-tags text="标签" plain size="mini" type="error"></uv-tags>
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
				fileList: [
					
				],
				columns: [
					['中国', '美国', '日本']
				]
			}
		},
		created() {
			uni.hideTabBar()
		},
		methods: {
			open() {
				this.$refs.calendar.open();
			},
			openPicker() {
				this.$refs.picker.open();
			},
		}
	}
</script>

<style scoped>
	@import url(./push.css);
</style>