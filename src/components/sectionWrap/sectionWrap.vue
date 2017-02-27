<template lang="html">
    <section class="mt-60" :class="classes">
        <slot></slot>
    </section>
</template>

<script>
export default {
    props: {
        class: {
            type: String,
            default: ''
        }
    },
    data () {
        return {
            classes: this.class
        };
    }
};
</script>

<style lang="less">
    .mt-60{
        margin-top: 60px;
    }
</style>
