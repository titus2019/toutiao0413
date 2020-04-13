<template>
  <div class="login">
    <!-- 卡片组件 -->
    <el-card class="box-card">
      <div class="title">
        <img src="../../assets/img/logo_index.png" alt />
      </div>
      <!-- 表单控件 -->
      <el-form ref="formObj" :model="loginForm" :rules="loginRules">
        <!-- 放手机号 -->
        <el-form-item style="margin-top: 30px" prop="mobile">
          <el-input v-model="loginForm.mobile" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <!-- 放验证码 -->
        <el-form-item style="margin-top: 20px;" prop="code">
          <el-input
            style="width:65%;margin-right:20px"
            v-model="loginForm.code"
            placeholder="请输入验证码"
          ></el-input>
          <el-button plain>发送验证码</el-button>
        </el-form-item>
        <el-form-item prop="checked">
          <el-checkbox v-model="loginForm.checked">我已阅读并同意用户协议和隐私条款</el-checkbox>
          <el-button style="width:100%" type="primary" @click="login">登陆</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 要校验的 表单数据
      loginForm: {
        mobile: '',
        code: '',
        checked: false
      },
      // 效验规则
      loginRules: {
        mobile: [
          { required: true, message: '请输入您的的手机号' },
          { pattern: /^1[3456789]\d{9}$/, message: '请输入正确的手机号' }
        ],
        code: [
          { required: true, message: '请输入6位的验证码' },
          {
            pattern: /^\d{6}$/,
            message: '请输入正确的验证码'
          }
        ],
        checked: [
          {
            validator: function (r, v, c) {
              if (v) {
                c()
              } else {
                c(new Error('你还没同意我的协议'))
              }
            }
          }
        ]
      }
    }
  },
  methods: {
    login () {
      this.$refs.formObj.validate((success) => {
        if (success) {
          console.log(this)
          this.$axios({
            url: '/authorizations',
            data: this.loginForm,
            method: 'post'
          }).then(res => {
            // 将token村本地
            console.log(res.data.data.token)

            window.localStorage.setItem('token', res.data.data.token)
          })
        }
      })
    }
  }
}
</script>

<style lang='less' scoped>
.login {
  background-image: url("../../assets/img/login_bg.jpg");
  height: 100vh;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;

  .box-card {
    width: 420px;
    // height: 340px;
    .title {
      text-align: center;
      img {
        height: 42px;
      }
    }
    el-form {
      margin-top: 30px;
    }
  }
}
</style>
