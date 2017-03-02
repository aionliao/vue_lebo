<template>
	<section class="login">
		<headerSimple link="/" title="登录"></headerSimple>
		<div class="login-input-area">
			<inputArea iconType="yonghuming" inputType="text" placeholder="输入手机号/用户名"></inputArea>
			<inputArea iconType="mima" type="password" placeholder="输入您的密码"></inputArea>
		</div>
		<div class="login-btn-area">
			<conWrap>
				<i-button type="radius">登录</i-button>
			</conWrap>
		</div>
		<div class="login-btn-area">
			<conWrap>
				<router-link to="/register">
					<i-button type="white-radius">注册</i-button>
				</router-link>
			</conWrap>
		</div>
		<conWrap>
			<p class="text-right">
				<router-link to="/forget" class="mid-size">忘记密码?</router-link>
			</p>
		</conWrap>
		<linkArea></linkArea>
	</section>
</template>

<script>
	import headerSimple from '../../components/headerSimple/headerSimple.vue';
	import inputArea from '../../components/inputArea/inputArea.vue';
	import iButton from '../../components/iButton/iButton.vue';
	import conWrap from '../../components/conWrap/conWrap.vue';
	import linkArea from '../../components/linkArea/linkArea.vue';

	export default {
		components: {
			headerSimple,
			inputArea,
			iButton,
			conWrap,
			linkArea
		}
	};
</script>

<style lang="less">
	@import "login.less";
</style>
