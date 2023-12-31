<script setup lang="ts">
</script>

<template>
  <div class="index-container">
    <div class="index-icons">
      <!-- <img class="icons-item" src="../../../assets/menus/todo.png"/> -->
      <div class="icons-item todo"></div>
      <div class="icons-item todo-select"></div>
      <div class="icons-item check"></div>
      <div class="icons-item check-select"></div>
      <div class="icons-item data"></div>
      <div class="icons-item data-select"></div>
      <!-- <img class="icons-item" src="../../../assets/menus/todo-select.png"/>
      <img class="icons-item" src="../../../assets/menus/check.png"/>
      <img class="icons-item" src="../../../assets/menus/check-select.png"/>
      <img class="icons-item" src="../../../assets/menus/data.png"/>
      <img class="icons-item" src="../../../assets/menus/data-select.png"/> -->
    </div>
  </div>
</template>

<style scoped lang="less">
.index-container {
  .index-icons {
    width:5%;
    background-color: #f9f9f9;
    height:100%;
    border-right:1px solid #f2f3f5;
    display:flex;
    flex-direction: column;
    align-items: center;
    padding-top:16px;
    .icons-item {
      width:22px;
      height:22px;
      border-radius: 50%;
      margin-bottom:16px;
      cursor:pointer;
      overflow: hidden;
    }
    .todo {
      background-image: url('../../../assets/menus/todo.png');
      background-size: 25px;
    }
    .todo-select {
      background-image: url('../../../assets/menus/todo-select.png');
      background-size: 25px;
    }
    .check {
      background-image: url('../../../assets/menus/check.png');
      background-size: 22px;
    }
    .check-select {
      background-image: url('../../../assets/menus/check-select.png');
      background-size: 22px;
    }
    .data {
      background-image: url('../../../assets/menus/data.png');
      background-size: 25px;
    }
    .data-select {
      background-image: url('../../../assets/menus/data-select.png');
      background-size: 25px;
    }
  }
}
</style>