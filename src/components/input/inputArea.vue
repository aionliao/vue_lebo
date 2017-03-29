<template>
	<div class="input-area">
		<iconDivLayout>
			<icon :type="iconType" slot="left"></icon>
			<template slot="right">
				<i-input :type="inputType" :placeholder="placeholder" :value="value" @input="updateValue" :inputId="inputId"></i-input>
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
			placeholder: String,
			value: [String, Number],
			inputId: String
		},
		components: {
			icon,
			iInput,
			iconDivLayout
		},
		methods: {
			updateValue (value) {
				console.log(value);
				this.$emit('input', value);
			}
		}
	};
</script>
<style lang="less">
@import "../../styles/custom";
@import "../../styles/mixins/center.less";

@input-area-height: 48px;;

.input-area {
	background-color: #fff;
}
.icon-div{
	height: @input-area-height;
}
.right-div, .icon-div {
	position: relative;
}
.icon-div .left-icon {
	width: @input-area-height;
}
.left-icon .@{css-prefix}-icon{
	position: absolute;
	.centerAll();
	font-size: 24px;
	color: #ccc;
}
.icon-div .right-div input{
	position: absolute;
	.centerAll();
}

</style>
