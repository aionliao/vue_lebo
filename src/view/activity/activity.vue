<template>
	<sectionWrap>
		<headerSimple
		link="/"
		title="活动"
		></headerSimple>
		<section>
			<conWrap>
				<row>
					<i-col span="24" v-for="list in activityData">
						<boxWrap
						urlType="other"
						:title="list.titile"
						:imgSrc="list.imgUrl"
						:link="list.jumpURL"
						></boxWrap>
					</i-col>
				</row>
			</conWrap>
		</section>
	</sectionWrap>
</template>

<script>
	import sectionWrap from '../../components/sectionWrap/sectionWrap.vue';
	import headerSimple from '../../components/headerSimple/headerSimple.vue';
	import boxWrap from '../../components/boxWrap/boxWrap.vue';
	import conWrap from '../../components/conWrap/conWrap.vue';
	import { Row, iCol } from '../../components/layout/index.js';

	import vueAjax from '../../public/vueAjax.js';
	import dealResCode from '../../public/dealResCode.js';
	export default {
		components: {
			sectionWrap,
			headerSimple,
			boxWrap,
			conWrap,
			Row,
			iCol
		},
		data () {
			return {
				statusConfig: {
					loadingConfig: false
				},
				activityData: {}
			};
		},
		created () {
	        vueAjax({
	            method: 'get',
	            data: {
					'transactionType': '10101022',
					'userId': '',
					'messageType': '2',
					'sourceType': '2',
					'pageAmount': '10',
					'pageNo': '1'
				},
	            that: this
	        }).then((response) => {
	            let data = response.body;
	            let resCode = dealResCode(data.resCode);

	            if (resCode === '0') {
	                this.statusConfig.loadingConfig = true;
	                this.activityData = data.list;
	            }
	        }, (response) => {});
	    }
	};
</script>

<style>

</style>
