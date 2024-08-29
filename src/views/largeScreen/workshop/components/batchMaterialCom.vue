<template>
	<div class="coalTarScreen_batchMaterialCom">
		<div class="batch_left">
			<div class="table_top">
				<table border="0">
					<thead>
						<tr>
							<th style="width: 1.5rem">批次号</th>
							<th style="width: .9rem">生成时间</th>
							<th style="width: 1.5rem">物料名称</th>
							<th style="width: 1.1rem">规格</th>
							<th style="width: .8rem">产品代码</th>
							<th style="width: .8rem">批次包数</th>
							<th>状态</th>
						</tr>
					</thead>
					<tbody :class="{scroll: scrollFlag,tbodyDiv: true}">
						<tr v-for="(item,index) of tableData" :key="index">
							<td>
								<div class="marqueeDiv">
									<marquee
										scrolldelay="300"
										v-if="item.code && item.code.length > 13"
										direction="left"
										align="middle"
										style="max-width: 1.8rem;"
									>{{ item.code }}</marquee>
									<span v-else>{{ item.code }}</span>
								</div>
							</td>
							<td>{{item.time}}</td>
							<td>
								<div class="marqueeDiv">
									<marquee
										scrolldelay="300"
										v-if="item.batchMaterialName && item.batchMaterialName.length > 9"
										direction="left"
										align="middle"
										style="max-width: 1.8rem;"
									>{{ item.batchMaterialName }}</marquee>
									<span v-else>{{ item.batchMaterialName }}</span>
								</div>
							</td>
							<td>
								<div class="marqueeDiv">
									<marquee
										scrolldelay="300"
										v-if="item.spec && item.spec.length > 6"
										direction="left"
										align="middle"
										style="max-width: 1.6rem;"
									>{{ item.spec }}</marquee>
									<span v-else>{{ item.spec }}</span>
								</div>
							</td>
							<td>{{item.productCode}}</td>
							<td>{{item.bagNum}}</td>
							<td style="color: #2FFFC1">{{item.status}}</td>
						</tr>
						<tr v-for="item of 5 - tableData.length" :key="item + 'index'"></tr>
					</tbody>
				</table>
				<table border="0">
					<thead :style="{opacity: 0}">
						<tr>
							<th style="width: 1.5rem">批次号</th>
							<th style="width: .9rem">生成时间</th>
							<th style="width: 1.5rem">物料名称</th>
							<th style="width: 1.1rem">规格</th>
							<th style="width: .8rem">产品代码</th>
							<th style="width: .8rem">批次包数</th>
							<th>状态</th>
						</tr>
					</thead>
					<tbody :class="{scroll: scrollFlag,tbodyDiv: true}">
						<tr v-for="(item,index) of tableData2" :key="index">
							<td>
								<div class="marqueeDiv">
									<marquee
										scrolldelay="300"
										v-if="item.code && item.code.length > 13"
										direction="left"
										align="middle"
										style="max-width: 1.8rem;"
									>{{ item.code }}</marquee>
									<span v-else>{{ item.code }}</span>
								</div>
							</td>
							<td>{{item.time}}</td>
							<td>
								<div class="marqueeDiv">
									<marquee
										scrolldelay="300"
										v-if="item.batchMaterialName && item.batchMaterialName.length > 9"
										direction="left"
										align="middle"
										style="max-width: 1.8rem;"
									>{{ item.batchMaterialName }}</marquee>
									<span v-else>{{ item.batchMaterialName }}</span>
								</div>
							</td>
							<td>
								<div class="marqueeDiv">
									<marquee
										scrolldelay="300"
										v-if="item.spec && item.spec.length > 6"
										direction="left"
										align="middle"
										style="max-width: 1.6rem;"
									>{{ item.spec }}</marquee>
									<span v-else>{{ item.spec }}</span>
								</div>
							</td>
							<td>{{item.productCode}}</td>
							<td>{{item.bagNum}}</td>
							<td style="color: #2FFFC1">{{item.status}}</td>
						</tr>
						<tr v-for="item of 5 - tableData2.length" :key="item + 'index2'"></tr>
					</tbody>
				</table>
			</div>
			<div class="material_main">
				<div class="calcined_find_powder special_effects_border">
					<table border="0">
						<thead>
							<tr>
								<th style="width: .8rem">在库</th>
								<th style="width: 1rem"></th>
								<th>单重</th>
							</tr>
						</thead>
						<tbody v-if="contentData['煅后细焦粉']">
							<tr v-for="(item, index) of contentData['煅后细焦粉'].data" :key="index">
								<td>{{item.inWarehouseBagNum + '包'}}</td>
								<td>{{item.inWarehouseWeight + '吨'}}</td>
								<td>{{item.singleWeight + '吨'}}</td>
							</tr>
						</tbody>
					</table>
					<div
						class="storageContent"
						v-if="maxTotalObj.name != '煅后细焦粉' && contentData['煅后细焦粉'] && contentData['煅后细焦粉'].listBatchData.length"
					>
						<div v-for="(ele,index) of contentData['煅后细焦粉'].listBatchData" :key="index + 'pack'">
							<div v-if="ele.type == 1" class="putStorage storageDiv">
								<div class="arrow"></div>
								<div class="arrow"></div>
								<div class="arrow"></div>
								<div class="moveDiv">
									<div>来自：</div>
									<div>{{ele.targetWarehouse}}</div>
								</div>
								<div class="scheduleDiv">
									<div>批次号：{{ele.batch}}</div>
									<div class="progressBar">
										<span
											:style="{ width: (ele.complete / ele.total ) > 1 ? 100 : ((ele.complete / ele.total) * 100) + '%'}"
										></span>
										<span></span>
									</div>
									<div>
										<span :style="{ width: '30%' }">{{ele.complete + '包'}}</span>
										<span>{{ele.weight + '吨'}}</span>
										<span>{{ele.total + '包'}}</span>
									</div>
								</div>
							</div>
							<div v-else class="outStorage storageDiv">
								<div class="arrow"></div>
								<div class="arrow"></div>
								<div class="arrow"></div>
								<div class="scheduleDiv">
									<div>批次号：{{ele.batch}}</div>
									<div class="progressBar">
										<span
											:style="{ width: (ele.complete / ele.total ) > 1 ? 100 : ((ele.complete / ele.total) * 100) + '%'}"
										></span>
										<span></span>
									</div>
									<div>
										<span :style="{ width: '30%' }">{{ele.complete + '包'}}</span>
										<span>{{ele.weight + '吨'}}</span>
										<span>{{ele.total + '包'}}</span>
									</div>
								</div>
								<div class="moveDiv">
									<div>去向：</div>
									<div>物资总库</div>
								</div>
							</div>
						</div>
					</div>
					<div v-if="maxTotalObj.name == '煅后细焦粉'" class="material_main_item_bottom">
						<div class="materialBoxs">
							<img v-for="item of 18" :key="item" :src="MaterialBox" alt />
						</div>
						<img class="materialGroup" :src="MaterialGroup" alt />
					</div>
					<div
						v-if="maxTotalObj.name != '煅后细焦粉' && contentData['煅后细焦粉'] && !contentData['煅后细焦粉'].listBatchData.length && inventoryData.length && inventoryData.find(item => item.name == '煅后细焦粉')"
						class="material_main_item_bottom"
					>
						<div class="materialBoxs">
							<img
								v-for="item of Math.round((inventoryData.find(item => item.name == '煅后细焦粉').count / maxTotalObj.count) * 18)"
								:key="item"
								:src="MaterialBox"
								alt
							/>
						</div>
						<img class="materialGroup" :src="MaterialGroup" alt />
					</div>
				</div>
				<div class="calcined_extra_powder special_effects_border">
					<table border="0">
						<thead>
							<tr>
								<th style="width: .8rem">在库</th>
								<th style="width: 1rem"></th>
								<th>单重</th>
							</tr>
						</thead>
						<tbody v-if="contentData['煅后特细粉']">
							<tr v-for="(item, index) of contentData['煅后特细粉'].data" :key="index">
								<td>{{item.inWarehouseBagNum + '包'}}</td>
								<td>{{item.inWarehouseWeight + '吨'}}</td>
								<td>{{item.singleWeight + '吨'}}</td>
							</tr>
						</tbody>
					</table>
					<div
						class="storageContent"
						v-if="maxTotalObj.name != '煅后特细粉' && contentData['煅后特细粉'] && contentData['煅后特细粉'].listBatchData.length"
					>
						<div v-for="(ele,index) of contentData['煅后特细粉'].listBatchData" :key="index + 'pack'">
							<div v-if="ele.type == 1" class="putStorage storageDiv">
								<div class="arrow"></div>
								<div class="arrow"></div>
								<div class="arrow"></div>
								<div class="moveDiv">
									<div>来自：</div>
									<div>{{ele.targetWarehouse}}</div>
								</div>
								<div class="scheduleDiv">
									<div>批次号：{{ele.batch}}</div>
									<div class="progressBar">
										<span
											:style="{ width: (ele.complete / ele.total ) > 1 ? 100 : ((ele.complete / ele.total) * 100) + '%'}"
										></span>
										<span></span>
									</div>
									<div>
										<span :style="{ width: '30%' }">{{ele.complete + '包'}}</span>
										<span>{{ele.weight + '吨'}}</span>
										<span>{{ele.total + '包'}}</span>
									</div>
								</div>
							</div>
							<div v-else class="outStorage storageDiv">
								<div class="arrow"></div>
								<div class="arrow"></div>
								<div class="arrow"></div>
								<div class="scheduleDiv">
									<div>批次号：{{ele.batch}}</div>
									<div class="progressBar">
										<span
											:style="{ width: (ele.complete / ele.total ) > 1 ? 100 : ((ele.complete / ele.total) * 100) + '%'}"
										></span>
										<span></span>
									</div>
									<div>
										<span :style="{ width: '30%' }">{{ele.complete + '包'}}</span>
										<span>{{ele.weight + '吨'}}</span>
										<span>{{ele.total + '包'}}</span>
									</div>
								</div>
								<div class="moveDiv">
									<div>去向：</div>
									<div>物资总库</div>
								</div>
							</div>
						</div>
					</div>
					<div v-if="maxTotalObj.name == '煅后特细粉'" class="material_main_item_bottom">
						<div class="materialBoxs">
							<img v-for="item of 18" :key="item" :src="MaterialBox" alt />
						</div>
						<img class="materialGroup" :src="MaterialGroup" alt />
					</div>
					<div
						v-if="maxTotalObj.name != '煅后特细粉' && contentData['煅后特细粉'] && !contentData['煅后特细粉'].listBatchData.length && inventoryData.length && inventoryData.find(item => item.name == '煅后特细粉')"
						class="material_main_item_bottom"
					>
						<div class="materialBoxs">
							<img
								v-for="item of Math.round((inventoryData.find(item => item.name == '煅后特细粉').count / maxTotalObj.count) * 18)"
								:key="item"
								:src="MaterialBox"
								alt
							/>
						</div>
						<img class="materialGroup" :src="MaterialGroup" alt />
					</div>
				</div>
				<div class="boiler_powder special_effects_border">
					<table border="0">
						<thead>
							<tr>
								<th style="width: .8rem">在库</th>
								<th style="width: 1rem"></th>
								<th>单重</th>
							</tr>
						</thead>
						<tbody v-if="contentData['锅炉粉']">
							<tr v-for="(item, index) of contentData['锅炉粉'].data" :key="index">
								<td>{{item.inWarehouseBagNum + '包'}}</td>
								<td>{{item.inWarehouseWeight + '吨'}}</td>
								<td>{{item.singleWeight + '吨'}}</td>
							</tr>
						</tbody>
					</table>
					<div
						class="storageContent"
						v-if="maxTotalObj.name != '锅炉粉' && contentData['锅炉粉'] && contentData['锅炉粉'].listBatchData.length"
					>
						<div v-for="(ele,index) of contentData['锅炉粉'].listBatchData" :key="index + 'pack'">
							<div v-if="ele.type == 1" class="putStorage storageDiv">
								<div class="arrow"></div>
								<div class="arrow"></div>
								<div class="arrow"></div>
								<div class="moveDiv">
									<div>来自：</div>
									<div>{{ele.targetWarehouse}}</div>
								</div>
								<div class="scheduleDiv">
									<div>批次号：{{ele.batch}}</div>
									<div class="progressBar">
										<span
											:style="{ width: (ele.complete / ele.total ) > 1 ? 100 : ((ele.complete / ele.total) * 100) + '%'}"
										></span>
										<span></span>
									</div>
									<div>
										<span :style="{ width: '30%' }">{{ele.complete + '包'}}</span>
										<span>{{ele.weight + '吨'}}</span>
										<span>{{ele.total + '包'}}</span>
									</div>
								</div>
							</div>
							<div v-else class="outStorage storageDiv">
								<div class="arrow"></div>
								<div class="arrow"></div>
								<div class="arrow"></div>
								<div class="scheduleDiv">
									<div>批次号：{{ele.batch}}</div>
									<div class="progressBar">
										<span
											:style="{ width: (ele.complete / ele.total ) > 1 ? 100 : ((ele.complete / ele.total) * 100) + '%'}"
										></span>
										<span></span>
									</div>
									<div>
										<span :style="{ width: '30%' }">{{ele.complete + '包'}}</span>
										<span>{{ele.weight + '吨'}}</span>
										<span>{{ele.total + '包'}}</span>
									</div>
								</div>
								<div class="moveDiv">
									<div>去向：</div>
									<div>物资总库</div>
								</div>
							</div>
						</div>
					</div>
					<div v-if="maxTotalObj.name == '锅炉粉'" class="material_main_item_bottom">
						<div class="materialBoxs">
							<img v-for="item of 18" :key="item" :src="MaterialBox" alt />
						</div>
						<img class="materialGroup" :src="MaterialGroup" alt />
					</div>
					<div
						v-if="maxTotalObj.name != '锅炉粉' && contentData['锅炉粉'] && !contentData['锅炉粉'].listBatchData.length && inventoryData.length && inventoryData.find(item => item.name == '锅炉粉')"
						class="material_main_item_bottom"
					>
						<div class="materialBoxs">
							<img
								v-for="item of Math.round((inventoryData.find(item => item.name == '锅炉粉').count / maxTotalObj.count) * 18)"
								:key="item"
								:src="MaterialBox"
								alt
							/>
						</div>
						<img class="materialGroup" :src="MaterialGroup" alt />
					</div>
				</div>
				<div class="charcoal_active_powder special_effects_border">
					<table border="0">
						<thead>
							<tr>
								<th style="width: .8rem">在库</th>
								<th style="width: 1rem"></th>
								<th>单重</th>
							</tr>
						</thead>
						<tbody v-if="contentData['活性炭粉']">
							<tr v-for="(item, index) of contentData['活性炭粉'].data" :key="index">
								<td>{{item.inWarehouseBagNum + '包'}}</td>
								<td>{{item.inWarehouseWeight + '吨'}}</td>
								<td>{{item.singleWeight + '吨'}}</td>
							</tr>
						</tbody>
					</table>
					<div
						class="storageContent"
						v-if="maxTotalObj.name != '活性炭粉' && contentData['活性炭粉'] && contentData['活性炭粉'].listBatchData.length"
					>
						<div v-for="(ele,index) of contentData['活性炭粉'].listBatchData" :key="index + 'pack'">
							<div v-if="ele.type == 1" class="putStorage storageDiv">
								<div class="arrow"></div>
								<div class="arrow"></div>
								<div class="arrow"></div>
								<div class="moveDiv">
									<div>来自：</div>
									<div>{{ele.targetWarehouse}}</div>
								</div>
								<div class="scheduleDiv">
									<div>批次号：{{ele.batch}}</div>
									<div class="progressBar">
										<span
											:style="{ width: (ele.complete / ele.total ) > 1 ? 100 : ((ele.complete / ele.total) * 100) + '%'}"
										></span>
										<span></span>
									</div>
									<div>
										<span :style="{ width: '30%' }">{{ele.complete + '包'}}</span>
										<span>{{ele.weight + '吨'}}</span>
										<span>{{ele.total + '包'}}</span>
									</div>
								</div>
							</div>
							<div v-else class="outStorage storageDiv">
								<div class="arrow"></div>
								<div class="arrow"></div>
								<div class="arrow"></div>
								<div class="scheduleDiv">
									<div>批次号：{{ele.batch}}</div>
									<div class="progressBar">
										<span
											:style="{ width: (ele.complete / ele.total ) > 1 ? 100 : ((ele.complete / ele.total) * 100) + '%'}"
										></span>
										<span></span>
									</div>
									<div>
										<span :style="{ width: '30%' }">{{ele.complete + '包'}}</span>
										<span>{{ele.weight + '吨'}}</span>
										<span>{{ele.total + '包'}}</span>
									</div>
								</div>
								<div class="moveDiv">
									<div>去向：</div>
									<div>物资总库</div>
								</div>
							</div>
						</div>
					</div>
					<div v-if="maxTotalObj.name == '活性炭粉'" class="material_main_item_bottom">
						<div class="materialBoxs">
							<img v-for="item of 18" :key="item" :src="MaterialBox" alt />
						</div>
						<img class="materialGroup" :src="MaterialGroup" alt />
					</div>
					<div
						v-if="maxTotalObj.name != '活性炭粉' && contentData['活性炭粉'] && !contentData['活性炭粉'].listBatchData.length && inventoryData.length && inventoryData.find(item => item.name == '活性炭粉')"
						class="material_main_item_bottom"
					>
						<div class="materialBoxs">
							<img
								v-for="item of Math.round((inventoryData.find(item => item.name == '活性炭粉').count / maxTotalObj.count) * 18)"
								:key="item"
								:src="MaterialBox"
								alt
							/>
						</div>
						<img class="materialGroup" :src="MaterialGroup" alt />
					</div>
				</div>
			</div>
		</div>
		<div class="batch_right">
			<div class="batch_right_top">
				<div class="electrode_coke special_effects_border">
					<table border="0">
						<thead>
							<tr>
								<th style="width: 1rem"></th>
								<th style="width: .7rem">在库</th>
								<th style="width: 1rem"></th>
								<th>单重</th>
							</tr>
						</thead>
						<tbody v-if="contentData['生焦电极焦']">
							<tr v-for="(item, index) of contentData['生焦电极焦'].data" :key="index">
								<td style="color: #0C69FF;">{{item.spec}}</td>
								<td>{{item.inWarehouseBagNum + '包'}}</td>
								<td>{{item.inWarehouseWeight + '吨'}}</td>
								<td>{{item.singleWeight + '吨'}}</td>
							</tr>
						</tbody>
					</table>
					<div
						class="storageContent"
						v-if="maxTotalObj.name != '生焦电极焦' && contentData['生焦电极焦'] && contentData['生焦电极焦'].listBatchData.length"
					>
						<div v-for="(ele,index) of contentData['生焦电极焦'].listBatchData" :key="index + 'pack'">
							<div v-if="ele.type == 1" class="putStorage storageDiv">
								<div class="arrow"></div>
								<div class="arrow"></div>
								<div class="arrow"></div>
								<div class="moveDiv">
									<div>来自：</div>
									<div>{{ele.targetWarehouse}}</div>
								</div>
								<div class="scheduleDiv">
									<div>批次号：{{ele.batch}}</div>
									<div class="progressBar">
										<span
											:style="{ width: (ele.complete / ele.total ) > 1 ? 100 : ((ele.complete / ele.total) * 100) + '%'}"
										></span>
										<span></span>
									</div>
									<div>
										<span :style="{ width: '30%' }">{{ele.complete + '包'}}</span>
										<span>{{ele.weight + '吨'}}</span>
										<span>{{ele.total + '包'}}</span>
									</div>
								</div>
							</div>
							<div v-else class="outStorage storageDiv">
								<div class="arrow"></div>
								<div class="arrow"></div>
								<div class="arrow"></div>
								<div class="scheduleDiv">
									<div>批次号：{{ele.batch}}</div>
									<div class="progressBar">
										<span
											:style="{ width: (ele.complete / ele.total ) > 1 ? 100 : ((ele.complete / ele.total) * 100) + '%'}"
										></span>
										<span></span>
									</div>
									<div>
										<span :style="{ width: '30%' }">{{ele.complete + '包'}}</span>
										<span>{{ele.weight + '吨'}}</span>
										<span>{{ele.total + '包'}}</span>
									</div>
								</div>
								<div class="moveDiv">
									<div>去向：</div>
									<div>物资总库</div>
								</div>
							</div>
						</div>
					</div>
					<div v-if="maxTotalObj.name == '生焦电极焦'" class="material_main_item_bottom">
						<div class="materialBoxs">
							<img v-for="item of 18" :key="item" :src="MaterialBox" alt />
						</div>
						<img class="materialGroup" :src="MaterialGroup" alt />
					</div>
					<div
						v-if="maxTotalObj.name != '生焦电极焦' && contentData['生焦电极焦'] && !contentData['生焦电极焦'].listBatchData.length && inventoryData.length && inventoryData.find(item => item.name == '生焦电极焦')"
						class="material_main_item_bottom"
					>
						<div class="materialBoxs">
							<img
								v-for="item of Math.round((inventoryData.find(item => item.name == '生焦电极焦').count / maxTotalObj.count) * 18)"
								:key="item"
								:src="MaterialBox"
								alt
							/>
						</div>
						<img class="materialGroup" :src="MaterialGroup" alt />
					</div>
				</div>
				<div class="cathode_coke special_effects_border">
					<table border="0">
						<thead>
							<tr>
								<th style="width: 1rem"></th>
								<th style="width: .7rem">在库</th>
								<th style="width: 1rem"></th>
								<th>单重</th>
							</tr>
						</thead>
						<tbody v-if="contentData['生焦负极用焦']">
							<tr v-for="(item, index) of contentData['生焦负极用焦'].data" :key="index">
								<td style="color: #0C69FF;">{{item.spec}}</td>
								<td>{{item.inWarehouseBagNum + '包'}}</td>
								<td>{{item.inWarehouseWeight + '吨'}}</td>
								<td>{{item.singleWeight + '吨'}}</td>
							</tr>
						</tbody>
					</table>
					<div
						class="storageContent"
						v-if="maxTotalObj.name != '生焦负极用焦' && contentData['生焦负极用焦'] && contentData['生焦负极用焦'].listBatchData.length"
					>
						<div v-for="(ele,index) of contentData['生焦负极用焦'].listBatchData" :key="index + 'pack'">
							<div v-if="ele.type == 1" class="putStorage storageDiv">
								<div class="arrow"></div>
								<div class="arrow"></div>
								<div class="arrow"></div>
								<div class="moveDiv">
									<div>来自：</div>
									<div>{{ele.targetWarehouse}}</div>
								</div>
								<div class="scheduleDiv">
									<div>批次号：{{ele.batch}}</div>
									<div class="progressBar">
										<span
											:style="{ width: (ele.complete / ele.total ) > 1 ? 100 : ((ele.complete / ele.total) * 100) + '%'}"
										></span>
										<span></span>
									</div>
									<div>
										<span :style="{ width: '30%' }">{{ele.complete + '包'}}</span>
										<span>{{ele.weight + '吨'}}</span>
										<span>{{ele.total + '包'}}</span>
									</div>
								</div>
							</div>
							<div v-else class="outStorage storageDiv">
								<div class="arrow"></div>
								<div class="arrow"></div>
								<div class="arrow"></div>
								<div class="scheduleDiv">
									<div>批次号：{{ele.batch}}</div>
									<div class="progressBar">
										<span
											:style="{ width: (ele.complete / ele.total ) > 1 ? 100 : ((ele.complete / ele.total) * 100) + '%'}"
										></span>
										<span></span>
									</div>
									<div>
										<span :style="{ width: '30%' }">{{ele.complete + '包'}}</span>
										<span>{{ele.weight + '吨'}}</span>
										<span>{{ele.total + '包'}}</span>
									</div>
								</div>
								<div class="moveDiv">
									<div>去向：</div>
									<div>物资总库</div>
								</div>
							</div>
						</div>
					</div>
					<div v-if="maxTotalObj.name == '生焦负极用焦'" class="material_main_item_bottom">
						<div class="materialBoxs">
							<img v-for="item of 18" :key="item" :src="MaterialBox" alt />
						</div>
						<img class="materialGroup" :src="MaterialGroup" alt />
					</div>
					<div
						v-if="maxTotalObj.name != '生焦负极用焦' && contentData['生焦负极用焦'] && !contentData['生焦负极用焦'].listBatchData.length && inventoryData.length && inventoryData.find(item => item.name == '生焦负极用焦')"
						class="material_main_item_bottom"
					>
						<div class="materialBoxs">
							<img
								v-for="item of Math.round((inventoryData.find(item => item.name == '生焦负极用焦').count / maxTotalObj.count) * 18)"
								:key="item"
								:src="MaterialBox"
								alt
							/>
						</div>
						<img class="materialGroup" :src="MaterialGroup" alt />
					</div>
				</div>
				<div class="experimental_focal special_effects_border">
					<table border="0">
						<thead>
							<tr>
								<th style="width: 1rem"></th>
								<th style="width: .7rem">在库</th>
								<th style="width: 1rem"></th>
								<th>单重</th>
							</tr>
						</thead>
						<tbody v-if="contentData['实验焦']">
							<tr v-for="(item, index) of contentData['实验焦'].data" :key="index">
								<td style="color: #0C69FF;">{{item.spec}}</td>
								<td>{{item.inWarehouseBagNum + '包'}}</td>
								<td>{{item.inWarehouseWeight + '吨'}}</td>
								<td>{{item.singleWeight + '吨'}}</td>
							</tr>
						</tbody>
					</table>
					<div
						class="storageContent"
						v-if="maxTotalObj.name != '实验焦' && contentData['实验焦'] && contentData['实验焦'].listBatchData.length"
					>
						<div v-for="(ele,index) of contentData['实验焦'].listBatchData" :key="index + 'pack'">
							<div v-if="ele.type == 1" class="putStorage storageDiv">
								<div class="arrow"></div>
								<div class="arrow"></div>
								<div class="arrow"></div>
								<div class="moveDiv">
									<div>来自：</div>
									<div>{{ele.targetWarehouse}}</div>
								</div>
								<div class="scheduleDiv">
									<div>批次号：{{ele.batch}}</div>
									<div class="progressBar">
										<span
											:style="{ width: (ele.complete / ele.total ) > 1 ? 100 : ((ele.complete / ele.total) * 100) + '%'}"
										></span>
										<span></span>
									</div>
									<div>
										<span :style="{ width: '30%' }">{{ele.complete + '包'}}</span>
										<span>{{ele.weight + '吨'}}</span>
										<span>{{ele.total + '包'}}</span>
									</div>
								</div>
							</div>
							<div v-else class="outStorage storageDiv">
								<div class="arrow"></div>
								<div class="arrow"></div>
								<div class="arrow"></div>
								<div class="scheduleDiv">
									<div>批次号：{{ele.batch}}</div>
									<div class="progressBar">
										<span
											:style="{ width: (ele.complete / ele.total ) > 1 ? 100 : ((ele.complete / ele.total) * 100) + '%'}"
										></span>
										<span></span>
									</div>
									<div>
										<span :style="{ width: '30%' }">{{ele.complete + '包'}}</span>
										<span>{{ele.weight + '吨'}}</span>
										<span>{{ele.total + '包'}}</span>
									</div>
								</div>
								<div class="moveDiv">
									<div>去向：</div>
									<div>物资总库</div>
								</div>
							</div>
						</div>
					</div>
					<div v-if="maxTotalObj.name == '实验焦'" class="material_main_item_bottom">
						<div class="materialBoxs">
							<img v-for="item of 18" :key="item" :src="MaterialBox" alt />
						</div>
						<img class="materialGroup" :src="MaterialGroup" alt />
					</div>
					<div
						v-if="maxTotalObj.name != '实验焦' && contentData['实验焦'] && !contentData['实验焦'].listBatchData.length && inventoryData.length && inventoryData.find(item => item.name == '实验焦')"
						class="material_main_item_bottom"
					>
						<div class="materialBoxs">
							<img
								v-for="item of Math.round((inventoryData.find(item => item.name == '实验焦').count / maxTotalObj.count) * 18)"
								:key="item"
								:src="MaterialBox"
								alt
							/>
						</div>
						<img class="materialGroup" :src="MaterialGroup" alt />
					</div>
				</div>
			</div>
			<div class="batch_right_bottom">
				<div class="calcined_petroleum_coke special_effects_border">
					<table border="0">
						<thead>
							<tr>
								<th style="width: 1rem"></th>
								<th style="width: .7rem">在库</th>
								<th style="width: 1rem"></th>
								<th>单重</th>
							</tr>
						</thead>
						<tbody v-if="contentData['煅后焦']">
							<tr v-for="(item, index) of contentData['煅后焦'].data" :key="index">
								<td style="color: #0C69FF;">{{item.spec}}</td>
								<td>{{item.inWarehouseBagNum + '包'}}</td>
								<td>{{item.inWarehouseWeight + '吨'}}</td>
								<td>{{item.singleWeight + '吨'}}</td>
							</tr>
						</tbody>
					</table>
					<div
						class="storageContent"
						v-if="maxTotalObj.name != '煅后焦' && contentData['煅后焦'] && contentData['煅后焦'].listBatchData.length"
					>
						<div v-for="(ele,index) of contentData['煅后焦'].listBatchData" :key="index + 'pack'">
							<div v-if="ele.type == 1" class="putStorage storageDiv">
								<div class="arrow"></div>
								<div class="arrow"></div>
								<div class="arrow"></div>
								<div class="moveDiv">
									<div>来自：</div>
									<div>{{ele.targetWarehouse}}</div>
								</div>
								<div class="scheduleDiv">
									<div>批次号：{{ele.batch}}</div>
									<div class="progressBar">
										<span
											:style="{ width: (ele.complete / ele.total ) > 1 ? 100 : ((ele.complete / ele.total) * 100) + '%'}"
										></span>
										<span></span>
									</div>
									<div>
										<span :style="{ width: '30%' }">{{ele.complete + '包'}}</span>
										<span>{{ele.weight + '吨'}}</span>
										<span>{{ele.total + '包'}}</span>
									</div>
								</div>
							</div>
							<div v-else class="outStorage storageDiv">
								<div class="arrow"></div>
								<div class="arrow"></div>
								<div class="arrow"></div>
								<div class="scheduleDiv">
									<div>批次号：{{ele.batch}}</div>
									<div class="progressBar">
										<span
											:style="{ width: (ele.complete / ele.total ) > 1 ? 100 : ((ele.complete / ele.total) * 100) + '%'}"
										></span>
										<span></span>
									</div>
									<div>
										<span :style="{ width: '30%' }">{{ele.complete + '包'}}</span>
										<span>{{ele.weight + '吨'}}</span>
										<span>{{ele.total + '包'}}</span>
									</div>
								</div>
								<div class="moveDiv">
									<div>去向：</div>
									<div>物资总库</div>
								</div>
							</div>
						</div>
					</div>
					<div v-if="maxTotalObj.name == '煅后焦'" class="material_main_item_bottom">
						<div class="materialBoxs">
							<img v-for="item of 18" :key="item" :src="MaterialBox" alt />
						</div>
						<img class="materialGroup" :src="MaterialGroup" alt />
					</div>
					<div
						v-if="maxTotalObj.name != '煅后焦' && contentData['煅后焦'] && !contentData['煅后焦'].listBatchData.length && inventoryData.length && inventoryData.find(item => item.name == '煅后焦')"
						class="material_main_item_bottom"
					>
						<div class="materialBoxs">
							<img
								v-for="item of Math.round((inventoryData.find(item => item.name == '煅后焦').count / maxTotalObj.count) * 18)"
								:key="item"
								:src="MaterialBox"
								alt
							/>
						</div>
						<img class="materialGroup" :src="MaterialGroup" alt />
					</div>
				</div>
				<div class="cover_petroleum_coke special_effects_border">
					<table border="0">
						<thead>
							<tr>
								<th style="width: 1rem"></th>
								<th style="width: .7rem">在库</th>
								<th style="width: 1rem"></th>
								<th>单重</th>
							</tr>
						</thead>
						<tbody v-if="contentData['煅后石油焦']">
							<tr v-for="(item, index) of contentData['煅后石油焦'].data" :key="index">
								<td style="color: #0C69FF;">{{item.spec}}</td>
								<td>{{item.inWarehouseBagNum + '包'}}</td>
								<td>{{item.inWarehouseWeight + '吨'}}</td>
								<td>{{item.singleWeight + '吨'}}</td>
							</tr>
						</tbody>
					</table>
					<div
						class="storageContent"
						v-if="maxTotalObj.name != '煅后石油焦' && contentData['煅后石油焦'] && contentData['煅后石油焦'].listBatchData.length"
					>
						<div v-for="(ele,index) of contentData['煅后石油焦'].listBatchData" :key="index + 'pack'">
							<div v-if="ele.type == 1" class="putStorage storageDiv">
								<div class="arrow"></div>
								<div class="arrow"></div>
								<div class="arrow"></div>
								<div class="moveDiv">
									<div>来自：</div>
									<div>{{ele.targetWarehouse}}</div>
								</div>
								<div class="scheduleDiv">
									<div>批次号：{{ele.batch}}</div>
									<div class="progressBar">
										<span
											:style="{ width: (ele.complete / ele.total ) > 1 ? 100 : ((ele.complete / ele.total) * 100) + '%'}"
										></span>
										<span></span>
									</div>
									<div>
										<span :style="{ width: '30%' }">{{ele.complete + '包'}}</span>
										<span>{{ele.weight + '吨'}}</span>
										<span>{{ele.total + '包'}}</span>
									</div>
								</div>
							</div>
							<div v-else class="outStorage storageDiv">
								<div class="arrow"></div>
								<div class="arrow"></div>
								<div class="arrow"></div>
								<div class="scheduleDiv">
									<div>批次号：{{ele.batch}}</div>
									<div class="progressBar">
										<span
											:style="{ width: (ele.complete / ele.total ) > 1 ? 100 : ((ele.complete / ele.total) * 100) + '%'}"
										></span>
										<span></span>
									</div>
									<div>
										<span :style="{ width: '30%' }">{{ele.complete + '包'}}</span>
										<span>{{ele.weight + '吨'}}</span>
										<span>{{ele.total + '包'}}</span>
									</div>
								</div>
								<div class="moveDiv">
									<div>去向：</div>
									<div>物资总库</div>
								</div>
							</div>
						</div>
					</div>
					<div v-if="maxTotalObj.name == '煅后石油焦'" class="material_main_item_bottom">
						<div class="materialBoxs">
							<img v-for="item of 18" :key="item" :src="MaterialBox" alt />
						</div>
						<img class="materialGroup" :src="MaterialGroup" alt />
					</div>
					<div
						v-if="maxTotalObj.name != '煅后石油焦' && contentData['煅后石油焦'] && !contentData['煅后石油焦'].listBatchData.length && inventoryData.length && inventoryData.find(item => item.name == '煅后石油焦')"
						class="material_main_item_bottom"
					>
						<div class="materialBoxs">
							<img
								v-for="item of Math.round((inventoryData.find(item => item.name == '煅后石油焦').count / maxTotalObj.count) * 18)"
								:key="item"
								:src="MaterialBox"
								alt
							/>
						</div>
						<img class="materialGroup" :src="MaterialGroup" alt />
					</div>
				</div>
				<div class="calcining_experiment_coke special_effects_border">
					<table border="0">
						<thead>
							<tr>
								<th style="width: 1rem"></th>
								<th style="width: .7rem">在库</th>
								<th style="width: 1rem"></th>
								<th>单重</th>
							</tr>
						</thead>
						<tbody v-if="contentData['煅后实验焦']">
							<tr v-for="(item, index) of contentData['煅后实验焦'].data" :key="index">
								<td style="color: #0C69FF;">{{item.spec}}</td>
								<td>{{item.inWarehouseBagNum + '包'}}</td>
								<td>{{item.inWarehouseWeight + '吨'}}</td>
								<td>{{item.singleWeight + '吨'}}</td>
							</tr>
						</tbody>
					</table>
					<div
						class="storageContent"
						v-if="maxTotalObj.name != '煅后实验焦' && contentData['煅后实验焦'] && contentData['煅后实验焦'].listBatchData.length"
					>
						<div v-for="(ele,index) of contentData['煅后实验焦'].listBatchData" :key="index + 'pack'">
							<div v-if="ele.type == 1" class="putStorage storageDiv">
								<div class="arrow"></div>
								<div class="arrow"></div>
								<div class="arrow"></div>
								<div class="moveDiv">
									<div>来自：</div>
									<div>{{ele.targetWarehouse}}</div>
								</div>
								<div class="scheduleDiv">
									<div>批次号：{{ele.batch}}</div>
									<div class="progressBar">
										<span
											:style="{ width: (ele.complete / ele.total ) > 1 ? 100 : ((ele.complete / ele.total) * 100) + '%'}"
										></span>
										<span></span>
									</div>
									<div>
										<span :style="{ width: '30%' }">{{ele.complete + '包'}}</span>
										<span>{{ele.weight + '吨'}}</span>
										<span>{{ele.total + '包'}}</span>
									</div>
								</div>
							</div>
							<div v-else class="outStorage storageDiv">
								<div class="arrow"></div>
								<div class="arrow"></div>
								<div class="arrow"></div>
								<div class="scheduleDiv">
									<div>批次号：{{ele.batch}}</div>
									<div class="progressBar">
										<span
											:style="{ width: (ele.complete / ele.total ) > 1 ? 100 : ((ele.complete / ele.total) * 100) + '%'}"
										></span>
										<span></span>
									</div>
									<div>
										<span :style="{ width: '30%' }">{{ele.complete + '包'}}</span>
										<span>{{ele.weight + '吨'}}</span>
										<span>{{ele.total + '包'}}</span>
									</div>
								</div>
								<div class="moveDiv">
									<div>去向：</div>
									<div>物资总库</div>
								</div>
							</div>
						</div>
					</div>
					<div v-if="maxTotalObj.name == '煅后实验焦'" class="material_main_item_bottom">
						<div class="materialBoxs">
							<img v-for="item of 18" :key="item" :src="MaterialBox" alt />
						</div>
						<img class="materialGroup" :src="MaterialGroup" alt />
					</div>
					<div
						v-if="maxTotalObj.name != '煅后实验焦' && contentData['煅后实验焦'] && !contentData['煅后实验焦'].listBatchData.length && inventoryData.length && inventoryData.find(item => item.name == '煅后实验焦')"
						class="material_main_item_bottom"
					>
						<div class="materialBoxs">
							<img
								v-for="item of Math.round((inventoryData.find(item => item.name == '煅后实验焦').count / maxTotalObj.count) * 18)"
								:key="item"
								:src="MaterialBox"
								alt
							/>
						</div>
						<img class="materialGroup" :src="MaterialGroup" alt />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import SockJS from "sockjs-client";
