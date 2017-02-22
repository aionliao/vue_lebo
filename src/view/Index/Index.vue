<template>
    <section>
        <Headers></Headers>
        <div class="index-carouse">
            <Carouse v-if="statusConfig.carouseLoaded">
                <CarouseItem v-for="carouse in carouseData" slot="body">
                    <a :href="carouse.webUrl">
                        <img :src="carouse.turnImgUrl" />
                    </a>
                </CarouseItem>
            </Carouse>
            <img v-else :src="'/static/img/lazy-head.jpg'"></li>
        </div>
        <SubNav></SubNav>
        <Notice></Notice>
        <div class="user nologin" id="user"></div>
        <!-- 彩种控制 -->
        <CaiList></CaiList>
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
        <Footers></Footers>
    </section>
</template>

<script type="text/ecmascript6">
import Headers from '../../components/Headers/Headers.vue';
import Carouse from '../../components/Carouse/Carouse.vue';
import CarouseItem from '../../components/Carouse/Carouse-item.vue';
import CaiList from '../../components/CaiList/CaiList.vue';
import Footers from '../../components/Footers/Footers.vue';

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
        Headers,
        Carouse,
        CarouseItem,
        SubNav,
        Notice,
        CaiList,
        Red,
        FastTz,
        Kj,
        Footers
    },
    data () {
        return {
            statusConfig: {
                carouseLoaded: false
            },
            carouseData: [],
            disportImgUrl: '/static/img/disport.png'
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
    @import "../../less/index/index.less";
    .index-carouse img{
    	width: 100%;
    	min-height: 109px;
    }

    .lottery-box .loading, .kaijiang .loading{position: absolute;}
</style>
