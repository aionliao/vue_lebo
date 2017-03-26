<template>
    <sectionWrap mt="50">
        <headerSimple :title="gameNoShow" link="/">
            <headerIcon type="right-2" iconType="filter"></headerIcon>
            <headerIcon type="right-1" iconType="category"></headerIcon>
        </headerSimple>
        <loadingStatus v-if="statusConfig.isLoading" :status="statusConfig.loadingStatus"></loadingStatus>
        <ul v-else class="jc-wrap">
            <li v-for="jcData in dealedJcData">
                <div class="jc-gather">
                    <conWrap>
                        <lmrLayout type="left-right">
                            <template slot="left">
                                <span>{{jcData.time}}</span>
                                <span>{{jcData.week}}</span>
                                <span>{{jcData.matchList.length}}场比赛可投</span>
                            </template>
                            <template slot="right">
                                <icon type="unfold"></icon>
                            </template>
                        </lmrLayout>
                    </conWrap>
                </div>
                <template v-for="matchListI in jcData.matchList">
                    <jcItem :clear="clear" @tzNum="getTzNum" :week="jcData.week" :matchList="matchListI"></jcItem>
                </template>
            </li>
        </ul>
        <fixedFooter class="border-top" @click="greet">
            <conWrap class="center-all">
                <row type="flex">
                    <i-col span="4">
                        <div class="center-all mid-size" @click="clearTzNum">
                            <icon type="delete"></icon>
                            <p>删除</p>
                        </div>
                    </i-col>
                    <i-col span="14">
                        <div v-if="tzNum < minTzNum">
                            <div class="center-all">
                                <p>已选择<span class="text-base-color">{{tzNum}}</span>场</p>
                                <p class="text-grap">请至少选择{{minTzNum}}场比赛</p>
                            </div>
                        </div>
                        <row class="mt-5 tz-info"  type="flex" v-else>
                            <i-col span="8">
                                <span class="chun">
                                    <i-sub>{{tzNum}}</i-sub>
                                    {{chooseChun}}
                                </span>
                            </i-col>
                            <i-col span="16">
                                <inputSubPlus :value="5">倍</inputSubPlus>
                            </i-col>
                        </row>
                    </i-col>
                    <i-col span="6">
                        <i-button  type="radius">选好了</i-button>
                    </i-col>
                </row>
            </conWrap>
        </fixedFooter>
    </sectionWrap>
</template>

<script>
import headerSimple from '../../components/headers/headerSimple.vue';
import iSub from '../../components/sub/sub.vue';
import headerIcon from '../../components/headers/headerIcon.vue';
import inputSubPlus from '../../components/input/inputSubPlus.vue';
import loadingStatus from '../../components/loadingStatus/loadingStatus.vue';
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
    props: {
        minTzNum: {
            type: Number,
            default: 2
        }
    },
    components: {
        headerSimple,
        headerIcon,
        icon,
        Row,
        iCol,
        sectionWrap,
        lmrLayout,
        conWrap,
        iButton,
        fixedFooter,
        jcItem,
        inputSubPlus,
        iSub,
        loadingStatus
    },
    data () {
        return {
            statusConfig: {
                isLoading: true,
                loadingType: 'loading'
            },
            jcData: [],
            tzNum: 0,
            clear: 0,
            chooseChun: '2串1'
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
                this.statusConfig.isLoading = false;
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
        },
        getTzNum (num) {
            this.tzNum += num;
        },
        clearTzNum () {
            this.clear += 1;
        }
    }
};
</script>

<style lang="less">
    @import "./jc.less";
</style>
