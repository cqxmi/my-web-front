<script setup lang="ts">
import { ref } from 'vue'
import 'bytemd/dist/index.css'
import { Editor } from '@bytemd/vue-next'
import zhHans from 'bytemd/lib/locales/zh_Hans.json' // 汉化
import { PlusOutlined } from '@ant-design/icons-vue'

//搜索框
const values = ref<string>('')
const onSearch = (searchValue: string) => {
  console.log('use value', searchValue)
  console.log('or use this.value', values.value)
}

//markdown
const value = ref<string>('')
// 获取书写文档内容
const handleChange = (v: string) => {
  value.value = v
}
</script>

<template>
  <div class="box">
    <div class="box-left">
      <div class="search">
        <a-input-search
          v-model:value="values"
          placeholder="搜索笔记"
          enter-button
          @search="onSearch"
        />
        <a-button class="button create"><PlusOutlined /></a-button>
      </div>
      <div class="profile-list">
        <div class="profile-detail"></div>
        <div class="profile-detail"></div>
        <div class="profile-detail"></div>
        <div class="profile-detail"></div>
        <div class="profile-detail"></div>
        <div class="profile-detail"></div>
        <div class="profile-detail"></div>
        <div class="profile-detail"></div>
        <div class="profile-detail"></div>
        <div class="profile-detail"></div>
        <div class="profile-detail"></div>
        <div class="profile-detail"></div>
      </div>
    </div>
    <div class="box-right">
      <div class="profile-buttons">
        <a-button class="button edit">编辑</a-button>
        <a-button class="button delete" danger>删除</a-button>
      </div>
      <Editor class="editos" :value="value" @change="handleChange" :locale="zhHans" />
    </div>
  </div>
</template>

<style scoped lang="less">
.box {
  display: flex;
  .box-left {
    width: 350px;
    max-height: 100%;
    padding: 16px;
    display: flex;
    flex-direction: column;
    border-right: 1px solid #f2f3f5;
    .search {
      margin-bottom: 20px;
    }
    .profile-list {
      height: 82vh;
      padding-right: 10px;
      overflow-y: auto;
      .profile-detail {
        height: 100px;
        border: 1px solid #f2f3f5;
        border-radius: 4px;
        margin-bottom: 16px;
      }
    }
  }
  .box-right {
    width: 100%;
    height: 100%;
    .profile-buttons {
      height: 50px;
      border-bottom: 1px solid #f2f3f5;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      .button {
        margin-right: 16px;
      }
      .create {
        color: #66c497;
        border-color: #66c497;
      }
      .edit {
        color: #66c497;
        border-color: #66c497;
      }
      .create:hover {
        background-color: #66c497;
        color: white;
      }
      .edit:hover {
        background-color: #66c497;
        color: white;
      }
      .delete:hover {
        background-color: #ff4d4f;
        color: white;
      }
    }
  }
}
::v-deep .bytemd {
  height: calc(100vh - 127px) !important;
}
.create {
  color: #66c497;
  border-color: #66c497;
}
.create:hover {
  background-color: #66c497;
  color: white;
}
::v-deep .ant-input-search {
  width:81% !important;
  margin-right:5px;
}
</style>
