<template>
	<t-dialog
		class="add_edit"
		:title="title"
		width="40%"
		:visible="formDemoDialog"
		@update:visible="()=>$emit('cancel')"
	>
		<t-form :ref-obj.sync="formOpts.ref" :formOpts="formOpts" :widthSize="2" />
		<template #footer>
			<el-button size="small" @click="()=>$emit('cancel')">取消</el-button>
			<el-button type="primary" size="small" @click="submit">确定</el-button>
		</template>
	</t-dialog>
</template>
<script>
export default {
  name: 'AddForm',
  data() {
    return {
      formDemoDialog: false,
      title: '',
      // form表单
      formOpts: {
        ref: null,
        formData: {
          systemName: null, // 系统名称
          menuIds: [], // 绑定菜单
          status: true
        },
        fieldList: [
          { label: '系统名称', value: 'systemName', type: 'input', comp: 'el-input' },
          {
            label: '绑定菜单', value: 'menuIds', comp: 't-select', isSelfCom: true, bind: {
              multiple: true,
              optionSource: [],
              valueKey: "menuId",
              labelKey: "menuName"
            }
          },
        ],
        rules: {
          systemName: [{ required: true, message: '请输入系统名称', trigger: 'blur' }],
          menuIds: [{ required: true, message: '请选择绑定菜单', trigger: 'change' }]
        },
      },
    }
  },
  props: {
    // 所有绑定菜单数据
    allSystemList: {
      type: Array,
      default: () => ([])
    }
  },
  methods: {
    // 新增
    toDoAdd() {
      this.formOpts.fieldList.map(val => {
        if (val.value == 'menuIds') {
          val.bind.optionSource = this.allSystemList
        }
      })
      this.formDemoDialog = true
      this.title = '新增'
    },
    // 编辑
    async edit(data) {
      this.formOpts.fieldList.map(val => {
        if (val.value == 'menuIds') {
          val.bind.optionSource = this.allSystemList
        }
      })
      // console.log('编辑--', data)
      this.formDemoDialog = true
      this.title = '编辑'
      this.formOpts.formData.systemName = data.systemName
      this.formOpts.formData.menuIds = data.menuIds
    },
    reset() {
      this.formDemoDialog = false
      this.formOpts.ref.resetFields()
      this.formOpts.formData.systemName = null
      this.formOpts.formData.menuIds = []
    },
    // 弹窗确定按钮
    submit() {
      this.formOpts.ref.validate((valid) => {
        if (!valid) return
        const formData = {
          ...this.formOpts.formData,
        }
        formData.systemId = this.formOpts?.formData?.systemId || ''
        console.log('最终参数', formData)
        this.$message.success(`${this.title}成功`)
        this.reset()
        this.$emit('submit')
      })
    },
  }
}
</script>
<style lang="scss" scoped>
.add_edit {
	::v-deep .t-form .slot_label {
		.el-form-item__content label {
			min-width: 0px;
		}
		.vue-treeselect__label-container {
			display: block;
		}
	}
	::v-deep .t-dialog-content .el-dialog__body {
		overflow-x: inherit;
	}
}
</style>
