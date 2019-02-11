<template>
  <mt-popup
    v-model="visible"
    position="right"
    class="phone-register-popUp"
  >
    <div class="phone-register-popUp-content">
      <div class="phone-register-header clearfix">
        <a class="phone-register-header-left" @click="handlePopUpClose">
          <i class="iconfont icon-left header-left-icon"></i>
        </a>
        <span class="phone-register-header-span">用户注册</span>
      </div>
      <div class="phone-register-content">
        <div class="phone-register-content-logo">
          <img class="phone-register-content-logo-img" src="../../../../web/asset/images/loginlogo.png" alt="">
        </div>
        <form action="/user/register" class="phone-register-form" method="post">
          <div class="form-item clearfix">
            <label for="username" class="phone-register-form-label">
              <i class="iconfont icon-user phone-register-form-icon"></i>
            </label>
            <mt-field v-model="username" label="" :attr="{ id: 'reg-username', name: 'reg-username', maxlength: 11 }" placeholder="请输入手机号" type="tel"></mt-field>
          </div>
          <div class="form-item clearfix">
            <label for="password" class="phone-register-form-label">
              <i class="iconfont icon-lock phone-register-form-icon"></i>
            </label>
            <mt-field v-model="password" label="" :attr="{ id: 'reg-password', name: 'reg-password' }" placeholder="请输入密码" type="password"></mt-field>
          </div>
          <div class="form-item clearfix">
            <label for="captcha" class="phone-register-form-label">
              <i class="iconfont icon-key phone-register-form-icon"></i>
            </label>
            <mt-field v-model="captcha" label="" :attr="{ id: 'captcha', name: 'captcha', maxlength: 4 }" placeholder="验证码" type="tel">
              <mt-button
                @click.native="handleCaptchaClick"
                class="form-item-btn"
                type="default"
                :disabled="captchaDisabled"
              >
                <div slot="icon" v-if="captchaDisabled">
                  <mt-spinner type="fading-circle"></mt-spinner>
                </div>
                {{captchaText}}
              </mt-button>
            </mt-field>
          </div>
        </form>
        <div class="phone-register-form-btn">
          <button class="form-btn-login" @click="handleRegisterClick">注册</button>
          <div class="clearfix">
            <a @click="handlePopUpClose" class="form-btn-register">已有账号，立即登录 &gt;&gt;</a>
          </div>
        </div>
      </div>
    </div>
  </mt-popup>
</template>
<script type="text/babel">
  /**
   * 登录组件
   */
  import { Popup, Field, Button, Toast } from 'mint-ui';
  import _ from 'lodash';
  import * as Types from './vuex/mutation-type';
  import Validator from '../../../../util/validator';

  export default {
    name: 'register-page',
    components: {
      Popup,
      Field,
      Button,
      Toast
    },
    props: {
      registerVisible: {
        type: Boolean,
      },
      onRegisterVisibleChange: Function,
    },
    data() {
      return {
        visible: false,
        captchaText: '发送验证码',
        captchaDisabled: false,
        count: 60,
        // 表单数据绑定值
        username: '',
        password: '',
        captcha: '',
      };
    },
    computed: {},
    watch: {
      registerVisible: {
        handler(newValue, oldValue) {
          this.visible = newValue;
        }
      },
      visible: {
        handler(newValue, oldValue) {
          this.onRegisterVisibleChange(newValue);
        }
      },
    },
    methods: {
      handlePopUpClose() {
        this.visible = false;
      },
      handleCaptchaClick() {
        if (this.count > 0) {
          this.captchaDisabled = true;
          this.captchaText = this.count + 's';
        }
        const timer = setInterval(() => {
          if (this.count > 0) {
            this.count--;
            this.captchaText = this.count + 's';
          } else {
            clearInterval(timer);
            this.count = 60;
            this.captchaDisabled = false;
            this.captchaText = '发送验证码';
          }
        }, 1000);
      },
      handleRegisterClick() {
        const validate = new Validator().validate([{
          data: this.username,
          rule: [{
            required: true,
            message: '用户名不能为空！',
          }, {
            type: 'tel',
            message: '用户名格式不正确！',
          }],
        }, {
          data: this.password,
          rule: [{
            required: true,
            message: '密码不能为空！',
          }],
        }, {
          data: this.captcha,
          rule: [{
            required: true,
            message: '验证码不能为空！',
          }],
        }]);
        if (_.isEmpty(validate.error)) {
          const params = {
            username: this.username,
            password: this.password,
            captcha: this.captcha,
          };
          return Promise.all([
            this.$store.dispatch(Types.DO_REGISTER, { params })
          ]);
        } else {
          Toast({ message: validate.error.join('\n') });
          return 0;
        }
      },
    },
  };
</script>
<style lang="less">
  .mint-toast{
    z-index: 10000;
  }
  .phone-register{
    &-popUp{
      width: 100%;
      height: 100%;
      background: #fff;
    }
    &-header{
      line-height: 36px;
      border-bottom: 1px solid #b3b2b3;
      text-align: center;
      &-left{
        float: left;
        padding-left: 10px;
        .header-left-icon{
          color: #333;
          font-size: 20px;
          line-height: 36px;
        }
      }
      &-span{
        color: #333;
        margin-left: -15px;
        font-size: 16px;
        line-height: 36px;
      }
    }
    &-content-logo{
      padding: 30px 0 10px 0;
      text-align: center;
      &-img{
        display: inline-block;
        width: 80%;
        height: 60px;
      }
    }
    &-form{
      padding: 10px 20px;
      .form-item{
        border: 1px solid #ccc;
        margin: 10px 0;
        padding-left: 20px;
        padding-right: 4px;
        border-radius: 8px;
        &-btn{
          font-size: 14px;
          .mint-button-text{
            margin-bottom: 0;
            font-weight: normal;
          }
        }
      }
      &-label{
        float: left;
        margin-bottom: 0;
      }
      &-icon{
        line-height: 50px;
        color: #b8b8b8;
        font-size: 20px;
      }
      &-btn{
        padding: 0 20px;
        .form-btn-login{
          outline: none;
          display: block;
          border: none;
          width: 100%;
          background: #d76c68;
          color: #fff;
          padding: 10px 0;
          text-align: center;
          font-size: 16px;
          border-radius: 8px;
        }
        .form-btn-forget{
          outline: none;
          display: block;
          float: right;
          border: none;
          background: transparent;
          color: #666;
          font-size: 14px;
          border-radius: 8px;
          margin-top: 10px;
        }
        .form-btn-register{
          outline: none;
          display: block;
          float: left;
          color: #666;
          font-size: 14px;
          margin-top: 10px;
        }
      }
    }
  }
</style>