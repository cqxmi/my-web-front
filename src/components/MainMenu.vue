<script lang="ts" setup>
import { VueElement, ref, h } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import {
  HomeOutlined,
  EditOutlined,
  ToolOutlined,
  PictureOutlined,
  UserOutlined
} from '@ant-design/icons-vue'
//声明路由
const router = useRouter()
const route = useRoute()
//创建menus接口
interface Menus {
  key: string
  label: VueElement | string
  icon?: any
}
//动态创建menu项
function getItem(label: VueElement | string, key: string, icon?: any): Menus {
  return {
    key,
    label,
    icon
  } as Menus
}
//用来渲染的item项
const items: Menus[] = [
  getItem('主页', 'index', () => h(HomeOutlined)),
  getItem('文档', 'profile', () => h(EditOutlined)),
  getItem('工具', 'toolbox', () => h(ToolOutlined)),
  getItem('图片', 'picture', () => h(PictureOutlined)),
  getItem('我的', 'user', () => h(UserOutlined))
]
//menu状态
const state = ref({
  rootSubmenuKeys: ['index', 'profile', 'toolbox', 'picture', 'user'],
  selectedKeys: ['index']
})
//根据路由参数高亮指定的menu
const getSelect = () => {
  if (route.path.slice(1) === '') {
    state.value.selectedKeys = ['index']
  } else {
    state.value.selectedKeys = [route.path.slice(1)]
  }
}
getSelect()
//选中回调
const selectItems = ({ key }: { key: string }) => {
  //切换路由
  if (key === 'index') {
    key = ''
  }
  router.push('/' + key)
}
</script>

<template>
  <div class="menu-container">
    <a-menu v-model:selectedKeys="state.selectedKeys" style="width: 256px; height: 100%" mode="inline" :items="items"
      @select="selectItems">
    </a-menu>
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
  margin-top: 5px !important;
}
</style>
