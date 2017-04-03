<template>
	<section class="login">
		<headerSimple link="back(-1)" title="忘记密码">
			<headerIcon type="right-1" iconType="homefill"></headerIcon>
		</headerSimple>
		<div class="login-input-area">
			<inputArea iconType="mobilefill">
				<input type="tel" placeholder="请输入手机号" name="mobile"
					v-model="telphone"  tag="密码" v-validate:mobile/>
			</inputArea>
			<inputArea iconType="yanzhengma">
				<input type="text" placeholder="请输入验证码" name="smsCode"
					v-model="smsCode"  tag="密码" v-validate:smsCode/>
			</inputArea>
		</div>
		<div class="login-input-area">

			<inputArea iconType="password">
				<input type="password" placeholder="请输入6-16个字符" name="password"
					v-model="passWordVal"  tag="密码" v-validate:password/>
			</inputArea>
			<inputArea iconType="password">
				<input type="password" placeholder="请确认密码" name="passwordEqual"
					v-model="passWordValEqual"  tag="密码" v-validate:password/>
			</inputArea>
		</div>
		<div class="login-btn-area">
			<conWrap>
				<i-button type="radius" v-validate-check>重置密码</i-button>
			</conWrap>
		</div>
		<linkArea></linkArea>
	</section>
</template>

<script>
	import headerSimple from '../../components/headers/headerSimple.vue';
	import headerIcon from '../../components/headers/headerIcon.vue';
	import inputArea from '../../components/input/inputArea.vue';
	import iButton from '../../components/iButton/iButton.vue';
	import conWrap from '../../components/conWrap/conWrap.vue';
	import linkArea from '../../components/linkArea/linkArea.vue';
	import {validateDirective, validateCheckDirective} from '../../directive/v-validate';

	export default {
		components: {
			headerSimple,
			inputArea,
			iButton,
			conWrap,
			linkArea,
			headerIcon
		},
		directives: {
			validate: validateDirective,
			validateCheck: validateCheckDirective
		},
		data () {
			return {
				userNameVal: '',
				passWordVal: '',
				passWordValEqual: '',
				telphone: '',
				smsCode: ''
			};
		}
	};
</script>

<style lang="less">
	@import "./loginRelate.less";
</style>
