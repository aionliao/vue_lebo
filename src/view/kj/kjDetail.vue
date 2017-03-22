<template lang="html">
	<sectionWrap class="kj-detail" mt="98">
		<headerHigh link="back(-1)" :title="gameNoShow">
			<subHeader>
				<row>
					<i-col span="12"><div @click="changeItem" :class="{current: isCurrent}">本期详情</div></i-col>
					<i-col span="12"><div @click="changeItem" :class="{current: !isCurrent}">全部详情</div></i-col>
				</row>
			</subHeader>
		</headerHigh>
		<loading type="loading" v-if="statusConfig.loading">
			{{statusConfig.msg}}
		</loading>
		<div v-else>
			<row v-show="isCurrent">
				<i-col span="24" v-for="kjData in kjNowDatas">
					<conWrap><kjItem :obj="kjData"></kjItem></conWrap>
				</i-col>
			</row>
			<row v-show="!isCurrent">
				<i-col span="24" v-for="(kjData, index) in kjAllDatas" v-if="isShowAllList">
					<conWrap>
						<kjItem :obj="kjData" :class="{'no-bg': index !== 0}"><icon type="iconright"></icon></kjItem>
					</conWrap>
				</i-col>
			</row>
		</div>
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
	import formatTime from '../../utils/formatTime.js';
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
				isShowAllList: false,
				isCurrent: true,
				gameNo: this.$route.params.gameNo,
				issueNo: this.$route.params.issueNo,
				kjNowDatas: {},
				kjAllDatas: {},
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
					'gameNo': this.gameNo,
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
					this.kjNowDatas = dealKjAjaxData({
						data: this.getKjListData(data)
					});
					this.statusConfig.loading = false;
				} else {
					this.statusConfig.loading = true;
					this.statusConfig.msg = data.resMsg;
				}
			}, (response) => {
				this.statusConfig.loading = true;
				this.statusConfig.msg = '服务器迷路了';
			});
		},
		methods: {
			getKjListData (data) {
				let arr = [];
				let obj = {};
				obj.gameName = cpCodeShow[data.new_gameNo];
				obj.gameNo = data.new_gameNo;
				obj.winCode = data.new_winCode;
				obj.issueNo = data.new_issue;
				obj.awardDate = formatTime('ymdhms', data.new_date);

				arr.push(obj);
				return arr;
			},
			changeItem () {
				// 切换item
				this.isCurrent = !this.isCurrent;

				if (!this.isCurrent && !this.isShowAllList) {
					this.isShowAllList = true;
					this.statusConfig.loading = true;
					this.statusConfig.msg = '加载中';
					this.getKjAllDatas();
				}
				if (this.isCurrent && !this.isShowAllList) {
					this.statusConfig.loading = false;
				}
			},
			getKjAllDatas () {
				vueAjax({
					method: 'get',
					data: {
						'lotteryNo': this.gameNo,
						'transactionType': '10105027',
						'pageNo': '1',
						'pageAmount': '10'
					},
					that: this
				}).then((response) => {
					let data = response.body;
					let resCode = dealResCode(data.resCode);

					if (resCode === '0') {
						this.kjAllDatas = dealKjAjaxData({
							data: data.list
						});
						this.statusConfig.loading = false;
					} else {
						this.statusConfig.loading = true;
						this.statusConfig.msg = data.resMsg;
					}
				}, (response) => {
					this.isShowAllList = false;
					this.statusConfig.loading = true;
					this.statusConfig.msg = '服务器迷路了';
				}).bind(this);
			}
		}
	};
</script>

<style lang="less">
@import "./kjDetail.less";
</style>
