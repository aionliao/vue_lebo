<template lang="html">
    <section :class="classes">
        <slot></slot>
    </section>
</template>

<script>
export default {
    props: {
        class: {
            type: String,
            default: ''
        },
        mt: {
            type: [String, Number],
            default: 60
        }
    },
    computed: {
        classes () {
            return [
                `mt-${this.mt}`,
                {
                    [this.class]: this.class
                }
            ];
        }
    }
};
</script>

<style lang="less">
    .mt-60{
        margin-top: 60px;
    }
</style>