import Stomp from "stompjs";
import Cookies from "js-cookie";
import batchMaterialPage from '../getData/batchMaterialPage.json'
export default {
  data() {
    return {
      MaterialBox: require('@/assets/image/coalTarScreen/materialBox.svg'),
      MaterialGroup: require('@/assets/image/coalTarScreen/materialGroup.svg'),
      tableData: [],
      tableData2: [],
      counterNumber: 0, //左上角断线重连次数
      scrollFlag: false,
      pageObj: {
        total: 0,
        pageNum: 1,
        pageSize: 5
      },
      dateTime: null,
      flvplayertimer: 0,
      maxTotalObj: {
        name: '',
        count: null
      }, //最大库存对象
      contentData: {}, //主内容
      tableBaseData: {}, //主内容备份数据
      furnaceDataAutoPageTime: null, //炉室自动切换页码定时器
      inventoryData: [], //库存数据
    }
  },
  methods: {
    // 获取批次列表数据
    async getBatchList(flag) {
      this.loading = true
      const params = {
        pageNum: this.pageObj.pageNum,
        pageSize: this.pageObj.pageSize,
      }
      const res = await batchMaterialPage
      if (res.success) {
        this.tableData2 = res.data.records
        this.pageObj.total = res.data.total
        if (flag) this.tableData = res.data.records
        if (res.data.total > this.pageObj.pageSize) {
          this.scrollFlag = !flag && true
          if (this.scrollFlag) {
            setTimeout(() => {
              this.scrollFlag = false
              this.tableData = res.data.records
            }, 5000)
          }
        }
      }
      this.loading = false
    },
    //获取当日八点物料库存数量
    async listReportDailyCount() {
      const params = {
        listMaterialName: '煅后细焦粉,煅后特细粉,锅炉粉,活性炭粉,生焦电极焦,生焦负极用焦,实验焦,煅后焦,煅后石油焦,煅后实验焦'
      }
      const res = await this.$api.listReportDailyCount(params)
      if (res.success) {
        this.maxTotalObj = res.data && res.data.sort((a, b) => b.count - a.count)[0] || { name: '', count: null }
        this.inventoryData = res.data || []
        // console.log(this.maxTotalObj,'8979')
      }
    },
    //获取当前页数据
    getListMonitorPages(data, index) {
      let tableBaseData = data.filter((item, idx) => {
        return idx >= (index * 4) && idx < (index * 4 + 4)
      })
      return tableBaseData
    },
    //获取当前页运行数据
    getListMonitorOperationPages(data, index) {
      let tableBaseData = data.filter((item, idx) => {
        return idx >= (index * 2) && idx < (index * 2 + 2)
      })
      return tableBaseData
    },
    //各炉室自动切换分页
    autoTabPageFuc() {
      if (this.furnaceDataAutoPageTime) clearInterval(this.furnaceDataAutoPageTime)
      this.furnaceDataAutoPageTime = setInterval(() => {
        for (let key in this.contentData) {
          if (this.contentData[key].pages) {
            this.contentData[key].pageNum++
            if (this.contentData[key].pageNum == this.contentData[key].pages) this.contentData[key].pageNum = 0
            if (this.contentData[key].pages > 1) this.contentData[key].data = this.getListMonitorPages(this.contentData[key].dataBase, this.contentData[key].pageNum)
          }
          if (this.contentData[key].batchPages) {
            this.contentData[key].batchPageNum++
            if (this.contentData[key].batchPageNum == this.contentData[key].batchPages) this.contentData[key].batchPageNum = 0
            if (this.contentData[key].batchPages > 1) this.contentData[key].listBatchData = this.getListMonitorOperationPages(this.contentData[key].listBatchBaseData, this.contentData[key].batchPageNum)
          }
        }
      }, 10000)
    },
    //处理数据方法
    dealDataFuc(resData) {
      this.contentData = {}
      for (let key in resData) {
        let tableData = []
        resData[key].forEach(item => {
          if (item.listPackageBatchInfo) {
            item.listPackageBatchInfo.forEach(ele => {
              ele.type = 1
              tableData.push(ele)
            })
          }
          if (item.listTransportInfo) {
            item.listTransportInfo.forEach(ele => {
              ele.type = 2
              tableData.push(ele)
            })
          }
        })
        this.contentData[key] = {
          dataBase: resData[key],
          pageNum: 0,
          pages: Math.ceil(resData[key].length / 4) || 0, //页数
          data: this.getListMonitorPages(resData[key], 0),
          batchPageNum: 0,
          batchPages: Math.ceil(tableData.length / 2) || 0, //页数
          listBatchBaseData: tableData,
          listBatchData: tableData.length ? this.getListMonitorOperationPages(tableData, 0) : []
        }
      }
      // console.log(this.contentData,'877')
      this.autoTabPageFuc() //每个表格超过四条自动分页
    },
    //建立连接
    connection() {
      // 建立连接对象
      //连接服务端提供的通信接口，连接以后才可以订阅广播消息和个人消息
      let _that = this;
      //后台服务ip和port
      _that.socket = new SockJS(
        process.env.VUE_APP_BASE_API + "/mespcc" + "/ws"
      );
      // _that.socket = new SockJS('http://10.0.4.169:8175' + "/ws");
      // 获取STOMP子协议的客户端对象
      _that.stompClient = Stomp.over(_that.socket);
      _that.stompClient.debug = null
      // _that.stompClient.debug = null
      // // 向服务器发起websocket连接
      _that.stompClient.connect(
        { Authorization: Cookies.get("authorization") },
        (frame) => {
          // 主内容
          _that.stompClient.subscribe(`/topic/batchMaterial`, (msg) => {
            //msg.body存放的是服务端发送给我们的信息
            let rows = JSON.parse(msg.body)
            if (!this.furnaceDataAutoPageTime) this.dealDataFuc(rows)
            // this.tableData = rows
            // this.tableBaseData = rows
            // this.contentData = rows
          });
        },
        (err) => {
          _that.timer = setInterval(() => {
            this.counterNumber++
            if (this.counterNumber <= 10) {
              _that.connection();
            } else {
              this.$message({
                showClose: true,
                message: '连接不上服务端实时数据，请稍后重试',
                type: 'warning',
                customClass: 'largeScreenPageMessage'
              });
            }
            clearInterval(_that.timer);
          }, 5000);
        }
      );
    },
  },
  created() {
    // this.connection()
    this.getBatchList(true)
    // this.listReportDailyCount()
    this.dateTime = setInterval(() => {
      if (this.pageObj.pageNum < (this.pageObj.total / this.pageObj.pageSize)) this.pageObj.pageNum++
      else this.pageObj.pageNum = 1
      this.getBatchList()
      // this.listReportDailyCount()
    }, 20 * 1000)
  },
  beforeDestroy() {
    clearInterval(this.dateTime)
  }
}
</script>

