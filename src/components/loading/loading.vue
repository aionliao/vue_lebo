<template lang="html">
    <div :class="classes">
        <div class="img-wrap" :class="imgSrcObj.className" v-if="imgSrcObj">
            <img :src="imgSrcObj.src">
        </div>
        <p><slot></slot></p>
    </div>
</template>

<script>
export default {
    props: {
        type: String,
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
        imgSrcObj () {
            let imgSrcObj = {
                loading: {
                    src: './static/img/loading.gif',
                    className: 'loading-gif'
                }
            };

            if (imgSrcObj[this.type]) {
                return imgSrcObj[this.type];
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
