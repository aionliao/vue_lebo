<template lang="html">
    <div>
        <template v-for="obj in objs">
            <h3 v-if="obj.title">{{obj.title}}</h3>
            <row>
                <i-col :span="letScoreCol" v-if="obj.letScore">
                    <row class="jc-letscore" v-for="letScore in obj.letScore" >
                        <i-col span="24" :class="letScore.className">
                            <div class="center-all">{{letScore.score}}</div>
                        </i-col>
                    </row>
                </i-col>
                <i-col :span="24 - letScoreCol">
                    <row>
                        <i-col span="24" v-for="(con, conIndex) in obj.con" :class="[conIndex === obj.con.length - 1 ? 'no-border-top' : '']">
                            <row class="jc-sp">
                                <i-col :span="con.conSpanCol" v-for="showData in con.showData">
                                    <spItem :spData="showData"></spItem>
                                </i-col>
                            </row>
                        </i-col>
                    </row>
                </i-col>
            </row>
        </template>
    </div>
</template>

<script>
import spItem from './spItem.vue';

import { Row, iCol } from '../../components/layout/index.js';
export default {
    components: {
        Row,
        iCol,
        spItem
    },
    data () {
        return {
            letScoreCol: 2,

            objs: [
                {
                    // title: '胜平负/让球',
                    letScore: [
                        {
                            score: '0',
                            className: ''
                        },
                        {
                            score: '-1',
                            className: 'green'
                        }
                    ],
                    con: [
                        {
                            conSpanCol: 8,
                            showData: [
                                {
                                    code: '胜',
                                    sp: '1.23',
                                    isCurrent: false
                                },
                                {
                                    code: '平',
                                    sp: '3.16',
                                    isCurrent: false
                                },
                                {
                                    code: '负',
                                    sp: '2.00',
                                    isCurrent: false
                                }
                            ]
                        },
                        {
                            conSpanCol: 8,
                            showData: [
                                {
                                    code: '胜',
                                    sp: '1.23',
                                    isCurrent: false
                                },
                                {
                                    code: '平',
                                    sp: '3.16',
                                    isCurrent: false
                                },
                                {
                                    code: '负',
                                    sp: '2.00',
                                    isCurrent: false
                                }
                            ]
                        }
                    ]
                }
            ]
        };
    },
    methods: {
    }

};
</script>

<style lang="less">
</style>
