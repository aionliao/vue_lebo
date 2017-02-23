<template lang="html">
	<section class="reg-bag" id="redBag">
		<ul>
			<li v-for="red in reds" :class="red.className">
				<h5>
					<router-link :to="red.linkUrl">
						<img v-lazy="red.imgUrl">
						<span>{{red.insertHtml}}</span>
					</router-link>
				</h5>
			</li>
		</ul>
	</section>
</template>

<script>
export default {
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

<style lang="css">
@import "red.less";
</style>
