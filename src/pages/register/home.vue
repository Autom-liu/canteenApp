<template>
	<div id="register">
		<div class="weui-panel weui-panel_access">
			<div class="weui-panel__bd">
					<router-link :to="{path: '/register/1'}" class="weui-media-box weui-media-box_appmsg">
							<div class="weui-media-box__hd box-hd">
								<img class="weui-media-box__thumb" src="./assets/student_reg.png" alt="">
							</div>
							<div class="weui-media-box__bd box-bd">
									<h4 class="weui-media-box__title">
										<img class="weui-media-box__thumb" src="./assets/student_home.png" alt="">
									</h4>
									<p class="weui-media-box__desc">家长注册</p>
							</div>
					</router-link>
					<router-link :to="{path: '/register/2'}" class="weui-media-box weui-media-box_appmsg">
						<div class="weui-media-box__hd box-hd">
							<img class="weui-media-box__thumb" src="./assets/teacher_reg.png" alt="">
						</div>
						<div class="weui-media-box__bd box-bd">
								<h4 class="weui-media-box__title">
									<img class="weui-media-box__thumb" src="./assets/teacher_home.png" alt="">
								</h4>
								<p class="weui-media-box__desc">老师注册</p>
						</div>
					</router-link>
			</div>
		</div>

		<div class="weui-footer">
			<p class="weui-footer__text">Copyright © 2017-2018 校园志，提供技术支持</p>
			<p class="weui-footer__text">Copyright © 2017-2018 校园志，提供技术支持</p>
			<p class="weui-footer__text">Copyright © 2017-2018 校园志，提供技术支持</p>
		</div>
	</div>
</template>

<script>
export default {
	name: 'register',
};
</script>

<style scoped>
.header img{display: block; width: 100%;}
.weui-media-box.weui-media-box_appmsg {background-color: #deb887;}
.weui-media-box__hd.box-hd{width: 10rem; height: 6rem;}
.weui-label.label{width: 70px;}
.page__bd.btn-box{margin: 14px 0;}
.weui-media-box__desc{text-align: center; font-size: 16px; color: #fff;}
</style>

