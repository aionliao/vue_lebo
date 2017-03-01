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
                <jcItem matchList="matchListI"></jcItem>
            </template>
        </li>
    </ul>
    <fixedFooter class="border-top">
        <conWrap class="center-all">
            <row type="flex">
                <i-col span="4">
                    <div class="center-all">
                        <icon type="shanchu"></icon>
                        <p>删除</p>
                    </div>
                </i-col>
                <i-col span="14">
                    <template>
                        <p>已选择{{0}}场</p>
                        <p>请至少选择{{2}}场比赛</p>
                    </template>
                </i-col>
                <i-col span="6">
                    <i-button innerText="选好了" type="radius"></i-button>
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
import copyObjProp from '../../public/copyObjProp.js';

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
                'gameNo': 'TC_JCZQ',
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
            console.log(jcData);
            for (let i = 0, len = jcData.length; i < len; i++) {
                let jcDataI = jcData[i];
                let splitTime = jcDataI.spiltTime;
                let matchList = jcDataI.matchList;
                let splitTimeArr = splitTime.split(' ');
                let splitTimeArrLen = splitTimeArr.length;
                jcDataI.time = splitTimeArr[0];
                jcDataI.week = splitTimeArr[splitTimeArrLen - 1];

                for (let j = 0, jLen = matchList.length; j < jLen; j++) {
                // for (let j = 0, jLen = 1; j < jLen; j++) {
                    let matchListJ = matchList[j];
                    let letScore = matchListJ.letScore;
                    let spObj = this.dealSp(matchListJ.matchAgainstSpInfoList);
                    console.log(spObj);
                    matchListJ.letScore = this.dealLetscore(letScore);
                    matchListJ.sp = {};
                    copyObjProp(matchListJ.sp, spObj);
                }
            }
            console.log('jcData');
            console.log(jcData);
            return jcData;
        }
    },
    methods: {
        dealLetscore (letscore) {
            return letscore > 0 ? '+' + letscore : letscore;
        },
        dealSp (spArr) {
            let spObj = {};
            for (let i = 0, len = spArr.length; i < len; i++) {
                let spArrI = spArr[i];
                let gameNoSp = spArrI.playMethod;
                if (!spObj.hasOwnProperty(gameNoSp)) {
                    spObj[gameNoSp] = {};
                    let realTimeSp = spArrI.realTimeSp;
                    console.log('realTimeSp');
                    console.log(realTimeSp);
                    let realTimeSpArr = realTimeSp.split('@');
                    for (let j = 0, jLen = realTimeSpArr.length; j < jLen; j++) {
                        let realTimeSpArrJ = realTimeSpArr[j];
                        let realTimeSpArrJArr = realTimeSpArrJ.split('_');
                        spObj[gameNoSp][realTimeSpArrJArr[0]] = realTimeSpArrJArr[1];
                    }
                }
            }
            return spObj;
        }
    }
};
</script>

<style lang="less">
    @import "./jc.less";
</style>
