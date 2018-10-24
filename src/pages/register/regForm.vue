<template>
	<div id="reg-form">
		<div class="weui-cells weui-cells_form">
			<div class="weui-cell">
					<div class="weui-cell__hd"><label class="weui-label label">姓名</label></div>
					<div class="weui-cell__bd">
							<input class="weui-input" type="text"
								:placeholder="nameText" v-model="registerForm.name">
					</div>
			</div>
			<div class="weui-cell weui-cell_select weui-cell_select-after" v-if="studentShow">
				<div class="weui-cell__hd">
						<label for="" class="weui-label label">年级</label>
				</div>
				<div class="weui-cell__bd">
						<select class="weui-select" v-model="registerForm.grade">
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
						<select class="weui-select" v-model="registerForm.class">
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
							<input class="weui-input" v-model="registerForm.phone"
								type="tel" placeholder="请输入手机号">
					</div>
					<div class="weui-cell__ft">
							<button class="weui-vcode-btn sendSms">获取验证码</button>
					</div>
			</div>
			<div class="weui-cell weui-cell_vcode">
					<div class="weui-cell__hd"><label class="weui-label label">验证码</label></div>
					<div class="weui-cell__bd">
							<input
								class="weui-input"
								type="number"
								v-model="registerForm.checkcode"
								placeholder="请输入验证码"/>
					</div>
			</div>
			<div class="page__bd page__bd_spacing btn-box">
				<a href="javascript:;" class="weui-btn weui-btn_primary" @click="submit">提交</a>
			</div>
		</div>
		<transition name="fade">
			<div class="weui-mask_transparent" v-if="error.status"></div>
		</transition>
		<transition name="fade">
			<div class="weui-toast weui-toast--text weui-toast--visible" v-if="error.status">
				<i class="weui-icon-success-no-circle weui-icon_toast"></i>
				<p class="weui-toast_content">{{error.text}}</p>
			</div>
		</transition>
	</div>
</template>

<script>
import axios from 'axios';
import qs from 'qs';

export default {
	name: 'regForm',
	data() {
		return {
			type: 1,
			registerForm: {
				name: '',
				grade: '',
				class: '',
				phone: '',
				checkcode: '',
			},
			error: {
				status: false,
				text: '',
			},
		};
	},
	activated() {
		this.type = this.$route.params.type * 1;
	},
	methods: {
		submit() {
			this.checkForm();
			if (!this.error.status) {
				const url = this.type === 1 ? '/api/Student/register' : '/api/Teacher/register';
				axios.post(url, qs.stringify(this.registerForm))
				.then(res => (res.status === 200 ? res.data : this.handleError()))
				.then(data => this.showError(data.msg));
			}
		},
		checkForm() {
			switch (false) {
				case !!this.registerForm.name.trim():
					this.showError('请输入姓名'); break;
				case !!this.registerForm.grade.trim() || this.type === 2:
					this.showError('请选择年级'); break;
				case !!this.registerForm.class.trim() || this.type === 2:
					this.showError('请选择班级'); break;
				case !!this.registerForm.phone.trim():
					this.showError('请输入手机号'); break;
				case /^\d{11}$/.test(this.registerForm.phone):
					this.showError('请输入正确的手机号'); break;
				case !!this.registerForm.checkcode.trim():
					this.showError('请输入验证码'); break;
				default:
					break;
			}
		},
		handleError() {
			this.showError('网络请求错误');
		},
		showError(msg) {
			this.error = { status: true, text: msg };
			if (this.error.status) {
				setTimeout(() => {
					this.error = { status: false, text: '' };
				}, 2000);
			}
		},
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
	.fade-enter-active, .fade-leave-active {
		transition: opacity .5s;
	}
	.fade-enter, .fade-leave-to {
		opacity: 0;
	}
</style>

