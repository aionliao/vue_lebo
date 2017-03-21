<template>
	<header :class="classes">
        <slot></slot>
    </header>
</template>

<script>
export default {
	props: {
		posType: {
			type: [String],
			default: ''
		}
	},
	data () {
		return {
			classes: `header ${this.posType}`
		};
	}
};
</script>

<style lang="less">
@import "../../styles/custom.less";

@header-height      : 50px;
@header-color       : #fff;
.header{
	position: fixed;
	width: 100%;
	height: @header-height;
	line-height: @header-height;
	background: @color-base;
	top:0;
	left:0;
	z-index: @zindex-header;
}
.header.relative {
	position: relative;
}
.header h2 {
	text-align: center;
	color: @header-color;
	font-size: 16px;
}
</style>
