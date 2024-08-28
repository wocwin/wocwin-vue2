<template>
	<t-layout-page class="overview_diagram">
		<t-layout-page-item>
			<div class="top_query">
				<div class="left">选择日期</div>
				<div class="right">
					<t-date-picker type="daterange" v-model="date" isPickerOptions @change="dateChange" />
				</div>
			</div>
			<div class="statistics">
				<div class="order_list">
					<div
						class="order_list_item"
						v-for="(item,index) in orderList"
						:key="index"
						:style="{flex: `0 1 calc((${100 / orderList.length}% - 5px))`,marginRight:'5px'}"
					>
						<div class="title">{{item.title}}</div>
						<div class="num_content">
							<div class="num">{{item.num}}</div>
							<span class="unit">{{item.unit}}</span>
						</div>
					</div>
				</div>
				<div class="visit_list">
					<div
						class="order_list_item"
						v-for="(item,index) in visitList"
						:key="index"
						:style="{flex: `0 1 calc((${100 / visitList.length}% - 5px))`,marginRight:'5px'}"
					>
						<div class="title">{{item.title}}</div>
						<div class="num_content">
							<div class="num">{{item.num}}</div>
							<span class="unit">{{item.unit}}</span>
						</div>
					</div>
				</div>
			</div>
		</t-layout-page-item>
		<t-layout-page-item>
			<t-tabs :tabs="tabs" @tabsChange="tabsChange">
				<template #tab1>
					<div class="echarts_content">
						<div class="content_top">
							<line-chart id="SalesTrend" ref="SalesTrend" />
							<line-chart id="OrderTime" ref="OrderTime" />
						</div>
						<div class="content_bottom">
							<pie-chart id="ResultPayment" ref="ResultPayment" />
							<bar-chart id="OrderAmount" ref="OrderAmount" />
							<div class="order_quantity_map">
								<div class="map_top">
									<div class="title">{{mapObj.title}}</div>
									<div class="tip">{{mapObj.tip}}</div>
								</div>
								<div class="map">
									<div id="OrderQuantity" ref="OrderQuantity"></div>
									<div class="replaceBox" title="刷新">
										<i class="el-icon-refresh-right" @click="replace" />
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="table_content">
						<t-table
							tableTitle="订单详情"
							:table="table"
							:columns="table.columns"
							:showFullscreen="false"
							@size-change="handlesSizeChange"
							@page-change="handlesCurrentChange"
						/>
					</div>
				</template>
				<template #tab2>
					<div class="user_echarts_content">
						<line-chart id="AddUser" ref="AddUser" />
						<line-chart id="AccessPeriod" ref="AccessPeriod">
							<el-radio-group
								class="access_type"
								v-model="accessType"
								size="mini"
								@input="accessTypeChage"
							>
								<el-radio-button :label="0">访问人数</el-radio-button>
								<el-radio-button :label="1">访问人次</el-radio-button>
							</el-radio-group>
						</line-chart>
						<pie-chart id="UsersOrder" ref="UsersOrder" />
					</div>
				</template>
				<template #tab3>
					<div class="product_echarts_content">
						<line-chart id="SalesVolume" ref="SalesVolume" />
						<bar-chart id="SaleRanking" ref="SaleRanking" />
					</div>
					<div class="table_content">
						<t-table
							tableTitle="商品详情"
							:table="productTable"
							:columns="productTable.columns"
							:showFullscreen="false"
							@size-change="productSizeChange"
							@page-change="productCurrentChange"
						/>
					</div>
				</template>
				<template #tab4>
					<div class="user_echarts_content">
						<line-chart id="AccessData" ref="AccessData">
							<el-radio-group
								class="access_type"
								v-model="accessPageType"
								size="mini"
								@input="accessPageChage"
							>
								<el-radio-button :label="0">UV数据</el-radio-button>
								<el-radio-button :label="1">PV数据</el-radio-button>
							</el-radio-group>
						</line-chart>
						<bar-chart id="PageAccessData" ref="PageAccessData" />
						<funnel-chart id="Payment" ref="Payment" />
					</div>
					<div class="table_content">
						<t-table
							tableTitle="页面详情"
							:table="pageTable"
							:columns="pageTable.columns"
							@size-change="pageSizeChange"
							@page-change="pageCurrentChange"
							:isShowPagination="false"
							:showFullscreen="false"
						/>
					</div>
				</template>
			</t-tabs>
		</t-layout-page-item>
	</t-layout-page>
