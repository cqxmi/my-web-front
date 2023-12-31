<script setup lang="ts">
</script>

<template>
  <div class="index-container">
    <div class="index-icons">
      <div class="icons-item">
        <img class="icons" src="../../../assets/menus/todo.png" />
      </div>
      <!-- <div class="icons-item">
        <img class="icons" src="../../../assets/menus/todo-select.png" />
      </div> -->
      <div class="icons-item">
        <img class="icons" src="../../../assets/menus/check.png" />
      </div>
      <!-- <div class="icons-item">
        <img class="icons" src="../../../assets/menus/check-select.png" />
      </div> -->
      <div class="icons-item">
        <img class="icons" src="../../../assets/menus/data.png" />
      </div>
      <!-- <div class="icons-item">
        <img class="icons" src="../../../assets/menus/data-select.png" />
      </div> -->
    </div>
  </div>
</template>

<style scoped lang="less">
.index-container {
  .index-icons {
    width: 5%;
    background-color: #f9f9f9;
    height: 100%;
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
  }
}
</style>