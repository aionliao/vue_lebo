<template>
    <div class="high-header">
        <headerSimple :link="link" :title="title" posType="relative"></headerSimple>
        <slot></slot>
    </div>
</template>

<script>
import headerSimple from './headerSimple.vue';
export default {
    props: {
        link: String,
        title: String
    },
    components: {
        headerSimple
    }
};
</script>
<style lang="less">
@import '../../styles/custom.less';
.high-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 88px;
    z-index: @zindex-header;
}
</style>
