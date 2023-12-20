<script lang="ts" setup>
//登录页
import { ref, computed } from 'vue'
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue'
import { message } from 'ant-design-vue'
//mock数据
const user = {
  username: 'cqx',
  password: 'cqx20010118'
}

//约定表单类型
interface FormState {
  username: string
  password: string
  remember?: boolean
}
//加载
const loading = ref<Boolean>(false)

//登录表单
const formState = ref<FormState>({
  username: '',
  password: '',
  remember: true
})
//登录按钮是否禁用
const disabled = computed(() => {
  return !(formState.value.username && formState.value.password)
})
//登录验证
const onFinish = (info: FormState) => {
  loading.value = true
  if (info.username === user.username && info.password === user.password) {
    message.success('登陆成功，即将跳转首页')
    loading.value = false
  } else {
    message.warning('用户名或密码不存在')
    loading.value = false
  }
}

//注册表单
const registerFormState = ref<FormState>({
  username: '',
  password: ''
})
//注册按钮是否禁用
const registerDisabled = computed(() => {
  return !(registerFormState.value.username && registerFormState.value.password)
})
//注册弹窗
const registerDialog = ref<Boolean>(false)
//打开注册弹窗
const toRegister = () => {
  registerDialog.value = true
}
</script>

<template>
  <div class="login-top">
    <div class="container">
      <h1 class="title">My Web</h1>
      <div class="description">属于你的专属网站</div>
      <a-form :model="formState" name="basic" @finish="onFinish" class="login-form">
        <img class="logo" src="../assets/icons/logo.png" />
        <a-form-item
          name="username"
          :rules="[{ required: true, message: '用户名不能为空' }]"
          no-style
        >
          <a-input v-model:value="formState.username" placeholder="请输入用户名">
            <template #prefix>
              <UserOutlined class="site-form-item-icon" />
            </template>
          </a-input>
        </a-form-item>
        <a-form-item
          name="password"
          :rules="[{ required: true, message: '密码不能为空' }]"
          no-style
        >
          <a-input-password v-model:value="formState.password" placeholder="请输入密码">
            <template #prefix>
              <LockOutlined class="site-form-item-icon" />
            </template>
          </a-input-password>
        </a-form-item>
        <a-form-item no-style>
          <div class="remeber-box">
            <a-checkbox v-model:checked="formState.remember">记住我</a-checkbox>
            <!-- <div class="forget">忘记密码</div> -->
          </div>
        </a-form-item>
        <a-form-item no-style>
          <a-button
            :disabled="disabled"
            type="primary"
            html-type="submit"
            class="login-button"
            :loading="loading"
            >登录</a-button
          >
        </a-form-item>
        <div class="register" @click="toRegister">没有账号？去注册</div>
      </a-form>
    </div>
  </div>
  <a-modal
    v-model:open="registerDialog"
    centered
    :footer="null"
    :closable="false"
    class="register-modal"
    :width="400"
  >
    <div class="register-title">注册</div>
    <div class="register-box">
      <a-form :model="registerFormState" name="basic" @finish="onFinish" class="register-form">
        <a-form-item
          name="username"
          :rules="[{ required: true, message: '用户名不能为空' }]"
          no-style
        >
          <a-input v-model:value="registerFormState.username" placeholder="请输入用户名">
            <template #prefix>
              <UserOutlined class="site-form-item-icon" />
            </template>
          </a-input>
        </a-form-item>
        <a-form-item
          name="password"
          :rules="[{ required: true, message: '密码不能为空' }]"
          no-style
        >
          <a-input-password v-model:value="registerFormState.password" placeholder="请输入密码">
            <template #prefix>
              <LockOutlined class="site-form-item-icon" />
            </template>
          </a-input-password>
        </a-form-item>
        <a-form-item no-style>
          <a-button
            :disabled="registerDisabled"
            type="primary"
            html-type="submit"
            class="register-button"
            :loading="loading"
            >立即注册</a-button
          >
        </a-form-item>
      </a-form>
    </div>
  </a-modal>
  <div class="login-bottom"></div>
</template>

<style scoped lang="less">
.login-top {
  height: 80vh;
  background-color: #def1e7;
  border-bottom: 1px solid #5cc18d;
  align-items: center;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    padding-top: 10vh;
    .title {
      color: #404040;
      font-size: 100px;
      margin-bottom: 5px;
      font-family: 'ff-meta-serif-web-pro', 'PT Serif', Georgia, 'Droid Serif', serif;
    }
    .description {
      margin-bottom: 20px;
      font-style: italic;
    }
    .login-form {
      position: relative;
      width: 400px;
      .logo {
        position: absolute;
        width: 64px;
        height: 64px;
        top: 10px;
        left: -80px;
      }
      .login-button {
        width: 400px;
        height: 58px;
        font-size: 20px;
      }
    }
    .remeber-box {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .forget {
      cursor: pointer;
    }
    .forget:hover {
      color: #66c497;
    }
    .register {
      cursor: pointer;
    }
    .register:hover {
      color: #66c497;
    }
  }
}

.register-title {
  width: 100%;
  font-size: 20px;
  font-weight: 500px;
  margin-bottom: 16px;
}
.register-box {
  display: flex;
  justify-content: center;
  .register-button {
    width: 100%;
    font-size: 14px;
    height: 40px;
    margin-top: 5px;
  }
}
::v-deep .ant-input-affix-wrapper {
  margin-bottom: 16px;
}
::v-deep .ant-input-affix-wrapper:nth-of-type(2) {
  margin-bottom: 10px;
}
::v-deep .ant-form-item {
  margin-top: 10px;
}
.login-button {
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
