<template lang="html">
	<nav id="nav">
		<ul>
			<li v-for="nav in navs">
				<router-link :to="nav.linkUrl">
					<div class="img">
						<img v-lazy="nav.imgUrl">
					</div>
					<span>{{nav.insertHtml}}</span>
				</router-link>
			</li>
		</ul>
	</nav>
</template>

<script>
export default {
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
					linkUrl: '/other/info',
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

<style lang="css">
@import "subNav.less";
</style>
