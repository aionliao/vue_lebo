<template>
	<button :class="classes"><slot></slot></button>
</template>
<script>
	import prefix from '../../config/prefix.js';
	const prefixCls = `${prefix}-btn`;
	export default {
		props: {
			type: {
				type: String,
				default: ''
			}
		},
		computed: {
			classes () {
				let classes = prefixCls;
				let typeArr = this.type.split('-');

				for (let i = 0, len = typeArr.length; i < len; i++) {
					let classesI = ` ${prefixCls}-${typeArr[i]}`;
					classes += classesI;
				}
				return classes;
			}
		}
	};
</script>
<style lang="less">
@import "iButton.less";
</style>
