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
nav{
	border-top: 1px solid #f4f4f4;
    background: #fff;
    margin-bottom: 10px;
    border-bottom: 1px solid #f4f4f4;
    height: 85px;
}
nav.nav-fixed{
	position: fixed;
	width: 100%;
	top: 0;
	left: 0;
	z-index: 2;
}
nav ul{
	width: 100%;
	height: 85px;
}
nav img{width: 100%;vertical-align: bottom;}
nav li {
	box-sizing: border-box;
	border-right: 1px solid #f4f4f4;
	width: 20%;
	float: left;
	text-align: center;
	position: relative;
	height: 85px;
}
nav li a {
	display: block;
	box-sizing: border-box;
	padding-top: 15px;
	position: relative;
	height: 100%;
	width: 100%;
	text-align: center;
}

nav li a:link, nav li a:hover, nav li a:active, nav li a:visited {
	color: #fff;
}
nav li a:link span,  nav li a:hover span,  nav li a:active span,  nav li a:visited span {
	color: #000;
}
nav .img{
	width: 30px;
	margin: 0 auto 0;
	position: relative;
}
nav span{
	position: absolute;
	font-size: 1.5rem;
	color: #333;
	width: 100%;
	left: 50%;
	-webkit-transform: translateX(-50%);
	transform: translateX(-50%);
	top: 53px;
}
</style>
