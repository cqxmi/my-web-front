<script setup lang="ts"></script>

<template>
  <div class="main-box">
    <div class="main-list">
      <div class="pic-item">
        <div class="pic-icon"></div>
      </div>
      <div class="pic-item">
        <div class="pic-icon"></div>
      </div>
      <div class="pic-item">
        <div class="pic-icon"></div>
      </div>
      <div class="pic-item">
        <div class="pic-icon"></div>
      </div>
      <div class="pic-item">
        <div class="pic-icon"></div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.main-box {
  .main-list {
    display: flex;
    flex-wrap: wrap;

    .pic-item {
      margin-left:16px;
      .pic-icon {
        width: 300px;
        height: 135px;
        background-color: pink;
      }
    }
  }

}
</style>