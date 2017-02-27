<template lang="html">
    <div :class="classes">
        <row v-for="(dateDatas, index) in allDateData" :class="index === 0 ? 'firstLine' : ''">
            <i-col span="1-7" v-for="dateData in dateDatas" :class="{'visible-hide': !dateData}">
                {{dateData}}
            </i-col>
        </row>
    </div>
</template>

<script>
import prefix from '../../config/prefix.js';
import formatTime from '../../utils/formatTime.js';
import { Row, iCol } from '../../components/layout/index.js';
export default {
    props: {
        date: {
            type: [String],
            default: formatTime('y-m-d')
        }
    },
    components: {
        Row,
        iCol
    },
    computed: {
        classes () {
            return `${prefix}-calendar`;
        },
        allDateData () {
            let monthArr = [];
            let monthArrLen = 1;
            let weekArr = ['一', '二', '三', '四', '五', '六', '七'];
            let weekNumArr = [6, 0, 1, 2, 3, 4, 5];
            let nowDateArr = this.date.split('-');
            //  获取这个月有多少天
            let nowMonthDays = new Date(nowDateArr[0], nowDateArr[1], 0).getDate();
            let firstDay = 1;
            monthArr[0] = weekArr;
            do {
                // 确定这个月第一天是星期几
                let firstDayWeek = weekNumArr[new Date(nowDateArr[0], nowDateArr[1] - 1, firstDay).getDay()];
                console.log('firstDayWeek');
                console.log(firstDayWeek);
                // let lineTwoArr = ['', '', '', '', '', '', ''];
                let lineTwoArr = [0, 0, 0, 0, 0, 0, 0];
                for (let i = 0; i < 7; i++) {
                    if (i >= firstDayWeek && firstDay <= nowMonthDays) {
                        lineTwoArr[i] = firstDay;
                        firstDay += 1;
                    }
                }
                monthArr[monthArrLen] = lineTwoArr;
                monthArrLen += 1;
            } while (firstDay <= nowMonthDays);
            return monthArr;
        }
    }
};
</script>

<style lang="less">
.visible-hide {
    visibility: hidden;
}
</style>
