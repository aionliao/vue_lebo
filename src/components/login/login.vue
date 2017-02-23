<template lang="html">
	<div>
		<header>
			<router-link to="/" class="icon-zuo"></router-link>
			<h2>登录</h2>
			<router-link to="/" class="home"><img v-lazy="imgUrl"></router-link>
		</header>
		<section class=action_con>
			<form action="" method=post>
				<ul class=actionList>
					<li>
						<div class=act_box> <span class=icon-yonghuming></span>
							<div class=act_input> <input class=input_main id=userName data-login=1 name=userName placeholder=输入手机号/用户名> </div>
						</div>
					</li>
					<li>
						<div class=act_box> <span class=icon-mima></span>
							<div class=act_input> <input type=password maxlength=16 autocomplete=off class=input_main data-login=1 id=password name=password placeholder=输入您的密码> </div>
						</div>
					</li>
				</ul> <a data-click=on class=login_submit id=login>登录</a> <a class=reg href=register.html>注册</a> </form>
			<div class=other_act> <a href=forget.html class="gred fr">忘记密码？</a> </div>
		</section>
		<footer class=phone_intro>
			<p>如有疑问请拨打客服热线:<a href=tel:010-65617701>010-65617701</a></p>
		</footer>
	</div>
</template>

<script>
export default {
	data () {
		return {
			imgUrl: './assets/img/home.png'
		}
	}
}
</script>

<style lang="less">
@import "../../styles/login/login.less";
</style>
