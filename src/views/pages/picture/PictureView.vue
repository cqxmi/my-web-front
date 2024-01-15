<script setup lang="ts">
import { FormOutlined, DownloadOutlined, CopyOutlined } from '@ant-design/icons-vue'
</script>

<template>
  <div class="main-box">
    <div class="main-list">
      <div class="main-row">
        <div class="pic-item">
          <img class="pic-icon" src="../../../assets/pic/example.png"/>
          <div class="pic-buttons">
            <a-tooltip placement="right" color="white">
              <template #title>
                <span style="color:black">编辑</span>
              </template>
              <a-button shape="circle" size="large">
                <template #icon>
                  <FormOutlined />
                </template>
              </a-button>
            </a-tooltip>
            <a-tooltip placement="right" color="white">
              <template #title>
                <span style="color:black">复制</span>
              </template>
              <a-button shape="circle" size="large">
                <template #icon>
                  <CopyOutlined />
                </template>
              </a-button>
            </a-tooltip>
            <a-tooltip placement="right" color="white">
              <template #title>
                <span style="color:black">下载</span>
              </template>
              <a-button shape="circle" size="large">
                <template #icon>
                  <DownloadOutlined />
                </template>
              </a-button>
            </a-tooltip>
          </div>
        </div>
        <div class="pic-item">
          <img class="pic-icon" src="../../../assets/pic/example.png"/>
          <div class="pic-buttons">
            <a-tooltip placement="right" color="white">
              <template #title>
                <span style="color:black">编辑</span>
              </template>
              <a-button shape="circle" size="large">
                <template #icon>
                  <FormOutlined />
                </template>
              </a-button>
            </a-tooltip>
            <a-tooltip placement="right" color="white">
              <template #title>
                <span style="color:black">复制</span>
              </template>
              <a-button shape="circle" size="large">
                <template #icon>
                  <CopyOutlined />
                </template>
              </a-button>
            </a-tooltip>
            <a-tooltip placement="right" color="white">
              <template #title>
                <span style="color:black">下载</span>
              </template>
              <a-button shape="circle" size="large">
                <template #icon>
                  <DownloadOutlined />
                </template>
              </a-button>
            </a-tooltip>
          </div>
        </div>
        <div class="pic-item">
          <img class="pic-icon" src="../../../assets/pic/example.png"/>
          <div class="pic-buttons">
            <a-tooltip placement="right" color="white">
              <template #title>
                <span style="color:black">编辑</span>
              </template>
              <a-button shape="circle" size="large">
                <template #icon>
                  <FormOutlined />
                </template>
              </a-button>
            </a-tooltip>
            <a-tooltip placement="right" color="white">
              <template #title>
                <span style="color:black">复制</span>
              </template>
              <a-button shape="circle" size="large">
                <template #icon>
                  <CopyOutlined />
                </template>
              </a-button>
            </a-tooltip>
            <a-tooltip placement="right" color="white">
              <template #title>
                <span style="color:black">下载</span>
              </template>
              <a-button shape="circle" size="large">
                <template #icon>
                  <DownloadOutlined />
                </template>
              </a-button>
            </a-tooltip>
          </div>
        </div>
        <div class="pic-item">
          <img class="pic-icon" src="../../../assets/pic/example.png"/>
          <div class="pic-buttons">
            <a-tooltip placement="right" color="white">
              <template #title>
                <span style="color:black">编辑</span>
              </template>
              <a-button shape="circle" size="large">
                <template #icon>
                  <FormOutlined />
                </template>
              </a-button>
            </a-tooltip>
            <a-tooltip placement="right" color="white">
              <template #title>
                <span style="color:black">复制</span>
              </template>
              <a-button shape="circle" size="large">
                <template #icon>
                  <CopyOutlined />
                </template>
              </a-button>
            </a-tooltip>
            <a-tooltip placement="right" color="white">
              <template #title>
                <span style="color:black">下载</span>
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
        display: flex;
        .pic-icon {
          width: 332px;
          height: 186px;
        }
        .pic-buttons {
          width: 50px;
          height: 186px;
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
