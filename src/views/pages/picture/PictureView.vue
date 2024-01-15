<script setup lang="ts">
import { FormOutlined, DownloadOutlined, CopyrightOutlined } from '@ant-design/icons-vue'
</script>

<template>
  <div class="main-box">
    <div class="main-list">
      <div class="main-row">
        <div class="pic-item">
          <div class="pic-icon"></div>
          <div class="pic-buttons">
            <a-button shape="circle">
              <template #icon>
                <FormOutlined />
              </template>
            </a-button>
            <a-button shape="circle">
              <template #icon>
                <CopyrightOutlined />
              </template>
            </a-button>
            <a-button shape="circle">
              <template #icon>
                <DownloadOutlined />]
              </template>
            </a-button>
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
          width: 40px;
          height: 135px;
          display: flex;
          justify-content: space-evenly;
          flex-direction: column;
          align-items: center;
        }
      }
    }
  }
}
</style>
