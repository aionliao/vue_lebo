<template>
	<header class="header">
        <slot></slot>
    </header>
</template>

<script>
export default {
};
</script>

<style scoped>
	header {
		box-sizing: border-box;
		position: relative;
		width: 100%;
		background-color: #FFF;
		height: 50px;
		line-height: 50px;
		border-bottom: 1px solid #f4f4f4;
	}
	.gameNo-more header{
		background-color: #f32f0c;
		color: #fff;
		text-align: center;
		font-size: 1.6rem;
	}
	.gameNo-more .icon-zuo{
	    position: absolute;
	    left: 0;
	    width: 40px;
	    font-size: 20px;
	    color: #FFF;
	}
	.logo{
		margin: 5px;
		height: 40px;
	}

	.head_text {
		position: absolute;
		top: 0;
		right: 38px;
		color: #666;
		font-size:1.4rem;
	}
	.icon-down {
		position: absolute;
		top: 0px;
		right: 10px;
		color: #666;
		font-size: 2rem;
	}
</style>
