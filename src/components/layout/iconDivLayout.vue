<template>
	<div class="icon-div">
		<div class="left-icon">
			<slot name="left"></slot>
		</div>
		<div class="right-div">
			<slot name="right"></slot>
		</div>
	</div>
</template>
<script>
	export default {
		props: {
			type: String
		}
	};
</script>
<style lang="less">
	@import "../../styles/mixins/flexbox.less";
	@base-height: 40px;
	.icon-div {
		width: 100%;
		.display-flex();
	}
	.icon-div .left-icon {
		position: relative;
		width: @base-height;
	}
	.icon-div .right-div {
		.box-flex(1);
	}
</style>
