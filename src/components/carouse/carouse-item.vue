<template>
	<li :class="prefixCls" :style="styles"><slot></slot></li>
</template>
<script>
	const prefixCls = 'ivu-carouse-item';

	export default {
		componentName: 'carousel-item',

		data () {
			return {
				prefixCls: prefixCls,
				width: 0,
				height: 'auto',
				left: 0
			};
		},
		computed: {
			styles () {
				return {
					width: `${this.width}px`,
					height: `${this.height}`,
					left: `${this.left}px`
				};
			}
		},
		compiled () {
			this.$parent.slotChange();
		},
		beforeDestory () {
			this.$parent.slotChange();
		}
	};
</script>
