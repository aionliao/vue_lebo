<template>
	<div class="ball" :class="classes">{{num}}</div>
</template>

<script>
	export default {
		props: {
			num: {
				type: [Number, String]
			},
			type: String
		},
		computed: {
			classes () {
				return `${this.type}`;
			}
		}
	};
</script>

<style lang="less">
	@import "ball.less";
</style>
