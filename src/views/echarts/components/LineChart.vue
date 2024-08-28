<template>
  <div class="line_chart">
    <div :id="id" :class="className" :style="{ height, width }" />
    <slot />
  </div>
</template>
<script>
import * as echarts from 'echarts'
export default {
  name: 'LineChart',
  props: {
    id: {
      type: String,
    },
    className: {
      type: String,
      default: ""
    },
    width: {
      type: String,
      default: "",
    },
    height: {
      type: String,
      default: "300px",
    }
  },
  methods: {
    initSetChart(options) {
      // 图表初始化
      const chart = echarts.init(document.getElementById(this.id));
      chart.setOption(options);
      // 大小自适应
      window.addEventListener("resize", () => {
        chart.resize();
      });
    }
  }
}
</script>
<style lang="scss" scoped>
.line_chart {
  position: relative;
}
</style>
