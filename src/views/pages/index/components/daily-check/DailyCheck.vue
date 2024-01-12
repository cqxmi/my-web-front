<script lang="ts" setup>
import { ref } from 'vue'
import type { Dayjs } from 'dayjs'
const month = ref<Dayjs>()
</script>

<template>
  <div class="main-body">
    <a-date-picker v-model:value="month" picker="month" />
    <a-progress :percent="50" style="width:200px;"/>
  </div>
</template>

<style scoped lang="less">
.main-body {
  padding: 16px;
}
</style>
