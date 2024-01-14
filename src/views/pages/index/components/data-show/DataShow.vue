<script setup lang="ts">
//数据展示
import { onMounted } from 'vue'
import * as echarts from 'echarts';

// 基于准备好的dom，初始化echarts实例
const myChart = echarts.init(document.querySelector('.main') as HTMLElement, null, {
  width: 600,
  height: 400
});

onMounted(() => {
  // 绘制图表
  myChart.setOption({
    title: {
      text: 'ECharts 入门示例'
    },
    tooltip: {},
    xAxis: {
      data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
    },
    yAxis: {},
    series: [
      {
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }
    ]
  });
})

</script>

<template>
  <div>
    <div class="main">
      数据展示
    </div>
  </div>
</template>

<style scoped lang="less">
.main {
  width: 200px;
  height: 200px;
}
</style>