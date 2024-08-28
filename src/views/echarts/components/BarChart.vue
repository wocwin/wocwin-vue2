<template>
  <div :id="id" :class="className" :style="{ height, width }" />
</template>
<script>
import * as echarts from 'echarts'
export default {
  name: 'BarChart',
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
