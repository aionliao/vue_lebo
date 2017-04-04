<template>
	<sectionWrap mt="60" class="red-index">
		<headerSimple link="/" title="商城"></headerSimple>
		<template v-for="trendData in trendDataArr">
			<redIndexItem :trendData="trendData"></redIndexItem>
		</template>
	</sectionWrap>
</template>

<script>
	import sectionWrap from '../../components/sectionWrap/sectionWrap.vue';
	import headerSimple from '../../components/headers/headerSimple.vue';
	import redIndexItem from './redIndexItem.vue';

	export default {
		components: {
			sectionWrap,
			headerSimple,
			redIndexItem
		}
	};
</script>

<style>

</style>
