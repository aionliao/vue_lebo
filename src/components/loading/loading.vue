<template lang="html">
    <div class="loading" :class="class">
        <div class="img-wrap" v-if="imgSrc">
            <img :src="imgSrc">
        </div>
        <p v-if="innerText">{{innerText}}</p>
    </div>
</template>

<script>
export default {
    props: {
        imgSrc: {
            type: String,
            default: './static/img/loading.gif'
        },
        innerText: String
    }
}
</script>

<style lang="css">
.loading {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
}
</style>
