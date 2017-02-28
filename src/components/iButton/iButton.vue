<template>
	<button :class="classes">{{innerText}}</button>
</template>
<script>
	import prefix from '../../config/prefix.js';
	const prefixCls = `${prefix}-btn`;
	export default {
		props: {
			type: String,
			innerText: String
		},
		computed: {
			classes () {
				return `${prefixCls} ${prefixCls}-${this.type}`;
			}
		}
	};
</script>
<style lang="less">
@import "iButton.less";
</style>
