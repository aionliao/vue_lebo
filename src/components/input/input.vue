<template>
	<input
		ref="input"
		:type="type"
		:name="name"
		:placeholder="placeholder"
		:class="inputClasses"
		:disable="disable"
		:value="value"
		@input="updateVal"
		@blur="inputBlur"
		@focus="inputFocus"
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
			value: {
				type: [Number, String],
				default: ''
			},
			disable: {
				type: Boolean,
				default: false
			},
			maxValue: Number,
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
		},
		methods: {
			updateVal () {
				// console.log('input');
				// console.log(this.$refs.input.value);
				let valNow = this.$refs.input.value;
				// console.log('this.maxValue');
				// console.log(this.maxValue);
				if (this.maxValue && valNow >= this.maxValue) {
					this.$refs.input.value = this.maxValue;
				}
				this.$emit('input', this.$refs.input.value);
			},
			inputBlur () {
				console.log(this.$refs.input.value);
				this.$emit('blur', this.$refs.input.value);
			},
			inputFocus () {
				this.$emit('focus', this.$refs.input.value);
			}
		}
	};
</script>
<style lang="less">
@import "../../styles/custom";

.@{css-prefix}-input {
	height: 30px;
	line-height: 30px;
	border: none;
	width: 100%;
	font-size: 14px;
	color: @text-grap;
}
</style>
