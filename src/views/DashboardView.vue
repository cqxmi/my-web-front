<script setup lang="ts">
import { RouterView } from 'vue-router'
import TabHeader from '@/components/TabHeader.vue'
import MainMenu from '@/components/MainMenu.vue'
</script>

<template>
  <div class="dashboard">
    <TabHeader></TabHeader>
    <div class="main">
      <MainMenu></MainMenu>
      <RouterView class="init" />
    </div>
  </div>
</template>

<style scoped lang="less">
.dashboard {
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.main {
  padding-top: 16px;
  background-color: #f2f3f5;
  display: flex;
  flex: 1;
  padding-right:16px;
  padding-left:16px;
  .init {
    width: 100%;
    display: flex;
    background-color: #fff;
    border-radius: 4px;
  }
}
</style>
