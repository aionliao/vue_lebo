<template>
	<div class="ball" :class="classes">{{num}}</div>
</template>

<script>
	export default {
		props: {
			classes: {
				type: String,
				default: ''
			},
			num: {
				type: [Number, String]
			}
		}
	};
</script>

<style lang="less">
	@import "ball.less";
</style>
