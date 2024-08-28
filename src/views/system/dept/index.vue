<template>
	<t-adaptive-page
		:opts="opts"
		:loading="loading"
		@submit="conditionEnter"
		isShowTreeStyle
		title="部门管理列表"
		:table="table"
    btnPermissions="permissions"
		isCopy
		row-key="deptId"
		:tree-props="{children: 'children', hasChildren: 'hasChildren'}"
		:columns="table.columns"
		:isShowPagination="false"
		height="100%"
	>
		<template #toolbar>
			<el-button type="primary" size="mini" @click="handleAdd" v-hasPermi="'root:web:sys:dept:add'">新增</el-button>
		</template>
		<add-form ref="addForm" :deptData="deptOptions" @submit="submit" @cancel="cancel" />
	</t-adaptive-page>
</template>
<script>
import Api from '@/api'
import AddForm from './addForm'
export default {
  name: "Dept",
  components: { AddForm },
  data() {
    return {
      loading: false,
      // 查询参数
      queryData: {
        deptName: undefined, // 部门名称
        deptNum: undefined, // 部门编码
        status: undefined, // 状态
      },
      table: {
        data: [],
        columns: [
          { prop: 'deptName', label: '部门名称', minWidth: 180, align: 'left' },
          { prop: 'deptNum', label: '部门编码', minWidth: 180, align: 'left' },
          { prop: 'erpDeptNum', label: 'ERP部门编码', minWidth: 180, align: 'left' },
          { prop: 'createTime', label: '创建时间', minWidth: '180px', align: 'left' },
          {
            prop: 'status', label: '状态', minWidth: '80px', align: 'left', render: (text, record) => {
              return (
                <el-switch
                  active-value={true}
                  inactive-value={false}
                  v-model={record.status}
                  onChange={() => this.handleStatusChange(record)}
                >
                  {text}
                </el-switch>
              )
            }
          },
        ],
        // 表格内操作列
        operator: [
          {
            text: '编辑',
            fun: this.edit,
            hasPermi: 'root:web:sys:dept:alter'
          },
          {
            text: '删除',
            fun: this.delHandle,
            hasPermi: 'root:web:sys:dept:del'
          },
        ],
        // 操作列样式
        operatorConfig: {
          // fixed: 'right', // 固定列表右边（left则固定在左边）
          align: 'left',
          width: '140px',
          label: '操作'
        }
      },
      // 部门树选项
      deptOptions: []
    }
  },
  computed: {
    opts() {
      return {
        deptName: {
          label: '部门名称',
          comp: 'el-input'
        },
        deptNum: {
          label: '部门编码',
          comp: 'el-input'
        },
        status: {
          label: '状态',
          comp: 'el-select',
          changeEvent: 'change',
          child: [
            {
              comp: 'el-option',
              value: true,
              bind: {
                label: '启用',
                key: true
              }
            },
            {
              comp: 'el-option',
              value: false,
              bind: {
                label: '禁用',
                key: false
              }
            }
          ]
        },
      }
    },
    getQueryData() {
      const { deptName, status, deptNum } = this.queryData
      return {
        deptName,
        deptNum,
        status,
      }
    },
  },
  created() {
    this.getList()
  },
  methods: {
    /** 查询岗位列表 */
    async getList() {
      this.loading = true
      const res = await this.$api.deptList(this.getQueryData)
      if (res.success) {
        this.table.data = this.handleTree(res.data, 'deptId')
      }
      this.loading = false
    },
    // 查询按钮
    conditionEnter(data) {
      this.queryData = data
      this.getList()
    },
    // 部门状态修改
    handleStatusChange(row) {
      let text = row.status === true ? '启用' : '停用'
      this.$confirm(`确认要${text}${row.deptName}部门吗?`, '警告', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }
      ).then(() => {
        this.$message.success(`${text}成功`)
        this.getList()
      }).catch(() => {
        row.status = row.status === true ? false : true
      })
    },
    /** 查询部门下拉树结构 */
    async getTreeselect() {
      const res = await this.$api.treeselect()
      if (res.success) {
        this.deptOptions = res.data
      }
    },
    /** 新增按钮操作 */
    async handleAdd() {
      await this.getTreeselect()
      this.$refs.addForm.toDoAdd()
    },
    // 编辑
    async edit(data) {
      data.parentId = 69
      // console.log('编辑', data)
      await this.getTreeselect()
      this.$refs.addForm.edit(data)
    },
    /** 删除按钮操作 */
    delHandle({ deptId, deptName }) {
      this.$confirm(`是否确认删除${deptName}部门?`, '警告', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async () => {
        const res = await Api.delDept(deptId)
        if (res.success) {
          this.$message.success(`删除成功`)
          this.getList()
        }
      })
    },
    // 弹窗取消事件
    cancel() {
      this.$refs.addForm.reset()
      this.getList()
    },
    // 弹窗确认事件
    submit() {
      this.getList()
    }
  }
}
</script>

