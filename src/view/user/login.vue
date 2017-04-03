<template>
	<section class="login">
		<headerSimple link="back(-1)" title="登录">
			<headerIcon type="right-1" iconType="homefill"></headerIcon>
		</headerSimple>
		<div class="login-input-area">
			<inputArea iconType="people">
				<input type="text" placeholder="输入手机号/用户名" name="userName"
					regMsg="用户名4到16位" v-model="userNameVal" tag="用户名"
					v-validate:userName/>
			</inputArea>
			<inputArea iconType="password">
				<input type="password" placeholder="输入您的密码" name="password"
					v-model="passWordVal"  tag="密码" v-validate:password/>
			</inputArea>
		</div>
		<div class="login-btn-area">
			<conWrap>
				<div v-validate-check>
					<i-button type="radius">登录</i-button>
				</div>
			</conWrap>
		</div>
		<div class="login-btn-area">
			<conWrap>
				<router-link to="/user/register">
					<i-button type="white-radius">注册</i-button>
				</router-link>
			</conWrap>
		</div>
		<conWrap>
			<p class="text-right">
				<router-link to="/user/forget" class="mid-size">忘记密码?</router-link>
			</p>
		</conWrap>
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
				passWordVal: ''
			};
		},
		created () {
			// this.VaConfig(type, typeVal, errMsg, name, tag)
		},
		methods: {
			$validateSubmit () {
				this.$message({
					message: '登录成功'
				});
			}
		}
	};
</script>

<style lang="less">
	@import "loginRelate.less";
</style>
