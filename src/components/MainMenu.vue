<script lang="ts" setup>
import { VueElement, ref, h } from 'vue'
import { ItemType } from 'ant-design-vue'
import { useRouter } from 'vue-router'
import {
  HomeOutlined,
  EditOutlined,
  CloudOutlined,
  PictureOutlined,
  UserOutlined
} from '@ant-design/icons-vue'
//声明路由
const router = useRouter()
//动态创建menu项
function getItem(label: VueElement | string, key: string, icon?: any): ItemType {
  return {
    key,
    label,
    icon
  } as ItemType
}
//用来渲染的item项
const items: ItemType[] = ref([
  getItem('主页', 'index', () => h(HomeOutlined)),
  getItem('文档', 'profile', () => h(EditOutlined)),
  getItem('资源', 'file', () => h(CloudOutlined)),
  getItem('图片', 'picture', () => h(PictureOutlined)),
  getItem('我的', 'user', () => h(UserOutlined))
])
//menu状态
const state = ref({
  rootSubmenuKeys: ['index', 'profile', 'file', 'picture', 'user'],
  selectedKeys: ['index']
})
//选中回调
const selectItems = ({ key }) => {
  //切换路由
  if (key === 'index') {
    key = ''
  }
  router.push('/' + key)
}
</script>

<template>
  <div class="menu-container">
    <a-menu
      v-model:selectedKeys="state.selectedKeys"
      style="width: 256px; height: 100%"
      mode="inline"
      :items="items"
      @select="selectItems"
    ></a-menu>
  </div>
</template>

<style scoped lang="less">
.menu-container {
  margin-right: 16px;
}
::v-deep .ant-menu {
  border-radius: 4px;
}
::v-deep .ant-menu-item {
  height: 50px;
  font-size: 18px;

}
::v-deep .ant-menu-item-icon {
  font-size: 18px !important;
}
::v-deep .ant-menu-item-icon:nth-of-type(2) {
  margin-top:5px !important;
}
</style>
