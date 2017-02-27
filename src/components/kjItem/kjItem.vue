<template>
	<div class="kj-item" :class="gameNoClass">
		<h4>
			<span>{{gameNoShow}}</span>
			<span>第{{obj.issueNo}}期</span>
			<span>{{awardDateShow}}</span>
		</h4>
		<div class="soccer-ball" v-if="isJc">
			<div class="back-zq">
				<span class="span-left">{{teamData[0]}}</span>
				{{teamData[1]}}
				<span class="span-right">{{teamData[2]}}</span>
			</div>
			<div class="img-wrap">
				<img v-lazy="`./static/img/kj/kj_${gameNoClass}.png`">
			</div>
		</div>
		<ol v-if="isSzc">
			<template v-for="firstBall in obj.firstBalls">
				<li><ball :num="firstBall"></ball></li>
			</template>
			<template v-if="obj.secondBalls" v-for="secondBall in obj.secondBalls">
				<li><ball :num="secondBall" class="blue"></ball></li>
			</template>
		</ol>
		<ol v-if="isLzc">
			<template v-for="firstBall in obj.firstBalls">
				<li><kj-rectangle :num="firstBall"></kj-rectangle></li>
			</template>
		</ol>
		<slot></slot>
	</div>
</template>
<script>
	import icon from '../icon/icon.vue';
	import ball from '../ball/ball.vue';
	import kjRectangle from './kjRectangle.vue';

	import cpCodeShow from '../../config/cpCodeShow.js';
	import oneOf from '../../utils/oneOf.js';

	const lzcArr = ['TC_SF14', 'TC_SF9', 'TC_BQ6', 'TC_JQ4'];
	const jcArr = ['TC_JCZQ', 'TC_JCLQ'];
	const szcArr = ['TC_DLT', 'TC_PL3', 'TC_PL5', 'TC_QXC'];
	export default {
		props: {
			obj: Object
		},
		components: {
			ball,
			icon,
			kjRectangle
		},
		computed: {
			awardDateShow () {
				return this.obj.awardDate.split(' ')[0];
			},
			gameNoShow () {
				return cpCodeShow[this.obj.gameNo];
			},
			gameNoClass () {
				return this.obj.gameNo.split('_')[1].toLowerCase();
			},
			isLzc () {
				return oneOf(this.obj.gameNo, lzcArr);
			},
			isJc () {
				return oneOf(this.obj.gameNo, jcArr);
			},
			isSzc () {
				return oneOf(this.obj.gameNo, szcArr);
			},
			teamData () {
				return this.obj.winCode.split('_');
			}
		}
	};
</script>
<style lang="less">
	@import "kjItem.less";
</style>
