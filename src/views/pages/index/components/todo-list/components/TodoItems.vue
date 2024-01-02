<script setup lang="ts"></script>

<template>
  <div class="item">
    <div class="item-left">
      <a-checkbox>待办事项1</a-checkbox>
    </div>
    <div class="item-right">2024-01-08</div>
  </div>
</template>

<style scoped lang="less">
.item {
  width: 100%;
  height: 40px;
  border-bottom: 1px solid #f2f3f5;
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding:0 16px;
  box-sizing:border-box;
  .item-right {
    font-size:14px;
    color:grey;
  }
}
</style>
