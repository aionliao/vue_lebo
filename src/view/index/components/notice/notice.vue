<template lang="html">
	<div class="notice hide">
		<div class="notice-wrap">
			<div><img v-lazy="imgUrl"></div>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			imgUrl: './assets/img/icon/news.png'
		};
	}
};
</script>
<style lang="css">
@import "notice.less"
</style>
