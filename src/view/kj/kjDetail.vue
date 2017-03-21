<template lang="html">
	<sectionWrap class="kj-detail" mt="98">
		<headerHigh link="/kj" :title="gameNoShow">
			<subHeader>
				<row>
					<i-col span="12"><div :class="{current: isCurrent}">本期详情</div></i-col>
					<i-col span="12"><div :class="{current: !isCurrent}">全部详情</div></i-col>
				</row>
			</subHeader>
		</headerHigh>
		<loading type="loading" v-if="statusConfig.loading">
			{{statusConfig.msg}}
		</loading>
		<row v-else>
			<i-col span="24" v-for="kjData in kjDatas">
				<conWrap><kjItem :obj="kjData"></kjItem></conWrap>
			</i-col>
		</row>
	</sectionWrap>
</template>

<script>
	import { Row, iCol } from '../../components/layout/index.js';
	import sectionWrap from '../../components/sectionWrap/sectionWrap.vue';
	import headerHigh from '../../components/headers/headerHigh.vue';
	import subHeader from '../../components/headers/subHeader.vue';
	import kjItem from '../../components/kjItem/kjItem.vue';
	import icon from '../../components/icon/icon.vue';
	import conWrap from '../../components/conWrap/conWrap.vue';
	import loading from '../../components/loading/loading.vue';

	import vueAjax from '../../public/vueAjax.js';
	import dealResCode from '../../public/dealResCode.js';
	import dealKjAjaxData from '../../public/dealKjAjaxData.js';
	import cpCodeShow from '../../config/cpCodeShow.js';
	export default {
		components: {
			headerHigh,
			sectionWrap,
			conWrap,
			kjItem,
			Row,
			iCol,
			icon,
			loading,
			subHeader
		},
		data () {
			return {
				isCurrent: true,
				gameNo: this.$route.params.gameNo,
				issueNo: this.$route.params.issueNo,
				kjDatas: {},
				statusConfig: {
					loading: true,
					msg: '加载中'
				}
			};
		},
		computed: {
			gameNoShow () {
	            return `${cpCodeShow[this.gameNo]}开奖`;
	        }
		},
		created () {
			vueAjax({
				method: 'get',
				data: {
					'gameNo': 'TC_DLT',
					'transactionType': '10105002',
					'betPlatform': '1',
					'startTime': '',
					'endTime': '',
					'issue': this.issueNo
				},
				that: this
			}).then((response) => {
				let data = response.body;
				let resCode = dealResCode(data.resCode);

				if (resCode === '0') {
					this.kjDatas = dealKjAjaxData({
						data: data.list
					});
					this.statusConfig.loading = false;
				} else {
					this.statusConfig.loading = false;
					this.statusConfig.msg = data.resMsg;
				}
			}, (response) => {
				this.statusConfig.loading = false;
				this.statusConfig.msg = '服务器迷路了';
			});
		}
	};
</script>

<style lang="less">
@import "./kjDetail.less";
</style>
