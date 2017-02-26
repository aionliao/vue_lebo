<template>
	<div class="box-wrap">
		<template v-if="link">

			<router-link v-if="urlType==='router'" :to="link">
				<boxWrapCon
				:title="title"
				:imgSrc="imgSrc"
				:innerText="innerText"
				></boxWrapCon>
			</router-link>
			<a :href="link" v-else>
				<boxWrapCon
				:title="title"
				:imgSrc="imgSrc"
				:innerText="innerText"
				></boxWrapCon>
			</a>
		</template>
		<a v-else>
			<boxWrapCon
			:title="title"
			:imgSrc="imgSrc"
			:innerText="innerText"
			></boxWrapCon>
		</a>
	</div>
</template>
<script>
	import boxWrapCon from './boxWrapCon.vue';
	export default {
		components: {
			boxWrapCon
		},
		props: {
			title: String,
			imgSrc: String,
			innerText: String,
			link: String,
			urlType: {
                type: String,
                default: 'router'
            }
		}
	};
</script>
<style>
	.box-wrap a{
		display: block;
		text-align: center;
	}
	.box-wrap .img-wrap{
		margin: 0 auto;
	}
</style>
