<template>
	<section>
		<headerSimple
			link="/"
			title="更多彩种"
		></headerSimple>
		<caiList :caiList="moreCaiList"></caiList>
	</section>
</template>
<script>
import headerSimple from '../../components/headers/headerSimple.vue';
import caiList from '../../components/caiList/caiList.vue';
import moreCaiList from '../../config/moreCaiList.js';
export default {
	components: {
		headerSimple,
		caiList
	},
	data () {
		return {
			moreCaiList: moreCaiList
		};
	}
};
</script>
<style lang="less" scoped>
	header{
		position: relative;
	}
</style>
