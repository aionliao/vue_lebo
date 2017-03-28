<template>
    <transition name="tips-fade">
        <div class="tips" v-show="visible">{{message}}</div>
    </transition>
</template>

<script>
export default {
    data () {
        return {
            visible: false,
            message: '',
            duration: 2000,
            timer: null,
            closed: false,
            onClose: null
        };
    },
    watch: {
        closed (newVal) {
            if (newVal) {
                this.visible = false;
                this.$el.addEventListener('transitionend', this.destoryElement);
            }
        }
    },
    methods: {
        destoryElement () {
            this.$el.removeEventListener('transitionend', this.destoryElement);
            this.$destroy(true);
            this.$el.parentNode.removeChild(this.$el);
        },
        close () {
            this.closed = true;
            if (typeof this.onClose === 'function') {
                this.onClose(this);
            }
        },
        clearTimer () {
            clearTimeout(this.timer);
        },
        startimer () {
            if (this.duration > 0) {
                this.timer = setTimeout(() => {
                    if (!this.closed) {
                        this.close();
                    }
                }, this.duration);
            }
        }
    },
    created () {
        this.startimer();
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
    // transform: translate(0, 0);
    // opacity: 0;
    // transition: opacity .3s,transform .4s;
}
.tips-fade-enter-active,.tips-fade-leave-active{
    transition: all .5s;
}
.tips-fade-enter,.tips-fade-leave-active {
    opacity: 0;
    transform: translate(0, 20px)
}
</style>
