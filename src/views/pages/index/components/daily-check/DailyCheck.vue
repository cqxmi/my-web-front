<script lang="ts" setup>
import { ref } from 'vue'
import type { Dayjs } from 'dayjs'
const month = ref<Dayjs>()
</script>

<template>
  <div>
    <a-date-picker v-model:value="month" picker="month" />
  </div>
</template>

<style scoped lang="less"></style>
