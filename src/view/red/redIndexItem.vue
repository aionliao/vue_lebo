<template lang="html">
	<div class="red-index-item">
		<template v-if="redIndexData.type === 'left'">
			<div class="red-index-left">
				<img v-lazy="redIndexData.imgSrc">
			</div>
			<div class="red-index-right">
				<h4>{{redIndexData.title}}</h4>
				<template v-for="subTitle in redIndexData.subTitleArr">
					<p>{{subTitle}}</p>
				</template>
			</div>
		</template>
		<template v-if="redIndexData.type === 'right'">
			<div class="red-index-right align-right">
				<h4>{{redIndexData.title}}</h4>
				<template v-for="subTitle in redIndexData.subTitleArr">
					<p>{{subTitle}}</p>
				</template>
			</div>
			<div class="red-index-left">
				<img v-lazy="redIndexData.imgSrc">
			</div>
		</template>
	</div>
</template>

<script>
export default {
	props: {
		redIndexData: [Object]
	}
};
</script>

<style lang="less">
@import '../../styles/custom.less';
@imgHei: 100px;
.red-index-item {
	background-color: #fff;
	display: flex;
	margin-bottom: @sub-module-space;
	text-align: center;
	align-items: center;
	overflow: hidden;
	white-space: nowrap;
	.red-index-left {
		width: 150px;

	}
	.red-index-right {
		flex-grow: 1;
		text-align: left;
		margin-left: 20px;
		margin-right: 0;
		&.align-right {
			margin-left: 0;
			margin-right: 20px;
			text-align: right;
		}
	}
	h4 {
		font-size: 16px;
		color: @color-base;
	}
	p {
		font-size: 14px;
		line-height: 1.5;
		color: @text-grap;
	}
	img {
		width: @imgHei;
		height: @imgHei;
	}
}
</style>
