<template lang="html">
    <div>
        <div v-if="!statusConfig.loaded" class="loading">{{statusConfig.msg}}</div>
        <div v-if="statusConfig.loaded">
            <h3>
                <i>{{fast1CZSData.leagueShort}}<span class="time">{{matchSellOutTime}}</span>截止</i>
                <a class="refresh" id="guessRefresh">
                    <span class="icon-duihuan"></span>换一场
                </a>
            </h3>
            <ul class="guess" id="guess">
                <li v-for="(matchInfo, index) in matchAgainstSpInfoList" @click="setCurrentIndex(index)" :class="index === currentIndex ? 'current' : ''" >
                    <div>{{matchInfo.teamName}}</div>
                    <p>{{matchInfo.sp}}</p>
                </li>
            </ul>
            <p class="award-money">最大奖金：<span id="awardMoney">{{awardMoney}}</span>{{unitConfig.unit}}</p>
            <div class="summary">
                <div class="put-money" id="guessPutMoney">
                    <span class="change-btn put-left" @click="plusMultiple"></span>
                    <input class="numInput" data-gameNo="TC_1CZS" type="tel" maxlength="6" v-model="multiple" >
                    <span class="change-btn put-rig" @click="addMultiple"></span></div>
                    <span class="mi">倍</span>
                    <router-link to="/cart" class="buy-btn">
                        投注
                    </router-link>
                </div>
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
    beforeCreate () {
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
        }
    }
};
</script>

<style lang="css">
</style>
