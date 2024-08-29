<template>
	<t-adaptive-page
		:opts="opts"
		:queryRef.sync="queryRefObj"
		@submit="conditionEnter"
		ref="scrapOrderRef"
		title="弹窗表单(复选框禁用)"
		isCopy
		isShowPagination
		columnSetting
		:table="table"
		:columns="table.columns"
		:loading="loading"
		@size-change="handlesSizeChange"
		@page-change="handlesCurrentChange"
		@selection-change="selectionChange"
		height="100%"
	>
		<template #toolbar>
			<el-button size="small" type="primary" :disabled="!ids.length" @click="batchDelivery">批量下发</el-button>
			<el-button size="small" type="primary" @click="addOrder">新建</el-button>
		</template>
		<t-dialog title="二维码" width="30%" :visible="dialogQrCode" @update:visible="dialogQrCode = false">
			<el-image :src="qrCode" fit="contain" lazy />
		</t-dialog>
		<t-dialog
			title="运单明细"
			width="70%"
			:visible="dialogWaybill"
			@update:visible="dialogWaybill = false"
		>
			<t-table isCopy :table="waybillTable" :columns="waybillTable.columns" />
		</t-dialog>
		<t-dialog title="批量下发" width="30%" :visible="batchVisible" @update:visible="batchVisible = false">
			<t-select
				placeholder="请选择物流公司"
				v-model="logisticsCompanyId"
				:optionSource="companyList"
				valueKey="id"
				labelKey="companyName"
			></t-select>
			<div slot="footer">
				<el-button type="default" @click="batchVisible = false">取消</el-button>
				<el-button type="primary" @click="handleBatch">确定</el-button>
			</div>
		</t-dialog>
		<add-form
			ref="addForm"
			:bookTruckList="bookTruckList"
			:materialList="materialList"
			:companyList="companyList"
			@submit="submit"
		/>
	</t-adaptive-page>
