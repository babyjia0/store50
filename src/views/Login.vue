<template>
  <div class="login-wrap">
    <el-form class="login-form" label-position="top" label-width="80px" :v-model="formData">
      <h2>用户登录</h2>
      <el-form-item label="用户名">
        <el-input v-model="formData.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input @keyup="handleLogin" v-model="formData.password" type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="login-btn" type="primary" @click="handleLogin">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formData: {
        username: '',
        password: ''
      }
    };
  },
  methods: {
    handleLogin() {
      console.log(1);
      this.$http
        .post('login', this.formData)
        .then((response) => {
          console.log(response);
          console.log(2);
          // 解构
          const { meta: { msg, status } } = response.data;
          if (status === 200) {
            this.$message.success(msg);
            // 登录成功后将登录信息储存到token
            sessionStorage.setItem('token', response.data.data.token);

            this.$router.push('/');
          } else {
            this.$message.error(msg);
          }
        }).catch((err) => {
          console.log(err);
        });
    }
  }

};

</script>
<style>
  .login-wrap {
    background: #324152;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .login-form {
    width: 500px;
    padding: 30px;
    border-radius: 5px;
    background: #fff;
  }

  .login-btn {
    width: 100%;
  }

</style>
