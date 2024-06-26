import request from '@/utils/request'

// 获取部门信息
export function getDeptList(params) {
	return request({
		url: '/screen/getDeptList',
		method: 'get',
		params
	})
}

// 获取主界面信息接口
export function getListMonitor(params) {
	return request({
		url: '/screen/getListMonitor',
		method: 'get',
		params
	})
}

// 获取websocket数据
export function getWebsocket(params) {
	return request({
		url: '/screen/getWebsocket',
		method: 'get',
		params
	})
}
