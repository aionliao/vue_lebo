<template lang="html">
	<div id="kj-wrap">
		<carouse v-if="statusConfig.loaded"
		:autoplay="carouseConfig.autoplay"
		:indicatorsShow="carouseConfig.indicatorsShow"
		>
            <carouseItem slot="body" v-for="kjData in kjDatas" :class="kjData.gameNo === 'TC_SF14' ? 'kj-sfc' : ''" >
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
            </carouseItem>
        </carouse>
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
import carouse from '../../../../components/carouse/carouse.vue';
import carouseItem from '../../../../components/carouse/carouse-item.vue';

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
		carouse,
		carouseItem
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
<style>
@import "kj.less";
</style>
