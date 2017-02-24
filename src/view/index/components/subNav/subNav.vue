<template lang="html">
	<nav class="index-nav">
		<row>
			<i-col span="1-5" v-for="nav in navs">
				<boxWrap
					:link="nav.linkUrl"
					:imgSrc="nav.imgUrl"
					:innerText="nav.insertHtml"
				></boxWrap>
			</i-col>
		</row>
	</nav>
</template>

<script>
import { Row, iCol } from '../../../../components/layout/index.js';
import boxWrap from '../../../../components/boxWrap/boxWrap.vue';
export default {
	components: {
		Row,
		iCol,
		boxWrap
	},
	data () {
		return {
			navs: [
				{
					linkUrl: '/login',
					imgUrl: './static/img/icon/icon-nav/icon-self.jpg',
					insertHtml: '登录'
				},
				{
					linkUrl: '/user/sign',
					imgUrl: './static/img/icon/icon-nav/icon-sign.jpg',
					insertHtml: '签到'
				},
				{
					linkUrl: '/kj',
					imgUrl: './static/img/icon/icon-nav/icon-award.jpg',
					insertHtml: '开奖'
				},
				{
					linkUrl: '/info',
					imgUrl: './static/img/icon/icon-nav/icon-info.png',
					insertHtml: '资讯'
				},
				{
					linkUrl: '/activity',
					imgUrl: './static/img/icon/icon-nav/icon-activity.png',
					insertHtml: '活动'
				}
			]
		};
	}
};
</script>

<style lang="less">
	@import "subNav.less";
</style>
