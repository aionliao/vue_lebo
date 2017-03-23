<template lang="html">
	<section class="lottery-box" id="quickBet">
		<ul class="ui-tab-nav" id="lotteryBoxNav">
			<li :class="{current: !isCurrent}" @click="changeItem">一场制胜</li>
			<li :class="{current: isCurrent}" @click="changeItem">大乐透</li>
		</ul>
		<ul class="ui-tab-content" id="lotteryBoxCon">
			<li :class="{current: !isCurrent}">
				<fast1CZS></fast1CZS>
			</li>
			<li :class="{current: isCurrent}">
				<fastDlt></fastDlt>
			</li>

		</ul>
	</section>
</template>

<script>
import fast1CZS from './fast1CZS.vue';
import fastDlt from './fastDlt.vue';

export default {
	data () {
		return {
			isCurrent: 0,
			isLoadingDlt: false
		};
	},
	components: {
		fast1CZS,
		fastDlt
	},
	methods: {
		changeItem () {
			this.isCurrent = !this.isCurrent;
		}
	}
};
</script>

<style lang="less">
@import "fastTz.less";
</style>
