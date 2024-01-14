<script lang="ts" setup>
import { ref } from 'vue'
import type { Dayjs } from 'dayjs'
const month = ref<Dayjs>()
</script>

<template>
  <div class="main-body">
    <a-date-picker v-model:value="month" picker="month" />
    <div>
      <div>
        <a-button type="primary" shape="circle" size="large">
          <div class="card">打卡</div>
        </a-button>
        <a-progress :percent="50" style="width:200px;" strokeColor="#52c41a" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.main-body {
  padding: 16px;
  .card {
    font-size: 12px;
  }
}
</style>
