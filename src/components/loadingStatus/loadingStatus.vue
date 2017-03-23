<template lang="html">
    <div :class="classes">
        <div class="img-wrap" :class="imgSrcObj.className" v-if="imgSrcObj">
            <img :src="imgSrcObj.src">
        </div>
        <p>{{msg}}</p>
    </div>
</template>

<script>
export default {
    props: {
        status: {
            type: String,
            default: 'loading'
        },
        statusMsg: {
            type: String,
            default: '加载中'
        },
        posType: {
            type: String,
            default: ''
        }
    },
    data () {
        return {
            classes: `loading ${this.posType}`
        };
    },
    computed: {
        msg () {
            if (this.statusMsg) {
                return this.statusMsg;
            } else {
                let msgObj = {
                    'loading': '加载中',
                    'error': '服务器迷路了~'
                };
                return msgObj[this.status];
            }
        },
        imgSrcObj () {
            let imgSrcObj = {
                loading: {
                    src: './static/img/loading.gif',
                    className: 'loading-gif'
                }
            };

            if (imgSrcObj[this.status]) {
                return imgSrcObj[this.status];
            }
        }
    }
};
</script>

<style lang="less">
@import "../../styles/custom.less";
@import "../../styles/mixins/center.less";
.loading {
    position: fixed;
    .centerAll();
    text-align: center;
    color: @text-grap;
}
.loading.absolute {
    position: absolute;
}
.loading-gif {
    width: 30px;
    margin: 0 auto;
}
.loading p{
    font-size: 14px;
    white-space: nowrap;
}
</style>
