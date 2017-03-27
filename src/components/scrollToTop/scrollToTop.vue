<template lang="html">
	<div class="scroll-to-top" @click="scrollTop" v-show="isShow"></div>
</template>

<script>
export default {
	props: {
		top: {
			type: [String, Number],
			default: 100
		}
	},
	data () {
		return {
			isShow: false
		};
	},
	created () {
		let that = this;
		window.onscroll = function () {
			let t = document.documentElement.scrollTop || document.body.scrollTop;
			if (!that.isShow && t > that.top) {
				that.isShow = true;
			}
			if (that.isShow && t < that.top) {
				that.isShow = false;
			}
		};
	},
	methods: {
		scrollTop () {
			document.body.scrollTop = 0;
		}
	}
};
</script>

<style lang="less">
.scroll-to-top {
	position: fixed;
    top: 80%;
    right: 20px;
    z-index: 4;
    width: 40px;
    height: 40px;
    background-image: url(../../assets/img/back-to-top.png);
    background-size: 40px auto;
    opacity: .5;
}
</style>
