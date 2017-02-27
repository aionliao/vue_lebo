<template>
	<div class="lmr-layout" :class="classes">
		<template v-for="(componentType, index) in componentTypeArr">
			<div :class="`lmr-${typeOrign[index]}`" v-if="componentType">
				<slot :name="typeOrign[index]"></slot>
			</div>
		</template>
	</div>
</template>
<script>
	export default {
		props: {
			type: {
				type: String,
				default: 'left'
			},
			classes: {
				type: String
			}
		},
		data () {
			return {
				typeOrign: ['left', 'mid', 'right']
			};
		},
		computed: {
			componentTypeArr () {
				let typeArr = this.type.split('-');
				let nowIndex = -1;
				let returnArr = [false, false, false];

				do {
					nowIndex = this.typeOrign.indexOf(typeArr[0]);
					if (nowIndex > -1) {
						returnArr[nowIndex] = true;
					}
					typeArr.shift();
				} while (typeArr.length > 0);
				return returnArr;
			}
		}
	};
</script>
<style lang="less">
	@import "lmrLayout.less";
</style>
