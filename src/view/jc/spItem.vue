<template>
	<div class="filled" :class="{'current': isCurrent}" @click="reverseCurrent">
		<div class="center-all" >
			<em>{{spData.code}}</em>
			<template v-if="emType === 0">{{spData.sp}}</template>
			<template v-if="emType === 1"><p>{{spData.sp}}</p></template>
		</div>
	</div>
</template>
<script>
	export default {
		props: {
			emType: {
	            type: [Number],
	            default: 0
	        },
			spData: Object,
			clear: Number
		},
		data () {
			return {
				isCurrent: false
			};
		},
		methods: {
			reverseCurrent () {
				this.isCurrent = !this.isCurrent;
				this.$emit('reverseCurrent', this.isCurrent ? 1 : -1);
			}
		},
		watch: {
			clear () {
				this.isCurrent = false;
			}
		}
	};
</script>
<style lang="less" scoped>
@import "../../styles/custom";
.filled {
    font-size: @font-size-small;
}
.filled em{
    font-size: @font-size-base;
    font-weight: @weight-bold;
    margin-right: 4px;
}
.filled.current{
    color: #fff;
    background-color: @color-base;
}
</style>
