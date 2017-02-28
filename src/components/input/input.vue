<template>
	<input
		:type="type"
		:name="name"
		:placeholder="placeholder"
		:class="inputClasses"
		:disable="disable"
	/>
</template>
<script>
	import prefix from '../../config/prefix.js';
	import oneOf from '../../utils/oneOf.js';
	const prefixCls = `${prefix}-input`;

	export default {
		props: {
			type: {
				type: String,
				validator (value) {
					return oneOf(value, ['text', 'tel', 'password']);
				},
				default: 'text'
			},
			disable: {
				type: Boolean,
				default: false
			},
			name: String,
			placeholder: String
		},
		computed: {
			inputClasses () {
				return [
					prefixCls,
					{
						[`${prefixCls}-type`]: this.type,
						[`${prefixCls}-disable`]: !!this.disable
					}
				];
			}
		}
	};
</script>
<style lang="less">
@import "input.less";
</style>
