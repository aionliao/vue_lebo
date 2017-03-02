<template>
    <sectionWrap mt="50">

        <headers>
            <router-link to="/">
                <headerIcon type="left-1" iconType="zuo"></headerIcon>
            </router-link>
            <h2>{{gameNoShow}}</h2>
    </headers>
    <ul class="jc-wrap">
        <li v-for="jcData in dealedJcData" v-if="statusConfig.loaded">
            <div class="jc-gather">
                <conWrap>
                    <lmrLayout type="left-right">
                        <template slot="left">
                            <span>{{jcData.time}}</span>
                            <span>{{jcData.week}}</span>
                            <span>{{jcData.matchList.length}}场比赛可投</span>
                        </template>
                        <template slot="right">
                            <icon type="jiantou"></icon>
                        </template>
                    </lmrLayout>
                </conWrap>
            </div>
            <template v-for="matchListI in jcData.matchList">
                <jcItem :week="jcData.week" :matchList="matchListI"></jcItem>
            </template>
        </li>
    </ul>
    <fixedFooter class="border-top" @click="greet">
        <conWrap class="center-all">
            <row type="flex">
                <i-col span="4">
                    <div class="center-all mid-size">
                        <icon type="shanchu" class="icon-font-big"></icon>
                        <p>删除</p>
                    </div>
                </i-col>
                <i-col span="14">
                    <template>
                        <p>已选择<span class="text-base-color">{{0}}</span>场</p>
                        <p class="text-grap">请至少选择{{2}}场比赛</p>
                    </template>
                </i-col>
                <i-col span="6">
                    <i-button type="radius">选好了</i-button>
                </i-col>
            </row>
        </conWrap>
    </fixedFooter>
</template>

<script>
import headers from '../../components/headers/headers.vue';
import headerIcon from '../../components/headerIcon/headerIcon.vue';
import icon from '../../components/icon/icon.vue';
import sectionWrap from '../../components/sectionWrap/sectionWrap.vue';
import conWrap from '../../components/conWrap/conWrap.vue';
import iButton from '../../components/iButton/iButton.vue';
import lmrLayout from '../../components/layout/lmrLayout.vue';
import fixedFooter from '../../components/footers/fixedFooter.vue';
import { Row, iCol } from '../../components/layout/index.js';
import jcItem from './jcItem.vue';

import cpCodeShow from '../../config/cpCodeShow.js';
import vueAjax from '../../public/vueAjax.js';
import dealResCode from '../../public/dealResCode.js';

export default {
    components: {
        headers,
        headerIcon,
        icon,
        Row,
        iCol,
        sectionWrap,
        lmrLayout,
        conWrap,
        iButton,
        fixedFooter,
        jcItem
    },
    data () {
        return {
            statusConfig: {
                loaded: false
            },
            jcData: []
        };
    },
    created () {
        vueAjax({
            method: 'get',
            data: {
                'transactionType': '10103017',
                'issueNo': '20160130',
                'gameNo': this.gameNo,
                'isCurrent': '0',
                'betPlatform': '0'
            },
            that: this
        }).then((response) => {
            let data = response.body;
            let resCode = dealResCode(data.resCode);

            if (resCode === '0') {
                this.jcData = data.list;
                this.statusConfig.loaded = true;
            } else {
                // this.statusConfig.loaded = false;
                // this.statusConfig.msg = data.resMsg;
            }
        }, (response) => {
            // this.statusConfig.loaded = false;
            // this.statusConfig.msg = '服务器迷路了';
        });
    },
    computed: {
        gameNo () {
            return this.$route.params.gameNo;
        },
        gameNoShow () {
            return cpCodeShow[this.gameNo];
        },
        dealedJcData () {
            let jcData = this.jcData;
            for (let i = 0, len = jcData.length; i < len; i++) {
                let jcDataI = jcData[i];
                let splitTime = jcDataI.spiltTime;
                let splitTimeArr = splitTime.split(' ');
                let splitTimeArrLen = splitTimeArr.length;
                jcDataI.time = splitTimeArr[0];
                jcDataI.week = splitTimeArr[splitTimeArrLen - 1];
            }
            return jcData;
        }
    },
    methods: {
        greet () {
            alert('greet');
        }
    }
};
</script>

<style lang="less">
    @import "./jc.less";
</style>
