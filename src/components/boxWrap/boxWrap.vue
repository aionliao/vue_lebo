<template>
	<router-link v-if="link" :to="link">
		<div class="img-wrap" v-if="imgSrc">
			<img v-lazy="imgSrc"/>
		</div>
		<p v-if="innerText">{{innerText}}</p>
	</router-link>
	<a v-else>
		<div class="img-wrap" v-if="imgSrc">
			<img v-lazy="imgSrc"/>
		</div>
		<p v-if="innerText">{{innerText}}</p>
	</a>
</template>
<script>
	export default {
		props: {
			imgSrc: String,
			innerText: String,
			link: String
		}
	};
</script>
<style scoped>
	a{
		display: block;
		text-align: center;
	}
	.img-wrap{
		margin: 0 auto;
	}
</style>
