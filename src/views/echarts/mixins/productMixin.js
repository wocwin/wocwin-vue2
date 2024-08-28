
export default {
  data() {
    return {
      productTable: {
        border: true,
        total: 0,
        currentPage: 1,
        pageSize: 10,
        data: [],
        columns: [
          { prop: 'goodsCode', label: '商品编号', minWidth: '120', allShow: true },
          { prop: 'goodsTitle', label: '商品名称', minWidth: '220', allShow: true },
          {
            prop: 'retailPrice', label: '商品单价', minWidth: '140', render: (val) => {
              return (
                <div>{this.FloatDiv(val, 100)}</div>
              )
            }
          },
          {
            prop: 'salePriceAvg', label: '销售均价', minWidth: '120', render: (val) => {
              return (
                <div>{this.FloatDiv(val, 100)}</div>
              )
            }
          },
          {
            prop: 'saleCount', label: '商品销量', minWidth: '140'
          },
          {
            prop: 'payAmount', label: '支付金额', minWidth: '160', render: (val) => {
              return (
                <div>{this.FloatDiv(val, 100)}</div>
              )
            }
          },
          { prop: 'ordersCount', label: '子订单数', minWidth: '160' },
          { prop: 'customerCount', label: '购买人数', minWidth: '160' },
        ]
      },
    }
  },
  methods: {
    productInit() {
      this.getSaleData()
      this.getSaleRankingData()
      this.pageGoodsData()
    },
    // 商品销量
    async getSaleData() {
      const res = await this.$api.getSaleData(this.getQueryData)
      if (res.success) {
        // console.log('商品销量', res.data)
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
          this.$refs.SalesVolume.initSetChart(option)
        })
      }
    },
    // 商品销量排行
    async getSaleRankingData() {
      const res = await this.$api.getSaleRankingData(this.getQueryData)
      if (res.success) {
        // console.log('商品销量排行', res.data)
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
          this.$refs.SaleRanking.initSetChart(option)
        })
      }
    },
    // 订单详情
    async pageGoodsData() {
      const params = {
        pageNum: this.productTable.currentPage,
        pageSize: this.productTable.pageSize,
        ...this.getQueryData
      }
      const res = await this.$api.pageGoodsData(params)
      if (res.success) {
        this.productTable.data = res.data || []
        this.productTable.total = res.data?.total
      }
    },
    // 选择当前展示的总页码
    productSizeChange(val) {
      this.productTable.pageSize = val
      this.pageGoodsData()
    },
    // 选择当前页码
    productCurrentChange(val) {
      this.productTable.currentPage = val
      this.pageGoodsData()
    }
  }
}
