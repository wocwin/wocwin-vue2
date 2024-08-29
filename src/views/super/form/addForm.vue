<template>
	<t-dialog
		title="新增废钢订单"
		width="60%"
		:visible="formDemoDialog"
		@update:visible="formDemoDialog = false"
	>
		<TForm :ref-obj.sync="formOpts.ref" :formOpts="formOpts" :widthSize="1">
			<template #fgSupplierId>
				<t-select-table
					:table="table"
					:columns="table.columns"
					:max-height="400"
					:keywords="{label:'name',value:'id'}"
					@radioChange="radioChange"
					isShowQuery
					tableWidth="100%"
					ref="selectTable"
					placeholder="请选择供应商"
					:opts="opts"
					:isShowOpen="false"
					@submit="conditionEnter"
					@page-change="pageChange"
					@size-change="sizeChange"
					isShowPagination
				></t-select-table>
			</template>
			<template #negotiatePrice>
				<div style="display: flex;" v-if="formOpts.formData.priceType==2">
					<t-input placeholder="请输入最小值" v-model="formOpts.formData.negotiatePrice"></t-input>~
					<t-input placeholder="请输入最大值" v-model="formOpts.formData.negotiateMaxPrice"></t-input>
				</div>
				<t-input v-else placeholder="请输入单价" v-model="negotiatePrice" @change="changePrice"></t-input>
			</template>
		</TForm>
		<div slot="footer">
			<el-button type="default" @click="cancel">取消</el-button>
			<el-button type="primary" @click="submit">确定</el-button>
		</div>
	</t-dialog>
