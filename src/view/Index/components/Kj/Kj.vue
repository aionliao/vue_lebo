<template lang="html">
	<div id="kj-wrap">
		<Carouse v-if="statusConfig.loaded"
		:autoplay="carouseConfig.autoplay"
		:indicatorsShow="carouseConfig.indicatorsShow"
		>
            <CarouseItem slot="body" v-for="kjData in kjDatas" :class="kjData.gameNo === 'TC_SF14' ? 'kj-sfc' : ''" >
				<p class="kj-text"><span class="red">{{kjData.gameName}}</span><span>第{{kjData.issueNo}}期</span></p>
				<ol>
					<li v-for="ball in kjData.winCodeFirst">{{ball}}</li>
					<li class="blue" v-if="kjData.winCodeSecond" v-for="ball in kjData.winCodeSecond">
						{{ball}}
					</li>
				</ol>
				<p class="a-btn">
					<router-link :to="'/kj/' + kjData.gameNo">详情</router-link>
					<router-link :to="'/tz/' + kjData.gameNo">投注</router-link>
				</p>
            </CarouseItem>
        </Carouse>
		<!-- <ul class="vue-carousel-indicators">
			<li class="current">大乐透</li>
			<li>胜负彩</li>
			<li>七星彩</li>
			<li>排列三</li>
			<li>排列五</li>
		</ul> -->
	</div>
</template>

<script>
import vueAjax from '../../../../public/vueAjax.js';
import Carouse from '../../../../components/Carouse/Carouse.vue';
import CarouseItem from '../../../../components/Carouse/Carouse-item.vue';

import dealResCode from '../../../../public/dealResCode.js';
import dealKjAjaxData from './dealKjAjaxData.js';

const orderArr = ['TC_DLT', 'TC_SF14', 'TC_QXC', 'TC_PL3', 'TC_PL5'];
const orderArrShow = ['大乐透', '胜负彩', '七星彩', '排列三', '排列五'];

export default {
	data () {
		return {
			statusConfig: {
                loaded: false,
                msg: '加载中...'
            },
			kjDatas: {},
			carouseConfig: {
				autoplay: false,
				indicatorsShow: orderArrShow
			}
		};
	},
	components: {
		Carouse,
		CarouseItem
	},
	created () {
		vueAjax({
            method: 'get',
            data: {
                'gameNo': 'TC_DLT',
                'transactionType': '10105024'
            },
            that: this
        }).then((response) => {
            let data = response.body;
			let resCode = dealResCode(data.resCode);

			if (resCode === '0') {
				this.kjDatas = dealKjAjaxData({
					data: data.list,
					orderArr: orderArr
				});
				this.statusConfig.loaded = true;
			} else {
				this.statusConfig.loaded = false;
				this.statusConfig.msg = data.resMsg;
			}
        }, (response) => {
			this.statusConfig.loaded = false;
            this.statusConfig.msg = '服务器迷路了';
        });
	},
	computed () {

	}
};
</script>

<style lang="css">
.kaijiang{
	background-color: #fff;
	position: relative;
	width: 100%;
	overflow: hidden;
	border-bottom: 1px solid #f4f4f4;
	font-size: 1.4rem;
}
.kaijiang h3{
	/*box-sizing: border-box;*/
	font-size: 1.6rem;
	font-weight: 400;
	height: 40px;
	line-height: 40px;
	padding-left: 10px;
	border-top: 1px solid #f4f4f4;
	border-bottom: 1px solid #f4f4f4;
}
.kaijiang .vue-carousel-indicators{
	display: -webkit-box;
	position: absolute;
	width: 78%;
	top: 0;
	right: 0;
	left: initial;
	bottom: initial;
}
@media(max-width: 340px) {
	.kaijiang .vue-carousel-indicators{
		width: 76%;
	}
}
.head_text{
	font-size: 1.4rem;
}
.kaijiang .vue-carousel-indicators li{
	position: relative;
	display: block;
	-webkit-box-flex: 1;
	height: 40px;
	width: 20%;
	padding: 0;
	margin: 0;
	line-height: 40px;
	font-size: 1.4rem;
	border-bottom: none;
	border-radius: 0;
	color: #999;
	background-color: #eee;
	border-top: 1px solid #f4f4f4;
	border-bottom: 1px solid #f4f4f4;
}
.kaijiang .vue-carousel-indicators li.current{
	background-color: #f32f0c;
	color: #fff;
	border: 1px solid #f32f0c;
}
.kaijiang .vue-carousel-indicators .current:before{
	content: '';
	position: absolute;
	height: 0;
    width: 0;
    border-style: solid;
    border-color: #f32f0c transparent transparent transparent;
    border-width: 7px;
    z-index: 999;
    bottom: -14px;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);

}
.kaijiang .vue-carousel-indicators li:first-child{
	border-left: 1px solid #f4f4f4;
}
.kaijiang .vue-carousel {
	position: static;
}
.kaijiang .vue-carousel-content{
	padding: 10px 0 0 0;
	width: 500%;
}
.kaijiang .vue-carousel-content>li {
	padding: 0 10px;

}
.kj-text .red{
	margin-right: 10px;
}

.vue-carousel-content ol{
	height: 36px;
	margin: 10px 0;
}
.vue-carousel-content ol li{
	height: 36px;
	width: 36px;
	border-radius: 50%;
	background-color: #f32f0c;
	color: #fff;
	text-align: center;
	line-height: 36px;
	float: left;
	margin-right: 5px;
}
.vue-carousel-content .kj-sfc li{
	background-color: #33cc5c;
    margin-right: 2px;
    width: 18px;
    height: 36px;
    line-height: 36px;
    text-align: center;
    font-size: 1.4rem;
	border-radius: 0;
}
.vue-carousel-content ol .blue{
	background-color: #31cefb;
}
.a-btn{
	line-height: 20px;
	position: relative;
	height: 20px;
}
.a-btn a{
	position: absolute;
	line-height: 20px;
	top: 0;
}
.a-btn a:first-child{
	right: 40px;
}
.a-btn a:last-child{
	right: 0px;
}
.kaijiang-foot {
	text-align: center;
	color: #999;
	padding: 10px 0;
}
</style>
