<script setup lang="ts">
//待办事项
import { BorderOutlined, CheckSquareOutlined, DownOutlined } from '@ant-design/icons-vue';
import type { MenuProps } from 'ant-design-vue';
import { ref } from 'vue'

//切换选项
const option = ref(1)
const handleMenuClick: MenuProps['onClick'] = e => {
    option.value = +e.key
};
</script>

<template>
    <div>
        <a-dropdown>
            <template #overlay>
                <a-menu @click="handleMenuClick">
                    <a-menu-item key="1">
                        <BorderOutlined />
                        待完成
                    </a-menu-item>
                    <a-menu-item key="2">
                        <CheckSquareOutlined />
                        已完成
                    </a-menu-item>
                </a-menu>
            </template>
            <a-button>
                <span v-if="option === 1">待完成</span>
                <span v-else>已完成</span>
                <DownOutlined />
            </a-button>
        </a-dropdown>
    </div>
</template>

<style scoped lang="less"></style>