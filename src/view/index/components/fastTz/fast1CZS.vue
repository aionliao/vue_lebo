<template lang="html">
    <div>
        <loadingStatus v-if="!statusConfig.loaded"  posType="absolute" status="loading"></loadingStatus>
        <div v-else>
            <h3>
                <i>{{fast1CZSData.leagueShort}}<span class="time">{{matchSellOutTime}}</span>截止</i>
                <span class="refresh" id="guessRefresh">
                    <icon type="refresh"></icon>换一场
                </span>
            </h3>
            <ul class="guess" id="guess">
                <li v-for="(matchInfo, index) in matchAgainstSpInfoList" @click="setCurrentIndex(index)" :class="index === currentIndex ? 'select-bottom-icon current' : ''" >
                    <div>{{matchInfo.teamName}}</div>
                    <p>{{matchInfo.sp}}</p>
                </li>
            </ul>
            <p class="award-money">最大奖金：<span>{{awardMoney}}{{unitConfig.unit}}</span></p>
            <div class="summary">
                <inputSubPlus type="big" minValue="5" dValue="5" :value="multiple" @input="updateInputVal">倍</inputSubPlus>
                <router-link to="/cart" class="buy-btn"><i-button type="radius">投注</i-button></router-link>
            </div>
        </div>
    </div>
</template>

<script>
import vueAjax from '../../../../public/vueAjax.js';
import formatTime from '../../../../utils/formatTime.js';
import isEmptyObject from '../../../../utils/isEmptyObject.js';
import deepCopy from '../../../../utils/deepCopy.js';
import unitConfig from '../../../../config/unitConfig.js';

import icon from '../../../../components/icon/icon.vue';
import iButton from '../../../../components/iButton/iButton.vue';
import loadingStatus from '../../../../components/loadingStatus/loadingStatus.vue';
import inputSubPlus from '../../../../components/input/inputSubPlus.vue';

function dealSp (spStr) {
    if (!spStr) {
        return;
    }
    let spArr = spStr.split('@');
    let realTimeSpArr = [];
    for (let i = 0, len = spArr.length; i < len; i++) {
        realTimeSpArr.push(spArr[i].split('_')[1]);
    }
    return realTimeSpArr;
}
export default {
    components: {
        icon,
        iButton,
        inputSubPlus,
        loadingStatus
    },
    data () {
        return {
            statusConfig: {
                loaded: false,
                msg: '加载中...',
                firstInit: true
            },
            multiple: 5,
            currentIndexLast: 0,
            fast1CZSData: {},
            unitConfig: unitConfig
        };
    },
    created () {
        vueAjax({
            method: 'get',
            data: {
                'gameNo': 'TC_JCZQ',
                'transactionType': '10103029',
                'isChange': '0',
                'version': 'h5'
            },
            that: this
        }).then((response) => {
            let matchList = response.body.matchList[0];
            this.fast1CZSData = matchList;
            this.statusConfig.loaded = true;
        }, (response) => {
            this.statusConfig.msg = '服务器迷路了';
        });
    },
    computed: {
        matchSellOutTime () {
            let matchSellOutTime = this.fast1CZSData.matchSellOutTime;
            if (!matchSellOutTime) {
                return;
            }
            return formatTime('ymdhms', matchSellOutTime);
        },
        realTimeSpArr () {
            // 3_5.80@1_4.30@0_1.38
            let realTimeSp = this.fast1CZSData.realTimeSp;
            if (!realTimeSp) {
                return;
            }
            return dealSp(realTimeSp);
        },
        currentIndex () {
            if (this.statusConfig.firstInit) {
                let copyArr = deepCopy(this.realTimeSpArr);
                let currentIndex;
                copyArr.sort(function (a, b) {
                    return a - b;
                });
                currentIndex = this.realTimeSpArr.indexOf(copyArr[0]);
                return currentIndex;
            } else {
                return this.currentIndexLast;
            }
        },
        realTimeSpMinSpMax () {
            let realTimeSpMinSp = this.fast1CZSData.realTimeSpMinSp;
            if (!realTimeSpMinSp) {
                return;
            }
            let realTimeSpMinSpArr = dealSp(realTimeSpMinSp);
            realTimeSpMinSpArr.sort(function (a, b) {
                return a - b;
            });
            realTimeSpMinSpArr.reverse();
            return realTimeSpMinSpArr[0];
        },
        awardMoney () {
            return (this.realTimeSpMinSpMax * this.realTimeSpArr[this.currentIndex] * this.multiple * 2).toFixed(2);
        },
        matchAgainstSpInfoList () {
            let matchList = this.fast1CZSData;
            let spfArr = [];
            let teamNameArr = [];
            if (isEmptyObject(matchList)) {
                return;
            }
            teamNameArr = [
                matchList.homeTeamName,
                '平局',
                matchList.guestTeamName
            ];
            let realTimeSpArr = dealSp(this.fast1CZSData.realTimeSp);
            for (let i = 0, len = teamNameArr.length; i < len; i++) {
                spfArr.push({
                    sp: realTimeSpArr[i],
                    teamName: teamNameArr[i]
                });
            }
            return spfArr;
        }
    },
    methods: {
        addMultiple () {
            this.multiple += 1;
        },
        plusMultiple () {
            this.multiple -= 1;
        },
        setCurrentIndex (index) {
            this.statusConfig.firstInit = false;
            this.currentIndexLast = index;
        },
        updateInputVal (val) {
            this.multiple = val;
        }
    }
};
</script>
