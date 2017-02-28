<template>
    <sectionWrap mt="50">

        <headers>
            <router-link to="/">
                <headerIcon type="left-1" iconType="zuo"></headerIcon>
            </router-link>
            <h2>{{gameNoShow}}</h2>
    </headers>
    <div class="jc-item text-center">
        <row>
            <i-col span="6" class="visibile-hide">0</i-col>
            <i-col span="18">创造者<span>vs</span>阿布扎比艾因</i-col>
        </row>
        <row>
            <i-col span="5">
                <div class="center-all">
                    <p>亚冠</p>
                    <p>周二005</p>
                    <p>20：50截止</p>
                    <p><icon type="jiantou"></icon></p>
                </div>
            </i-col>
            <i-col span="1">
                <row>
                    <i-col span="24">
                        <div class="center-all">
                            1
                        </div>
                    </i-col>
                    <i-col span="24">
                        <div class="center-all">
                            0
                        </div>
                    </i-col>
                </row>
            </i-col>
            <i-col span="15">
                <row>
                    <i-col span="8">
                        <div class="center-all">
                            胜
                        </div>
                    </i-col>
                    <i-col span="8">
                        <div class="center-all">
                            平
                        </div>
                    </i-col>
                    <i-col span="8">
                        <div class="center-all">
                            负
                        </div>
                    </i-col>
                </row>
                <row>
                    <i-col span="8">
                        <div class="center-all">
                            胜
                        </div>
                    </i-col>
                    <i-col span="8">
                        <div class="center-all">
                            平
                        </div>
                    </i-col>
                    <i-col span="8">
                        <div class="center-all">
                            负
                        </div>
                    </i-col>
                </row>
            </i-col>
            <i-col span="3">
                <div class="center-all">
                    已选<br>
                    8项
                </div>
            </i-col>
        </row>
    </div>
    </sectionWrap>
</template>

<script>
import headers from '../../components/headers/headers.vue';
import headerIcon from '../../components/headerIcon/headerIcon.vue';
import icon from '../../components/icon/icon.vue';
import sectionWrap from '../../components/sectionWrap/sectionWrap.vue';
import { Row, iCol } from '../../components/layout/index.js';

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
        sectionWrap
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
    },
    methods: {
        dealAjaxData () {

        }
    }
};
</script>

<style lang="less">
    @import "./jc.less";
</style>