<style lang="scss">
@import '../style/foo.scss';
.coalTarScreen_batchMaterialCom {
	margin-top: 0.55rem;
	padding: 0 0.3rem;
	width: 100%;
	height: calc(100% - 0.65rem);
	// border: .01rem solid #ccc;
	display: flex;
	table {
		border-spacing: 0;
		tr {
			th {
				text-align: left;
				padding-left: 0.1rem;
				font-size: 0.14rem;
				color: #b8b8b8;
			}
			td {
				font-size: 0.14rem;
				color: #fff;
				padding-left: 0.1rem;
			}
		}
	}
	.marqueeDiv {
		height: 0.38rem;
	}
	.batch_left {
		width: 7.84rem;
		height: 100%;
		display: flex;
		flex-direction: column;
		// .table_top table:first-child{
		//     position: absolute;
		//     top: 0;
		// }
		// .table_top table:last-child{
		//     position: absolute;
		//     top: 2.5rem;
		// }
		.table_top {
			height: 2.5rem;
			overflow: hidden;
			position: relative;
			.table {
				height: 2.5rem;
				font-size: 0.14rem;
				.tableThead {
					color: #b8b8b8;
					display: flex;
					position: relative;
					z-index: 99;
					background: #101a32;
					& > div {
						line-height: 0.38rem;
					}
				}
				.tableTbody {
					position: relative;
					height: 2rem;
					z-index: 1;
					color: #fff;
					& > div {
						display: flex;
						line-height: 0.38rem;
					}
					.scroll {
						animation: scrollData 5s infinite linear;
					}
					@keyframes scrollData {
						from {
							transform: translateY(0px);
						}
						to {
							transform: translateY(-100%);
						}
					}
					& > div:nth-child(2n + 1) {
						background: #1c2a4b;
					}
				}
			}
			table {
				width: 100%;
				// height: 2.5rem;
				thead {
					position: relative;
					z-index: 99;
					background: #101a32;
				}
				.tbodyDiv {
					position: relative;
					height: 2rem;
					z-index: 1;
				}
				tbody {
					position: relative;
					// height: 2rem;
					z-index: 1;
				}
				.scroll {
					animation: scrollData 5s infinite linear;
				}
				@keyframes scrollData {
					from {
						transform: translateY(0px);
					}
					to {
						transform: translateY(-100%);
					}
				}
				tbody tr:nth-child(2n + 1) {
					background: #1c2a4b;
				}
				tr {
					line-height: 0.38rem !important;
					height: 0.38rem !important;
				}
			}
		}
		.material_main {
			flex: 1;
			display: flex;
			flex-wrap: wrap;
			& > div {
				margin-top: 0.2rem;
				width: calc(50% - 0.1rem);
				height: calc(50% - 0.2rem);
				position: relative;
			}
			// .materialGroup{
			//     width: 92%;
			//     height: .5rem;
			//     position: absolute;
			//     bottom: -.1rem;
			//     left: 4%;
			// }
			& > div:nth-child(2n + 1) {
				margin-right: 0.2rem;
			}
			table {
				width: 2.4rem;
				margin: 0 auto;
				tr {
					line-height: 0.28rem;
				}
			}
			.calcined_find_powder {
				@include trapezoid('煅后细焦粉', 2, 2);
			}
			.calcined_extra_powder {
				@include trapezoid('煅后特细粉', 2, 2);
			}
			.boiler_powder {
				@include trapezoid('锅炉粉', 2, 2);
			}
			.charcoal_active_powder {
				@include trapezoid('活性炭粉', 2, 2);
			}
		}
	}
	.storageContent {
		position: absolute;
		width: 90%;
		height: 1.8rem;
		overflow: hidden;
		left: 50%;
		transform: translateX(-50%);
		bottom: 0.1rem;
		display: flex;
		flex-direction: column;
		// justify-content: center;
		font-size: 0.12rem;
		color: #fff;
		.putStorage {
			.arrow {
				z-index: 2;
				position: absolute;
				top: 0.07rem;
				border-top: 0.03rem solid #006aff;
				border-left: 0.03rem solid #006aff;
			}
			.arrow:nth-child(1) {
				opacity: 0.4;
				left: 0.07rem;
			}
			.arrow:nth-child(2) {
				opacity: 0.7;
				left: 0.27rem;
			}
			.arrow:nth-child(3) {
				opacity: 1;
				left: 0.47rem;
			}
			.moveDiv {
				padding-top: 0.1rem;
				width: 0.7rem;
			}
			.scheduleDiv {
				margin-left: 0.2rem;
				.progressBar {
					height: 0.12rem;
					display: flex;
					margin: 0.06rem 0;
					& > span {
						background: #0c69ff;
						border-radius: 0.03rem;
					}
					& > span:last-child {
						flex: 1;
						background: #1c2a4b;
						border-radius: 0 0.03rem 0.03rem 0;
					}
				}
			}
		}
		.outStorage {
			.scheduleDiv {
				margin-right: 0.2rem;
			}
			.moveDiv {
				padding-top: 0.1rem;
				width: 0.7rem;
				transform: translateX(0.1rem);
			}
			.progressBar {
				height: 0.12rem;
				display: flex;
				margin: 0.06rem 0;
				& > span {
					background: #ff8831;
					border-radius: 0.03rem;
				}
				& > span:last-child {
					flex: 1;
					background: #1c2a4b;
					border-radius: 0 0.03rem 0.03rem 0;
				}
			}
			.arrow {
				z-index: 2;
				position: absolute;
				top: 0.07rem;
				border-top: 0.03rem solid #ff8831;
				border-left: 0.03rem solid #ff8831;
			}
			.arrow:nth-child(1) {
				opacity: 0.4;
				right: 0.67rem;
			}
			.arrow:nth-child(2) {
				opacity: 0.7;
				right: 0.47rem;
			}
			.arrow:nth-child(3) {
				opacity: 1;
				right: 0.27rem;
			}
		}
	}
	.materialBoxs {
		width: 90%;
		margin: 0 auto;
		position: absolute;
		bottom: 0.16rem;
		left: 8%;
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-end;
		transform: rotate(180deg);
		// opacity: .2;
		img {
			width: 0.48rem;
			height: 0.48rem;
			margin-top: 0.04rem;
			margin-right: 0.04rem;
		}
	}
	.materialGroup {
		width: 92%;
		height: 0.5rem;
		position: absolute;
		bottom: -0.1rem;
		left: 4%;
		// opacity: .2;
	}
	.storageDiv {
		margin-bottom: 0.12rem;
		height: 0.76rem;
		border: 0.01rem solid #1c2a4b;
		border-radius: 0.04rem;
		position: relative;
		padding: 0.1rem;
		display: flex;
		.arrow {
			z-index: 2;
			position: absolute;
			width: 0.08rem;
			height: 0.08rem;
			transform: rotate(135deg);
		}
		.scheduleDiv {
			flex: 1;
			& > div {
				display: flex;
			}
			& > div:last-child {
				& > span:nth-child(2) {
					flex: 1;
					padding-left: 0.1rem;
				}
				& > span:last-child {
					width: 0.45rem;
				}
			}
		}
	}
	.batch_right {
		flex: 1;
		display: flex;
		flex-direction: column;
		.batch_right_top {
			height: 4rem;
			display: flex;
			& > div {
				flex: 1;
				margin-left: 0.2rem;
				position: relative;
			}
		}
		table {
			width: 96%;
			margin: 0 auto;
			tbody tr:nth-child(2n) {
				background: #1c2a4b;
			}
			tr {
				line-height: 0.3rem;
			}
		}
		.batch_right_bottom {
			margin-top: 0.2rem;
			flex: 1;
			height: 4.3rem;
			display: flex;
			& > div {
				flex: 1;
				margin-left: 0.2rem;
				position: relative;
			}
		}
		.electrode_coke {
			@include trapezoid('生焦电极焦', 2, 2);
		}
		.cathode_coke {
			@include trapezoid('生焦负极用焦', 2, 2);
		}
		.experimental_focal {
			@include trapezoid('实验焦', 2, 2);
		}
		.calcined_petroleum_coke {
			@include trapezoid('煅后焦', 2, 2);
		}
		.cover_petroleum_coke {
			@include trapezoid('煅后石油焦', 2, 2);
		}
		.calcining_experiment_coke {
			@include trapezoid('煅后实验焦', 2, 2);
		}
	}
}
</style>
