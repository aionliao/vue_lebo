<template lang="html">
	<section class="lottery-box" id="quickBet">
		<ul class="ui-tab-nav" id="lotteryBoxNav">
			<li class="current">一场制胜</li>
			<li>大乐透</li>
		</ul>
		<ul class="ui-tab-content" id="lotteryBoxCon">
			<li id="li_01" class="current">
				<fast1CZS>
					<div class="loading">
						加载中...
					</div>
				</fast1CZS>
			</li>
			<li id="li_02">
				<div class="loading">
					加载中...
				</div>
			</li>

		</ul>
	</section>
</template>

<script>
import fast1CZS from './fast1CZS.vue';

export default {
	components: {
		fast1CZS
	}
};
</script>

<style lang="less">
@import "fastTz.less";
</style>
