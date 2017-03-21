<template>
    <div class="sub-header">
        <slot></slot>
    </div>
</template>

<script>
export default {
};
</script>
<style lang="less">
@import "../../styles/custom.less";
@sub-header-height: 38px;
.sub-header{
    background-color: #fff;
    height: @sub-header-height;
    line-height: @sub-header-height;
    text-align: center;
    font-size: 14px;
}
.sub-header .current {
    color: @color-base;
    border-bottom: 1px solid @color-base;
}
.sub-header .@{css-prefix}-col {
    border-right: 1px solid @border-color-base;
}
.sub-header .@{css-prefix}-col:last-child {
    border-right: none;
}
</style>
