<template>
	<ol class="cai-ball">
		<template v-for="firstBall in obj.firstBalls">
			<li><ball type="big" :num="firstBall"></ball></li>
		</template>
		<template v-if="obj.secondBalls" v-for="secondBall in obj.secondBalls">
			<li><ball type="big" :num="secondBall" class="blue"></ball></li>
		</template>
	</ol>
</template>

<script>
	import ball from './ball.vue';
	export default {
		props: {
			obj: Object
		},
		components: {
			ball
		}
	};
</script>

<style lang="less">
@import "../../styles/mixins/clearfix.less";
.cai-ball {
	.clearfix();
	margin-top: 5px;
}
.cai-ball li{
	float: left;
	margin-right: 3px;
}
</style>
