<script setup lang="ts">
import { ref } from 'vue'
//搜索框
const value = ref<string>('')
const onSearch = (searchValue: string) => {
  console.log('use value', searchValue)
  console.log('or use this.value', value.value)
}
</script>

<template>
  <div class="box">
    <div class="box-left">
      <div class="search">
        <a-input-search
          v-model:value="value"
          placeholder="搜索笔记"
          enter-button
          @search="onSearch"
        />
      </div>
      <div class="notes-list">
        <div class="notes-detail"></div>
        <div class="notes-detail"></div>
        <div class="notes-detail"></div>
        <div class="notes-detail"></div>
        <div class="notes-detail"></div>
        <div class="notes-detail"></div>
        <div class="notes-detail"></div>
        <div class="notes-detail"></div>
        <div class="notes-detail"></div>
        <div class="notes-detail"></div>
        <div class="notes-detail"></div>
        <div class="notes-detail"></div>
      </div>
    </div>
    <div class="box-right"></div>
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
      padding-right: 80px;
      margin-bottom: 20px;
    }
    .notes-list {
      height: 82vh;
      padding-right: 10px;
      overflow-y: scroll;
      .notes-detail {
        height: 100px;
        border: 1px solid #f2f3f5;
        border-radius: 4px;
        margin-bottom: 16px;
      }
    }
  }
}
</style>
