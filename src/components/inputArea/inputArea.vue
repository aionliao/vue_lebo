<template>
	<div class="input-area">
		<iconDivLayout>
			<icon :type="iconType" slot="left"></icon>
			<template slot="right">
				<i-input :type="inputType" :placeholder="placeholder"></i-input>
			</template>
		</iconDivLayout>
	</div>
</template>
<script>
	import icon from '../../components/icon/icon.vue';
	import iInput from '../../components/input/input.vue';
	import iconDivLayout from '../../components/layout/iconDivLayout.vue';
	export default {
		props: {
			iconType: String,
			inputType: String,
			placeholder: String
		},
		components: {
			icon,
			iInput,
			iconDivLayout
		}
	};
</script>
<style lang="less">
@import "inputArea.less";
</style>
