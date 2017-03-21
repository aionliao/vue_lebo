<template lang="html">
	<sectionWrap class="kj-list mb-10">
		<headerSimple link="/kj" :title="gameNoShow"></headerSimple>
		<loading type="loading" v-if="statusConfig.loading">
			{{statusConfig.msg}}
		</loading>
		<row v-else>
			<i-col span="24" v-for="kjData in kjDatas">
				<router-link :to="'/kjdetail/' + kjData.gameNo">
					<conWrap>
						<kjItem :obj="kjData">
							<icon type="iconright"></icon>
						</kjItem>
					</conWrap>
				</router-link>
			</i-col>
		</row>
	</sectionWrap>
</template>

<script>
	import { Row, iCol } from '../../components/layout/index.js';
	import sectionWrap from '../../components/sectionWrap/sectionWrap.vue';
	import headerSimple from '../../components/headers/headerSimple.vue';
	import kjItem from '../../components/kjItem/kjItem.vue';
	import icon from '../../components/icon/icon.vue';
	import conWrap from '../../components/conWrap/conWrap.vue';
	import loading from '../../components/loading/loading.vue';

	// import vueAjax from '../../public/vueAjax.js';
	// import dealResCode from '../../public/dealResCode.js';
	// import dealKjAjaxData from '../../public/dealKjAjaxData.js';
	import cpCodeShow from '../../config/cpCodeShow.js';
	export default {
		components: {
			headerSimple,
			sectionWrap,
			conWrap,
			kjItem,
			Row,
			iCol,
			icon,
			loading
		},
		data () {
			return {
				kjDatas: {},
				statusConfig: {
					loading: true,
					msg: '加载中'
				}
			};
		},
		computed: {
			gameNo () {
				return this.$route.params.gameNo;
			},
			gameNoShow () {
	            return `${cpCodeShow[this.gameNo]}开奖`;
	        }
		}
	};
</script>

<style lang="css">
</style>
