<template>
    <transition name="message-fade">
        <div class="tips">{{message}}</div>
    </transition>
</template>

<script>
export default {
    data () {
        return {
            msg: this.message
            // msg: 12321321

        };
    }
};
</script>

<style lang="less">
.tips {
    position: fixed;
    left: 50%;
    margin-left: -40%;
    bottom: 50px;
    width: 80%;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    background-color: rgba(0, 0, 0, 0.6);
    color: #fff;
    text-align: center;
    transform: translate(0, 0);
    opacity: 1;
    transition: opacity .3s,transform .4s;
}

.message-fade-enter,.message-fade-leave-active {
    opacity: 0;
    transform: translate(0,-100%)
}
</style>
