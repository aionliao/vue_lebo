<template lang="html">
	<section class="reg-bag" id="redBag">
		<row>
			<i-col v-for="red in reds" span="8">
				<boxWrap
					:link="red.linkUrl"
					:imgSrc="red.imgUrl"
					:innerText="red.insertHtml"
				></boxWrap>
			</i-col>
		</row>
	</section>
</template>

<script>
import {Row, iCol} from '../../../../components/layout/index.js';
import boxWrap from '../../../../components/boxWrap/boxWrap.vue';

export default {
	components: {
		Row,
		iCol,
		boxWrap
	},
	data () {
		return {
			reds: [
				{
					linkUrl: '/red',
					imgUrl: './static/img/red-icon.png',
					insertHtml: '乐米商城',
					className: 'favourable'
				},
				{
					linkUrl: '/bf',
					imgUrl: './static/img/bf-icon.png',
					insertHtml: '比分直播',
					className: ''
				},
				{
					linkUrl: '/trend',
					imgUrl: './static/img/trend-left.png',
					insertHtml: '走势图',
					className: ''
				}
			]
		};
	}
};
</script>

<style lang="less">
@import "red.less";
</style>
