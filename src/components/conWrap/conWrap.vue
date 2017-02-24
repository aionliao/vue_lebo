<template>
	<div :class="classes" class="con-wrap">
		<slot></slot>
	</div>
</template>
<script>
	export default {
		props: {
			className: String
		},
		computed: {
			classes () {
				let classList = {
					[`${this.className}`]: !!this.className
				};

				return classList;
			}
		}
	};
</script>
<style>
	.con-wrap {
		width: 100%;
		padding: 0 10px;
	}
</style>
