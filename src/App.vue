<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <a-config-provider
    :theme="{
      token: {
        colorPrimary: '#42b883'
      }
    }"
  >
    <RouterView />
  </a-config-provider>
</template>

<style scoped></style>
