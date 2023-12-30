<script setup lang="ts">
import { ref } from 'vue';
import TodoList from './components/TodoList.vue'
import DailyCheck from './components/DailyCheck.vue'
import DataShow from './components/DataShow.vue'
//tab控制
const activeKey = ref('1');
</script>

<template>
  <div class="index-container">
    <a-tabs v-model:activeKey="activeKey" class="index-tab">
      <a-tab-pane key="1" tab="待办事项">
        <TodoList></TodoList>
      </a-tab-pane>
      <a-tab-pane key="2" tab="日常打卡">
        <DailyCheck></DailyCheck>
      </a-tab-pane>
      <a-tab-pane key="3" tab="数据统计">
        <DataShow></DataShow>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<style scoped lang="less">
.index-container {
  padding-left: 16px;

  .index-tab {
    width: 100%;
  }
}</style>