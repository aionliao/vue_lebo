<template lang="html">
    <div>
        <h3>
            <i>{{leagueShort}}<span class="time">{{matchSellOutTime}}</span>截止</i>
            <a class="refresh" id="guessRefresh">
                <span class="icon-duihuan"></span>换一场
            </a>
        </h3>
        <ul class="guess" id="guess">
            <li v-for="matchInfo in matchAgainstSpInfoList">
                <div>{{matchInfo.teamName}}</div>
                <p>{{matchInfo.sp}}</p>
            </li>
        </ul>
        <p class="award-money">最大奖金：<span id="awardMoney">{{awardMoney}}</span>{{unitConfig.unit}}</p>
        <div class="summary">
            <div class="put-money" id="guessPutMoney">
                <span class="change-btn put-left"></span>
                <input class="numInput" data-gameNo="TC_1CZS" type="tel" maxlength="6" value="5" >
                <span class="change-btn put-rig"></span></div>
                <span class="mi">倍</span>
                <router-link to="/cart" class="buy-btn">
                    投注
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import vueAjax from '../../../../tools/vueAjax.js';
import formatTime from '../../../../tools/formatTime.js';
import unitConfig from '../../../../config/unitConfig.js';

function dealSp(spStr) {
    let spArr =  spStr.split('@');
    let realTimeSpArr = [];
    for (let i = 0, len = spArr.length; i < len; i++) {
        realTimeSpArr.push(spArr.split('_')[1]);
    }
    return realTimeSpArr;
}
export default {
    data () {
        return {
            fast1CZSData: {},
            leagueShort: '',
            matchSellOutTime: '',
            fast1CZSData: {},
            awardMoney: '',
            realTimeSp: [],
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
            matchList.matchSellOutTime = formatTime('ymdhms', matchList.matchSellOutTime);
            matchList.matchAgainstSpInfoList = this.getMatchAgainstSpInfoList(matchList);

            this.fast1CZSData = matchList;
            console.log(this.fast1CZSData);
        }, (response) => {
            console.log(response);
        });
    },
    computed: {
        realTimeSpArr () {
            // 3_5.80@1_4.30@0_1.38
            return dealSp(this.fast1CZSData.realTimeSp);
        },
        realTimeMinSpMax () {
            let realTimeMinSpArr = dealSp(this.fast1CZSData.realTimeMinSp);
            realTimeMinSpArr.sort(function (a, b){
                return a - b;
            });
            return realTimeMinSpArr[0];
        },
        awardMoney () {

        },
        getMatchAgainstSpInfoList () {
            let matchList = this.fast1CZSData;
            let spfArr = [];
            let teamNameArr = [
                matchList.homeTeamName,
                '平局',
                matchList.guestTeamName
            ];
            for (let i = 0, len = teamNameArr.length; i < len; i++) {
                spfArr.push({
                    sp: this.realTimeSpArr[i],
                    teamName: teamNameArr[i]
                });
            }
            return spfArr;
        }
    },
    methods: {

    }
};
</script>

<style lang="css">
</style>
