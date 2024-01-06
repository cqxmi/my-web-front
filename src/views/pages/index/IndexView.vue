<script setup lang="ts">
import { ref } from 'vue'
import DailyCheck from './components/daily-check/DailyCheck.vue'
import DataShow from './components/data-show/DataShow.vue'
import TodoList from './components/todo-list/TodoList.vue'
//切换小tab
const tab = ref<number>(1)
</script>

<template>
  <div class="index-container">
    <div class="index-icons">
      <div class="icons-item" :class="tab === 1 ? '' : 'icons-hover'" @click="tab = 1">
        <img v-if="tab === 1" class="icons" src="../../../assets/menus/todo-select.png" />
        <img v-else class="icons" src="../../../assets/menus/todo.png" />
      </div>
      <div class="icons-item" :class="tab === 2 ? '' : 'icons-hover'" @click="tab = 2">
        <img v-if="tab === 2" class="icons" src="../../../assets/menus/check-select.png" />
        <img v-else class="icons" src="../../../assets/menus/check.png" />
      </div>
      <div class="icons-item" :class="tab === 3 ? '' : 'icons-hover'" @click="tab = 3">
        <img v-if="tab === 3" class="icons" src="../../../assets/menus/data-select.png" />
        <img v-else class="icons" src="../../../assets/menus/data.png" />
      </div>
    </div>
    <div class="index-dashboard">
      <TodoList v-if="tab === 1"></TodoList>
      <DailyCheck v-if="tab === 2"></DailyCheck>
      <DataShow v-if="tab === 3"></DataShow>
    </div>
  </div>
</template>

<style scoped lang="less">
.index-container {
  .index-icons {
    width: 5%;
    background-color: #f9f9f9;
    border-right: 1px solid #f2f3f5;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 16px;

    .icons-item {
      padding: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      margin-bottom: 16px;
      cursor: pointer;
      background-color: white;
      border: 1px solid 9f9f9f;

      .icons {
        width: 25px;
        height: 25px;
      }
    }
    .icons-hover:hover {
      background-color: #f0f0f0 !important;
    }
  }
  .index-dashboard {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
}
</style>
