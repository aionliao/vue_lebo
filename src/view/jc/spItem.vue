<template>
	<div class="sp-item" :class="{'current': isCurrent}" @click="reverseCurrent">
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
			spData: Object
		},
		data () {
			return {
				isCurrent: false
			};
		},
		methods: {
			reverseCurrent () {
				this.isCurrent = !this.isCurrent;
			}
		}
	};
</script>
<style lang="less">
@import "../../styles/custom";
.sp-item {
    font-size: @font-size-small;
	width: 100%;
	height: 100%;
}
.sp-item em{
    font-size: @font-size-base;
    font-weight: @weight-bold;
    margin-right: 4px;
}
.sp-item.current{
    color: #fff;
    background-color: @color-base;
}
</style>
