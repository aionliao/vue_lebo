<template>
	<div class="">
		<icon type="iconType"></icon>
	</div>
</template>
<script>
	import icon from '../icon/icon.vue';
	export default {
		props: {
			type: String
		}
	};
</script>
<style lang="less">
	@import 'headerIcon.less';
</style>
