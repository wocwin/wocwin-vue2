<template>
	<t-dialog
		class="add_edit"
		:title="title"
		width="50%"
		:visible="formDemoDialog"
		@update:visible="cancel"
	>
		<t-form :ref-obj.sync="formOpts.ref" :formOpts="formOpts" :widthSize="2" />
		<template #footer>
			<el-button size="small" @click="cancel">取消</el-button>
			<el-button type="primary" size="small" @click="submit">确定</el-button>
		</template>
	</t-dialog>
</template>
<script>
import { isStrongPassword } from '@/utils/validate.js'
export default {
  name: 'AddForm',
  data() {
    return {
      formDemoDialog: false,
      title: '',
      deptName: '',
      // form表单
      formOpts: {
        ref: null,
        formData: {
          userName: null, // 登录账号
          password: null, // 登录密码
          nickName: null, // 姓名
          sex: null, // 性别
          deptId: null, // 部门
          postId: null, // 岗位
          email: null, // 邮箱
          phonenumber: null, // 手机
          roleIds: null, // 角色
          remark: null, // 备注
          status: true, // 状态
        },
        fieldList: [
          { label: '登录账号', value: 'userName', type: 'input', comp: 'el-input', isTrim: true },
          { label: '登录密码', value: 'password', type: 'input', comp: 'el-input', bind: { 'show-password': true } },
          { label: '姓名', value: 'nickName', type: 'input', comp: 'el-input' },
          { label: '性别', value: 'sex', type: 'select-arr', list: 'sexList', comp: 'el-select', arrLabel: 'label', arrKey: 'key' },
          {
            label: '部门', value: 'deptId', comp: 'el-cascader',
            bind: {
              props: {
                emitPath: false,
                children: "children",
                label: "label",
                value: "id"
              },
              "show-all-levels": false,
              "collapse-tags": true,
              options: []
            },
            widthSize: 1
          },
          {
            label: '岗位', value: 'postId', comp: 't-select', isSelfCom: true, bind: {
              optionSource: [],
              valueKey: "postId",
              labelKey: "postName"
            }
          },
          { label: '邮箱', value: 'email', type: 'input', comp: 'el-input' },
          { label: '手机', value: 'phonenumber', type: 'input', comp: 'el-input', bind: { maxLength: 11 } },
          {
            label: '角色', value: 'roleIds', widthSize: 1, comp: 'el-cascader',
            bind: {
              props: {
                multiple: true,
                emitPath: false,
                children: "roles",
                label: "label",
                value: "id"
              },
              "show-all-levels": false,
              // "collapse-tags": true,
              options: []
            },
          },
          { label: '备注', value: 'remark', type: 'input', comp: 'el-input', widthSize: 1 },
        ],
        rules: {
          userName: [{ required: true, message: '请输入登录账号', trigger: 'blur' }],
          password: [{ required: true, message: '请输入登录密码', trigger: 'blur' }, { validator: isStrongPassword, trigger: 'blur' }],
          nickName: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
          deptId: [{ required: true, message: '请选择部门', trigger: 'change' }],
          power: [{ required: true, message: '请选择功率', trigger: 'change' }],
          roleIds: [{ required: true, message: '请选择角色', trigger: 'change' }],
          email: [
            {
              validator: this.validatorEmail,
              message: '邮箱格式错误',
              trigger: 'blur'
            }
          ]
        },
        // 相关列表
        listTypeInfo: {
          sexList: [
            {
              label: '男',
              key: '0'
            },
            {
              label: '女',
              key: '1'
            },
            {
              label: '未知',
              key: '2'
            }
          ]
        }
      }
    }
  },
  props: {
    // 部门数据
    deptOptions: {
      type: Array,
      default: () => ([])
    },
    // 岗位数据
    postData: {
      type: Array,
      default: () => ([])
    }
  },
  methods: {
    // 邮箱校验
    validatorEmail(rule, value, callback) {
      if (value && !/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(value)) {
        callback(new Error(rule.message))
      }
      callback()
    },
    // 新增
    toDoAdd(roleData) {
      this.formOpts.fieldList.map(val => {
        if (val.value == 'postId') {
          val.bind.optionSource = this.postData
        }
        if (val.value == 'roleIds') {
          val.bind.options = roleData
        }
        if (val.value == 'deptId') {
          val.bind.options = this.deptOptions
        }
      })
      this.formDemoDialog = true
      let flag = this.formOpts.fieldList.some(item => item.value == 'password')
      let obj = { label: '登录密码', value: 'password', type: 'input', comp: 'el-input', bind: { 'show-password': true } }
      let rulesPassword = [{ required: true, message: '请输入登录密码', trigger: 'blur' }, { validator: isStrongPassword, trigger: 'blur' }]
      if (!flag) {
        this.formOpts.fieldList.splice(1, 0, obj)
      }
      console.log('add', this.formOpts.rules)
      if (!this.formOpts.rules.password) {
        this.$set(this.formOpts.rules, 'password', rulesPassword)
      }
      this.$nextTick(() => {
        this.formOpts?.ref?.clearValidate()
      })
      this.title = '新增'
    },
    // 编辑
    async edit(id, roleData) {
      this.formOpts.fieldList.map(val => {
        if (val.value == 'postId') {
          val.bind.optionSource = this.postData
        }
        if (val.value == 'roleIds') {
          val.bind.options = roleData
        }
        if (val.value == 'deptId') {
          val.bind.options = this.deptOptions
        }
      })
      this.formDemoDialog = true
      this.formOpts.fieldList.map((item, index) => {
        if (item.value === 'password') {
          this.formOpts.fieldList.splice(index, 1)
        }
      })
      this.$delete(this.formOpts.rules, 'password')
      this.$nextTick(() => {
        this.formOpts?.ref?.clearValidate()
      })
      this.title = '编辑'
      this.formOpts.formData.id = id
      const res = await this.$api.getUserInfo(id)
      console.log('编辑获取信息', res.data)
      if (res.success) {
        let formData = res.data
        this.formOpts.formData = formData
      }
    },
    // 取消弹窗
    cancel() {
      this.formDemoDialog = false
      this.formOpts.ref.resetFields()
    },
    // 清除校验
    clearValidate() {
      this.formOpts.ref.clearValidate()
    },
    // 弹窗确定按钮
    submit() {
      console.log('弹窗确定按钮', this.formOpts.formData)
      this.formOpts.ref.validate(async (valid) => {
        if (!valid) return
        const formData = {
          ...this.formOpts.formData,
          deptIds: this.formOpts.formData.deptId !== null ? [this.formOpts.formData.deptId] : [],
        }
        if (this.title == '新增') {
          console.log('新增最终参数--', formData)
          this.$message.success(`新增成功`)
          this.cancel()
          this.$emit('submit')
        }
        if (this.title == '编辑') {
          formData.id = this.formOpts.formData.id
          console.log('编辑最终参数--', formData)
          this.$message.success(`编辑成功`)
          this.cancel()
          this.$emit('submit')
        }
      })
    },
  }
}
</script>
