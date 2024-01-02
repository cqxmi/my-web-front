<script setup lang="ts">
//待办事项
import TodoItems from './components/TodoItems.vue'
import { ref, watch } from 'vue'
//监听折叠面板变化
const activeKey = ref(['1'])
watch(activeKey, (val) => {
  console.log(val)
})
</script>

<template>
  <div class="todo-container">
    <div class="todo-dashboard">
      <div class="dashboard-todoList">
        <div class="dashboard-todos">
          <div class="todos-add"></div>
          <div class="todos-list">
            <a-collapse v-model:activeKey="activeKey" ghost>
              <a-collapse-panel key="1" header="待完成">
                <TodoItems></TodoItems>
                <TodoItems></TodoItems>
                <TodoItems></TodoItems>
              </a-collapse-panel>
              <a-collapse-panel key="2" header="已完成">
                <TodoItems></TodoItems>
              </a-collapse-panel>
            </a-collapse>
          </div>
        </div>
        <div class="dashboard-detail">
          <img class="detail-pic" src="../../../../../assets/pic/click-toknow.png" alt="">
          <div class="detail-edit">点击进行编辑</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.todo-container {
  width: 100%;
  height: 100%;
  display: flex;
  .todo-dashboard {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    .dashboard-todoList {
      width: 100%;
      height: 100%;
      display: flex;
      .dashboard-todos {
        width: 65%;
        height: 100%;
        padding: 16px;
        border-right: 1px solid #f2f3f5;
        .todos-add {
          width: 100%;
          height: 32px;
          background-color: #f8f8f8 !important;
          border-radius: 6px;
          margin-bottom: 16px;
        }
      }
      .dashboard-detail {
        width: 35%;
        height: 100%;
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .detail-pic {
          width:100px;
        }
        .detail-edit {
          font-size: 14px;
          color:grey;
          margin-top:24px;
        }
      }
    }
  }
  .select {
    background-color: #e9f7ee !important;
    color: #42b883 !important;
  }
}
::v-deep .ant-collapse-content-box {
  padding-top:0 !important;
}
::v-deep .ant-collapse-header {
  padding-bottom:0 !important;
}
</style>
