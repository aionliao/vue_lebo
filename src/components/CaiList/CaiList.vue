<template lang="html">
	<section class="caiz-list" id="caiZList">
		<ul>
			<li v-for="cai in caiList">
				<router-link :to="cai.linkUrl">
					<i><img v-lazy="cai.imgUrl" /></i>
					<span class="caiz-name">{{cai.caiName}}</span>
				</router-link>
			</li>
		</ul>
	</section>
</template>

<script>
export default {
	data () {
		return {
			caiList: [
				{
					imgUrl: './static/img/icon/icon-cai/jczq.png',
					gameNo: 'TC_JCZQ',
					linkUrl: '/jc/TC_JCZQ',
					caiName: '竞彩足球'
				},
				{
					imgUrl: './static/img/icon/icon-cai/1czs.png',
					gameNo: 'TC_1CZS',
					linkUrl: '/jc/TC_1CZS',
					caiName: '一场制胜'
				},
				{
					imgUrl: './static/img/icon/icon-cai/2x1.png',
					gameNo: 'TC_2X1',
					linkUrl: '/jc/TC_2X1',
					caiName: '二选一'
				},
				{
					imgUrl: './static/img/icon/icon-cai/jclq.png',
					gameNo: 'TC_JCLQ',
					linkUrl: '/jc/TC_JCLQ',
					caiName: '竞彩篮球'
				},
				{
					imgUrl: './static/img/icon/icon-cai/sfc.png',
					gameNo: 'TC_SF9',
					linkUrl: '/jc/TC_SF9',
					caiName: '胜负彩'
				},
				{
					imgUrl: './static/img/icon/icon-cai/dlt.png',
					gameNo: 'TC_DLT',
					linkUrl: '/jc/TC_DLT',
					caiName: '大乐透'
				},
				{
					imgUrl: './static/img/icon/icon-cai/pl3.png',
					gameNo: 'TC_PL3',
					linkUrl: '/jc/TC_PL3',
					caiName: '排列三'
				},
				{
					imgUrl: './static/img/icon/icon-cai/qxc.png',
					gameNo: 'TC_QXC',
					linkUrl: '/jc/TC_QXC',
					caiName: '七星彩'
				},
				{
					imgUrl: './static/img/icon/icon-cai/more.png',
					gameNo: '',
					linkUrl: '/more',
					caiName: '更多彩种'
				}
			]
		}
	}
}
</script>

<style lang="less">
@import "CaiList.less";
</style>
