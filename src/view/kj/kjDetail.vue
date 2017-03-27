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
		<loadingStatus status="loading" v-if="statusConfig.loading">
			{{statusConfig.msg}}
		</loadingStatus>
		<div v-else>
			<div v-show="isCurrent">
				<row >
					<i-col span="24" v-for="kjData in kjNowDatas">
						<conWrap><kjItem :obj="kjData"></kjItem></conWrap>
					</i-col>
				</row>
				<div class="kj-table-wrap">
					<iTable :tableData="tableData"></iTable>
					<iTable :tableData="tableData2"></iTable>
				</div>
			</div>

			<more v-show="!isCurrent" @addPageNo="addPageNo" :pageNo="dataPageNo" :moreStatus="statusConfig.moreStatus">
				<row>
					<i-col span="24" v-for="(kjData, index) in kjAllDatas" v-if="isShowAllList">
						<conWrap>
							<kjItem :obj="kjData" :class="{'no-bg': index !== 0}"><icon type="iconright"></icon></kjItem>
						</conWrap>
					</i-col>
				</row>
			</more>
		</div>
		<scrollToTop></scrollToTop>
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
	import loadingStatus from '../../components/loadingStatus/loadingStatus.vue';
	import iTable from '../../components/table/table.vue';
	import more from '../../components/more/index.js';
	import scrollToTop from '../../components/scrollToTop/scrollToTop.vue';

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
			loadingStatus,
			subHeader,
			iTable,
			more,
			scrollToTop
		},
		data () {
			return {
				tableData: {},
				tableData2: {},
				isShowAllList: false,
				isCurrent: true,
				dataPageNo: 1,
				gameNo: this.$route.params.gameNo,
				issueNo: this.$route.params.issueNo,
				kjNowDatas: {},
				kjAllDatas: [],
				statusConfig: {
					loading: true,
					msg: '加载中',
					moreStatus: false
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
					let awardSnatchList = data.awardSnatchList;
					let len = awardSnatchList.length;
					let bodyTitle = ['一等奖', '二等奖', '三等奖', '四等奖', '五等奖', '六等奖'];
					let bodyTrsArrTitle = ['', 'playMethod', 'awardNum', 'singleAwardMoney'];
					let bodyTrsArr = [];

					this.kjNowDatas = dealKjAjaxData({
						data: this.getKjListData(data)
					});
					this.statusConfig.loading = false;
					this.tableData = {
						theads: [{text: '本期销量'}, {text: '奖池滚存'}],
						bodyTrs: [[{text: data.new_tion_fund}, {text: data.new_pond_money}]]
					};
					for (let i = 0; i < len - 1; i++) {
						let awardSnatchListI = awardSnatchList[i];
						let bodyTrsArrI = [];
						if (i % 2 === 0) {
							bodyTrsArrTitle.map(function (val, index) {
								if (index === 0) {
									bodyTrsArrI.push({text: bodyTitle[Math.floor(i / 2)], rowspan: 2});
								} else {
									bodyTrsArrI.push({text: awardSnatchListI[val]});
								}
							});
						} else {
							bodyTrsArrTitle.map(function (val, index) {
								if (index !== 0) {
									bodyTrsArrI.push({text: awardSnatchListI[val]});
								}
							});
						}

						bodyTrsArr.push(bodyTrsArrI);
					}
					console.log(bodyTrsArr);
					this.tableData2 = {
						theads: [
							{text: '奖项', colspan: 2},
							{text: '中奖次数'},
							{text: '每注金额'}
						],
						bodyTrs: bodyTrsArr
					};
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
			addPageNo () {
				this.dataPageNo++;
				this.statusConfig.moreStatus = true;
				this.getKjAllDatas();
			},
			getKjAllDatas () {
				vueAjax({
					method: 'get',
					data: {
						'lotteryNo': this.gameNo,
						'transactionType': '10105027',
						'pageNo': this.dataPageNo,
						'pageAmount': '10'
					},
					that: this
				}).then((response) => {
					let data = response.body;
					let resCode = dealResCode(data.resCode);

					if (resCode === '0') {
						this.kjAllDatas = this.kjAllDatas.concat(dealKjAjaxData({
							data: data.list
						}));
						this.statusConfig.loading = false;
						this.statusConfig.moreStatus = false;
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
