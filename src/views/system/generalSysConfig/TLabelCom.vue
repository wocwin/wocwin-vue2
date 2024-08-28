<template>
	<div class="t_label_render">
		<div>{{label}}</div>
		<el-tooltip :content="content" placement="top">
			<i class="el-icon-question" style="cursor: pointer;margin-left:2px;" />
		</el-tooltip>
	</div>
</template>
<script>
export default {
  name: 'TLabelCom',
  props: {
    label: String,
    content: String
  }
}
</script>
<style lang="scss" scoped>
.t_label_render {
	display: flex;
	align-items: center;
}
</style>