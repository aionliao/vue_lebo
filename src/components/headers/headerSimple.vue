<template>
    <headers :posType="posType">
        <a href="javascript: history.back(-1)" v-if="link === 'back(-1)'">
            <headerIcon type="left-1" iconType="back"></headerIcon>
        </a>
        <router-link :to="link" v-else>
            <headerIcon type="left-1" iconType="back"></headerIcon>
        </router-link>
        <h2>{{title}}</h2>
    </headers>
</template>

<script>
import headers from './headers.vue';
import headerIcon from './headerIcon.vue';
export default {
    props: {
        link: String,
        title: String,
        posType: {
            type: String,
            default: ''
        }
    },
    components: {
        headers,
        headerIcon
    }
};
</script>
