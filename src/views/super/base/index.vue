<template>
	<t-adaptive-page
		:opts="opts"
		:queryRef.sync="queryRefObj"
		@submit="conditionEnter"
		ref="gradingResultsQuery"
		title="常规页面"
		isCopy
		isDropDownSelectMore
    isShowPagination
		:table="table"
		:columns="table.columns"
		:loading="loading"
		@size-change="handlesSizeChange"
		@page-change="handlesCurrentChange"
		:moreCheckList="moreCheckList"
		@getCheckList="getChildCheck"
		height="100%"
	>
		<template #unitPrice>
			<div style="display: flex;">
				<t-input placeholder="最小值" v-model="unitPriceMin"></t-input>~
				<t-input placeholder="最大值" v-model="unitPriceMax"></t-input>
			</div>
		</template>
	</t-adaptive-page>
</template>
<script>
export default {
  name: "GradingResultsQuery",
  data() {
    return {
      loading: false,
      auditResultList: [], // 审计结果
      judgingStatusList: [], // 判级状态
      receiveMethodList: [], // 收货方式
      materialNoList: [], // 判定品级下拉
      areaTreeList: [], // 发货地下拉
      spaceList: [], // 卸货料垛下拉
      listPointByTypeList: [], // 作业点下拉
      queryRefObj: {}, // 获取查询条件ref
      // 查询条件
      unitPriceMin: null,
      unitPriceMax: null,
      queryData: {
        entryWeighTime: [

        ],
        orderNo: null, // 订单号
        waybillNo: null, // 运单号
        status: null, // 判级状态
        materialNo: null, // 判定品级
        lwMaterialNo: null, // 运单品级
        plateNum: null, // 车牌号
        supplierName: null, //供应商名称
        cityCode: null, // 发货地
        warehouseSpaceCodes: null // 卸货料垛
      },
      table: {
        total: 0,
        currentPage: 1,
        pageSize: 10,
        data: [],
        columns: [
          { prop: "orderNo", label: "订单号", minWidth: "180" },
          { prop: "waybillNo", label: "运单号", minWidth: "200" },
          { prop: "plateNum", label: "车牌号", minWidth: "120" },
          { prop: "supplierName", label: "供应商", minWidth: "140" },
          { prop: "address", label: "发货地", minWidth: "180" },
          { prop: "lwMaterialName", label: "运单品级", minWidth: "180" },
          { prop: "entryWeighTime", label: "一检时间", minWidth: "180" },
          { prop: "grossWeight", label: "一检重量（吨）", minWidth: "140" },
          { prop: "materialName", label: "判定品级", minWidth: "180" },
          { prop: "unitPrice", label: "判定单价（元）", minWidth: "140" },
          { prop: "warehouseSpaceName", label: "卸货料垛", minWidth: "140" },
          { prop: "reduceWeight", label: "扣杂（吨）", minWidth: "140" },
          { prop: "receiveMethodLabel", label: "收货方式", minWidth: "140" },
          { prop: "auditResultLabel", label: "审计结果", minWidth: "140" },
          { prop: "statusLabel", label: "判级状态", minWidth: "100" }
        ],
        // 表格内操作列
        operator: [
          {
            text: "详情",
            fun: this.detail
          }
        ],
        // 操作列样式
        operatorConfig: {
          fixed: "right", // 固定列表右边（left则固定在左边）
          width: 140,
          label: "操作"
        }
      },
      opts: {
        entryWeighTime: {
          label: "一检时间",
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
        orderNo: {
          label: "订单号",
          comp: "el-input"
        },
        waybillNo: {
          label: "运单号",
          comp: "el-input"
        },
        status: {
          label: "判级状态",
          comp: "t-select",
          bind: {
            multiple: true,
            'collapse-tags': true,
            optionSource: [],
            valueKey: "dictValue",
            labelKey: "dictLabel"
          }
        },
        lwMaterialNo: {
          label: "运单品级",
          comp: "t-select",
          bind: {
            multiple: true,
            'collapse-tags': true,
            optionSource: [],
            valueKey: "materialNo",
            labelKey: "materialName"
          }
        },
        materialNo: {
          label: "判定品级",
          comp: "t-select",
          bind: {
            multiple: true,
            'collapse-tags': true,
            optionSource: [],
            valueKey: "materialNo",
            labelKey: "materialName"
          }
        },
        plateNum: {
          label: "车牌号",
          comp: "el-input"
        },
        supplierName: {
          label: "供应商名称",
          comp: "el-input"
        },
        cityCode: {
          label: "发货地",
          comp: "el-cascader",
          bind: {
            props: {
              multiple: true,
              emitPath: false,
              children: "children",
              label: "name",
              value: "code"
            },
            "show-all-levels": false,
            "collapse-tags": true,
            options: []
          }
        },
        warehouseSpaceCodes: {
          label: "卸货料垛",
          comp: "t-select",
          bind: {
            multiple: true,
            'collapse-tags': true,
            optionSource: [],
            customLabel: "`${_item.warehouseName}-${_item.warehouseSpaceName}`",
            valueKey: "warehouseSpaceCode"
          }
        }
      },
      checkQuery: {}
    };
  },
  watch: {
    checkQuery: {
      handler(nval, oval) {
        for (let i = 0; i < Object.keys(oval).length; i++) {
          this.$delete(this.opts, Object.keys(oval)[i]);
        }
        this.opts = Object.assign({}, this.opts, nval);
        for (let i = 0; i < Object.keys(this.opts).length; i++) {
          this.queryData[Object.keys(this.opts)[i]] = null;
        }
      },
      deep: true
    }
  },
  computed: {
    moreCheckList() {
      return [
        {
          label: "作业点",
          comp: "el-cascader",
          prop: "pointCodes",
          bind: {
            props: {
              multiple: true,
              emitPath: false,
              children: "list",
              label: "itemName",
              value: "id"
            },
            "show-all-levels": false,
            "collapse-tags": true,
            options: this.listPointByTypeList
          },
          event: {
            change: val => this.handlePointCodes(val)
          }
        },
        {
          label: "判定单价",
          comp: "el-input",
          slotName: "unitPrice",
          prop: "unitPrice"
        },
        { label: "初判人", comp: "el-input", prop: "preJudgeUserName" },
        { label: "终判人", comp: "el-input", prop: "finalJudgeUserName" },
        { label: "审计人", comp: "el-input", prop: "auditUserName" },
        { label: "卸货人", comp: "el-input", prop: "quickJudgeUserName" },
        {
          label: "收货方式",
          comp: "el-select",
          prop: "receiveMethod",
          valueKey: "dictValue",
          labelKey: "dictLabel",
          list: this.receiveMethodList
        },
        {
          label: "审计结果",
          comp: "el-select",
          prop: "auditResult",
          valueKey: "dictValue",
          labelKey: "dictLabel",
          list: this.auditResultList
        },
        {
          label: "初判时间",
          comp: "el-date-picker",
          prop: "preJudgeTime",
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
        {
          label: "终判时间",
          comp: "el-date-picker",
          prop: "finalJudgeTime",
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
        {
          label: "审计时间",
          comp: "el-date-picker",
          prop: "auditTime",
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
        {
          label: "卸货时间",
          comp: "el-date-picker",
          prop: "quickJudgeTime",
          span: 2,
          bind: {
            type: "datetimerange",
            rangeSeparator: "-",
            startPlaceholder: "开始日期",
            endPlaceholder: "结束日期",
            valueFormat: "yyyy-MM-dd HH:mm:ss",
            'default-time': ['00:00:00', '23:59:59']
          }
        }
      ];
    },
    // 查询条件所需参数
    getQueryData() {
      const {
        orderNo,
        waybillNo,
        status,
        materialNo,
        lwMaterialNo,
        plateNum,
        supplierName,
        cityCode,
        warehouseSpaceCodes, //卸货料垛
        preJudgeUserName, //初判人
        finalJudgeUserName, //终判人
        quickJudgeUserName, //卸货人
        auditUserName, //审计人
        pointCodes,
        receiveMethod,
        auditResult,
        entryWeighTime, // 一检时间
        preJudgeTime, // 初判时间
        finalJudgeTime, //终判时间
        quickJudgeTime, //卸货时间
        auditTime //审计时间
      } = this.queryData;
      return {
        orderNo,
        waybillNo,
        status,
        materialNo,
        lwMaterialNo,
        plateNum,
        supplierName,
        pointCodes,
        cityCode,
        warehouseSpaceCodes,
        unitPriceMin: this.unitPriceMin,
        unitPriceMax: this.unitPriceMax,
        preJudgeUserName,
        finalJudgeUserName,
        quickJudgeUserName,
        auditUserName,
        receiveMethod,
        auditResult,
        entryWeighBeginTime:
          entryWeighTime && entryWeighTime[0] ? entryWeighTime[0] : "",
        entryWeighEndTime:
          entryWeighTime && entryWeighTime[1] ? entryWeighTime[1] : "",
        preJudgeBeginTime:
          preJudgeTime && preJudgeTime[0] ? preJudgeTime[0] : "",
        preJudgeEndTime: preJudgeTime && preJudgeTime[1] ? preJudgeTime[1] : "",
        finalJudgeBeginTime:
          finalJudgeTime && finalJudgeTime[0] ? finalJudgeTime[0] : "",
        finalJudgeEndTime:
          finalJudgeTime && finalJudgeTime[1] ? finalJudgeTime[1] : "",
        quickJudgeBeginTime:
          quickJudgeTime && quickJudgeTime[0] ? quickJudgeTime[0] : "",
        quickJudgeEndTime:
          quickJudgeTime && quickJudgeTime[1] ? quickJudgeTime[1] : "",
        auditBeginTime: auditTime && auditTime[0] ? auditTime[0] : "",
        auditEndTime: auditTime && auditTime[1] ? auditTime[1] : "",
        pageNum: this.table.currentPage,
        pageSize: this.table.pageSize
      };
    }
  },
  created() {
    this.auditResult();
    this.judgingStatus();
    this.receiveMethod();
    this.listPointByType();
    this.listMaterial();
    this.getAmpAreaTree();
    this.pointSpaceList();
    this.getJudgeList();
  },
  methods: {
    // 获取列表数据
    async getJudgeList() {
      this.loading = true;
      const res = await this.$api.getJudgeList(this.getQueryData);
      if (res.success) {
        this.table.data = res.data.records;
        this.table.total = res.data.total;
      }
      this.loading = false;
    },
    // 收货方式
    async receiveMethod() {
      const res = await this.$api.receiveMethod();
      if (res.success) {
        this.receiveMethodList = res.data;
      }
    },
    // 判级状态
    async judgingStatus() {
      const res = await this.$api.judgingStatus();
      if (res.success) {
        this.judgingStatusList = res.data;
        this.opts.status.bind.optionSource = res.data;
      }
    },
    // 审计结果
    async auditResult() {
      const res = await this.$api.auditResult();
      if (res.success) {
        this.auditResultList = res.data;
      }
    },
    // 作业点下拉
    async listPointByType() {
      const res = await this.$api.listPointByType();
      if (res.success) {
        this.listPointByTypeList = res.data;
      }
    },
    // 判定品级下拉
    async listMaterial() {
      const res = await this.$api.listMaterial();
      if (res.success) {
        this.materialNoList = res.data;
        this.opts.materialNo.bind.optionSource = this.materialNoList;
        this.opts.lwMaterialNo.bind.optionSource = this.materialNoList;
      }
    },
    // 发货地下拉
    async getAmpAreaTree() {
      const res = await this.$api.getAmpAreaTree();
      if (res.success) {
        this.areaTreeList = res.data;
        this.opts.cityCode.bind.options = this.areaTreeList;
      }
    },
    // 卸货料垛下拉
    async pointSpaceList(pointId) {
      const res = await this.$api.pointSpaceList({ pointId });
      if (res.success) {
        this.spaceList = res.data;
        this.opts.warehouseSpaceCodes.bind.optionSource = this.spaceList;
      }
    },
    // 作业点下拉change事件
    handlePointCodes(val) {
      console.log("作业点--", val);
      // console.log('作业点--333', this.queryRefObj)
      // if (val.length > 0) {
      //   this.queryRefObj._data.form.warehouseSpaceCodes = null;
      //   this.pointSpaceList(val.join(","));
      // } else {
      //   this.pointSpaceList();
      // }
    },
    getChildCheck(val) {
      this.checkQuery = val;
    },
    // 进入详情页面
    detail({ judgeWay, waybillNo, quickFlag }) {
      console.log("进入详情页面--", judgeWay, quickFlag);
      if (judgeWay) {
        this.$router.push({
          path:
            "/pms2/webScm/scrapSteelGrading/gradingResultsQuery/gradingResultsQueryDetail",
          query: {
            waybillNo: waybillNo,
            title: judgeWay == 1 ? "详情" : "绿色通道详情",
            type: judgeWay == 1 ? "1" : "2"
          }
        });
      } else {
        this.$router.push({
          path:
            "/pms2/webScm/scrapSteelGrading/gradingResultsQuery/gradingResultsQueryDetail",
          query: {
            waybillNo: waybillNo,
            title: quickFlag == 0 ? "详情" : "绿色通道详情",
            type: quickFlag == 0 ? "1" : "2"
          }
        });
      }
    },
    // 点击查询按钮
    conditionEnter(data) {
      this.queryData = data;
      // console.log('this.queryData--', this.queryData)
      console.log("this.queryData--最终", this.getQueryData);
      this.handlesCurrentChange(1);
    },
    // 选择当前展示的总页码
    handlesSizeChange(val) {
      this.table.pageSize = val;
      this.getJudgeList();
    },
    // 选择当前页码
    handlesCurrentChange(val) {
      this.table.currentPage = val;
      this.getJudgeList();
    }
  }
};
</script>
