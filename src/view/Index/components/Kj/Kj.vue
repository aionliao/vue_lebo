<template lang="html">
	<section class="kaijiang" id="kj">
		<h3>最新开奖</h3>
		<div id="kj-wrap">
			<Carouse v-if="statusConfig.carouseLoaded">
	            <CarouseItem v-for="carouse in carouseData" slot="body">
					<li :class="kjData.gameNo === 'TC_SF14' ? 'kj-sfc' : ''" v-if="statusConfig.loaded" v-for="kjData in kjDatas">
						<!-- kj-sfc -->
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
					</li>
	            </CarouseItem>

	        </Carouse>
			<ul class="ui-tab-nav">
				<li class="current">大乐透</li>
				<li>胜负彩</li>
				<li>七星彩</li>
				<li>排列三</li>
				<li>排列五</li>
			</ul>
			<ul class="ui-tab-content" id="kjCon">

				<li :class="kjData.gameNo === 'TC_SF14' ? 'kj-sfc' : ''" v-if="statusConfig.loaded" v-for="(kjData, index) in kjDatas">
						<!-- kj-sfc -->
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
				</li>
				<li v-else>
					<div class="loading">{{statusConfig.msg}}</div>
				</li>
			</ul >
		</div>
		<div class="kaijiang-foot">
			<span class="icon-pointerleft"></span>
			<span>左右滑动查看其它彩种</span>
			<span class="icon-pointerright"></span>
		</div>
	</section>
</template>

<script>
import vueAjax from '../../../../public/vueAjax.js';
import Carouse from '../../../../public/Carouse.js';

import dealResCode from '../../../../public/dealResCode.js';
import dealKjAjaxData from './dealKjAjaxData.js';

const orderArr = ['TC_DLT', 'TC_SF14', 'TC_QXC', 'TC_PL3', 'TC_PL5'];

export default {
	data () {
		return {
			statusConfig: {
                loaded: false,
                msg: '加载中...'
            },
			kjDatas: {}
		};
	},
	components: {
		Carouse
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
.kaijiang .ui-tab-nav{
	position: absolute;
	width: 78%;
	top: 0;
	right: 0;
}
@media(max-width: 340px) {
	.kaijiang .ui-tab-nav{
		width: 76%;
	}
}
.head_text{
	font-size: 1.4rem;
}
.kaijiang .ui-tab-nav li{
	position: relative;
	font-size: 1.4rem;
	border-bottom: none;
	color: #999;
	background-color: #eee;
	border-top: 1px solid #f4f4f4;
	border-bottom: 1px solid #f4f4f4;
}
.kaijiang .ui-tab-nav .current{
	background-color: #f32f0c;
	color: #fff;
	border: 1px solid #f32f0c;
}
.kaijiang .ui-tab-nav .current:before{
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
.kaijiang .ui-tab-nav li:first-child{
	border-left: 1px solid #f4f4f4;
}
.kaijiang .ui-tab-content{
	padding: 10px 0 0 0;
	width: 500%;
}
.kaijiang .ui-tab-content>li {
	padding: 0 10px;

}
.kj-text .red{
	margin-right: 10px;
}

.ui-tab-content ol{
	height: 36px;
	margin: 10px 0;
}
.ui-tab-content ol li{
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
.ui-tab-content .kj-sfc li{
	background-color: #33cc5c;
    margin-right: 2px;
    width: 18px;
    height: 36px;
    line-height: 36px;
    text-align: center;
    font-size: 1.4rem;
	border-radius: 0;
}
.ui-tab-content ol .blue{
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
