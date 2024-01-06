<script setup lang="ts">
//待办事项
import dayjs, { Dayjs } from 'dayjs'
import TodoItems from './components/TodoItems.vue'
import mockdata from '@/mock/index'
import { ref, watch } from 'vue'
import { PlusOutlined } from '@ant-design/icons-vue'
import type { TodoItem } from '@/types/index'

//监听折叠面板变化
const activeKey = ref(['1'])
watch(activeKey, (val) => {
  console.log(val)
})
//添加事项
const addItem = ref<TodoItem>({
  id: 1,
  content: '',
  time: '',
  done: false
})
const addItems = () => {
  console.log(addItem.value)
}
//禁用时间
const disabledDate = (current: Dayjs) => {
  return current && current < dayjs().startOf('day')
}

const todos = ref<TodoItem[]>([])
const dones = ref<TodoItem[]>([])
const getTodos = () => {
  todos.value = mockdata.todos
  dones.value = mockdata.dones
}
getTodos()
</script>

<template>
  <div class="todo-container">
    <div class="todo-dashboard">
      <div class="dashboard-todoList">
        <div class="dashboard-todos">
          <a-input-group class="todos-add">
            <a-input
              v-model:value="addItem.content"
              placeholder="输入事项"
              style="width: 79%; margin-right: 10px; border-radius: 6px"
            />
            <a-date-picker
              v-model:value="addItem.time"
              style="width: 13%; margin-right: 10px"
              placeholder="选择日期"
              :disabled-date="disabledDate"
            />
            <a-button style="width: 5%" @click="addItems"><PlusOutlined /></a-button>
          </a-input-group>
          <div class="todos-list">
            <a-collapse v-model:activeKey="activeKey" ghost>
              <a-collapse-panel key="1" header="待完成">
                <TodoItems v-for="ele in todos" :key="ele.id" :items="ele"></TodoItems>
              </a-collapse-panel>
              <a-collapse-panel key="2" header="已完成">
                <TodoItems v-for="ele in dones" :key="ele.id" :items="ele"></TodoItems>
              </a-collapse-panel>
            </a-collapse>
          </div>
        </div>
        <div class="dashboard-detail">
          <img class="detail-pic" src="../../../../../assets/pic/click-toknow.png" alt="" />
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
        height: 87vh;
        overflow-y: scroll;
        padding: 16px;
        border-right: 1px solid #f2f3f5;
        .todos-add {
          width: 100%;
          height: 32px;
          border-radius: 6px;
          margin-bottom: 16px;
          padding: 0 16px;
        }
      }
      .dashboard-detail {
        width: 35%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .detail-pic {
          width: 100px;
        }
        .detail-edit {
          font-size: 14px;
          color: grey;
          margin-top: 24px;
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
  padding-top: 0 !important;
}
::v-deep .ant-collapse-header {
  padding-bottom: 0 !important;
}
</style>
