<template>
	<sectionWrap mt="60" class="trend-index">
		<headerSimple link="/" title="走势图"></headerSimple>
		<template v-for="trendData in trendDataArr">
			<trendIndexItem :trendData="trendData"></trendIndexItem>
		</template>
		<p class="text-center">更多走势敬请期待</p>
	</sectionWrap>
</template>


<script>
	import sectionWrap from '../../components/sectionWrap/sectionWrap.vue';
	import headerSimple from '../../components/headers/headerSimple.vue';
	import trendIndexItem from './trendIndexItem.vue';
	import trendIndexConfig from './trendIndexConfig.js';

	export default {
		components: {
			sectionWrap,
			headerSimple,
			trendIndexItem
		},
		data () {
			return {
				trendDataArr: trendIndexConfig
			};
		}
	};
</script>

<style lang="less">
@import '../../styles/custom.less';
@imgHei: 50px;

.trend-index {
	font-size: 16px;
	img{
		width: @imgHei;
	}
	.con-wrap {
		padding: 10px;
		background-color: #fff;
		display: flex;
		margin-bottom: @sub-module-space;
	}
	.text-center {
		font-size: 14px;
		color: @text-grap;
		line-height: 2;
	}
}


</style>
