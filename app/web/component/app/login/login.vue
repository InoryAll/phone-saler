<template>
    <div v-if="visible">
      <mt-popup
        v-model="visible"
        position="right"
        class="phone-login-popUp"
      >
        <div class="phone-login-popUp-content">
          <div class="phone-login-header clearfix">
            <a class="phone-login-header-left" @click="handlePopUpClose">
              <i class="iconfont icon-left header-left-icon"></i>
            </a>
            <span class="phone-login-header-span">手机密码登录</span>
          </div>
          <div class="phone-login-content">
            <div class="phone-login-content-logo">
              <img class="phone-login-content-logo-img" src="../../../../web/asset/images/loginlogo.png" alt="">
            </div>
            <form action="#" class="phone-login-form">
              <div class="form-item clearfix">
                <label for="username" class="phone-login-form-label">
                  <i class="iconfont icon-user phone-login-form-icon"></i>
                </label>
                <mt-field label="" :attr="{ id: 'username', name: 'username' }" placeholder="请输入手机号" type="tel"></mt-field>
              </div>
              <div class="form-item clearfix">
                <label for="password" class="phone-login-form-label">
                  <i class="iconfont icon-lock phone-login-form-icon"></i>
                </label>
                <mt-field label="" :attr="{ id: 'password', name: 'password' }" placeholder="请输入密码" type="password"></mt-field>
              </div>
            </form>
            <div class="phone-login-form-btn">
              <button class="form-btn-login">登录</button>
              <div class="clearfix">
                <a href="" class="form-btn-forget">找回密码</a>
                <a @click="handleRegisterShow" class="form-btn-register">还没有账号，立即注册 &gt;&gt;</a>
              </div>
            </div>
          </div>
        </div>
      </mt-popup>
      <Register
        :registerVisible="registerVisible"
        :onRegisterVisibleChange="onRegisterVisibleChange"
      ></Register>
    </div>
</template>
<script type="text/babel">
  /**
   * 登录组件
   */
  import { Popup, Field } from 'mint-ui';
  import Register from '../register/register';

  export default {
    name: 'login-page',
    components: {
      Popup,
      Field,
      Register
    },
    props: {
      loginVisible: {
        type: Boolean,
      },
      onLoginVisibleChange: Function,
    },
    data() {
      return {
        visible: false,
        registerVisible: false,
      };
    },
    computed: {},
    watch: {
      loginVisible: {
        handler(newValue, oldValue) {
          this.visible = newValue;
        }
      },
      visible: {
        handler(newValue, oldValue) {
          this.onLoginVisibleChange(newValue);
        }
      },
    },
    methods: {
      handlePopUpClose() {
        this.visible = false;
      },
      handleRegisterShow() {
        this.registerVisible = true;
      },
      onRegisterVisibleChange(val) {
        this.registerVisible = val;
      },
    },
  };
</script>
<style lang="less">
  .phone-login{
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
        padding: 0 20px;
        border-radius: 8px;
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