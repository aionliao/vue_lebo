<template lang="html">
	<section class="reg-bag" id="redBag">
		<ul>
			<li class="favourable">
				<a href="red/index.html?redirectUrl=/">
					<h5><img src="../../../../assets/img/lazy-icon.jpg" data-src="../../../../assets/img/red-icon.png"><span>乐米商城</span></h5>
				</a>
			</li>
			<li>
				<a href="bf/index.html">
					<h5><img src="../../../../assets/img/lazy-icon.jpg" data-src="../../../../assets/img/bf-icon.png"><span>比分直播</span></h5>
				</a>
			</li>
			<li>
				<a href="trend/index.html">
					<h5><img src="../../../../assets/img/lazy-icon.jpg" data-src="../../../../assets/img/trend-left.png"><span>走势图</span></h5>
				</a>
			</li>
		</ul>
	</section>
</template>

<script>
export default {
}
</script>

<style lang="css">
.reg-bag{
	background-color: #fff;
	margin-bottom: 10px;
	text-align: center;
	border-top: 1px solid #f4f4f4;
	border-bottom: 1px solid #f4f4f4;
	font-size: 1.4rem;
}
.reg-bag ul{
	display: -webkit-box;
}
.reg-bag li{
	-webkit-box-flex: 1;
	box-sizing: border-box;
	border-right: 1px solid #f4f4f4;
	height: 90px;
	position: relative;
	width: 50%;
}
.reg-bag .favourable:before{
	// content: '优惠';
	position: absolute;
	left: 0;
	top: 0;
	background-color: #f32f0c;
	width: 40px;
	line-height: 20px;
	color: #fff;
}
.reg-bag .favourable:after{
	// content: '';
    position: absolute;
    left: 40px;
    top: 0;
    height: 0;
    border-color: #f32f0c transparent transparent #f32f0c;
    border-width: 10px 5px;
    border-style: solid;
}
.reg-bag li:last-child{
	border-right: none;
}
.reg-bag a{
	display: block;
	color: #333;

}
.reg-bag a:link, .reg-bag a:hover, .reg-bag a:active, .reg-bag a:visited{
	color: #000;
}
.reg-bag a span{
	color: #000;
}
.reg-bag a h5{
	position: relative;
	font-size: 1.4rem;
}
.reg-bag a p{
	position: absolute;
	font-size: 1.2rem;
	top: 50px;
	left: 0;
	width: 100%;
	color: #999;
}

.reg-bag h5 img{
	position: absolute;
	width: 50px;
	height: 50px;
	left: 50%;
	top: 8px;
	-webkit-transform: translate(-50%, 0);
	transform: translate(-50%, 0);
}
.reg-bag h5 span{
	position: absolute;
	left: 50%;
	top: 62px;
	white-space: nowrap;
	-webkit-transform: translate(-50%, 0);
	transform: translate(-50%, 0);
}
</style>
