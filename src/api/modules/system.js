import request from '@/utils/request'

// 业务系统管理列表
export function businessList(params) {
	return request({
		url: '/sys/businessList',
		method: 'get',
		params
	})
}
// 获取所有菜单
export function listAllSystems(params) {
	return request({
		url: '/sys/listAllSystems',
		method: 'get',
		params
	})
}
// 获取用户列表
export function userList(params) {
	return request({
		url: '/sys/userList',
		method: 'get',
		params
	})
}
// 获取用户--详情信息
export function getUserInfo(params) {
	return request({
		url: '/sys/userInfo',
		method: 'get',
		params
	})
}
// 获取岗位角色数据
export function getRoleData(params) {
	return request({
		url: '/sys/roleData',
		method: 'get',
		params
	})
}
// 获取业务系统树
export function systemTree(params) {
	return request({
		url: '/sys/system-tree',
		method: 'get',
		params
	})
}
// 获取角色--数据范围
export function getDataScope(params) {
	return request({
		url: '/sys/dataScope',
		method: 'get',
		params
	})
}
// 角色--根据系统--获取菜单
export function roleMenuTreeselect(params) {
	return request({
		url: '/sys/roleMenuTreeselect',
		method: 'get',
		params
	})
}
// 菜单--tree树
export function menuTreeselect(params) {
	return request({
		url: '/sys/menu/treeselect',
		method: 'get',
		params
	})
}
// 获取系统数据
export function systemDrawDown(params) {
	return request({
		url: '/sys/system-draw-down',
		method: 'get',
		params
	})
}
// 部门管理list
export function deptList(params) {
	return request({
		url: '/sys/deptList',
		method: 'get',
		params
	})
}
// 部门--tree树
export function treeselect(params) {
	return request({
		url: '/sys/treeselect',
		method: 'get',
		params
	})
}
// 角色管理list
export function roleList(params) {
	return request({
		url: '/sys/roleList',
		method: 'get',
		params
	})
}
// 字典管理list
export function dictList(params) {
	return request({
		url: '/sys/dictList',
		method: 'get',
		params
	})
}
// 字典管理list--type list
export function childDictList(params) {
	return request({
		url: '/sys/childDictList',
		method: 'get',
		params
	})
}
// 系统日志列表
export function logList(params) {
	return request({
		url: '/sys/logList',
		method: 'get',
		params
	})
}
// 系统日志--详情信息
export function oplogDetail(params) {
	return request({
		url: '/sys/oplogDetail',
		method: 'get',
		params
	})
}

// 系统通用配置--初始化值
export function configLoad(params) {
	return request({
		url: '/sys/configLoad',
		method: 'get',
		params
	})
}

// 岗位--分页
export function getPostList(params) {
	return request({
		url: '/sys/postList',
		method: 'get',
		params
	})
}

// 获取岗位
export function getPost(params) {
	return request({
		url: '/sys/post',
		method: 'get',
		params
	})
}

// 获取角色
export function getRoles(params) {
	return request({
		url: '/sys/roles',
		method: 'get',
		params
	})
}

// 获取子微前端数据
export function listAppGrouped(params) {
	return request({
		url: '/sys/list-app-grouped',
		method: 'get',
		params
	})
}

// 获取路由
export function listMenu(params) {
	return request({
		url: '/sys/listMenu',
		method: 'get',
		params
	})
}
