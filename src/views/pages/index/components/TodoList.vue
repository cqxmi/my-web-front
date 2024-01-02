<script setup lang="ts">
//待办事项
import { ref } from 'vue'
//切换小tab
const tab = ref(1)
</script>

<template>
  <div class="todo-container">
    <div class="todo-icons">
      <div class="icons-item" :class="tab === 1 ? 'select' : ''" @click="tab = 1">
        <img v-if="tab === 1" class="icons" src="../../../../assets/menus/undo-select.png" />
        <img v-else class="icons" src="../../../../assets/menus/undo.png" />
        <div class="icons-description">待完成</div>
      </div>
      <div class="icons-item" :class="tab === 2 ? 'select' : ''" @click="tab = 2">
        <img v-if="tab === 2" class="icons" src="../../../../assets/menus/done-select.png" />
        <img v-else class="icons" src="../../../../assets/menus/done.png" />
        <div class="icons-description">已完成</div>
      </div>
    </div>
    <div class="todo-dashboard"></div>
  </div>
</template>

<style scoped lang="less">
.todo-container {
  width: 100%;
  height: 100%;
  .todo-icons {
    width: 9%;
    border-right: 1px solid #f2f3f5;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 6px;
    height: 100%;
    .icons-item {
      padding: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 3px;
      cursor: pointer;
      border-radius: 6px;

      .icons {
        width: 16px;
        height: 16px;
        margin-right: 6px;
      }
      .icons-description {
        font-size: 15px;
        height: 21px;
      }
    }
    .icons-item:hover {
      background-color: #f0f0f0;
    }
  }
  .todo-dashboard {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
  }
  .select {
    background-color: #e9f7ee !important;
    color:#42b883 !important;
  }
}
</style>
