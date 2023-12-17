<script setup lang="ts"></script>

<template>
  <div class="tab-container">
    <div class="tab-header">
      <div class="container-left">
        <img class="header-logo" src="../assets/icons/logo.png" />
        <div class="header-title">My Web</div>
      </div>
      <div class="container-right">
        <div class="user-avatar"></div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.tab-container {
  width: 100%;
  padding: 0 16px;
  background-color: #f2f3f5;
  box-sizing: border-box;
  border-radius: 4px;
}
.tab-header {
  border-radius: 4px;
  width: 100%;
  height: 60px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0 16px;
}
.container-left {
  display: flex;
  align-items: center;
  .header-logo {
    width: 32px;
    height: 32px;
    margin-right: 16px;
  }
  .header-title {
    font-size: 22px;
    font-family: 'ff-meta-serif-web-pro', 'PT Serif', Georgia, 'Droid Serif', serif;
  }
}
.container-right {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  background-color: green;
}
</style>
