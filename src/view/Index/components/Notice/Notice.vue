<template lang="html">
	<div class="notice hide">
		<div class="notice-wrap">
			<div><img v-lazy="imgUrl"></div>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			imgUrl: './assets/img/icon/news.png'
		}
	}
}
</script>

<style lang="css">
.notice {
	height: 30px;
	overflow: hidden;
	color: #f32f0c;
}
.notice li {
	position: relative;
	line-height: 31px;
	height: 30px;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}
.notice li span{
	position: absolute;
	top: 50%;
	left: 0;
	-webkit-transform: translate(0, -50%);
	transform: translate(0, -50%);
}
.notice-wrap{
	display: -webkit-box;
	// color: #999;
	font-size: 1.3rem;
}
.notice-wrap> div:first-child{
	width: 40px;
}
.notice-wrap >div:last-child{
	-webkit-box-flex: 1;
	// transition: all 1s;
	// -webkit-transition: all 1s;
}
.notice img{height: 30px;margin-left: 10px;}
</style>
