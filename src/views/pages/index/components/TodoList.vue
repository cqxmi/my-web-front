<script setup lang="ts">
//待办事项
import { ref } from 'vue'
//切换小tab
const tab = ref(1)
</script>

<template>
  <div class="todo-container">
    <div class="todo-icons">
      <div class="icons-item" @click="tab = 1">
        <img v-if="tab === 1" class="icons" src="../../../../assets/menus/undo-select.png" />
        <img v-else class="icons" src="../../../../assets/menus/undo.png" />
      </div>
      <div class="icons-item" @click="tab = 2">
        <img v-if="tab === 2" class="icons" src="../../../../assets/menus/done-select.png" />
        <img v-else class="icons" src="../../../../assets/menus/done.png" />
      </div>
    </div>
    <div class="todo-dashboard"></div>
  </div>
</template>

<style scoped lang="less">
.todo-container {
    width:100%;
    height:100%;
  .todo-icons {
    width: 5%;
    border-right: 1px solid #f2f3f5;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 18px;
    height:100%;

    .icons-item {
      padding: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      margin-bottom: 18px;
      cursor: pointer;
      border: 1px solid 9f9f9f;

      .icons {
        width: 22px;
        height: 22px;
      }
    }
  }
  .todo-dashboard {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
  }
}
</style>