</template>
<script>
import TForm from './TForm.vue'
export default {
  name: 'AddForm',
  components: {
    TForm
  },
  props: {
    bookTruckList: {
      type: Array,
      default: () => []
    },
    materialList: {
      type: Array,
      default: () => []
    },
    companyList: {
      type: Array,
      default: () => []
    },
  },
  data() {
    return {
      negotiatePrice: null, // 协商类型单价
      formDemoDialog: false,
      formOpts: {
        labelWidth: '120px',
        ref: null,
        formData: {
          fgSupplierId: null, // 供应商
          materialNo: null, // 物料
          expEntryDate: null, // 预计到场
          truckAmount: null, // 车数
          purchaserId: null, // 业务员
          bookTruckMethod: '1', // 约车方
          logisticsCompanyId: null, // 	物流公司
          priceType: 2, // 协商类型 1、单价，2、范围
          negotiatePrice: null, // 协商最小价(元/吨)
          negotiateMaxPrice: null, // 协商最高价(元/吨)
          expEntryBeginDate: null, // 预计到场开始日期
          expEntryEndDate: null, // 预计到场结束日期
          fgSupplierFlag: 2
        },
        fieldList: [
          { label: '供应商', value: 'fgSupplierId', slotName: 'fgSupplierId' },
          {
            label: '物料', value: 'materialNo', comp: 't-select', isSelfCom: true, bind: {
              optionSource: [], valueKey: "matNo",
              labelKey: "matChi"
            }
          },
          {
            label: '预计到场日期', value: 'expEntryDate', comp: 't-date-picker',
            bind: { type: 'daterange', isPickerOptions: true },
            eventHandle: {
              change: (val) => this.expEntryDateChange(val)
            }
          },
          { label: '车数', value: 'truckAmount', type: 'input', comp: 'el-input' },
          { label: '协商价格类型', value: 'priceType', type: 'radio', comp: 'el-radio-group', list: 'priceTypeList' },
          { label: '协商价格(元/吨)', slotName: 'negotiatePrice' },
          {
            label: '业务员', value: 'purchaserId', comp: 't-select', isSelfCom: true, bind: {
              optionSource: [], valueKey: "userId",
              labelKey: "nickName"
            }
          },
          {
            label: '约车方', value: 'bookTruckMethod', type: 'radio', comp: 'el-radio-group', list: 'bookTruckList',
            eventHandle: {
              change: (val) => this.handleRadioChange(val)
            }
          },
          {
            label: '物流公司', value: 'logisticsCompanyId', comp: 't-select',
            isSelfCom: true,
            isHideItem: true,
            bind: {
              optionSource: [], valueKey: "id",
              labelKey: "companyName",
            }
          },
        ],
        rules: {
          fgSupplierId: [{ required: true, message: '请选择供应商', trigger: 'change' },],
          materialNo: [{ required: true, message: '请选择供应商', trigger: 'change' }],
          expEntryDate: [{ required: true, message: '请选择预计到场日期', trigger: 'change' }],
          truckAmount: [{ required: true, message: '请输入车数', trigger: 'blur' }],
          bookTruckMethod: [{ required: true, message: '请选择约车方', trigger: 'change' }],
        },
        listTypeInfo: {
          bookTruckList: [],
          priceTypeList: [
            { label: '单价', value: 1 },
            { label: '区间', value: 2 },
          ]
        },
      },
      table: {
        total: 0,
        currentPage: 1,
        pageSize: 10,
        data: [],
        columns: [
          { label: '供应商名称', minWidth: '220px', prop: 'name' },
          { label: '联系人姓名', minWidth: '149px', prop: 'contactName' },
          { label: '手机号码', minWidth: '149px', prop: 'phoneNumber' },
        ],
      },
      queryData: {
        supplierName: null,
        contactName: null,
        phoneNumber: null,
      }
    }
  },
  computed: {
    opts() {
      return {
        supplierName: {
          label: "供应商名称",
          comp: "el-input",
          span: 2
        },
        contactName: {
          label: "联系人名称",
          comp: "el-input",
          span: 2
        },
        phoneNumber: {
          label: "手机号码",
          comp: "el-input",
          span: 2
        },
      }
    },
    // 查询条件所需参数
    getQueryData() {
      const { phoneNumber, contactName, supplierName } = this.queryData;
      return {
        phoneNumber,
        contactName,
        supplierName,
        pageNum: this.table.currentPage,
        pageSize: this.table.pageSize
      };
    }
  },
  methods: {
    // 业务员选项下拉
    async getPurchaserList() {
      const res = await this.$api.getPurchaserList();
      if (res.success) {
        this.purchaserList = res.data;
        this.formOpts.fieldList.map(val => {
          if (val.value == 'purchaserId') {
            val.bind.optionSource = res.data
          }
        })
      }
    },
    async getAllSupplier() {
      const res = await this.$api.getAllSupplier(this.getQueryData)
      if (res.success) {
        this.table.data = res.data.rows;
        this.table.total = res.data.total;
      }
    },
    radioChange(row) {
      console.log('传给后台的值', row)
      this.formOpts.formData.fgSupplierId = row?.id
    },
    conditionEnter(data) {
      console.log('点击搜索查询', data)
      this.queryData = data;
      // console.log('this.queryData--', this.queryData)
      console.log("this.queryData--最终", this.getQueryData);
      this.pageChange(1);
    },
    pageChange(val) {
      console.log('pageChange', val)
      this.table.currentPage = val
      this.getAllSupplier()
    },
    sizeChange(val) {
      console.log('sizeChange', val)
      this.table.pageSize = val
      this.getAllSupplier()
    },
    // 预计到场日期change事件
    expEntryDateChange(val) {
      console.log('预计到场日期change事件', val)
      this.formOpts.formData.expEntryBeginDate = val ? val[0] : null;
      this.formOpts.formData.expEntryEndDate = val ? val[1] : null;
    },
    // 协商价change事件
    changePrice(val) {
      console.log('协商价change事件', val)
      if (val) {
        this.formOpts.formData.negotiatePrice = val
        this.formOpts.formData.negotiateMaxPrice = val
      } else {
        this.formOpts.formData.negotiatePrice = null
        this.formOpts.formData.negotiateMaxPrice = null
      }
    },
    // 约车方change事件
    handleRadioChange(val) {
      console.log('约车方change事件', val)
      if (val == 2) {
        this.formOpts.fieldList.map(item => {
          if (item.value == 'logisticsCompanyId') {
            item.isHideItem = false
          }
        })
      } else {
        this.formOpts.fieldList.map(item => {
          if (item.value == 'logisticsCompanyId') {
            item.isHideItem = true
          }
        })
      }
    },
    toDoAdd() {
      this.getPurchaserList()
      this.getAllSupplier()
      this.formOpts.fieldList.map(val => {
        if (val.value == 'materialNo') {
          val.bind.optionSource = this.materialList
        }
        if (val.value == 'logisticsCompanyId') {
          val.bind.optionSource = this.companyList
          if (this.formOpts.formData.bookTruckMethod == 1) {
            val.isHideItem = true
          } else {
            val.isHideItem = false
          }
        }
      })
      this.formOpts.listTypeInfo.bookTruckList = this.bookTruckList.map(val => {
        return {
          label: val.dictLabel,
          value: val.dictValue
        }
      })
      this.formOpts.formData.fgSupplierId = null
      this.formOpts.formData.negotiatePrice = null
      this.formOpts.formData.negotiateMaxPrice = null
      this.formDemoDialog = true
      setTimeout(() => {
        this.$refs.selectTable.clear()
      }, 100);
      setTimeout(() => {
        this.formOpts?.ref?.clearValidate()
      }, 300);

    },
    // 取消弹窗
    cancel() {
      this.formDemoDialog = false
      this.formOpts.ref.resetFields()
    },
    submit() {
      console.log('弹窗确定按钮', this.formOpts.formData)
      this.formOpts.ref.validate(async (valid) => {
        if (!valid) return
        const formData = {
          ...this.formOpts.formData,
        }
        delete formData.expEntryDate
        delete formData.priceType
        console.log('最终数据--', formData)
        // return
        this.$message.success(`新增成功`)
        this.cancel()
        this.$emit('submit')
      })
    },
  }
}
</script>