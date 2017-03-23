<template>
	<sectionWrap class="kj-list mb-10">
		<headerSimple link="/" title="开奖信息"></headerSimple>
		<loadingStatus status="loading" v-if="statusConfig.loading">
			{{statusConfig.msg}}
		</loadingStatus>
		<row v-else>
			<i-col span="24" v-for="kjData in kjDatas">
				<router-link :to="`/kjDetail/${kjData.gameNo}/issueNo/${kjData.issueNo}`">
					<conWrap>
						<kjItem :obj="kjData">
							<icon type="iconright"></icon>
						</kjItem>
					</conWrap>
				</router-link>
			</i-col>
		</row>
	</sectionWrap>
</template>

<script>
	import { Row, iCol } from '../../components/layout/index.js';
	import sectionWrap from '../../components/sectionWrap/sectionWrap.vue';
	import headerSimple from '../../components/headers/headerSimple.vue';
	import kjItem from '../../components/kjItem/kjItem.vue';
	import icon from '../../components/icon/icon.vue';
	import conWrap from '../../components/conWrap/conWrap.vue';
	import loadingStatus from '../../components/loadingStatus/loadingStatus.vue';

	import vueAjax from '../../public/vueAjax.js';
	import dealResCode from '../../public/dealResCode.js';
	import dealKjAjaxData from '../../public/dealKjAjaxData.js';

	const orderArr = ['TC_DLT', 'TC_QXC', 'TC_PL3', 'TC_PL5', 'TC_JCZQ', 'TC_JCLQ',
		'TC_SF14', 'TC_SF9', 'TC_BQ6', 'TC_JQ4'];

	export default {
		components: {
			headerSimple,
			sectionWrap,
			conWrap,
			kjItem,
			Row,
			iCol,
			icon,
			loadingStatus
		},
		data () {
			return {
				kjDatas: {},
				statusConfig: {
					loading: true,
					msg: '加载中'
				}
			};
		},
		created () {
			vueAjax({
				method: 'get',
				data: {
					'transactionType': '10105028'
				},
				that: this
			}).then((response) => {
				let data = response.body;
				let resCode = dealResCode(data.resCode);

				if (resCode === '0') {
					this.kjDatas = dealKjAjaxData({
						data: data.list,
						orderArr: orderArr
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
	@import "kjList.less";
</style>
