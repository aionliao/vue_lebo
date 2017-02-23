<template lang="html">
    <span :class="classes" :style="styles"></span>
</template>

<script>
import prefix from '../../config/prefix.js';

const prefixCls = `${prefix}-icon`;
export default {
    props: {
        type: String,
        size: [Number, String],
        color: String
    },
    computed: {
        classes () {
            return `${prefixCls} ${prefixCls}-${this.type}`;
        },
        styles () {
            let style = {};
            if (this.size) {
                style['font-size'] = `${this.size}px`;
            }
            if (this.color) {
                style.color = this.color;
            }
            return style;
        }
    }
};
</script>

<style lang="css">
</style>
