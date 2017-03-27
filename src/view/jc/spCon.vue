<template lang="html">
        <row>
            <i-col span="20">
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
                                            <spItem :clear="clear" @reverseCurrent="addChooseNums" :spData="showData"></spItem>
                                        </i-col>
                                    </row>
                                </i-col>
                            </row>
                        </i-col>
                    </row>
                </template>

            </i-col>
            <i-col span="4" class="jc-choose">
                <div class="filled" :class="{'current select-bottom-icon': chooseNums}">
                    <div class="center-all">
                        <template v-if="chooseNums">
                            已选<br>
                            {{chooseNums}}项
                        </template>
                        <template v-else>
                            更多<br>选项
                        </template>
                    </div>
                </div>
            </i-col>
        </row>
</template>

<script>
import spItem from './spItem.vue';

import { Row, iCol } from '../../components/layout/index.js';
export default {
    props: {
        spObj: Object,
        clear: Number,
        letScore: String
    },
    components: {
        Row,
        iCol,
        spItem
    },
    data () {
        return {
            letScoreCol: 2,
            chooseNums: 0,
            objs: [
                {
                    // title: '胜平负/让球',
                    letScore: [
                        {
                            score: '0',
                            className: ''
                        },
                        {
                            score: this.letScore,
                            className: this.letScore > 0 ? 'red' : 'green'
                        }
                    ],
                    con: [
                        {
                            conSpanCol: 8,
                            showData: [
                                {
                                    code: '胜',
                                    sp: this.spObj.TC_JZSPF['3'],
                                    isCurrent: false
                                },
                                {
                                    code: '平',
                                    sp: this.spObj.TC_JZSPF['1'],
                                    isCurrent: false
                                },
                                {
                                    code: '负',
                                    sp: this.spObj.TC_JZSPF['0'],
                                    isCurrent: false
                                }
                            ]
                        },
                        {
                            conSpanCol: 8,
                            showData: [
                                {
                                    code: '胜',
                                    sp: this.spObj.TC_JZXSPF['3'],
                                    isCurrent: false
                                },
                                {
                                    code: '平',
                                    sp: this.spObj.TC_JZXSPF['1'],
                                    isCurrent: false
                                },
                                {
                                    code: '负',
                                    sp: this.spObj.TC_JZXSPF['0'],
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
        addChooseNums (num) {
            this.chooseNums += num;
        }
    },
    watch: {
        chooseNums (val, oldVal) {
            if (val > 0 && oldVal === 0) {
                this.$emit('tzNum', 1);
            } else if (val === 0 && oldVal > 0) {
                this.$emit('tzNum', -1);
            }
        },
        clear () {
            this.chooseNums = 0;
        }
    }

};
</script>

<style lang="less" scoped>
@import "../../styles/custom";
.filled.current{
    color:@color-base;
}
</style>
