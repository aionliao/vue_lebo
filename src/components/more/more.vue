<template lang="html">
	<div class="more">
		<slot></slot>
		<div v-if="isLoading" class="loading-more">加载中...</div>
		<div v-else class="loading-more" @click="addPageNo">点击加载更多</div>
	</div>
</template>

<script>
export default {
	props: {
		pageNo: {
			type: [String, Number],
			default: 1
		},
		moreStatus: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		isLoading () {
			return this.moreStatus;
		}
	},
	methods: {
		addPageNo () {
			if (this.isLoading) {
				return false;
			}
			this.$emit('addPageNo');
		}
	}
};
</script>

<style lang="less">
@import '../../styles/custom';
@loadingMoreHei: 36px;
.loading-more {
	background-color: @body-background;
	text-align: center;
	height: @loadingMoreHei;
	line-height: @loadingMoreHei;
	font-size: 14px;
}
</style>
