<template lang="html">
	<section class="caiz-list" id="caiZList">
		<row>
			<i-col span="8" v-for="cai in caiList">
				<boxWrap
					:link="cai.linkUrl"
					:imgSrc="cai.imgUrl"
					:innerText="cai.caiName"
				></boxWrap>
			</i-col>
		</row>
	</section>
</template>

<script>
import { Row, iCol } from '../../components/layout/index.js';
import boxWrap from '../../components/boxWrap/boxWrap.vue';
export default {
	props: {
		caiList: Array
	},
	components: {
		Row,
		iCol,
		boxWrap
	}
};
</script>

<style lang="less">
	@import "caiList.less";
</style>
