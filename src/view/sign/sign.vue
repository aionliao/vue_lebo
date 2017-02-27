<template>
	<sectionWrap class="sign">
		<headerSimple
			link="/"
			title="签到"
		></headerSimple>
		<div class="lemi-left">
			<conWrap>
				<lmrLayout>
					<template slot="left">我的乐米：<i>{{'4053.60'}}</i>乐米</template>
				</lmrLayout>
			</conWrap>
		</div>
		<div class="sign-info">
			<conWrap>
				<lmrLayout type="left-right">
					<template slot="left">
						<p>本月签到次数：<i>{{20}}</i>次</p>
						<p>已经连续签到次数：<i>{{20}}</i>次</p>
					</template>
					<template slot="right">
						<button>签到</button>
					</template>
				</lmrLayout>
			</conWrap>
		</div>
		<conWrap class="instruct">
			签到说明：第一天登录，+10乐米，第二天登录，+20乐米 …… 第7天登录，+70乐米，第八天登录，+70乐米。登录必须连续，出现断点将从第一天开始，按月计算。
		</conWrap>
	</sectionWrap>
</template>

<script>
	import { Row, iCol } from '../../components/layout/index.js';
	import sectionWrap from '../../components/sectionWrap/sectionWrap.vue';
	import headerSimple from '../../components/headerSimple/headerSimple.vue';
	import conWrap from '../../components/conWrap/conWrap.vue';
	import lmrLayout from '../../components/layout/lmrLayout.vue';

	export default {
		components: {
			sectionWrap,
			headerSimple,
			conWrap,
			Row,
			iCol,
			lmrLayout
		}
	};
</script>

<style lang="less">
	@import "sign.less";
</style>
