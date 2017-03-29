<template>
	<section class="login">
		<headerSimple link="/" title="登录"></headerSimple>
		<div class="login-input-area">
			<inputArea iconType="people" inputType="text" placeholder="输入手机号/用户名" :value="userNameVal" @input="updateUserName" ref="inputArea01"></inputArea>
			<!-- <inputArea iconType="people" inputType="teder="输入手机号/用户名" :value="userNameVal" @input="updateUserName" ref="inputArea01"></inputArea> -->
			<inputArea iconType="password" type="password" placeholder="输入您的密码" :value="passWordVal" @input="updatePassWordVal" ref="inputArea02"></inputArea>
		</div>
		<div class="login-btn-area">
			<conWrap>
				<div @click="loginClick">
					<i-button type="radius">登录</i-button>
				</div>
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
	import headerSimple from '../../components/headers/headerSimple.vue';
	import inputArea from '../../components/input/inputArea.vue';
	import iButton from '../../components/iButton/iButton.vue';
	import conWrap from '../../components/conWrap/conWrap.vue';
	import linkArea from '../../components/linkArea/linkArea.vue';
	import validator from '../../public/validator.js';

	export default {
		components: {
			headerSimple,
			inputArea,
			iButton,
			conWrap,
			linkArea
		},
		data () {
			return {
				userNameVal: '',
				passWordVal: ''
			};
		},
		mounted () {
			console.log('create');
			// console.log(this.$refs);
			console.log(this.$refs.inputArea01.$children[0].$children[1].$el);
			validator.add({
				value: this.userNameVal,
				rule: 'isNonEmpty',
				errorMsg: '用化名不允许为空'
			});
		},
		methods: {
			updateUserName (value) {
				this.userNameVal = value;
			},
			updatePassWordVal (value) {
				this.passWordVal = value;
			},
			loginClick () {
				let msg = validator.start();
				if (msg) {
					this.$message({
						message: msg
					});
				}
			}
		}
	};
</script>

<style lang="less">
	@import "login.less";
</style>
