<template>
	<span>{{countDownTime}}</span>
</template>

<script>
import countDown from './countDown';
export default {
	props: {
		timeSp: [String, Number]
	},
	data () {
		return {
			cycleTimeSp: this.timeSp,
			countDownTime: countDown(this.timeSp)
		};
	},
	created () {
		this.cycle();
	},
	methods: {
		cycle () {
			var timer = null;
			var that = this;
			timer = setInterval(function () {
				that.cycleTimeSp -= 1000;
				if (that.cycleTimeSp > 0) {
					that.countDownTime = countDown(that.cycleTimeSp);
				} else {
					clearInterval(timer);
					timer = null;
					that.countDownTime = countDown(0);
				}
			}, 1000);
		}
	}
};
</script>

<style lang="less">
</style>
