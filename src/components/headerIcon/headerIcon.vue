<template>
	<div :class="classes">
		<icon :type="iconType"></icon>
	</div>
</template>
<script>
	import icon from '../icon/icon.vue';
	const prefixCls = 'header-icon';
	export default {
		props: {
			type: String,
			iconType: String
		},
		components: {
			icon
		},
		computed: {
			classes () {
				return `${prefixCls} ${prefixCls}-${this.type}`;
			}
		}
	};
</script>
<style lang="less">
	@import 'headerIcon.less';
</style>
