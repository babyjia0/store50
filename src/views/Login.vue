<template>
  <div class="login-wrap">
    <el-form label-position="top" label-width="80px">
      <h2>用户登录</h2>
      <el-form-item label="用户名">
        <el-input v-model="formLabelAlign.name"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="formLabelAlign.region"></el-input>
      </el-form-item>
      <el-button class="login-btn" type="primary">登录</el-button>
    </el-form>
  </div>
</template>
<script>
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
