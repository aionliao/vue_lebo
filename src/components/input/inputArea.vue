<template>
	<div class="input-area">
		<iconDivLayout>
			<icon :type="iconType" slot="left"></icon>
			<template slot="right">
				<div :class="prefixCls">
					<slot></slot>
				</div>
			</template>

		</iconDivLayout>
	</div>
</template>
<script>
	import prefix from '../../config/prefix.js';
	import icon from '../../components/icon/icon.vue';
	import iInput from '../../components/input/input.vue';
	import iconDivLayout from '../../components/layout/iconDivLayout.vue';

	const prefixCls = `${prefix}-input`;
	export default {
		props: {
			iconType: String
		},
		components: {
			icon,
			iInput,
			iconDivLayout
		},
		data () {
			return {
				prefixCls: prefixCls
			};
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
.@{css-prefix}-input input {
	height: 30px;
	line-height: 30px;
	border: none;
	width: 100%;
	font-size: 14px;
	color: @text-grap;
}
</style>
