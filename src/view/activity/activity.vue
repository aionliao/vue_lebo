<template>
	<sectionWrap>
		<headerSimple link="/" title="活动"></headerSimple>
		<section class="activity">
			<row>
				<i-col span="24" v-for="list in activityData">
					<conWrap>
						<boxWrap
						urlType="other"
						:title="list.titile"
						:imgSrc="list.imgUrl"
						:link="list.jumpURL"
						:innerText="list.timeQuJian"
						></boxWrap>
					</conWrap>
				</i-col>
			</row>
		</section>
	</sectionWrap>
</template>

<script>
	import sectionWrap from '../../components/sectionWrap/sectionWrap.vue';
	import headerSimple from '../../components/headers/headerSimple.vue';
	import boxWrap from '../../components/boxWrap/boxWrap.vue';
	import conWrap from '../../components/conWrap/conWrap.vue';
	import { Row, iCol } from '../../components/layout/index.js';

	import vueAjax from '../../public/vueAjax.js';
	import dealResCode from '../../public/dealResCode.js';
	export default {
		components: {
			sectionWrap,
			headerSimple,
			boxWrap,
			conWrap,
			Row,
			iCol
		},
		data () {
			return {
				statusConfig: {
					loadingConfig: false
				},
				activityData: {}
			};
		},
		created () {
	        vueAjax({
	            method: 'get',
	            data: {
					'transactionType': '10101022',
					'userId': '',
					'messageType': '2',
					'sourceType': '2',
					'pageAmount': '10',
					'pageNo': '1'
				},
	            that: this
	        }).then((response) => {
	            let data = response.body;
	            let resCode = dealResCode(data.resCode);

	            if (resCode === '0') {
	                this.statusConfig.loadingConfig = true;
	                this.activityData = this.dealData(data.list);
	            }
	        }, (response) => {});
	    },
		methods: {
			dealData (data) {
				for (let i = 0, len = data.length; i < len; i++) {
					let timeQuJian = data[i].timeQuJian;
					let timeQuJianArr = timeQuJian.split('_');
					let timeQuJianArr0 = timeQuJianArr[0].split(' ')[0];
					let timeQuJianArr1 = timeQuJianArr[1].split(' ')[0];
					let timeQuJianStr = `活动时间${timeQuJianArr0}至${timeQuJianArr1}`;

					data[i].timeQuJian = timeQuJianStr;
				}
				return data;
			}
		}
	};
</script>

<style lang="less">
@import "activity.less";
</style>
