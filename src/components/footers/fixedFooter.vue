<template>
	<div class="footer"><slot></slot></div>
</template>
<script>
	export default {};
</script>
<style lang="less">
	.footer {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 50px;
		background-color: #fff;
		text-align: center;
	}
</style>
