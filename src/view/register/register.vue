<template>
	<section class="login">
		<headerSimple link="/" title="注册"></headerSimple>
		<div class="login-input-area">
			<inputArea iconType="people" inputType="text" placeholder="4-12个字符或下划线，不能全部为数字"></inputArea>
			<inputArea iconType="password" type="password" placeholder="请输入6-16个字符"></inputArea>
			<inputArea iconType="password" type="password" placeholder="请确认密码"></inputArea>
		</div>
		<div class="login-input-area">
			<inputArea iconType="mobilefill" inputType="text" placeholder="请输入手机号"></inputArea>
			<inputArea iconType="yanzhengma" type="password" placeholder="请输入验证码"></inputArea>
		</div>
		<div class="login-btn-area">
			<conWrap>
				<i-button type="radius">注册</i-button>
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
	import headerSimple from '../../components/headers/headerSimple.vue';
	import inputArea from '../../components/input/inputArea.vue';
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
	@import "./register.less";
</style>
