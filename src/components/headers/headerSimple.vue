<template>
    <headers :posType="posType">
        <router-link :to="link">
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