</template>
<script>
import { formatDate } from "@/utils"
import OrderDetailsMixin from './mixins/orderDetailsMixin'
import UserMixin from './mixins/userMixin'
import PageMixin from './mixins/pageMixin'
import ProductMixin from './mixins/productMixin'
import LineChart from './components/LineChart.vue'
import PieChart from './components/PieChart.vue'
import BarChart from './components/BarChart.vue'
import FunnelChart from './components/FunnelChart.vue'
export default {
  name: 'OverviewDiagram',
  components: { LineChart, BarChart, PieChart, FunnelChart },
  mixins: [OrderDetailsMixin, UserMixin, ProductMixin, PageMixin],
  data() {
    return {
      startTime: formatDate(),
      endTime: formatDate(),
      date: [formatDate(), formatDate()],
      // date: ['2023-11-01', '2023-11-30'],
      orderList: [
        {
          title: '支付总额/元',
          fieldName: 'payAmount',
          num: 0,
          unit: '元'
        },
        {
          title: '客单价',
          fieldName: 'averageOrderValue',
          num: 0,
          unit: '元'
        },
        {
          title: '订单总数',
          fieldName: 'orderCount',
          num: 0,
          unit: '单'
        },
        {
          title: '商品总销量',
          fieldName: 'orderItemCount',
          num: 0,
          unit: '件'
        }
      ], // 订单统计
      visitList: [
        {
          title: '云店访问次数',
          fieldName: 'accessCount',
          num: 0,
          unit: '次'
        },
        {
          title: '云店访问人数',
          fieldName: 'visitorCount',
          num: 0,
          unit: '人'
        },
        {
          title: '下单人数',
          fieldName: 'orderCustomerCount',
          num: 0,
          unit: '人'
        },
        {
          title: '新用户数量',
          fieldName: 'newCustomerCount',
          num: 0,
          unit: '人'
        }
      ], // 访问统计
      tabs: [
        {
          key: 'tab1',
          title: '订单数据'
        },
        {
          key: 'tab2',
          title: '用户数据'
        },
        {
          key: 'tab3',
          title: '商品数据'
        },
        {
          key: 'tab4',
          title: '页面数据'
        }
      ],
      tabName: 'tab1',
      accessType: 0,
      accessPageType: 0,
    }
  },
  computed: {
    getQueryData() {
      return {
        startTime: this.startTime,
        endTime: this.endTime,
      }
    },
  },
  created() {
    this.init()
    this.orderInit()
  },
  mounted() {
    // this.init()
  },
  methods: {
    init() {
      this.getOrderSummary()
      this.getVisitorSummary()
    },
    // 选择日期
    dateChange(val) {
      console.log('选择日期', val)
      this.startTime = val && val[0]
      this.endTime = val && val[1]
      this.init()
      switch (this.tabName) {
        case 'tab1':
          this.orderInit()
          break;
        case 'tab2':
          this.userInit()
          break;
        case 'tab3':
          this.productInit()
          break;
        case 'tab4':
          this.pageInit()
          break;
      }
    },
    // 订单汇总
    async getOrderSummary() {
      const res = await this.$api.getOrderSummary(this.getQueryData)
      if (res.success) {
        // console.log('订单汇总', res.data, this.getQueryData)
        this.orderList.map(item => {
          item.num = res.data[item.fieldName]
        })
      }
    },
    // 访客汇总
    async getVisitorSummary() {
      const res = await this.$api.getVisitorSummary(this.getQueryData)
      if (res.success) {
        // console.log('访客汇总', res.data)
        this.visitList.map(item => {
          item.num = res.data[item.fieldName]
        })
      }
    },
    // 切换tab
    tabsChange({ name }) {
      console.log('切换tab-', name)
      this.tabName = name
      switch (this.tabName) {
        case 'tab1':
          this.orderInit()
          break;
        case 'tab2':
          this.userInit()
          break;
        case 'tab3':
          this.productInit()
          break;
        case 'tab4':
          this.pageInit()
          break;
      }
    },
    // 用户--切换访问时段
    accessTypeChage(val) {
      console.log('accessTypeChage--', val, this.accessType)
      this.getVisitsTrendData(this.accessType)
    },
    // 页面--切换访问数据
    accessPageChage(val) {
      console.log('accessTypeChage--', val, this.accessPageType)
      this.getVisitData(this.accessPageType)
    },
    //刷新地图
    replace() {
      console.log(this.$refs.OrderQuantity, 88);
      this.getLocationDistributionData()
    }
  }
}
</script>
<style lang="scss">
@import './index.scss';

.custom-content-marker {
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
}

.amap-marker-label {
	/* min-width: 100px; */
	line-height: 20px;
	font-size: 10px;
	padding: 0;
	background: #fff;
	border: none;
	border-radius: 4px;
}
</style>
