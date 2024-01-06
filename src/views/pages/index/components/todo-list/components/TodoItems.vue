<script setup lang="ts">
import { ref } from 'vue'
import type { TodoItem } from '@/types/index'

const checked = ref(false)
const props = defineProps({
  items: {
    type: Object as () => TodoItem,
    required: true
  }
})
checked.value = props.items.done
</script>

<template>
  <div class="item">
    <div class="item-left">
      <a-checkbox v-model:checked="checked"
        ><span :style="items.done ? 'color:#c2c6d0' : ''">{{ items.content }}</span></a-checkbox
      >
    </div>
    <div class="item-right" :style="items.done ? 'color:#c2c6d0' : ''">{{ items.time }}</div>
  </div>
</template>

<style scoped lang="less">
.item {
  width: 100%;
  height: 40px;
  border-bottom: 1px solid #f2f3f5;
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  box-sizing: border-box;
  position: relative;
  .item-right {
    font-size: 14px;
    color: grey;
  }
}
.item:hover {
  background-color: #f0f0f0 !important;
}
::v-deep .ant-checkbox-inner {
  border: 1px solid #d9d9d9 !important;
}
::v-deep .ant-checkbox-wrapper:hover .ant-checkbox-inner {
  background-color: #efefef;
}
::v-deep .ant-checkbox-checked .ant-checkbox-inner {
  background-color: #c2c6d0;
}
::v-deep .ant-checkbox-wrapper-checked:hover .ant-checkbox-inner {
  background-color: #6e7075 !important;
}
::v-deep .ant-checkbox-wrapper-checked:hover .ant-checkbox-checked:after {
  border-color: #6e7075 !important;
}
::v-deep .ant-checkbox-checked:after {
  border: none;
}
</style>