</template>
<script>
import AddForm from './addForm'
export default {
  name: "ScrapOrder",
  components: { AddForm },
  data() {
    return {
      loading: false,
      bookTruckList: [], // 约车方
      orderStatusList: [], // 订单状态
      sendedLogisticsList: [], // 已下发物流公司
      companyList: [], // 所属物流公司
      materialList: [], // 物料下拉
      supplierList: [], // 供应商下拉
      queryRefObj: {}, // 获取查询条件ref
      queryData: {
        orderNo: null, // 订单号
        bookTruckMethod: null, // 约车方
        orderStatus: null, // 订单状态
        logisticsCompanyId: null, // 所属物流公司
        sendedLogistics: null, // 已下发物流公司
        materialNo: null, // 物料
        fgSupplierName: null, //供应商
        createDate: null, // 创建日期
        date: [],
      },
      ids: [],
      table: {
        total: 0,
        currentPage: 1,
        pageSize: 10,
        firstColumn: { type: 'selection', selectable: this.selectable, fixed: true },
        data: [],
        columns: [
          { prop: "orderNo", label: "订单号", minWidth: "180" },
          { prop: "bookTruckMethodLabel", label: "约车方", minWidth: "200" },
          { prop: "orderStatusLabel", label: "订单状态", minWidth: "120" },
          { prop: "logisticsCompanyName", label: "物流公司", minWidth: "140" },
          { prop: "sendedLogisticsLabel", label: "已下发物流公司", minWidth: "180" },
          { prop: "fgSupplierName", label: "供应商名称", minWidth: "180" },
          { prop: "phoneNumber", label: "联系电话", minWidth: "180" },
          { prop: "materialNo", label: "物料编码", minWidth: "140" },
          { prop: "materialName", label: "物料名称", minWidth: "180" },
          { prop: "materialSpec", label: "规格", minWidth: "140" },
          { prop: "expEntryDateStr", label: "预计到场日期", minWidth: "140" },
          { prop: "negotiatePriceStr", label: "协商价格(元/吨)", minWidth: "140" },
          { prop: "truckAmount", label: "车数", minWidth: "140" },
          { prop: "truckAmountAgreed", label: "已约车辆数", minWidth: "140" },
          { prop: "settlementWeight", label: "结算重量(吨)", minWidth: "140" },
          { prop: "amount", label: "金额(元)", minWidth: "180" },
          { prop: "purchaserName", label: "业务员", minWidth: "140" },
          { prop: "createBy", label: "创建人", minWidth: "100" },
          { prop: "createTime", label: "创建时间", minWidth: "180" }
        ],
        operator: [
          {
            text: "二维码",
            fun: ($event) => this.getQrCodeUrl($event)
          },
          {
            text: "取消",
            fun: this.cancel,
            show: { key: 'orderStatus', val: [1] }
          },
          {
            text: "运单明细",
            fun: this.detail,
            show: { key: 'orderStatus', val: [2, 3] }
          }
        ],
        // 操作列样式
        operatorConfig: {
          fixed: "right", // 固定列表右边（left则固定在左边）
          width: 180,
          label: "操作"
        }
      },
      dialogWaybill: false,
      orderNo: '',
      waybillTable: {
        data: [],
        columns: [
          { prop: "waybillNo", label: "运单号", minWidth: "180" },
          { prop: "waybillStatusLabel", label: "运单状态", minWidth: "120" },
          { prop: "plateNum", label: "车牌号", minWidth: "140" },
          { prop: "plateColorLabel", label: "车牌颜色", minWidth: "180" },
          { prop: "limitWeight", label: "车辆载重（吨）", minWidth: "180" },
          { prop: "driverName", label: "司机姓名", minWidth: "180" },
          { prop: "phoneNumber", label: "司机联系电话", minWidth: "140" },
          { prop: "idNumber", label: "司机身份证", minWidth: "180" },
          { prop: "grossWeight", label: "毛重", minWidth: "140" },
          { prop: "tareWeight", label: "皮重", minWidth: "140" },
          { prop: "negotiatePriceStr", label: "扣杂", minWidth: "140" },
          { prop: "settlementWeight", label: "结算重量", minWidth: "140" },
          { prop: "unitPrice", label: "结算单价", minWidth: "140" },
          { prop: "illegalFine", label: "加工费", minWidth: "140" },
          { prop: "settlementAmount", label: "结算金额", minWidth: "180" },
          { prop: "createTime", label: "创建时间", minWidth: "180" }
        ],
      },
      dialogQrCode: false, // 二维码弹窗
      qrCode: '', // 二维码
      batchVisible: false, // 批量下发
      logisticsCompanyId: '', // 批量下发
    };
  },
  computed: {
    opts() {
      return {
        orderNo: {
          label: "订单号",
          comp: "el-input"
        },
        bookTruckMethod: {
          label: "约车方",
          comp: "t-select",
          bind: {
            optionSource: this.bookTruckList,
            valueKey: "dictValue",
            labelKey: "dictLabel"
          }
        },
        orderStatus: {
          label: "订单状态",
          comp: "t-select",
          bind: {
            optionSource: this.orderStatusList,
            valueKey: "dictValue",
            labelKey: "dictLabel"
          }
        },
        logisticsCompanyId: {
          label: "所属物流公司",
          comp: "t-select",
          bind: {
            optionSource: this.companyList,
            valueKey: "id",
            labelKey: "companyName"
          }
        },
        sendedLogistics: {
          label: "已下发物流公司",
          comp: "t-select",
          bind: {
            optionSource: this.sendedLogisticsList,
            valueKey: "dictValue",
            labelKey: "dictLabel"
          }
        },
        materialNo: {
          label: "物料",
          comp: "t-select",
          bind: {
            optionSource: this.materialList,
            valueKey: "matNo",
            labelKey: "matChi"
          }
        },
        fgSupplierName: {
          label: "供应商",
          comp: "el-input"
        },
        date: {
          label: "预计到场日期",
          comp: "el-date-picker",
          span: 2,
          bind: {
            type: "daterange",
            rangeSeparator: "-",
            startPlaceholder: "开始日期",
            endPlaceholder: "结束日期",
            valueFormat: "yyyy-MM-dd",
          }
        },
        createDate: {
          label: "创建时间",
          comp: "el-date-picker",
          span: 2,
          bind: {
            type: "datetimerange",
            rangeSeparator: "-",
            startPlaceholder: "开始日期",
            endPlaceholder: "结束日期",
            valueFormat: "yyyy-MM-dd HH:mm:ss",
            'default-time': ['00:00:00', '23:59:59']
          }
        },
      }
    },
    // 查询条件所需参数
    getQueryData() {
      const { orderNo, bookTruckMethod, orderStatus, materialNo, logisticsCompanyId, sendedLogistics, fgSupplierName, date, createDate } = this.queryData;
      return {
        orderNo,
        bookTruckMethod,
        orderStatus,
        materialNo,
        logisticsCompanyId,
        sendedLogistics,
        fgSupplierName,
        expEntryBeginDate:
          date && date[0] ? date[0] : "",
        expEntryEndDate:
          date && date[1] ? date[1] : "",
        beginDate:
          createDate && createDate[0] ? createDate[0] : "",
        endDate:
          createDate && createDate[1] ? createDate[1] : "",
        pageNum: this.table.currentPage,
        pageSize: this.table.pageSize
      };
    }
  },
  created() {
    this.bookTruckMethod();
    this.fgOrderStatus();
    this.yesOrNo();
    this.getAllSupplier();
    this.getMaterialList();
    this.getLogisticsCompany();
    this.getScrapOrderList();
  },
  methods: {
    // 获取列表数据
    async getScrapOrderList() {
      this.loading = true;
      const res = await this.$api.getScrapOrderList(this.getQueryData);
      if (res.success) {
        this.table.data = res.data.records;
        this.table.total = res.data.total;
      }
      this.loading = false;
    },

    // 约车方下拉
    async bookTruckMethod() {
      const res = await this.$api.bookTruckMethod();
      if (res.success) {
        this.bookTruckList = res.data;
      }
    },
    // 订单状态下拉
    async fgOrderStatus() {
      const res = await this.$api.fgOrderStatus();
      if (res.success) {
        this.orderStatusList = res.data;
      }
    },
    // 是否下拉
    async yesOrNo() {
      const res = await this.$api.yesOrNo();
      if (res.success) {
        this.sendedLogisticsList = res.data;
      }
    },
    // 复选框禁用
    selectable(row) {
      // console.log('复选框禁用', row)
      return row.bookTruckMethod != 1
    },
    // 供应商选项下拉
    async getAllSupplier() {
      const res = await this.$api.getAllSupplier();
      if (res.success) {
        this.supplierList = res.data;
      }
    },
    // 物料选项下拉
    async getMaterialList() {
      const res = await this.$api.getMaterialList();
      if (res.success) {
        this.materialList = res.data;
      }
    },
    // 物流公司选项下拉列表
    async getLogisticsCompany() {
      const res = await this.$api.getLogisticsCompany();
      if (res.success) {
        this.companyList = res.data;
      }
    },

    // 二维码
    async getQrCodeUrl({ orderNo }) {
      this.dialogQrCode = true
      const res = await this.$api.getQrCodeUrl({ orderNo })
      if (res.success) {
        this.qrCode = res.data
      }
    },
    // 取消
    cancel(row) {
      this.$confirm('确认取消此订单？', "警告", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(async () => {
          this.$message.success(`确认取消成功`);
          this.getScrapOrderList();
        })
        .catch(() => {
          console.log('取消')
        });
    },
    // 批量下发
    batchDelivery() {
      console.log('批量下发')
      this.logisticsCompanyId = ''
      this.batchVisible = true
    },
    // 批量下发确认
    handleBatch() {
      if (!this.logisticsCompanyId) {
        this.$message.error('请选择物流公司')
        return
      }
      const params = {
        ids: this.ids.join(','),
        logisticsCompanyId: this.logisticsCompanyId,
      };
      this.$message.success('批量下发成功')
      this.batchVisible = false
      this.getScrapOrderList()
    },
    // 新建
    addOrder() {
      console.log('新建')
      this.$refs.addForm.toDoAdd()
    },
    // 弹窗确认事件
    submit() {
      this.table.currentPage = 1
      this.getScrapOrderList()
    },
    // 运单明细
    detail(row) {
      this.orderNo = row.orderNo
      this.dialogWaybill = true
      this.getPageWaybillDetails()
    },
    // 点击查询按钮
    conditionEnter(data) {
      this.queryData = data;
      // console.log('this.queryData--', this.queryData)
      console.log("this.queryData--最终", this.getQueryData);
      this.handlesCurrentChange(1);
    },
    // 复选框选中
    selectionChange(val) {
      console.log('复选框选中', val)
      this.ids = val.map(item => item.id)
      console.log('this.ids', this.ids)
    },
    // 选择当前展示的总页码
    handlesSizeChange(val) {
      this.table.pageSize = val;
      this.getScrapOrderList();
    },
    // 选择当前页码
    handlesCurrentChange(val) {
      this.table.currentPage = val;
      this.getScrapOrderList();

    },
    // 运单明细分页
    async getPageWaybillDetails() {
      const params = {
        orderNo: this.orderNo,
      };
      const res = await this.$api.getPageWaybillDetails(params);
      if (res.success) {
        if (res.success) {
          this.waybillTable.data = res.data;
        }
      }
    }
  }
};
</script>
