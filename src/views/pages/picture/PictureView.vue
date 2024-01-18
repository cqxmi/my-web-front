<script setup lang="ts">
import { FormOutlined, DownloadOutlined, CopyOutlined } from '@ant-design/icons-vue'
</script>

<template>
  <div class="main-box">
    <div class="main-list">
      <div class="main-row">
        <div class="pic-item">
          <img class="pic-icon" src="../../../assets/pic/example.png" />
          <div class="pic-buttons">
            <a-tooltip placement="top" color="white">
              <template #title>
                <span style="color: black">编辑</span>
              </template>
              <a-button shape="circle" size="large">
                <template #icon>
                  <FormOutlined />
                </template>
              </a-button>
            </a-tooltip>
            <a-tooltip placement="top" color="white">
              <template #title>
                <span style="color: black">复制</span>
              </template>
              <a-button shape="circle" size="large">
                <template #icon>
                  <CopyOutlined />
                </template>
              </a-button>
            </a-tooltip>
            <a-tooltip placement="top" color="white">
              <template #title>
                <span style="color: black">下载</span>
              </template>
              <a-button shape="circle" size="large">
                <template #icon>
                  <DownloadOutlined />
                </template>
              </a-button>
            </a-tooltip>
          </div>
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
        position: relative;
        .pic-icon {
          width: 380px;
          height: 213px;
          border-radius:12px;
        }
        .pic-buttons {
          position: absolute;
          right: 0;
          bottom: 0;
          width: 140px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content:space-evenly;
        }
      }
    }
  }
}
</style>
