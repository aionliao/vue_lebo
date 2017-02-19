<template lang="html">
	<div class="ui-slider">
        <ul class="ui-slider-content">
            <li><img :src="imgUrl"></li>
        </ul>
    </div>
</template>

<script>
export default {
	data () {
		return {
			imgUrl: './static/img/lazy-head.jpg'
		}
	}
}
</script>

<style lang="css">
.ui-slider img{
	width: 100%;
	min-height: 109px;
}
</style>
