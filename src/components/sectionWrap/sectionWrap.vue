<template lang="html">
    <section class="classes">
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

<style lang="less" scoped>
    section {
        margin-top: 60px;
    }
</style>
