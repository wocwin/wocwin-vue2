
export default {
  data() {
    return {
      table: {
        border: true,
        total: 0,
        currentPage: 1,
        pageSize: 10,
        data: [],
        operator: [
          {
            text: '查看订单',
            fun: this.viewOrder,
          },
        ],
        // 操作列样式
        operatorConfig: {
          fixed: 'right', // 固定列表右边（left则固定在左边）
          width: 120,
          label: '操作'
        },
        columns: [
          { prop: 'orderNo', label: '订单编号', minWidth: '120', allShow: true },
          {
            prop: 'address',
            label: '客户信息',
            minWidth: '330',
            allShow: true,
            render: (val, row) => {
              return (
                <div>{row.customerName} {row.customerPhone} {val}</div>
              )
            }
          },
          {
            prop: 'orderAmount', label: '订单总额', width: '140', render: (val) => {
              return (
                <div>{this.FloatDiv(val, 100)}</div>
              )
            }
          },
          {
            prop: 'reductionAmount', label: '订单优惠总额', width: '140', render: (val) => {
              return (
                <div>{this.FloatDiv(val, 100)}</div>
              )
            }
          },
          {
            prop: 'payAmount', label: '支付金额', width: '140', render: (val) => {
              return (
                <div>{this.FloatDiv(val, 100)}</div>
              )
            }
          },
          { prop: 'createTime', label: '创建时间', minWidth: '160' },
        ]
      },
      mapObj: {},
      map: null,
      lnglat: [],
      streetList: [], // 需要标点的数据
    }
  },
  mounted() {

  },
  methods: {
    orderInit() {
      this.getSaleTrendData()
      this.getOrderTimeData()
      this.getPayResultData()
      this.getAmountDistributionData()
      this.getLocationDistributionData()
      this.pageOrderData()
    },
    // 销售趋势
    async getSaleTrendData() {
      const res = await this.$api.getSaleTrendData(this.getQueryData)
      if (res.success) {
        // console.log('销售趋势', res.data)
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
          this.$refs.SalesTrend.initSetChart(option)
        })
      }
    },
    // 下单时间分布
    async getOrderTimeData() {
      const res = await this.$api.getOrderTimeData(this.getQueryData)
      if (res.success) {
        // console.log('下单时间分布', res.data)
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
          this.$refs.OrderTime.initSetChart(option)
        })
      }
    },
    // 支付结果
    async getPayResultData() {
      const res = await this.$api.getPayResultData(this.getQueryData)
      if (res.success) {
        // console.log('支付结果', res.data)
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
          this.$refs.ResultPayment.initSetChart(option)
        })
      }
    },
    // 订单金额分布
    async getAmountDistributionData() {
      const res = await this.$api.getAmountDistributionData(this.getQueryData)
      if (res.success) {
        // console.log('订单金额分布', res.data)
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
              name: res.data.xtitle
            },
            yAxis: {
              type: 'value',
              name: res.data.ytitle
            },
            series
          }
          this.$refs.OrderAmount.initSetChart(option)
        })
      }
    },
    // 订单数量区域分布
    async getLocationDistributionData() {
      const res = await this.$api.getLocationDistributionData(this.getQueryData)
      if (res.success) {
        // console.log('订单数量区域分布', res.data)
        // this.$nextTick(() => {
        this.map?.clearMap()
        this.mapObj = res.data
        this.lnglat = [res.data.store.amapLon, res.data.store.amapLat]
        // console.log('订单数量区域分布----', this.lnglat)
        this.map = new AMap.Map('OrderQuantity', {
          resizeEnable: true,
          zoom: 12,
          center: this.lnglat
        });
        this.streetList = res.data.streetVOList
        this.streetList.push(res.data.store)
        this.streetList = this.streetList.filter(item => item.amapLon != '' && item.amapLon != null)
        if (this.mapObj.streetVOList.length > 0) {
          await this.addMarker()
          // await this.regeoCode()
        }
      }
    },
    addMarker() {
      for (let i = 0; i < this.streetList.length; i += 1) {
        let center = [this.streetList[i].amapLon, this.streetList[i].amapLat]
        const bgColor = this.streetList[i].storeType ? '#ff3d00' : '#1d6fec'
        // 重绘坐标点的样式
        const markerContent =
          `<div class="custom-content-marker marker">` +
          `<img src="//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-${this.streetList[i].storeType ? 'red' : 'default'}.png" style="width:25px;height:34px;"/>` +
          `  <div style="color:#fff;position: absolute;font-size: 12px;top: 5px;" class="num">${this.streetList[i].count || ''} </div>` +
          '</div>'
        let marker = new AMap.Marker({
          position: center,
          offset: new AMap.Pixel(-13, -30),
          content: markerContent,
          title: `${this.streetList[i].street}`,
          zIndex: 102,
        })
        const str = `<div style="background: ${bgColor};opacity:'0.8';padding: 0 5px;border-radius: 4px;box-shadow:0 2px 4px 0 rgba(0,0,0,0.16)">
                <div style="color: #FFFFFF;">${this.streetList[i].storeType ? '当前门店' : this.streetList[i].street}</div>
              </div>`

        marker.setLabel({
          direction: 'top',
          offset: new AMap.Pixel(0, 0), // 设置文本标注偏移量
          content: str // 设置文本标注内容
        })
        this.map.add(marker)
        this.map.setZoom(18)
        this.map.setFitView()
      }
    },
    regeoCode() {
      for (let i = 0; i < this.streetList.length; i += 1) {
        let center = [this.streetList[i].amapLon, this.streetList[i].amapLat]
        let geocoder = new AMap.Geocoder({
          city: "020", //城市设为广州，默认：“全国”
          radius: 1000, //范围，默认：500
          // extensions: 'all'
        });
        geocoder.getAddress(center, (status, result) => {
          if (status === 'complete' && result.regeocode) {
            // this.map.setZoom(20);
            // this.map.setFitView();
            // console.log('根据经纬度查询地址', result)
          }
          else {
            console.error('根据经纬度查询地址失败')
          }
        });
        // const infoWindow = new AMap.InfoWindow({
        //   content: this.streetList[i].storeName ? this.streetList[i].storeName : this.streetList[i].count,
        //   offset: new AMap.Pixel(0, -30)
        // });
        // infoWindow.open(this.map, center);
        this.map.setZoom(18)
        this.map.setFitView()
      }
    },
    // 订单详情
    async pageOrderData() {
      const params = {
        pageNum: this.table.currentPage,
        pageSize: this.table.pageSize,
        ...this.getQueryData
      }
      const res = await this.$api.pageOrderData(params)
      if (res.success) {
        this.table.data = res.data || []
        this.table.total = res.data.total
      }
    },
    // 选择当前展示的总页码
    handlesSizeChange(val) {
      this.table.pageSize = val
      this.pageOrderData()
    },
    // 选择当前页码
    handlesCurrentChange(val) {
      this.table.currentPage = val
      this.pageOrderData()
    },
    // 查看订单
    viewOrder(row) {
      this.$router.push({
        path: `${this.$store.getters.parentPath}/webWatermarketing/storeOrder/mallOrder/mallOrderDetail`,
        query: { orderNo: row.orderNo, type: 'detail', title: '查看' }
      });
    }
  }
}
