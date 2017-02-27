<template>
	<div class="kj-rectangle">{{num}}</div>
</template>
<script>
	export default {
		props: {
			num: [Number, String]
		}
	};
</script>
<style lang="less">
	.kj-rectangle {
		background-color: #33cc5c;
		width: 17px;
		height: 36px;
		line-height: 36px;
		text-align: center;
		font-size: 1.6rem;
		color: #fff;
	}
</style>
