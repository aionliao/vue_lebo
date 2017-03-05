<template lang="html">
    <div :class="classes">
        <slot></slot>
    </div>
</template>

<script>
import prefix from '../../config/prefix.js';
import oneOf from '../../utils/oneOf.js';

const prefixCls = `${prefix}-sub`;
export default {
    props: {
        type: {
            type: String,
            validator (value) {
                return oneOf(value, ['top-left', 'top-right']);
            }
        }
    },
    computed: {
        classes () {
            return `${prefixCls} ${prefixCls}-${this.type}`;
        }
    }
};
</script>

<style lang="less">
@import "../../styles/custom";
@sub-width: 16px;
.@{css-prefix}-sub {
    position: absolute;
    left: -@sub-width / 2;
    top: -@sub-width / 2;
    height: @sub-width;
	width: @sub-width;
	line-height: @sub-width;
	border: none;
    border-radius: 50%;
    background-color: @color-base;
    color: #fff;
	font-size: 12px;
}
</style>
