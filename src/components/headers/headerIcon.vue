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
@import '../../styles/custom.less';
@import '../../styles/mixins/center.less';
@prefixCls  : header-icon;
@width      : 50px;
.@{prefixCls} {
    position: absolute;
    height: @width;
    width: @width;
    top: 0;
    &:active {
    	background: rgba(0,0,0,.3);
    }
}
.@{prefixCls} .@{css-prefix}-icon {
    .centerAll();
    color: #fff;
}
.@{prefixCls}-left-1 {
    left: 0;
}
</style>
