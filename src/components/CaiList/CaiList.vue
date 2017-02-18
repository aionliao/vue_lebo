<template lang="html">
	<section class="caiz-list" id="caiZList">
		<ul>
			<li v-for="cai in caiList">
				<router-link :to="cai.linkUrl">
					<i><img v-lazy="cai.imgUrl" /></i>
					<span class="caiz-name">{{cai.caiName}}</span>
				</router-link>
			</li>
			<!-- <li data-gameNo="TC_JCZQ">
				<a href="jc/index.html?gameNo=TC_JCZQ&redirectUrl=/&fromUrl=/">
					<i><img src="../../assets/img/lazy-icon.jpg" v-lazy="../../assets/img/icon/icon-cai/jczq.png"></i>
					<i><img v-lazy="imgUrl" /></i>
					<span class="caiz-name">竞彩足球</span>
				</a>
			</li>

			<li data-gameNo="TC_1CZS">
				<a href="jc/index.html?gameNo=TC_1CZS&redirectUrl=/&fromUrl=/">
					<i><img src="../../assets/img/lazy-icon.jpg" data-src="../../assets/img/icon/icon-cai/1czs.png"></i>
					<span class="caiz-name">一场制胜</span>
				</a>
			</li>
			<li data-gameNo="TC_2X1">
				<a href="jc/index.html?gameNo=TC_2X1&redirectUrl=/&fromUrl=/">
					<i><img src="../../assets/img/lazy-icon.jpg" data-src="../../assets/img/icon/icon-cai/2x1.png"></i>
					<span class="caiz-name">二选一</span>
				</a>
			</li>
			<li data-gameNo="TC_JCLQ">
				<a href="jc/index.html?gameNo=TC_JCLQ&redirectUrl=/&fromUrl=/">
					<i><img src="../../assets/img/lazy-icon.jpg" data-src="../../assets/img/icon/icon-cai/jclq.png"></i>
					<span class="caiz-name">竞彩篮球</span>
				</a>
			</li>
			<li data-gameNo="TC_SF14">
				<a href="lzc/sf14.html?redirectUrl=/&fromUrl=/">
				   <i><img src="../../assets/img/lazy-icon.jpg" data-src="../../assets/img/icon/icon-cai/sfc.png"></i>
					<span class="caiz-name">胜负彩</span>
				</a>
			</li>
			<li data-gameNo="TC_DLT">
				<a href="../dlt/index.html?redirectUrl=/&fromUrl=/">
					<i><img src="../../assets/img/lazy-icon.jpg" data-src="../../assets/img/icon/icon-cai/dlt.png"></i>
					<span class="caiz-name">大乐透</span>
				</a>
			</li>
			<li data-gameNo="TC_PL3">
				<a href="../pl3/index.html?redirectUrl=/&fromUrl=/">
					<i><img src="../../assets/img/lazy-icon.jpg" data-src="../../assets/img/icon/icon-cai/pl3.png"></i>
					<span class="caiz-name">排列三</span>
				</a>
			</li>
			<li data-gameNo="TC_QXC">
				<a href="../qxc/index.html?redirectUrl=/&fromUrl=/">
					<i><img src="../../assets/img/lazy-icon.jpg" data-src="../../assets/img/icon/icon-cai/qxc.png"></i>
					<span class="caiz-name">七星彩</span>
				</a>
			</li>

			<li>
				<a href="other/index-more.html">
					<i><img src="../../assets/img/lazy-icon.jpg" data-src="../../assets/img/icon/icon-cai/more.png"></i>
					<span class="caiz-name">更多</span>
				</a>
			</li> -->
		</ul>
	</section>
</template>

<script>
export default {
	data () {
		return {
			caiList: [
				{
					imgUrl: './static/img/icon/icon-cai/jczq.png',
					gameNo: 'TC_JCZQ',
					linkUrl: '/jc/TC_JCZQ',
					caiName: '竞彩足球'
				},
				{
					imgUrl: './static/img/icon/icon-cai/jczq.png',
					gameNo: 'TC_1CZS',
					linkUrl: '/jc/TC_1CZS',
					caiName: '一场制胜'
				}
			]
		}
	}
}
</script>

<style lang="less">
@import "CaiList.less";
</style>
