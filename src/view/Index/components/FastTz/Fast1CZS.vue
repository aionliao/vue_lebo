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

export default {
    data () {
        return {
            fast1CZSData: {},
            leagueShort: '',
            matchSellOutTime: '',
            fast1CZSData: {},
            awardMoney: '',
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
        awardMoney () {
            var spArrOut = temObj.realTimeSp.split('@');
            var spArrMin = (function () {
                var spArrCopy = [];
                for (var i = 0; i < spArrOut.length; i++) {
                    spArrCopy[i] = spArrOut[i];
                }
                spArrCopy.sort(function (a, b) {
                    return a.split('_')[1] - b.split('_')[1];
                });
                return spArrCopy[0];
            }());
            console.log('spArrOut');
            console.log(spArrOut);
            console.log('spArrMin');
            console.log(spArrMin);
            var minIndex = spArrOut.indexOf(spArrMin);
            temObj.matchSellOutTime = formatTime('ymdhm', temObj.matchSellOutTime);
            temObj.dataTime = formatTime('ymdhms', temObj.matchSellOutTime);
            temObj.matchAgainstSpInfoList = _this.formatSPFInfoList(temObj.realTimeSp);
            temObj.gameId = temObj.issueNo + temObj.week + temObj.matchSort;
            temObj.unit = configure.unit;

            dealMinSpDataObj = (function (temObj) {
            	var gameId = temObj.issueNoMinSp + temObj.weekMinSp + temObj.matchSortMinSp;
                var letScore = temObj.letScoreMinSp;

                var endTimeAll = formatTime('ymdhms', temObj.matchSellOutTimeMinSp);

                /**
                 *  letScore: -1, sp 值为3_spf @ 0_rqspf
                 *  letScore: 1, sp 值为0_spf @ 3_rqspf
                 *
                 *  胜平负:108011001
                 *  让球胜平负: 108061001
                 *
                 *  示例 '201610123002@108011001@1_3.15,0_3.50@2016-10-12 21:50:00$-1'
                 */

                // 查询和处理 sp 值



                var spArr = temObj.realTimeSpMinSp.split('@');
                var spArrZero = spArr[0];
                var spArrFirst = spArr[1];
                var codeContent = '';

                codeContent = gameId + '@108011001@' + spArrZero + '|108061001@'  + spArrFirst + '@' + endTimeAll + '$' + letScore;
                spArr.sort(function (a, b) {
                    return a.split('_')[1] - b.split('_')[1];
                });

                return {
                	codeContent: codeContent,
                	spMax: spArr[1].split('_')[1]
                }
            }(temObj));

            temObj.codeContent = dealMinSpDataObj.codeContent;
            temObj.spMax = dealMinSpDataObj.spMax;
            temObj.spArrMin = spArrMin.split('_')[1];

            var temHTML = templateData.temGuessDom;
            var insertHTML = $.tpl(temHTML, temObj);

            console.log('minIndex');
            console.log(minIndex);
            $('#li_01').empty().html(insertHTML).find('li').eq(minIndex || 0).addClass('current');
            temHTML = '';
            insertHTML = '';
        },
        getMatchAgainstSpInfoList () {
            // 3_5.80@1_4.30@0_1.38
            let matchList = this.fast1CZSData;
            let spArr = matchList.realTimeSp.split('@');
            let spfArr = [];
            let teamNameArr = [
                matchList.homeTeamName,
                '平局',
                matchList.guestTeamName
            ];
            for (let i = 0, len = spArr.length; i < len; i++) {
                spfArr.push({
                    sp: spArr[i].split('_')[1],
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
