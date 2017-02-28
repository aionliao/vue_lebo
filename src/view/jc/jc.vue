<template>
    <headers>
        <router-link to="/">
            <headerIcon
            type="left-1"
            iconType="zuo"
            ></headerIcon>
        </router-link>
        <h2>{{gameNoShow}}</h2>
        <!-- <h2>{{urlParams}}</h2> -->
        <div class="">
            {{jcData}}
        </div>
    </headers>
</template>

<script>
import headers from '../../components/headers/headers.vue';
import headerIcon from '../../components/headerIcon/headerIcon.vue';

import cpCodeShow from '../../config/cpCodeShow.js';
import vueAjax from '../../public/vueAjax.js';
import dealResCode from '../../public/dealResCode.js';

export default {
    components: {
        headers,
        headerIcon
    },
    data () {
        return {
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
                // this.statusConfig.loaded = true;
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
        }
    }
};
</script>

<style lang="css">
</style>
