<script setup lang="ts"></script>

<template>
  <div class="main-box">
    <div class="main-list">
      <div class="main-row">
        <div class="pic-item">
          <div class="pic-icon"></div>
          <div class="pic-buttons">
            <div class="button-edit">编辑</div>
            <div class="button-copy">复制</div>
            <div class="button-download">下载</div>
          </div>
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
  </div>
</template>

<style scoped lang="less">
.main-box {
  width: 100%;
  .main-list {
    width: 100%;
    .main-row {
      width: 100%;
      display: flex;
      justify-content: space-evenly;
      padding-top: 16px;
      .pic-item {
        display: flex;
        .pic-icon {
          width: 240px;
          height: 135px;
          background-color: pink;
        }
        .pic-buttons {
          width:40px;
          height:135px;
          background-color: lightblue;
          display:flex;
          justify-content: space-evenly;
          flex-direction: column;
        }
      }
    }
  }
}
</style>
