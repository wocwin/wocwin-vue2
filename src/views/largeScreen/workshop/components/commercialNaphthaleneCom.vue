<template>
	<!-- 油库 -->
	<div class="coalTarScreen_commercialNaphthaleneCom">
		<div class="positionMinisDiv">
			<div class="oilDepotA positionOilDepotDiv">
				<div class="accidentShelf">
					<!-- <img class="accidentShadeImg" :src="AccidentShade" alt="" /> -->
					<!-- <div class="accidentShadeImg"></div> -->
					<div
						class="unqualifiedModal"
						v-if="reportInfoObj && reportInfoObj['洗油'] && reportInfoObj['洗油'].flag"
					>
						<img class="forkImg" @click="$emit('updateReportInfoFlagFuc','洗油')" :src="ForkImg" alt />
						<div>
							<span>取样地点:</span>
							<span>{{reportInfoObj['洗油'].sampleAddr}}</span>
						</div>
						<div>
							<span>取料名称:</span>
							<span>{{reportInfoObj['洗油'].materialName}}</span>
						</div>
						<div>
							<span>取样时间:</span>
							<span>{{reportInfoObj['洗油'].sampleTime}}</span>
						</div>
						<div>
							<span>样品分类:</span>
							<span>{{reportInfoObj['洗油'].sampleTypeName}}</span>
						</div>
						<div>
							<span>检验结果:</span>
							<span>不合格</span>
						</div>
						<div>
							<span>检验项:</span>
							<div class="inspection_Item" v-if="reportInfoObj['洗油'].itemsAuditVOList">
								<span v-for="item of reportInfoObj['洗油'].itemsAuditVOList" :key="item.id">
									<span>{{item.name}}</span>
									<span>{{item.place}}</span>
								</span>
							</div>
						</div>
					</div>
					<img class="accidentShelfImg" :src="AccidentNormal" alt />
					<img
						class="accidentWaterImg accidentNormalWaterImg"
						:src="AccidentNormalWater"
						:style="{ height: (dataSource['洗油'] && dataSource['洗油'].height ? (dataSource['洗油'].stock / dataSource['洗油'].height) ? (dataSource['洗油'].stock / dataSource['洗油'].height) > 1 ? 1.75 : .12 + (dataSource['洗油'].stock / dataSource['洗油'].height) * 1.63: 0 : 0 )+ 'rem', }"
						alt
					/>
					<div
						class="borderErrLine boraccidentLine"
						:style="{top:
              (dataSource['洗油'] && dataSource['洗油'].height ? ((dataSource['洗油'].alarmUpper / dataSource['洗油'].height)
                ? 1.7 - ((dataSource['洗油'].alarmUpper / dataSource['洗油'].height) > 1 ? 1.55 : (dataSource['洗油'].alarmUpper / dataSource['洗油'].height) * 1.55)
                : 1.7) : 1.7) + 'rem',}"
					></div>
					<div
						class="borderWarningLine boraccidentLine"
						:style="{top:
              (dataSource['洗油'] && dataSource['洗油'].height ? ((dataSource['洗油'].alarmLower / dataSource['洗油'].height)
                ? 1.7 - ((dataSource['洗油'].alarmLower / dataSource['洗油'].height) > 1 ? 1.55 : (dataSource['洗油'].alarmLower / dataSource['洗油'].height) * 1.55)
                : 1.7) : 1.7) + 'rem',}"
					></div>
					<img
						class="accidentArrows arrows"
						:src="ArrowsError"
						:style="{top:
              (dataSource['洗油'] && dataSource['洗油'].height ? ((dataSource['洗油'].alarmUpper / dataSource['洗油'].height)
                ? 1.75 - ((dataSource['洗油'].alarmUpper / dataSource['洗油'].height) > 1 ? 1.55 : (dataSource['洗油'].alarmUpper / dataSource['洗油'].height) * 1.55)
                : 1.75) : 1.75) + 'rem',}"
						alt
					/>
					<img
						class="accidentArrows arrows"
						:src="ArrowsWarning"
						:style="{top:
              (dataSource['洗油'] && dataSource['洗油'].height ? ((dataSource['洗油'].alarmLower / dataSource['洗油'].height)
                ? 1.75 - ((dataSource['洗油'].alarmLower / dataSource['洗油'].height) > 1 ? 1.55 : (dataSource['洗油'].alarmLower / dataSource['洗油'].height) * 1.55)
                : 1.75) : 1.75) + 'rem',}"
						alt
					/>
					<div class="accidentShelfRight">
						<img :src="tipsMiddle" :style="{ top: '.25rem' }" alt />
						<div :style="{ top: '.25rem' }">
							<span class="word_14">当前库存</span>
							<div>
								<span class="word_inventory_20">{{dataSource['洗油'] && dataSource['洗油'].stock}}</span>
								<span class="word_14 word_unit" v-if="dataSource['洗油'] && dataSource['洗油'].stock">吨</span>
							</div>
						</div>
						<img :src="tipsMiddle" :style="{ top: '1rem' }" alt />
						<div :style="{ top: '1rem' }">
							<span class="word_14">期初库存</span>
							<div>
								<span class="word_inventory_20">{{inventoryData['洗油'] && inventoryData['洗油'].startStock}}</span>
								<span
									class="word_14 word_unit"
									v-if="inventoryData['洗油'] && inventoryData['洗油'].startStock"
								>吨</span>
							</div>
						</div>
					</div>
					<div class="equipmentInfo word_Bold_16">
						<span>洗油</span>
					</div>
				</div>
				<div class="monthlyOutput">
					<div class="monthlyOutputWord">
						<span class="word_12">D-1产量</span>
						<span
							class="word_20"
							v-if="cumulativeProductionData['洗油']"
						>{{cumulativeProductionData['洗油'].totalMonthAmount}}吨</span>
					</div>
					<div class="progressBar">
						<span
							:style="{ width: cumulativeProductionData['洗油'] && planAmountData['洗油'] ? ((cumulativeProductionData['洗油'].totalMonthAmount / planAmountData['洗油'].planCount) > 1 ? 100 : (cumulativeProductionData['洗油'].totalMonthAmount / planAmountData['洗油'].planCount) * 100) + '%' : 0 }"
						></span>
						<span></span>
					</div>
					<div class="monthlyOutputWord">
						<span class="word_12">本月计划产量</span>
						<span class="word_20" v-if="planAmountData['洗油']">{{planAmountData['洗油'].planCount}}吨</span>
					</div>
				</div>
			</div>
			<div class="oilDepotA positionOilDepotDiv">
				<div class="accidentShelf">
					<!-- <img class="accidentShadeImg" :src="AccidentShade" alt="" /> -->
					<!-- <div class="accidentShadeImg"></div> -->
					<div
						class="unqualifiedModal"
						v-if="reportInfoObj && reportInfoObj['甲基萘油'] && reportInfoObj['甲基萘油'].flag"
					>
						<img class="forkImg" @click="$emit('updateReportInfoFlagFuc','甲基萘油')" :src="ForkImg" alt />
						<div>
							<span>取样地点:</span>
							<span>{{reportInfoObj['甲基萘油'].sampleAddr}}</span>
						</div>
						<div>
							<span>取料名称:</span>
							<span>{{reportInfoObj['甲基萘油'].materialName}}</span>
						</div>
						<div>
							<span>取样时间:</span>
							<span>{{reportInfoObj['甲基萘油'].sampleTime}}</span>
						</div>
						<div>
							<span>样品分类:</span>
							<span>{{reportInfoObj['甲基萘油'].sampleTypeName}}</span>
						</div>
						<div>
							<span>检验结果:</span>
							<span>不合格</span>
						</div>
						<div>
							<span>检验项:</span>
							<div class="inspection_Item" v-if="reportInfoObj['甲基萘油'].itemsAuditVOList">
								<span v-for="item of reportInfoObj['甲基萘油'].itemsAuditVOList" :key="item.id">
									<span>{{item.name}}</span>
									<span>{{item.place}}</span>
								</span>
							</div>
						</div>
					</div>
					<img class="accidentShelfImg" :src="AccidentNormal" alt />
					<img
						class="accidentWaterImg accidentNormalWaterImg"
						:src="AccidentNormalWater"
						:style="{ height: (dataSource['甲基萘油(煤焦油)'] && dataSource['甲基萘油(煤焦油)'].height ? (dataSource['甲基萘油(煤焦油)'].stock / dataSource['甲基萘油(煤焦油)'].height) ? (dataSource['甲基萘油(煤焦油)'].stock / dataSource['甲基萘油(煤焦油)'].height) > 1 ? 1.75 : .12 + (dataSource['甲基萘油(煤焦油)'].stock / dataSource['甲基萘油(煤焦油)'].height) * 1.63: 0 : 0 )+ 'rem', }"
						alt
					/>
					<div
						class="borderErrLine boraccidentLine"
						:style="{top:
              (dataSource['甲基萘油(煤焦油)'] && dataSource['甲基萘油(煤焦油)'].height ? ((dataSource['甲基萘油(煤焦油)'].alarmUpper / dataSource['甲基萘油(煤焦油)'].height)
                ? 1.7 - ((dataSource['甲基萘油(煤焦油)'].alarmUpper / dataSource['甲基萘油(煤焦油)'].height) > 1 ? 1.55 : (dataSource['甲基萘油(煤焦油)'].alarmUpper / dataSource['甲基萘油(煤焦油)'].height) * 1.55)
                : 1.7) : 1.7) + 'rem',}"
					></div>
					<div
						class="borderWarningLine boraccidentLine"
						:style="{top:
              (dataSource['甲基萘油(煤焦油)'] && dataSource['甲基萘油(煤焦油)'].height ? ((dataSource['甲基萘油(煤焦油)'].alarmLower / dataSource['甲基萘油(煤焦油)'].height)
                ? 1.7 - ((dataSource['甲基萘油(煤焦油)'].alarmLower / dataSource['甲基萘油(煤焦油)'].height) > 1 ? 1.55 : (dataSource['甲基萘油(煤焦油)'].alarmLower / dataSource['甲基萘油(煤焦油)'].height) * 1.55)
                : 1.7) : 1.7) + 'rem',}"
					></div>
					<img
						class="accidentArrows arrows"
						:src="ArrowsError"
						:style="{top:
              (dataSource['甲基萘油(煤焦油)'] && dataSource['甲基萘油(煤焦油)'].height ? ((dataSource['甲基萘油(煤焦油)'].alarmUpper / dataSource['甲基萘油(煤焦油)'].height)
                ? 1.75 - ((dataSource['甲基萘油(煤焦油)'].alarmUpper / dataSource['甲基萘油(煤焦油)'].height) > 1 ? 1.55 : (dataSource['甲基萘油(煤焦油)'].alarmUpper / dataSource['甲基萘油(煤焦油)'].height) * 1.55)
                : 1.75) : 1.75) + 'rem',}"
						alt
					/>
					<img
						class="accidentArrows arrows"
						:src="ArrowsWarning"
						:style="{top:
              (dataSource['甲基萘油(煤焦油)'] && dataSource['甲基萘油(煤焦油)'].height ? ((dataSource['甲基萘油(煤焦油)'].alarmLower / dataSource['甲基萘油(煤焦油)'].height)
                ? 1.75 - ((dataSource['甲基萘油(煤焦油)'].alarmLower / dataSource['甲基萘油(煤焦油)'].height) > 1 ? 1.55 : (dataSource['甲基萘油(煤焦油)'].alarmLower / dataSource['甲基萘油(煤焦油)'].height) * 1.55)
                : 1.75) : 1.75) + 'rem',}"
						alt
					/>
					<div class="accidentShelfRight">
						<img :src="tipsMiddle" :style="{ top: '.25rem' }" alt />
						<div :style="{ top: '.25rem' }">
							<span class="word_14">当前库存</span>
							<div>
								<span class="word_inventory_20">{{dataSource['甲基萘油(煤焦油)'] && dataSource['甲基萘油(煤焦油)'].stock}}</span>
								<span
									class="word_14 word_unit"
									v-if="dataSource['甲基萘油(煤焦油)'] && dataSource['甲基萘油(煤焦油)'].stock"
								>吨</span>
							</div>
						</div>
						<img :src="tipsMiddle" :style="{ top: '1rem' }" alt />
						<div :style="{ top: '1rem' }">
							<span class="word_14">期初库存</span>
							<div>
								<span
									class="word_inventory_20"
								>{{inventoryData['甲基萘油(煤焦油)'] && inventoryData['甲基萘油(煤焦油)'].startStock}}</span>
								<span
									class="word_14 word_unit"
									v-if="inventoryData['甲基萘油(煤焦油)'] && inventoryData['甲基萘油(煤焦油)'].startStock"
								>吨</span>
							</div>
						</div>
					</div>
					<div class="equipmentInfo word_Bold_16">
						<span>甲基萘油</span>
					</div>
				</div>
				<div class="monthlyOutput">
					<div class="monthlyOutputWord">
						<span class="word_12">D-1产量</span>
						<span
							class="word_20"
							v-if="cumulativeProductionData['甲基萘油(煤焦油)']"
						>{{cumulativeProductionData['甲基萘油(煤焦油)'].totalMonthAmount}}吨</span>
					</div>
					<div class="progressBar">
						<span
							:style="{ width: cumulativeProductionData['甲基萘油(煤焦油)'] && planAmountData['甲基萘油(煤焦油)'] ? ((cumulativeProductionData['甲基萘油(煤焦油)'].totalMonthAmount / planAmountData['甲基萘油(煤焦油)'].planCount) > 1 ? 100 : (cumulativeProductionData['甲基萘油(煤焦油)'].totalMonthAmount / planAmountData['甲基萘油(煤焦油)'].planCount) * 100) + '%' : 0 }"
						></span>
						<span></span>
					</div>
					<div class="monthlyOutputWord">
						<span class="word_12">本月计划产量</span>
						<span
							class="word_20"
							v-if="planAmountData['甲基萘油(煤焦油)']"
						>{{planAmountData['甲基萘油(煤焦油)'].planCount}}吨</span>
					</div>
				</div>
			</div>
			<div class="oilDepotA positionOilDepotDiv">
				<div class="accidentShelf">
					<!-- <img class="accidentShadeImg" :src="AccidentShade" alt="" /> -->
					<!-- <div class="accidentShadeImg"></div> -->
					<div
						class="unqualifiedModal"
						v-if="reportInfoObj && reportInfoObj['90萘'] && reportInfoObj['90萘'].flag"
					>
						<img class="forkImg" @click="$emit('updateReportInfoFlagFuc','90萘')" :src="ForkImg" alt />
						<div>
							<span>取样地点:</span>
							<span>{{reportInfoObj['90萘'].sampleAddr}}</span>
						</div>
						<div>
							<span>取料名称:</span>
							<span>{{reportInfoObj['90萘'].materialName}}</span>
						</div>
						<div>
							<span>取样时间:</span>
							<span>{{reportInfoObj['90萘'].sampleTime}}</span>
						</div>
						<div>
							<span>样品分类:</span>
							<span>{{reportInfoObj['90萘'].sampleTypeName}}</span>
						</div>
						<div>
							<span>检验结果:</span>
							<span>不合格</span>
						</div>
						<div>
							<span>检验项:</span>
							<div class="inspection_Item" v-if="reportInfoObj['90萘'].itemsAuditVOList">
								<span v-for="item of reportInfoObj['90萘'].itemsAuditVOList" :key="item.id">
									<span>{{item.name}}</span>
									<span>{{item.place}}</span>
								</span>
							</div>
						</div>
					</div>
					<img class="accidentShelfImg" :src="AccidentError" alt />
					<img
						class="accidentWaterImg accidentNormalWaterImg"
						:src="AccidentErrorWater"
						:style="{ height: (dataSource['90萘'] && dataSource['90萘'].height ? (dataSource['90萘'].stock / dataSource['90萘'].height) ? (dataSource['90萘'].stock / dataSource['90萘'].height) > 1 ? 1.75 : .12 + (dataSource['90萘'].stock / dataSource['90萘'].height) * 1.63: 0 : 0 )+ 'rem', }"
						alt
					/>
					<div
						class="borderErrLine boraccidentLine"
						:style="{top:
              (dataSource['90萘'] && dataSource['90萘'].height ? ((dataSource['90萘'].alarmUpper / dataSource['90萘'].height)
                ? 1.7 - ((dataSource['90萘'].alarmUpper / dataSource['90萘'].height) > 1 ? 1.55 : (dataSource['90萘'].alarmUpper / dataSource['90萘'].height) * 1.55)
                : 1.7) : 1.7) + 'rem',}"
					></div>
					<div
						class="borderWarningLine boraccidentLine"
						:style="{top:
              (dataSource['90萘'] && dataSource['90萘'].height ? ((dataSource['90萘'].alarmLower / dataSource['90萘'].height)
                ? 1.7 - ((dataSource['90萘'].alarmLower / dataSource['90萘'].height) > 1 ? 1.55 : (dataSource['90萘'].alarmLower / dataSource['90萘'].height) * 1.55)
                : 1.7) : 1.7) + 'rem',}"
					></div>
					<img
						class="accidentArrows arrows"
						:src="ArrowsError"
						:style="{top:
              (dataSource['90萘'] && dataSource['90萘'].height ? ((dataSource['90萘'].alarmUpper / dataSource['90萘'].height)
                ? 1.75 - ((dataSource['90萘'].alarmUpper / dataSource['90萘'].height) > 1 ? 1.55 : (dataSource['90萘'].alarmUpper / dataSource['90萘'].height) * 1.55)
                : 1.75) : 1.75) + 'rem',}"
						alt
					/>
					<img
						class="accidentArrows arrows"
						:src="ArrowsWarning"
						:style="{top:
              (dataSource['90萘'] && dataSource['90萘'].height ? ((dataSource['90萘'].alarmLower / dataSource['90萘'].height)
                ? 1.75 - ((dataSource['90萘'].alarmLower / dataSource['90萘'].height) > 1 ? 1.55 : (dataSource['90萘'].alarmLower / dataSource['90萘'].height) * 1.55)
                : 1.75) : 1.75) + 'rem',}"
						alt
					/>
					<div class="accidentShelfRight">
						<img :src="tipsMiddle" :style="{ top: '.25rem' }" alt />
						<div :style="{ top: '.25rem' }">
							<span class="word_14">当前库存</span>
							<div>
								<span class="word_inventory_20">{{dataSource['90萘'] && dataSource['90萘'].stock}}</span>
								<span class="word_14 word_unit" v-if="dataSource['90萘'] && dataSource['90萘'].stock">吨</span>
							</div>
						</div>
						<img :src="tipsMiddle" :style="{ top: '1rem' }" alt />
						<div :style="{ top: '1rem' }">
							<span class="word_14">期初库存</span>
							<div>
								<span class="word_inventory_20">{{inventoryData['90萘'] && inventoryData['90萘'].startStock}}</span>
								<span
									class="word_14 word_unit"
									v-if="inventoryData['90萘'] && inventoryData['90萘'].startStock"
								>吨</span>
							</div>
						</div>
					</div>
					<div class="equipmentInfo word_Bold_16">
						<span>90萘</span>
					</div>
				</div>
				<div class="monthlyOutput">
					<div class="monthlyOutputWord">
						<span class="word_12">D-1产量</span>
						<span
							class="word_20"
							v-if="cumulativeProductionData['90萘']"
						>{{cumulativeProductionData['90萘'].totalMonthAmount}}吨</span>
					</div>
					<div class="progressBar">
						<span
							:style="{ width: cumulativeProductionData['90萘'] && planAmountData['90萘'] ? ((cumulativeProductionData['90萘'].totalMonthAmount / planAmountData['90萘'].planCount) > 1 ? 100 : (cumulativeProductionData['90萘'].totalMonthAmount / planAmountData['90萘'].planCount) * 100) + '%' : 0 }"
						></span>
						<span></span>
					</div>
					<div class="monthlyOutputWord">
						<span class="word_12">本月计划产量</span>
						<span class="word_20" v-if="planAmountData['90萘']">{{planAmountData['90萘'].planCount}}吨</span>
					</div>
				</div>
			</div>
		</div>
		<div class="equipment_parameter_info equipment_parameter_info_main1">
			<div class="equipment_parameter_info_top">
				<div class="equipment_name" style="left: 37%;top: 66%;">
					<span>精馏塔</span>
					<span>K-2402</span>
				</div>
				<div class="equipment_parameter_info_156w">
					<div class="moduleItem">
						<table>
							<tbody>
								<tr class="item_header">
									<td>顶温</td>
									<td>顶压</td>
								</tr>
								<tr class="item_data">
									<td
										:style="{color: equipmentListData['K-2402'] && equipmentListData['K-2402']['TE_2401'] && equipmentListData['K-2402']['TE_2401'].type}"
									>{{equipmentListData['K-2402'] && equipmentListData['K-2402']['TE_2401'] && equipmentListData['K-2402']['TE_2401'].data}}</td>
									<td
										:style="{color: equipmentListData['K-2402'] && equipmentListData['K-2402']['PT_2405'] && equipmentListData['K-2402']['PT_2405'].type}"
									>{{equipmentListData['K-2402'] && equipmentListData['K-2402']['PT_2405'] && equipmentListData['K-2402']['PT_2405'].data}}</td>
								</tr>
								<tr class="item_unit">
									<td>℃</td>
									<td>Kpa</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div class="moduleItem tableOneRow">
						<table>
							<tbody>
								<tr>
									<td class="item_header">液位</td>
									<td class="item_data data_unit_td">
										<span
											class="item_data"
											:style="{color: equipmentListData['K-2402'] && equipmentListData['K-2402']['LT_2403'] && equipmentListData['K-2402']['LT_2403'].type}"
										>{{equipmentListData['K-2402'] && equipmentListData['K-2402']['LT_2403'] && equipmentListData['K-2402']['LT_2403'].data}}</span>
										<span class="item_unit">mm</span>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div class="moduleItem">
						<table>
							<tbody>
								<tr class="item_header">
									<td>底温</td>
									<td>底压</td>
								</tr>
								<tr class="item_data">
									<td
										:style="{color: equipmentListData['K-2402'] && equipmentListData['K-2402']['TE_2421'] && equipmentListData['K-2402']['TE_2421'].type}"
									>{{equipmentListData['K-2402'] && equipmentListData['K-2402']['TE_2421'] && equipmentListData['K-2402']['TE_2421'].data}}</td>
									<td
										:style="{color: equipmentListData['K-2402'] && equipmentListData['K-2402']['PT_2408'] && equipmentListData['K-2402']['PT_2408'].type}"
									>{{equipmentListData['K-2402'] && equipmentListData['K-2402']['PT_2408'] && equipmentListData['K-2402']['PT_2408'].data}}</td>
								</tr>
								<tr class="item_unit">
									<td>℃</td>
									<td>Kpa</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="equipment_parameter_info_top_right">
					<div class="equipment_parameter_info_156w">
						<div class="moduleItem">
							<table>
								<tbody>
									<tr class="item_header">
										<td>进料量</td>
									</tr>
									<tr class="item_data">
										<td
											:style="{color: equipmentListData['K-2402'] && equipmentListData['K-2402']['FT_2406'] && equipmentListData['K-2402']['FT_2406'].type}"
										>{{equipmentListData['K-2402'] && equipmentListData['K-2402']['FT_2406'] && equipmentListData['K-2402']['FT_2406'].data}}</td>
									</tr>
									<tr class="item_unit">
										<td>m³/h</td>
									</tr>
								</tbody>
							</table>
						</div>
						<div class="moduleItem">
							<table>
								<tbody>
									<tr class="item_header">
										<td>回流量</td>
										<td>洗油采出量</td>
									</tr>
									<tr class="item_data">
										<td
											:style="{color: equipmentListData['K-2402'] && equipmentListData['K-2402']['FT_2402'] && equipmentListData['K-2402']['FT_2402'].type}"
										>{{equipmentListData['K-2402'] && equipmentListData['K-2402']['FT_2402'] && equipmentListData['K-2402']['FT_2402'].data}}</td>
										<td
											:style="{color: equipmentListData['E-2414'] && equipmentListData['E-2414']['FT_2410'] && equipmentListData['E-2414']['FT_2410'].type}"
										>{{equipmentListData['E-2414'] && equipmentListData['E-2414']['FT_2410'] && equipmentListData['E-2414']['FT_2410'].data}}</td>
									</tr>
									<tr class="item_unit">
										<td>m³/h</td>
										<td>m³/h</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<div class="equipment_parameter_info_160w">
						<div class="moduleItem">
							<div class="item_title">精塔回流槽</div>
							<table>
								<tbody>
									<tr class="item_header">
										<td>温度</td>
										<td>压力</td>
									</tr>
									<tr class="item_data">
										<td
											:style="{color: equipmentListData['K-2402'] && equipmentListData['K-2402']['TE_2432'] && equipmentListData['K-2402']['TE_2432'].type}"
										>{{equipmentListData['K-2402'] && equipmentListData['K-2402']['TE_2432'] && equipmentListData['K-2402']['TE_2432'].data}}</td>
										<td
											:style="{color: equipmentListData['T-2402'] && equipmentListData['T-2402']['PT_2411'] && equipmentListData['T-2402']['PT_2411'].type}"
										>{{equipmentListData['T-2402'] && equipmentListData['T-2402']['PT_2411'] && equipmentListData['T-2402']['PT_2411'].data}}</td>
									</tr>
									<tr class="item_unit">
										<td>℃</td>
										<td>Kpa</td>
									</tr>
								</tbody>
							</table>
						</div>
						<div class="moduleItem">
							<table>
								<tbody>
									<tr class="item_header">
										<td>液位</td>
									</tr>
									<tr class="item_data">
										<td
											:style="{color: equipmentListData['T-2402'] && equipmentListData['T-2402']['LT_2404'] && equipmentListData['T-2402']['LT_2404'].type}"
										>{{equipmentListData['T-2402'] && equipmentListData['T-2402']['LT_2404'] && equipmentListData['T-2402']['LT_2404'].data}}</td>
									</tr>
									<tr class="item_unit">
										<td>mm</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
			<div class="equipment_parameter_info_bottom">
				<div class="equipment_parameter_info_bottom_table">
					<table>
						<tbody>
							<tr class="item_header">
								<td>90D冷却后温度</td>
								<td>90D采出量</td>
								<td>甲基萘油冷却后温度</td>
								<td>甲基萘油采出量</td>
								<td>洗油冷却后温度</td>
							</tr>
							<tr class="item_data">
								<td
									:style="{color: equipmentListData['E-2403'] && equipmentListData['E-2403']['TE_2410'] && equipmentListData['E-2403']['TE_2410'].type}"
								>{{equipmentListData['E-2403'] && equipmentListData['E-2403']['TE_2410'] && equipmentListData['E-2403']['TE_2410'].data}}</td>
								<td
									:style="{color: equipmentListData['E-2403'] && equipmentListData['E-2403']['FT_2409'] && equipmentListData['E-2403']['FT_2409'].type}"
								>{{equipmentListData['E-2403'] && equipmentListData['E-2403']['FT_2409'] && equipmentListData['E-2403']['FT_2409'].data}}</td>
								<td
									:style="{color: equipmentListData['E-2404'] && equipmentListData['E-2404']['TE_2408'] && equipmentListData['E-2404']['TE_2408'].type}"
								>{{equipmentListData['E-2404'] && equipmentListData['E-2404']['TE_2408'] && equipmentListData['E-2404']['TE_2408'].data}}</td>
								<td
									:style="{color: equipmentListData['E-2404'] && equipmentListData['E-2404']['FT_2407'] && equipmentListData['E-2404']['FT_2407'].type}"
								>{{equipmentListData['E-2404'] && equipmentListData['E-2404']['FT_2407'] && equipmentListData['E-2404']['FT_2407'].data}}</td>
								<td
									:style="{color: equipmentListData['E-2414'] && equipmentListData['E-2414']['TE_2433'] && equipmentListData['E-2414']['TE_2433'].type}"
								>{{equipmentListData['E-2414'] && equipmentListData['E-2414']['TE_2433'] && equipmentListData['E-2414']['TE_2433'].data}}</td>
							</tr>
							<tr class="item_unit">
								<td>℃</td>
								<td>m³/h</td>
								<td>℃</td>
								<td>m³/h</td>
								<td>℃</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
		<div class="equipment_parameter_info equipment_parameter_info_main2">
			<div class="equipment_parameter_info_top">
				<div class="equipment_name" style="left: 50.2%;top: 66%;">
					<span>精馏塔加热炉</span>
					<span>F-2401</span>
				</div>
				<div class="equipment_parameter_info_128w">
					<div class="moduleItem">
						<div class="item_title">炉膛</div>
						<table>
							<tbody>
								<tr class="item_header">
									<td>温度</td>
									<td>压力</td>
								</tr>
								<tr class="item_data">
									<td
										:style="{color: equipmentListData['F-2401'] && equipmentListData['F-2401']['TT_2480'] && equipmentListData['F-2401']['TT_2480'].type}"
									>{{equipmentListData['F-2401'] && equipmentListData['F-2401']['TT_2480'] && equipmentListData['F-2401']['TT_2480'].data}}</td>
									<td
										:style="{color: equipmentListData['F-2401'] && equipmentListData['F-2401']['PT_2403'] && equipmentListData['F-2401']['PT_2403'].type}"
									>{{equipmentListData['F-2401'] && equipmentListData['F-2401']['PT_2403'] && equipmentListData['F-2401']['PT_2403'].data}}</td>
								</tr>
								<tr class="item_unit">
									<td>℃</td>
									<td>Kpa</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div class="moduleItem">
						<div class="item_title">风机</div>
						<table>
							<tbody>
								<tr class="item_header">
									<td>压力</td>
									<td>流量</td>
								</tr>
								<tr class="item_data">
									<td
										:style="{color: equipmentListData['F-2401'] && equipmentListData['F-2401']['PT_2483'] && equipmentListData['F-2401']['PT_2483'].type}"
									>{{equipmentListData['F-2401'] && equipmentListData['F-2401']['PT_2483'] && equipmentListData['F-2401']['PT_2483'].data}}</td>
									<td
										:style="{color: equipmentListData['F-2401'] && equipmentListData['F-2401']['FT_2481'] && equipmentListData['F-2401']['FT_2481'].type}"
									>{{equipmentListData['F-2401'] && equipmentListData['F-2401']['FT_2481'] && equipmentListData['F-2401']['FT_2481'].data}}</td>
								</tr>
								<tr class="item_unit">
									<td>Kpa</td>
									<td>m³/h</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="equipment_parameter_info_128w">
					<div class="moduleItem">
						<table>
							<tbody>
								<tr class="item_header">
									<td>天然气_压力</td>
								</tr>
								<tr class="item_data">
									<td
										:style="{color: equipmentListData['F-2401'] && equipmentListData['F-2401']['PT_2480'] && equipmentListData['F-2401']['PT_2480'].type}"
									>{{equipmentListData['F-2401'] && equipmentListData['F-2401']['PT_2480'] && equipmentListData['F-2401']['PT_2480'].data}}</td>
								</tr>
								<tr class="item_unit">
									<td>Kpa</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div class="moduleItem">
						<table>
							<tbody>
								<tr class="item_header">
									<td>天然气_流量</td>
								</tr>
								<tr class="item_data">
									<td
										:style="{color: equipmentListData['F-2401'] && equipmentListData['F-2401']['FT_2480'] && equipmentListData['F-2401']['FT_2480'].type}"
									>{{equipmentListData['F-2401'] && equipmentListData['F-2401']['FT_2480'] && equipmentListData['F-2401']['FT_2480'].data}}</td>
								</tr>
								<tr class="item_unit">
									<td>m³/h</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
			<div class="equipment_parameter_info_bottom">
				<div class="equipment_parameter_info_bottom_table">
					<table>
						<tbody>
							<tr class="item_header">
								<td>物料进口_温度</td>
								<td>物料进口_压力</td>
								<td>物料出口_温度</td>
								<td>物料出口_压力</td>
							</tr>
							<tr class="item_data">
								<td
									:style="{color: equipmentListData['F-2401'] && equipmentListData['F-2401']['TT_2484'] && equipmentListData['F-2401']['TT_2484'].type}"
								>{{equipmentListData['F-2401'] && equipmentListData['F-2401']['TT_2484'] && equipmentListData['F-2401']['TT_2484'].data}}</td>
								<td
									:style="{color: equipmentListData['F-2401'] && equipmentListData['F-2401']['PT_2486'] && equipmentListData['F-2401']['PT_2486'].type}"
								>{{equipmentListData['F-2401'] && equipmentListData['F-2401']['PT_2486'] && equipmentListData['F-2401']['PT_2486'].data}}</td>
								<td
									:style="{color: equipmentListData['F-2401'] && equipmentListData['F-2401']['TT_2485'] && equipmentListData['F-2401']['TT_2485'].type}"
								>{{equipmentListData['F-2401'] && equipmentListData['F-2401']['TT_2485'] && equipmentListData['F-2401']['TT_2485'].data}}</td>
								<td
									:style="{color: equipmentListData['F-2401'] && equipmentListData['F-2401']['PT_2487'] && equipmentListData['F-2401']['PT_2487'].type}"
								>{{equipmentListData['F-2401'] && equipmentListData['F-2401']['PT_2487'] && equipmentListData['F-2401']['PT_2487'].data}}</td>
							</tr>
							<tr class="item_unit">
								<td>℃</td>
								<td>MPa</td>
								<td>℃</td>
								<td>MPa</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  props: {
    dataSource: {
      type: Object, //槽罐数据
      default: {}
    },
    inventoryData: {
      type: Object, //库存数据
      default: {}
    },
    planAmountData: {
      type: Object, //计划量数据
      default: {}
    },
    equipmentListData: {
      type: Object, //设备数据
      default: {}
    },
    cumulativeProductionData: {
      type: Object, //累计产量
      default: {}
    },
    reportInfoObj: {
      type: Object, //检验不合格信息
      default: {}
    }
  },
  data() {
    return {
      AccidentNormal: require("@/assets/image/coalTarScreen/accident1.svg"),
      AccidentWarning: require("@/assets/image/coalTarScreen/accident2.svg"),
      AccidentError: require("@/assets/image/coalTarScreen/accident3.svg"),
      AccidentNormalWater: require("@/assets/image/coalTarScreen/accident1Water.svg"),
      AccidentWarningWater: require("@/assets/image/coalTarScreen/accident2Water.svg"),
      AccidentErrorWater: require("@/assets/image/coalTarScreen/accident3Water.svg"),
      AccidentShade: require("@/assets/image/coalTarScreen/accidentShade.svg"),
      tipsMiddle: require("@/assets/image/coalTarScreen/tipsMiddle.svg"),
      TipsMini: require("@/assets/image/coalTarScreen/tipsMini.svg"),
      ArrowsError: require("@/assets/image/coalTarScreen/arrowsError.svg"),
      ArrowsWarning: require("@/assets/image/coalTarScreen/arrowsWarning.svg"),
      ForkImg: require("@/assets/image/coalTarScreen/fork.svg")
    };
  },
};
</script>
<style lang="scss" scoped>
.coalTarScreen_commercialNaphthaleneCom {
	width: 18.55rem;
	height: 100%;
	// border: 1px solid #ccc;
	position: relative;
	.positionDiv {
		position: absolute;
		width: 6rem;
		height: 3.7rem;
		// border: 1px solid #ccc;
		display: flex;
		flex-direction: column;
	}
	.boraccidentLine {
		left: 28.7%;
	}
	.accidentArrows {
		transform: translateX(2.15rem);
	}
	.positionMinisDiv {
		position: absolute;
		width: 12.3rem;
		height: 3.3rem;
		top: 6.33rem;
		left: 3.5rem;
		display: flex;
		.positionOilDepotDiv {
			flex: 1;
			display: flex;
			flex-direction: column;
			position: relative;
			img {
				position: absolute;
			}
			.accidentShelf {
				flex: 1;
				display: flex;
				.unqualifiedModal {
					left: -0.05rem;
					top: 18%;
					transform: translateY(-18%);
				}
				.accidentShelfImg {
					width: 2.3rem;
					height: 2.1rem;
					z-index: 99;
				}
				.accidentWaterImg {
					left: 0.25rem;
					width: 1.85rem;
					bottom: 1.32rem;
					z-index: 1;
				}
				.accidentShelfRight {
					position: absolute;
					left: 2.28rem;
					width: 1.5rem;
					height: 100%;
					display: flex;
					flex-direction: column;
					position: relative;
					img {
						width: 0.95rem;
						height: 0.6rem;
						left: 0;
					}
					& > div {
						position: absolute;
						width: 0.95rem;
						height: 0.6rem;
						padding-left: 0.07rem;
						left: 0;
						display: flex;
						flex-direction: column;
						& > span {
							line-height: 0.18rem;
						}
						& > div {
							line-height: 0.31rem;
							display: flex;
							//   align-items: center;
						}
					}
				}
				.equipmentInfo {
					position: absolute;
					width: 0.9rem;
					height: 0.32rem;
					left: 0.77rem;
					border: 0.02rem solid rgba(12, 105, 255, 0.33);
					background: rgba(20, 40, 71, 0.74);
					opacity: 0.9;
					bottom: 1.16rem;
					z-index: 200;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
				}
				.accidentShelfBottom {
					img {
						width: 1.1rem;
						height: 0.5rem;
						bottom: 0.3rem;
						left: 50%;
						transform: translateX(-50%);
					}
					& > div {
						position: absolute;
						width: 1.1rem;
						height: 0.5rem;
						bottom: 0.3rem;
						left: 50%;
						transform: translateX(-50%);
						display: flex;
						align-items: center;
						justify-content: center;
					}
				}
			}
			.monthlyOutput {
				height: 0.7rem;
				display: flex;
				transform: translate(-0.8rem, -0.2rem);
				// justify-content: center;
				& > div {
					display: flex;
				}
				.progressBar {
					width: 1.2rem;
					margin: 0 0.1rem;
					height: 0.16rem;
					display: flex;
					& > span {
						background: #0c69ff;
						border-radius: 0.03rem;
					}
					& > span:last-child {
						flex: 1;
						background: #1c2a4b;
						border-radius: 0.03rem;
					}
				}
				.monthlyOutputWord {
					flex: 1;
					flex-direction: column;
				}
				.monthlyOutputWord:first-child {
					text-align: right;
				}
			}
		}
	}
	.equipment_parameter_info {
		position: absolute;
		display: flex;
		flex-direction: column;
	}
	.equipment_parameter_info_main2 {
		left: 13.05rem;
		top: 1.1rem;
		width: 5rem;
		height: 4.36rem;
	}
	.equipment_parameter_info_main1 {
		left: 5.03rem;
		top: 1.1rem;
		width: 7.17rem;
		height: 4.36rem;
		.equipment_parameter_info_top_right {
			& > div:first-child {
				margin-right: 0.06rem;
			}
		}
	}
}
@import '../style/foo.scss';
</style>
