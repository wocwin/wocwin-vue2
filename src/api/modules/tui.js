import request from '@/utils/request'
//常规页面--列表
export function getJudgeList(data) {
  return request({
    url: '/tui/base/page',
    method: 'get',
    data
  })
}
// 弹窗表单-列表
export function getScrapOrderList(params) {
  return request({
    url: '/fg-purchase-order/pageInfo',
    method: 'get',
    params
  })
}
// 二维码路径
export function getQrCodeUrl(params) {
  return request({
    url: '/fg-purchase-order/QrCodeUrl',
    method: 'get',
    params
  })
}
// 供应商选项下拉分页(无限制)
export function getAllSupplier(params) {
  return request({
    url: `/fg-purchase-order/pageInfo/supplier`,
    method: 'get',
    params
  })
}
// 物料选项下拉
export function getMaterialList(params) {
  return request({
    url: `/fg-purchase-order/list/material`,
    method: 'get',
    params
  })
}

// 物流公司选项下拉列表
export function getLogisticsCompany(params) {
  return request({
    url: `/fg-purchase-order/list/logisticsCompany`,
    method: 'get',
    params
  })
}

// 业务员选项下拉
export function getPurchaserList(params) {
  return request({
    url: `/fg-purchase-order/list/purchaser`,
    method: 'get',
    params
  })
}
// 运单明细分页(根据订单号)
export function getPageWaybillDetails(params) {
  return request({
    url: `/fg-purchase-order/pageWaybillDetails`,
    method: 'get',
    params
  })
}
// 约车方下拉
export function bookTruckMethod(params) {
  return request({
    url: '/tui/bookTruckMethod',
    method: 'get',
    params
  })
}
// 订单状态下拉
export function fgOrderStatus(params) {
  return request({
    url: '/tui/fgOrderStatus',
    method: 'get',
    params
  })
}
// 是否下拉
export function yesOrNo(params) {
  return request({
    url: '/tui/yesOrNo',
    method: 'get',
    params
  })
}
// 作业点下拉
export function listPointByType(params) {
  return request({
    url: '/tui/base/drop-down/point',
    method: 'get',
    params
  })
}

// 发货地下拉
export function getAmpAreaTree(params) {
  return request({
    url: '/amp-area/tree',
    method: 'get',
    params
  })
}

// 判定品级下拉
export function listMaterial(params) {
  return request({
    url: '/tui/common/listMaterial',
    method: 'get',
    params
  })
}

// 料垛下拉
export function pointSpaceList(params) {
  return request({
    url: '/tui/common/point-space',
    method: 'get',
    params
  })
}
// 审计结果
export function auditResult(params) {
  return request({
    url: '/tui/common/audit-result',
    method: 'get',
    params
  })
}
// 判级状态
export function judgingStatus(params) {
  return request({
    url: '/tui/common/judging-status',
    method: 'get',
    params
  })
}
// 收货方式
export function receiveMethod(params) {
  return request({
    url: '/tui/common/receive-method',
    method: 'get',
    params
  })
}