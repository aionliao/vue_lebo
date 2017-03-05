<template>
    <section>
        <headers>
            <img class="logo" v-lazy="imgUrl">
            <router-link to="/download" class="download">
                <span class="head_text">下载客户端</span>
                <icon type="down"></icon>
            </router-link>
        </headers>
        <div class="index-carouse">
            <carouse v-if="statusConfig.carouseLoaded">
                <carouse-item v-for="carouse in carouseData" slot="body">
                    <a :href="carouse.webUrl">
                        <img :src="carouse.turnImgUrl" />
                    </a>
                </carouse-item>
            </carouse>
            <img v-else :src="'./static/img/lazy-head.jpg'"></li>
        </div>
        <subNav></subNav>
        <notice></notice>
        <div class="user nologin" id="user"></div>
        <!-- 彩种控制 -->
        <caiList :caiList="indexCaiList"></caiList>
        <!-- 娱乐场 -->
        <section class="disport" id="disport">
            <router-link to="/disport">
                <img class="disport-left lazy-load" v-lazy="disportImgUrl">
            </router-link>
        </section>
        <!-- 红包 -->
        <red></red>

        <!--快投 start-->
        <fastTz></fastTz>
        <!--开奖 start-->
        <section class="kaijiang" id="kj">
    		<h3>最新开奖</h3>
            <kjIndex></kjIndex>
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
import conWrap from '../../components/conWrap/conWrap.vue';
import caiList from '../../components/caiList/caiList.vue';
import footers from '../../components/footers/footers.vue';
import icon from '../../components/icon/icon.vue';

import vueAjax from '../../public/vueAjax.js';
import dealResCode from '../../public/dealResCode.js';

import subNav from './components/subNav/subNav.vue';
import notice from './components/notice/notice.vue';
import red from './components/red/red.vue';
import fastTz from './components/fastTz/fastTz.vue';
import kjIndex from './components/kjIndex/kjIndex.vue';

import indexCaiList from '../../config/indexCaiList.js';

export default {
    name: 'hello',
    components: {
        headers,
        carouse,
        carouseItem,
        conWrap,
        subNav,
        notice,
        caiList,
        red,
        fastTz,
        kjIndex,
        footers,
        icon
    },
    data () {
        return {
            statusConfig: {
                carouseLoaded: false
            },
            indexCaiList: indexCaiList,
            carouseData: [],
            disportImgUrl: './static/img/disport.png',
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
    },
    methods: {

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
    @import "index.less";
</style>
