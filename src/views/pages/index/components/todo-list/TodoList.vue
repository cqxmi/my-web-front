<script setup lang="ts">
//待办事项
import dayjs, { Dayjs } from 'dayjs'
import TodoItems from './components/TodoItems.vue'
import mockdata from '@/mock/index'
import { ref, watch } from 'vue'
import { PlusOutlined } from '@ant-design/icons-vue'
import type { TodoItem } from '@/types/index'
import { message } from 'ant-design-vue'

//监听折叠面板变化
const activeKey = ref(['1'])
watch(activeKey, (val) => {
  console.log(val)
})
//格式化时间
const initTime = ref<Dayjs>()
//禁用时间
const disabledDate = (current: Dayjs) => {
  return current && current < dayjs().startOf('day')
}
//日期格式化
const changeDate = (e: Dayjs) => {
  addItem.value.time = e.format('YYYY-MM-DD')
}
//添加事项
const addItem = ref<TodoItem>({
  id: 1,
  content: '',
  time: '',
  done: false
})
const addItems = () => {
  //验证
  if (!addItem.value.content || !addItem.value.time) {
    message.warning('请填写内容与时间')
    return
  }
  console.log(addItem.value)
}
//选中id
const selectId = ref<number>(-1)
const select = (ele: TodoItem) => {
  selectId.value = ele.id
  console.log(selectId.value)
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
              v-model:value="initTime"
              style="width: 12%; margin-right: 10px"
              placeholder="选择日期"
              :disabled-date="disabledDate"
              @change="changeDate"
              format="YYYY-MM-DD"
            />
            <a-button style="width: 6%" @click="addItems"><PlusOutlined /></a-button>
          </a-input-group>
          <div class="todos-list">
            <a-collapse v-model:activeKey="activeKey" ghost>
              <a-collapse-panel key="1" header="待完成">
                <TodoItems
                  v-for="ele in todos"
                  :key="ele.id"
                  :items="ele"
                  @click="select(ele)"
                  :class="selectId === ele.id ? 'selectItem' : ''"
                ></TodoItems>
              </a-collapse-panel>
              <a-collapse-panel key="2" header="已完成">
                <TodoItems
                  v-for="ele in dones"
                  :key="ele.id"
                  :items="ele"
                  @click="select(ele)"
                  :class="selectId === ele.id ? 'selectItem' : ''"
                ></TodoItems>
              </a-collapse-panel>
            </a-collapse>
          </div>
        </div>
        <div class="dashboard-detail">
          <div class="dashboard-default" v-if="selectId === -1">
            <img class="detail-pic" src="../../../../../assets/pic/click-toknow.png" alt="" />
            <div class="detail-edit">点击进行编辑</div>
          </div>
          <div class="dashboard-edit" v-else>
            <div class="data-dashboard">
              <div>
                <a-checkbox
                  style="margin-right: 8px; padding-right: 8px; border-right: 1px solid #d1d1d1"
                ></a-checkbox>
                <a-date-picker
                  placeholder="选择日期"
                  :disabled-date="disabledDate"
                  @change="changeDate"
                  format="YYYY-MM-DD"
                />
              </div>
              <a-button class="button delete" danger>删除</a-button>
            </div>
            <a-textarea class="a-textareas" placeholder="请输入事项" />
          </div>
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
        overflow-y: auto;
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
        .dashboard-default {
          width: 100%;
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
        .dashboard-edit {
          width: 100%;
          height: 100%;
          padding: 16px 10px;
          box-sizing: border-box;
          .data-dashboard {
            margin-bottom: 12px;
            padding-left: 10px;
            border-bottom: 1px solid #f2f3f5;
            padding-bottom: 12px;
            display: flex;
            justify-content: space-between;
          }
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
::v-deep .ant-checkbox-inner {
  border: 1px solid #d9d9d9 !important;
}
::v-deep .ant-checkbox-wrapper:hover .ant-checkbox-inner {
  background-color: #efefef;
}
::v-deep .ant-checkbox-checked .ant-checkbox-inner {
  background-color: #c2c6d0 !important;
}
::v-deep .ant-checkbox-wrapper-checked:hover .ant-checkbox-inner {
  background-color: #6e7075 !important;
}
::v-deep .ant-checkbox-wrapper-checked:hover .ant-checkbox-checked:after {
  border-color: #6e7075 !important;
}
::v-deep .ant-checkbox-checked:after {
  border: none;
}
.selectItem {
  background-color: #e9f7ee !important;
}
.selectItem:hover {
  background-color: #e9f7ee !important;
}
.a-textareas {
  border: none;
  font-size: 20px;
  resize: none;
  width: 100%;
  height: calc(82vh);
  overflow-y: auto;
}
textarea,
textarea.ant-input:hover,
textarea:focus {
  -webkit-box-shadow: none;
  box-shadow: none;
}
::webkit-scrollbar {
  display: none !important;
}
.delete:hover {
  background-color: #ff4d4f;
  color: white !important;
}
</style>
