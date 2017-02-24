<template>
	<section>
		<headers>
			<icon type="zuo"></icon>
			<h2>更多彩种</h2>
		</headers>
		<caiList :caiList="moreCaiList"></caiList>
	</section>
</template>
<script>
import icon from '../../components/icon/icon.vue';
import headers from '../../components/headers/headers.vue';
import caiList from '../../components/caiList/caiList.vue';
import moreCaiList from '../../config/moreCaiList.js';
export default {
	components: {
		icon,
		headers,
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
