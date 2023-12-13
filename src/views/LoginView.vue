<script lang="ts" setup>
//登录页
import { reactive, computed } from 'vue'
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue'

interface FormState {
  username: string
  password: string
  remember: boolean
}

const formState = reactive<FormState>({
  username: '',
  password: '',
  remember: true
})

const onFinish = (values: any) => {
  console.log('Success:', values)
}

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo)
}

const disabled = computed(() => {
  return !(formState.username && formState.password)
})
</script>

<template>
  <div class="login-top">
    <div class="top-container">
      <div class="container-top">
        <img class="top-logo" src="../assets/icons/logo.png" alt="#" />
        <h1 class="top-title">My Web</h1>
      </div>
      <a-form
        :model="formState"
        name="normal_login"
        @finish="onFinish"
        @finishFailed="onFinishFailed"
        :label-col="{ span: 7 }"
        :wrapper-col="{ span: 9 }"
      >
        <a-form-item
          label="Username"
          name="username"
          :rules="[{ required: true, message: 'Please input your username!' }]"
        >
          <a-input v-model:value="formState.username">
            <template #prefix>
              <UserOutlined class="site-form-item-icon" />
            </template>
          </a-input>
        </a-form-item>

        <a-form-item
          label="Password"
          name="password"
          :rules="[{ required: true, message: 'Please input your password!' }]"
        >
          <a-input-password v-model:value="formState.password">
            <template #prefix>
              <LockOutlined class="site-form-item-icon" />
            </template>
          </a-input-password>
        </a-form-item>

        <a-form-item :wrapper-col="{ offset: 5, span: 8 }">
          <a-form-item name="remember" no-style>
            <a-checkbox v-model:checked="formState.remember">Remember me</a-checkbox>
          </a-form-item>
          <a class="login-form-forgot" href="">Forgot password</a>
        </a-form-item>

        <a-form-item :wrapper-col="{ offset: 5, span: 8 }">
          <a-button
            :disabled="disabled"
            type="primary"
            html-type="submit"
            class="login-form-button"
          >
            Log in
          </a-button>
          Or
          <a href="">register now!</a>
        </a-form-item>
      </a-form>
    </div>
  </div>
  <div class="login-bottom"></div>
</template>

<style scoped lang="less">
.login-top {
  height: 80vh;
  background-color: #def1e7;
  border-bottom: 1px solid #5cc18d;
  display: flex;
  justify-content: center;
  align-items: center;
  .top-container {
    width: 800px;
  }
  .container-top {
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    padding-left: 206px;
    .top-logo {
      width: 80px;
      margin-right: 16px;
    }
    .top-title {
      font-size: 50px;
      color: #333333;
    }
  }
}
</style>
