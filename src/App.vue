<script setup lang="ts">
import { RouterView } from 'vue-router'
import zhCN from 'ant-design-vue/es/locale/zh_CN'
</script>

<template>
  <a-config-provider
    :theme="{
      token: {
        colorPrimary: '#42b883'
      }
    }"
    :locale="zhCN"
  >
    <RouterView />
  </a-config-provider>
</template>

<style scoped></style>
