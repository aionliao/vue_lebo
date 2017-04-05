<template>
	<sectionWrap mt="60" class="red-index">
		<headerSimple link="/" title="商城"></headerSimple>
		<template v-for="redIndexData in redIndexDataArr">
			<router-link :to="redIndexData.link" v-if="redIndexData.link">
				<redIndexItem :redIndexData="redIndexData"></redIndexItem>
			</router-link>
			<redIndexItem :redIndexData="redIndexData" v-else></redIndexItem>
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
		},
		data () {
			return {
				redIndexDataArr: [
					{
						link: '',
						type: 'left',
						imgSrc: './static/img/red/red_03.png',
						title: '购买乐米',
						subTitleArr: ['乐米投注，精彩玩不停！', '带你变身大赢家！']
					},
					{
						link: '',
						type: 'right',
						imgSrc: './static/img/red/red_07.png',
						title: '乐米兑换',
						subTitleArr: ['丰富商品兑换！', '数量有限先到先得！']
					},
					{
						link: '',
						type: 'left',
						imgSrc: './static/img/red/red_10.png',
						title: '购买红包',
						subTitleArr: ['红包投注更优惠！', '全场红包9.7折起抢购！']
					},
					{
						link: '',
						type: 'right',
						imgSrc: './static/img/red/red_12.png',
						title: '更多商品',
						subTitleArr: ['更多商品即将上线！', '敬请期待！']
					}
				]
			};
		}
	};
</script>

<style>

</style>
