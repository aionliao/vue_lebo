<template lang="html">
    <div class="">
        <row>
            <i-col span="2">
                <row class="jc-letscore">
                    <i-col span="24">
                        <div class="center-all">
                            0
                        </div>
                    </i-col>
                    <i-col span="24" :class="letScoreClass">
                        <div class="center-all">
                            {{dealLetscore}}
                        </div>
                    </i-col>
                </row>
            </i-col>
            <i-col span="22">
                <row>
                    <i-col span="24">
                        <row class="jc-sp">
                            <i-col span="8">
                                <div class="center-all">
                                    <em>胜</em>{{spObj.TC_JZSPF['3']}}
                                </div>
                            </i-col>
                            <i-col span="8">
                                <div class="center-all">
                                    <em>胜</em>{{spObj.TC_JZSPF['3']}}
                                </div>
                            </i-col>
                            <i-col span="8">
                                <div class="center-all">
                                    <em>胜</em>{{spObj.TC_JZSPF['3']}}
                                </div>
                            </i-col>
                        </row>
                    </i-col>
                    <i-col span="24">
                        <row class="jc-sp">
                            <i-col span="8">
                                <div class="center-all">
                                    <em>胜</em>{{spObj.TC_JZSPF['3']}}
                                </div>
                            </i-col>
                            <i-col span="8">
                                <div class="center-all">
                                    <em>胜</em>{{spObj.TC_JZSPF['3']}}
                                </div>
                            </i-col>
                            <i-col span="8">
                                <div class="center-all">
                                    <em>胜</em>{{spObj.TC_JZSPF['3']}}
                                </div>
                            </i-col>
                        </row>
                    </i-col>

                </row>
            </i-col>
        </row>
    </div>
</template>

<script>
export default {
};
</script>

<style lang="less">
</style>
