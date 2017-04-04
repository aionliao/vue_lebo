<template lang="html">
    <conWrap>
        <div class="trend-index-left">
            <img v-lazy="trendData.gameNoImg"/>
        </div>
        <div class="trend-index-right">
            <h4>{{getShow(trendData.gameNo)}}</h4>
            <p>{{trendData.gameNoTopic}}</p>
        </div>
    </conWrap>
</template>

<script>
import conWrap from '../../components/conWrap/conWrap.vue';
import cpCodeShow from '../../config/cpCodeShow';

export default {
    props: {
        trendData: [Object]
    },
    components: {
        conWrap
    },
    methods: {
        getShow (gameNo) {
            return cpCodeShow[gameNo];
        }
    }
};
</script>

<style lang="less">
@import '../../styles/custom.less';
.trend-index-left {
    margin-right: 10px;
}
.trend-index-right {
    p {
        font-size: 14px;
        line-height: 26px;
        color: @text-grap;
    }
}
</style>
