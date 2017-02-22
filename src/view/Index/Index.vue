<template>
    <section>
        <headers>
            <img class="logo lazy-load" v-lazy="imgUrl">
            <router-link to="/download">
                <span class="head_text">下载客户端</span>
                <span class="icon-down"></span>
            </router-link>
        </headers>
        <div class="index-carouse">
            <carouse v-if="statusConfig.carouseLoaded">
                <carouseItem v-for="carouse in carouseData" slot="body">
                    <a :href="carouse.webUrl">
                        <img :src="carouse.turnImgUrl" />
                    </a>
                </carouseItem>
            </carouse>
            <img v-else :src="'/static/img/lazy-head.jpg'"></li>
        </div>
        <SubNav></SubNav>
        <Notice></Notice>
        <div class="user nologin" id="user"></div>
        <!-- 彩种控制 -->
        <caiList></caiList>
        <!-- 娱乐场 -->
        <section class="disport" id="disport">
            <router-link to="/disport">
                <img class="disport-left lazy-load" v-lazy="disportImgUrl">
            </router-link>
        </section>
        <!-- 红包 -->
        <Red></Red>

        <!--快投 start-->
        <FastTz></FastTz>
        <!--开奖 start-->
        <section class="kaijiang" id="kj">
    		<h3>最新开奖</h3>
            <Kj></Kj>
            <div class="kaijiang-foot">
    			<span class="icon-pointerleft"></span>
    			<span>左右滑动查看其它彩种</span>
    			<span class="icon-pointerright"></span>
    		</div>
    	</section>
        <footers></footers>
    </section>
</template>

<script type="text/ecmascript6">
import headers from '../../components/headers/headers.vue';
import carouse from '../../components/carouse/carouse.vue';
import carouseItem from '../../components/carouse/carouse-item.vue';
import caiList from '../../components/caiList/caiList.vue';
import footers from '../../components/footers/footers.vue';

import vueAjax from '../../public/vueAjax.js';
import dealResCode from '../../public/dealResCode.js';

import SubNav from './components/SubNav/SubNav.vue';
import Notice from './components/Notice/Notice.vue';
import Red from './components/Red/Red.vue';
import FastTz from './components/FastTz/FastTz.vue';
import Kj from './components/Kj/Kj.vue';

export default {
    name: 'hello',
    components: {
        headers,
        carouse,
        carouseItem,
        SubNav,
        Notice,
        caiList,
        Red,
        FastTz,
        Kj,
        footers
    },
    data () {
        return {
            statusConfig: {
                carouseLoaded: false
            },
            carouseData: [],
            disportImgUrl: '/static/img/disport.png',
            imgUrl: './static/img/logo.jpg'
        }
    },
    created () {
        vueAjax({
            method: 'get',
            data: {
                transactionType: '10108101',
                timeId: '0',
                isNewUser: 'n',
                fromType: '1'
            },
            that: this
        }).then((response) => {
            let data = response.body;
            let resCode = dealResCode(data.resCode);

            if (resCode === '0') {
                this.statusConfig.carouseLoaded = true;
                this.carouseData = data.list;
            }
        }, (response) => {});
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
    @import "../../styles/index/index.less";
    header {
		box-sizing: border-box;
		position: relative;
		width: 100%;
		background-color: #FFF;
		height: 50px;
		line-height: 50px;
		border-bottom: 1px solid #f4f4f4;
	}
	.gameNo-more header{
		background-color: #f32f0c;
		color: #fff;
		text-align: center;
		font-size: 1.6rem;
	}
	.gameNo-more .icon-zuo{
	    position: absolute;
	    left: 0;
	    width: 40px;
	    font-size: 20px;
	    color: #FFF;
	}
	.logo{
		margin: 5px;
		height: 40px;
	}

	.head_text {
		position: absolute;
		top: 0;
		right: 38px;
		color: #666;
		font-size:1.4rem;
	}
	.icon-down {
		position: absolute;
		top: 0px;
		right: 10px;
		color: #666;
		font-size: 2rem;
	}
    .index-carouse img{
    	width: 100%;
    	min-height: 109px;
    }

    .lottery-box .loading, .kaijiang .loading{position: absolute;}
</style>
