<template>
	<div id="reg-form">
		<div class="weui-cells weui-cells_form">
			<div class="weui-cell">
					<div class="weui-cell__hd"><label class="weui-label label">姓名</label></div>
					<div class="weui-cell__bd">
							<input class="weui-input" type="text" name="name" :placeholder="nameText">
					</div>
			</div>
			<div class="weui-cell weui-cell_select weui-cell_select-after" v-if="studentShow">
				<div class="weui-cell__hd">
						<label for="" class="weui-label label">年级</label>
				</div>
				<div class="weui-cell__bd">
						<select class="weui-select" name="grade">
								<option value="">请选择</option>
								<option value="一年级">一年级</option>
								<option value="二年级">二年级</option>
								<option value="三年级">三年级</option>
								<option value="四年级">四年级</option>
								<option value="五年级">五年级</option>
								<option value="六年级">六年级</option>
								<option value="初一">初一</option>
								<option value="初二">初二</option>
								<option value="初三">初三</option>
						</select>
				</div>
			</div>
			<div class="weui-cell weui-cell_select weui-cell_select-after" v-if="studentShow">
				<div class="weui-cell__hd">
						<label for="" class="weui-label label">班级</label>
				</div>
				<div class="weui-cell__bd">
						<select class="weui-select" name="class">
								<option value="">请选择</option>
								<option value="1班">1班</option>
								<option value="2班">2班</option>
								<option value="3班">3班</option>
								<option value="4班">4班</option>
								<option value="5班">5班</option>
								<option value="6班">6班</option>
						</select>
				</div>
			</div>
			<div class="weui-cell weui-cell_vcode">
					<div class="weui-cell__hd">
							<label class="weui-label label">手机号</label>
					</div>
					<div class="weui-cell__bd">
							<input class="weui-input" name="phone" type="tel" placeholder="请输入手机号">
					</div>
					<div class="weui-cell__ft">
							<button class="weui-vcode-btn sendSms">获取验证码</button>
					</div>
			</div>
			<div class="weui-cell weui-cell_vcode">
					<div class="weui-cell__hd"><label class="weui-label label">验证码</label></div>
					<div class="weui-cell__bd">
							<input class="weui-input" type="number" name="checkcode" placeholder="请输入验证码">
					</div>
			</div>
			<div class="page__bd page__bd_spacing btn-box">
				<a href="javascript:;" class="weui-btn weui-btn_primary" id="student-submit">提交</a>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'regForm',
	data() {
		return {
			type: 1,
		};
	},
	activated() {
		this.type = this.$route.params.type * 1;
	},
	computed: {
		studentShow() {
			return this.type === 1;
		},
		nameText() {
			return ['请输入学生姓名', '请输入姓名'][this.type - 1];
		},
	},
};
</script>

<style scoped>

</style>

