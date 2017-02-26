<template>
    <div>
        <h3 v-if="title">{{title}}</h3>
        <div class="img-wrap" v-if="imgSrc">
            <img v-lazy="imgSrc"/>
        </div>
        <p v-if="innerText">{{innerText}}</p>
    </div>
</template>
<script>
	export default {
		props: {
			title: String,
			imgSrc: String,
			innerText: String
		}
	};
</script>
