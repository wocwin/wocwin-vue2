
export default {
  methods: {
    userInit() {
      this.getNewCustomerData()
      this.getVisitsTrendData(0)
      this.getCustOrderData()
    },
    // 新增用户
    async getNewCustomerData() {
      const res = await this.$api.getNewCustomerData(this.getQueryData)
      if (res.success) {
        console.log('新增用户', res.data)
        this.$nextTick(() => {
          const series = res.data.dataList.map(item => {
            return {
              type: 'line',
              smooth: true,
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
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
            },
            xAxis: {
              type: 'category',
              boundaryGap: false,
              data: res.data.keyData
            },
            yAxis: {
              type: 'value'
            },
            series
          }
          this.$refs.AddUser.initSetChart(option)
        })
      }
    },
    // 访问时段
    async getVisitsTrendData(index) {
      const res = await this.$api.getVisitsTrendData(this.getQueryData)
      if (res.success) {
        console.log('访问时段', res.data)
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
          this.$refs.AccessPeriod.initSetChart(option)
        })
      }
    },
    // 新老用户下单比例
    async getCustOrderData() {
      const res = await this.$api.getCustOrderData(this.getQueryData)
      if (res.success) {
        console.log('新老用户下单比例', res.data)
        this.$nextTick(() => {
          const seriesData = res.data.dataList.map(item => {
            return {
              ...item,
            }
          })
          // console.log('pie--series', seriesData)
          // const legendData = res.data.nameData
          const option = {
            title: {
              text: res.data.title
            },
            tooltip: {
              trigger: 'item',
              formatter: '{b}:{d}% \n 订单数量: {c}'
            },
            series: {
              type: 'pie',
              radius: '80%',
              label: {
                normal: {
                  show: true,
                  position: 'inner',
                  textStyle: {
                    align: "center",
                    baseline: "middle",
                  },
                  formatter: '{b}:{d}% \n 订单数量: {c}'
                }
              },
              data: seriesData
            }
          }
          this.$refs.UsersOrder.initSetChart(option)
        })
      }
    }
  }
}
