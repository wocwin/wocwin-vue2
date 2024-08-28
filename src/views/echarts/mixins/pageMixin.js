
export default {
  data() {
    return {
      pageTable: {
        border: true,
        firstColumn: { type: 'index', label: '序列' },
        total: 0,
        currentPage: 1,
        pageSize: -1,
        data: [],
        columns: [
          { prop: 'name', label: '页面名称', minWidth: '120', allShow: true },
          { prop: 'url', label: 'URL', minWidth: '220', allShow: true },
          { prop: 'personAmount', label: 'UV访问用户数', width: '160', sort: true },
          { prop: 'viewTime', label: 'PV访问次数', width: '160', sort: true },
          { prop: 'residence', label: '平均停留时长（秒）', width: '180', sort: true },
          { prop: 'share', label: '分享次数', width: '160', sort: true }
        ]
      },
    }
  },
  methods: {
    pageInit() {
      this.getVisitData(0)
      this.getPageVisitData()
      this.getPaymentConversion()
      this.listPageDetails()
    },
    // 访问数据
    async getVisitData(index) {
      const res = await this.$api.getVisitData(this.getQueryData)
      if (res.success) {
        console.log('访问数据', res.data)
        this.$nextTick(() => {
          const series = res.data[index].dataList.map(item => {
            return {
              type: 'line',
              smooth: true,
              name: res.data[index].type || '',
              data: item.data,
              label: {
                normal: {
                  show: true,
                  position: 'top'
                }
              },
            }
          })
          const legendData = res.data[index].nameData
          const option = {
            title: {
              text: res.data[index].title
            },
            tooltip: {
              trigger: 'axis'
            },
            legend: {
              data: legendData
            },
            grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
            },
            xAxis: {
              type: 'category',
              boundaryGap: false,
              data: res.data[index].keyData
            },
            yAxis: {
              type: 'value'
            },
            series
          }
          this.$refs.AccessData.initSetChart(option)
        })
      }
    },
    // 页面访问数据
    async getPageVisitData() {
      const res = await this.$api.getPageVisitData(this.getQueryData)
      if (res.success) {
        console.log('页面访问数据', res.data)
        this.$nextTick(() => {
          const series = res.data.dataList.map(item => {
            return {
              type: 'bar',
              ...item,
              label: {
                normal: {
                  show: true,
                  position: 'top'
                }
              },
            }
          })
          const legendData = res.data.nameData
          const option = {
            title: {
              text: res.data.title
            },
            tooltip: {
              trigger: 'axis'
            },
            legend: {
              data: legendData
            },
            grid: {
              left: '5%',
              bottom: '3%',
              containLabel: true
            },
            xAxis: {
              type: 'category',
              data: res.data.keyData,
              name: res.data.xtitle,
              axisLabel: {
                interval: 0,
                rotate: 40
              },
            },
            yAxis: {
              type: 'value',
              name: res.data.ytitle
            },
            series
          }
          this.$refs.PageAccessData.initSetChart(option)
        })
      }
    },
    // 支付转化
    async getPaymentConversion() {
      const res = await this.$api.getPaymentConversion(this.getQueryData)
      if (res.success) {
        console.log('支付转化', res.data)
        this.$nextTick(() => {
          const series = res.data.dataList.map(item => {
            return {
              type: 'funnel',
              left: '10%',
              width: '90%',
              maxSize: '90%',
              label: {
                position: 'inside',
                formatter: '{c}人',
                color: '#fff'
              },
              itemStyle: {
                opacity: 0.8,
                borderColor: '#fff',
                borderWidth: 2
              },
              emphasis: {
                label: {
                  position: 'inside',
                  formatter: '{b}: {c}人'
                }
              },
              ...item,
              data: item.topData
            }
          })
          const legendData = res.data.nameData
          console.log('nameData--', legendData)
          const option = {
            title: {
              text: res.data.title
            },
            tooltip: {
              trigger: 'item',
              formatter: '{b} : {c}人'
            },
            legend: {
              x: 'center',
              y: 'bottom',
              data: legendData
            },
            series
          }
          this.$refs.Payment.initSetChart(option)
        })
      }
    },
    // 订单详情
    async listPageDetails() {
      const params = {
        pageNum: this.pageTable.currentPage,
        pageSize: this.pageTable.pageSize,
        ...this.getQueryData
      }
      const res = await this.$api.listPageDetails(params)
      if (res.success) {
        this.pageTable.data = res.data || []
        this.pageTable.total = res.data?.total
      }
    },
    // 选择当前展示的总页码
    pageSizeChange(val) {
      this.pageTable.pageSize = val
      this.listPageDetails()
    },
    // 选择当前页码
    pageCurrentChange(val) {
      this.pageTable.currentPage = val
      this.listPageDetails()
    }
  }
}
