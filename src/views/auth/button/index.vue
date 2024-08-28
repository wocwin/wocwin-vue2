<template>
	<t-layout-page class="anth_button">
		<t-layout-page-item class="anth_button_item">
			<el-alert
				title="目前按钮权限是根据登录账号实现，模拟后台根据不同用户角色返回对应数据按钮集合，（wocwin 账号可查看所有按钮、user 账号只可查看部分按钮---系统管理模块）"
				:closable="false"
				type="success"
				effect="dark"
			/>
			<div>
				当前登陆账号是：{{
				loginName === "user"
				? `${loginName}（即：游客账号---> 系统管理--没有新增/删除按钮）`
				: `${loginName}（即：超管账号）`
				}}
			</div>
			<el-divider content-position="left">
				使用 v-hasPermi="'root:web:sys:user:alter'"
				方式绑定权限————此按钮权限下分到每个菜单页面的按钮级别；此按钮解析：当前项目(web)系统管理模块（sys）用户页面（user）修改按钮（alter）
			</el-divider>
			<el-button type="primary" v-hasPermi="'root:web:sys:user:alter'">用户修改按钮</el-button>
			<el-button type="primary" icon="Promotion" @click="handleToLogin">登录其他账号</el-button>
		</t-layout-page-item>
	</t-layout-page>
</template>
<script>
export default {
  name: 'buttonAuth',
  computed: {
    loginName() {
      return window.localStorage.getItem("login_Name")
    }
  },
  methods: {
    handleToLogin() {
      this.$store.dispatch('FedLogOut').then(() => {
        window.location.href = window.__POWERED_BY_QIANKUN__ ? window.localStorage.getItem("mainJumpPublicPath") : '/wocwin-vue2/'
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.anth_button {
	.anth_button_item {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		> div,
		.el-button {
			margin: 15px 0;
		}
	}
}
</style>
