<template>
    <headers>
        <router-link :to="link">
            <headerIcon
            type="left-1"
            iconType="arrow-left"
            ></headerIcon>
        </router-link>
        <h2>{{title}}</h2>
    </headers>
</template>

<script>
import headers from '../../components/headers/headers.vue';
import headerIcon from '../../components/headerIcon/headerIcon.vue';
export default {
    props: {
        link: String,
        title: String
    },
    components: {
        headers,
        headerIcon
    }
};
</script>
