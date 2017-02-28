<template>
	<sectionWrap class="sign">
		<headerSimple link="/" title="签到"></headerSimple>
		<div class="lemi-left">
			<conWrap>
				<lmrLayout>
					<template slot="left">我的乐米：<i>{{'4053.60'}}</i>乐米</template>
				</lmrLayout>
			</conWrap>
		</div>
		<div class="sign-calendar">
			<calendar></calendar>
		</div>
		<div class="sign-info">
			<conWrap>
				<lmrLayout type="left-right">
					<template slot="left">
						<p>本月签到次数：<i>{{20}}</i>次</p>
						<p>已经连续签到次数：<i>{{20}}</i>次</p>
					</template>
					<template slot="right">
						<i-button type="radius" innerText="签到"></i-button>
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
	import calendar from '../../components/calendar/calendar.vue';
	import iButton from '../../components/iButton/iButton.vue';

	import vueAjax from '../../public/vueAjax.js';
	import dealResCode from '../../public/dealResCode.js';
	export default {
		components: {
			sectionWrap,
			headerSimple,
			conWrap,
			Row,
			iCol,
			lmrLayout,
			calendar,
			iButton
		},
		created () {
	        vueAjax({
	            method: 'get',
	            data: {
					'userId': '174',
					'startTime': '2017-02-01',
					'endTime': '2017-02-28',
					'transactionType': '10103025'
				},
	            that: this
	        }).then((response) => {
	            let data = response.body;
	            let resCode = dealResCode(data.resCode);

	            if (resCode === '0') {
	                // this.statusConfig.carouseLoaded = true;
	                // this.carouseData = data.list;
	            }
	        }, (response) => {});
	    }
	};
</script>

<style lang="less">
	@import "sign.less";
</style>
