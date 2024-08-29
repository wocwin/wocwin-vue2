<template>
	<div>
		<img
			class="accidentWaterImg"
			:src="AccidentWarningWater"
			:style="{ height: (dataSource['每每校验'] && dataSource['每每校验'].height ? (dataSource['每每校验'].stock / dataSource['每每校验'].height) ? (dataSource['每每校验'].stock / dataSource['每每校验'].height) > 1 ? 2.3 : .12 + (dataSource['每每校验'].stock / dataSource['每每校验'].height) * 2.18: 0 : 0 )+ 'rem', }"
			alt
		/>
		<div
			class="borderErrLine boraccidentBHLine"
			:style="{top:
              (dataSource['每每校验'] && dataSource['每每校验'].height ? ((dataSource['每每校验'].alarmUpper / dataSource['每每校验'].height)
                ? 2.36 - ((dataSource['每每校验'].alarmUpper / dataSource['每每校验'].height) > 1 ? 2.13 : (dataSource['每每校验'].alarmUpper / dataSource['每每校验'].height) * 2.13)
                : 2.36) : 2.36) + 'rem',}"
		></div>
		<div
			class="borderWarningLine boraccidentBHLine"
			:style="{top:
              (dataSource['每每校验'] && dataSource['每每校验'].height ? ((dataSource['每每校验'].alarmLower / dataSource['每每校验'].height)
                ? 2.36 - ((dataSource['每每校验'].alarmLower / dataSource['每每校验'].height) > 1 ? 2.13 : (dataSource['每每校验'].alarmLower / dataSource['每每校验'].height) * 2.13)
                : 2.36) : 2.36) + 'rem',}"
		></div>
		<img
			class="accidentArrowsBH arrowsBH"
			:src="ArrowsError"
			:style="{top:
              (dataSource['每每校验'] && dataSource['每每校验'].height ? ((dataSource['每每校验'].alarmUpper / dataSource['每每校验'].height)
                ? 2.4 - ((dataSource['每每校验'].alarmUpper / dataSource['每每校验'].height) > 1 ? 2.13 : (dataSource['每每校验'].alarmUpper / dataSource['每每校验'].height) * 2.13)
                : 2.4) : 2.4) + 'rem',}"
			alt
		/>
		<img
			class="accidentArrowsBH arrowsBH"
			:src="ArrowsWarning"
			:style="{top:
              (dataSource['每每校验'] && dataSource['每每校验'].height ? ((dataSource['每每校验'].alarmLower / dataSource['每每校验'].height)
                ? 2.4 - ((dataSource['每每校验'].alarmLower / dataSource['每每校验'].height) > 1 ? 2.13 : (dataSource['每每校验'].alarmLower / dataSource['每每校验'].height) * 2.13)
                : 2.4) : 2.4) + 'rem',}"
			alt
		/>
		<div class="accidentShelfRight">
			<img :src="TipsMax" :style="{ top: '.7rem' }" alt />
			<div :style="{ top: '.7rem' }">
				<span class="word_14">当前库存</span>
				<div>
					<span class="word_inventory_20">{{dataSource['每每校验'] && dataSource['每每校验'].stock}}</span>
					<span class="word_14 word_unit" v-if="dataSource['每每校验'] && dataSource['每每校验'].stock">吨</span>
				</div>
			</div>
			<img :src="TipsMax" :style="{ top: '1.5rem' }" alt />
			<div :style="{ top: '1.5rem' }">
				<span class="word_14">期初库存</span>
				<div>
					<span class="word_inventory_20">{{inventoryData['每每校验'] && inventoryData['每每校验'].startStock}}</span>
					<span
						class="word_14 word_unit"
						v-if="inventoryData['每每校验'] && inventoryData['每每校验'].startStock"
					>吨</span>
				</div>
			</div>
		</div>
		<div class="monthlyOutput">
			<div class="monthlyOutputWord">
				<span class="word_16">D-1消耗量</span>
				<span
					class="word_24"
					v-if="cumulativeProductionData['每每校验']"
				>{{cumulativeProductionData['每每校验'].totalMonthAmount}}吨</span>
			</div>
			<div class="progressBar">
				<span
					:style="{ width: cumulativeProductionData['每每校验'] && planAmountData['每每校验'] ? ((cumulativeProductionData['每每校验'].totalMonthAmount / planAmountData['每每校验'].planCount) > 1 ? 100 : (cumulativeProductionData['每每校验'].totalMonthAmount / planAmountData['每每校验'].planCount) * 100) + '%' : 0 }"
				></span>
			</div>
			<div class="monthlyOutputWord">
				<span class="word_16">本月计划消耗量</span>
				<span class="word_24" v-if="planAmountData['每每校验']">{{planAmountData['每每校验'].planCount}}吨</span>
			</div>
		</div>

		<img
			class="accidentWaterImg accidentNormalWaterImg"
			:src="AccidentNormalWater"
			:style="{ height: (dataSource['美美教育'] && dataSource['美美教育'].height ? (dataSource['美美教育'].stock / dataSource['美美教育'].height) ? (dataSource['美美教育'].stock / dataSource['美美教育'].height) > 1 ? 1.75 : .12 + (dataSource['美美教育'].stock / dataSource['美美教育'].height) * 1.63: 0 : 0 )+ 'rem', }"
			alt
		/>
		<div
			class="borderErrLine boraccidentLine"
			:style="{top:
              (dataSource['美美教育'] && dataSource['美美教育'].height ? ((dataSource['美美教育'].alarmUpper / dataSource['美美教育'].height)
                ? 1.7 - ((dataSource['美美教育'].alarmUpper / dataSource['美美教育'].height) > 1 ? 1.55 : (dataSource['美美教育'].alarmUpper / dataSource['美美教育'].height) * 1.55)
                : 1.7) : 1.7) + 'rem',}"
		></div>
		<div
			class="borderWarningLine boraccidentLine"
			:style="{top:
              (dataSource['美美教育'] && dataSource['美美教育'].height ? ((dataSource['美美教育'].alarmLower / dataSource['美美教育'].height)
                ? 1.7 - ((dataSource['美美教育'].alarmLower / dataSource['美美教育'].height) > 1 ? 1.55 : (dataSource['美美教育'].alarmLower / dataSource['美美教育'].height) * 1.55)
                : 1.7) : 1.7) + 'rem',}"
		></div>
		<img
			class="accidentArrows arrows"
			:src="ArrowsError"
			:style="{top:
              (dataSource['美美教育'] && dataSource['美美教育'].height ? ((dataSource['美美教育'].alarmUpper / dataSource['美美教育'].height)
                ? 1.75 - ((dataSource['美美教育'].alarmUpper / dataSource['美美教育'].height) > 1 ? 1.55 : (dataSource['美美教育'].alarmUpper / dataSource['美美教育'].height) * 1.55)
                : 1.75) : 1.75) + 'rem',}"
			alt
		/>
		<img
			class="accidentArrows arrows"
			:src="ArrowsWarning"
			:style="{top:
              (dataSource['美美教育'] && dataSource['美美教育'].height ? ((dataSource['美美教育'].alarmLower / dataSource['美美教育'].height)
                ? 1.75 - ((dataSource['美美教育'].alarmLower / dataSource['美美教育'].height) > 1 ? 1.55 : (dataSource['美美教育'].alarmLower / dataSource['美美教育'].height) * 1.55)
                : 1.75) : 1.75) + 'rem',}"
			alt
		/>
		<div class="accidentShelfRight">
			<img :src="tipsMiddle" :style="{ top: '.25rem' }" alt />
			<div :style="{ top: '.25rem' }">
				<span class="word_14">当前库存</span>
				<div>
					<span class="word_inventory_20">{{dataSource['美美教育'] && dataSource['美美教育'].stock}}</span>
					<span class="word_14 word_unit" v-if="dataSource['美美教育'] && dataSource['美美教育'].stock">吨</span>
				</div>
			</div>
			<img :src="tipsMiddle" :style="{ top: '1rem' }" alt />
			<div :style="{ top: '1rem' }">
				<span class="word_14">期初库存</span>
				<div>
					<span class="word_inventory_20">{{inventoryData['美美教育'] && inventoryData['美美教育'].startStock}}</span>
					<span
						class="word_14 word_unit"
						v-if="inventoryData['美美教育'] && inventoryData['美美教育'].startStock"
					>吨</span>
				</div>
			</div>
		</div>
		<div class="monthlyOutput">
			<div class="monthlyOutputWord">
				<span class="word_12">D-1产量</span>
				<span
					class="word_20"
					v-if="cumulativeProductionData['美美教育']"
				>{{cumulativeProductionData['美美教育'].totalMonthAmount}}吨</span>
			</div>
			<div class="progressBar">
				<span
					:style="{ width: cumulativeProductionData['美美教育'] && planAmountData['美美教育'] ? ((cumulativeProductionData['美美教育'].totalMonthAmount / planAmountData['美美教育'].planCount) > 1 ? 100 : (cumulativeProductionData['美美教育'].totalMonthAmount / planAmountData['美美教育'].planCount) * 100) + '%' : 0 }"
				></span>
				<span></span>
			</div>
			<div class="monthlyOutputWord">
				<span class="word_12">本月计划产量</span>
				<span class="word_20" v-if="planAmountData['美美教育']">{{planAmountData['美美教育'].planCount}}吨</span>
			</div>
		</div>

		<td
			:style="{color: equipmentListData['F-2101'] && equipmentListData['F-2101']['TE_2109'] && equipmentListData['F-2101']['TE_2109'].type}"
		>{{equipmentListData['F-2101'] && equipmentListData['F-2101']['TE_2109'] && equipmentListData['F-2101']['TE_2109'].data}}</td>
		<td
			:style="{color: equipmentListData['F-2101'] && equipmentListData['F-2101']['PT_2102'] && equipmentListData['F-2101']['PT_2102'].type}"
		>{{equipmentListData['F-2101'] && equipmentListData['F-2101']['PT_2102'] && equipmentListData['F-2101']['PT_2102'].data}}</td>

		<div
			class="borderErrLine borDehydrationLine"
			:style="{top:
              (dataSource['美美教育'] && dataSource['美美教育'].height ? ((dataSource['美美教育'].alarmUpper / dataSource['美美教育'].height)
                ? 2.52 - ((dataSource['美美教育'].alarmUpper / dataSource['美美教育'].height) > 1 ? 1.92 : (dataSource['美美教育'].alarmUpper / dataSource['美美教育'].height) * 1.92)
                : 2.52) : 2.52) + 'rem',}"
		></div>
		<div
			class="borderWarningLine borDehydrationLine"
			:style="{top:
              (dataSource['美美教育'] && dataSource['美美教育'].height ? ((dataSource['美美教育'].alarmUpper / dataSource['美美教育'].height)
                ? 2.52 - ((dataSource['美美教育'].alarmUpper / dataSource['美美教育'].height) > 1 ? 1.92 : (dataSource['美美教育'].alarmUpper / dataSource['美美教育'].height) * 1.92)
                : 2.52) : 1.52) + 'rem',}"
		></div>
		<img
			class="accidentArrows arrows"
			:src="ArrowsError"
			:style="{top:
              (dataSource['美美教育'] && dataSource['美美教育'].height ? ((dataSource['美美教育'].alarmUpper / dataSource['美美教育'].height)
                ? 2.55 - ((dataSource['美美教育'].alarmUpper / dataSource['美美教育'].height) > 1 ? 1.92 : (dataSource['美美教育'].alarmUpper / dataSource['美美教育'].height) * 1.92)
                : 2.55) : 2.55) + 'rem',}"
			alt
		/>
		<img
			class="accidentArrows arrows"
			:src="ArrowsWarning"
			:style="{top:
              (dataSource['美美教育'] && dataSource['美美教育'].height ? ((dataSource['美美教育'].alarmUpper / dataSource['美美教育'].height)
                ? 2.55 - ((dataSource['美美教育'].alarmUpper / dataSource['美美教育'].height) > 1 ? 1.92 : (dataSource['美美教育'].alarmUpper / dataSource['美美教育'].height) * 1.92)
                : 2.55) : 2.55) + 'rem',}"
			alt
		/>

		<img
			class="accidentWaterImg accidentNormalWaterImg"
			:src="StorehouseWater"
			:style="{ height: (dataSource['美美教育'] && dataSource['美美教育'].height ? (dataSource['美美教育'].stock / dataSource['美美教育'].height) ? (dataSource['美美教育'].stock / dataSource['美美教育'].height) > 1 ? 1.35 : (dataSource['美美教育'].stock / dataSource['美美教育'].height) * 1.35: 0 : 0 )+ 'rem', }"
			alt
		/>
		<div class="accidentShelfRight">
			<img :src="TipsMax" :style="{ top: '1rem' }" alt />
			<div :style="{ top: '1rem' }">
				<span class="word_14">当前料位</span>
				<div>
					<span class="word_24">{{dataSource['美美教育'] && dataSource['美美教育'].stock}}</span>
					<span class="word_14 word_unit" v-if="dataSource['美美教育'] && dataSource['美美教育'].stock">mm</span>
				</div>
			</div>
		</div>

		<table border="0">
			<thead>
				<tr>
					<th style="width: .8rem">在库</th>
					<th style="width: 1rem"></th>
					<th>单重</th>
				</tr>
			</thead>
			<tbody v-if="contentData['没好是由']">
				<tr v-for="(item, index) of contentData['没好是由']" :key="index">
					<td>{{item.inWarehouseBagNum + '包'}}</td>
					<td>{{item.inWarehouseWeight + '吨'}}</td>
					<td>{{item.singleWeight + '吨'}}</td>
				</tr>
			</tbody>
		</table>
		<div
			class="storageContent"
			v-if="maxTotalObj.name != '没好是由' && contentData['没好是由'] && contentData['没好是由'].some(item => (item.listTransportInfo && item.listTransportInfo.length) || (item.listPackageBatchInfo && item.listPackageBatchInfo.length))"
		>
			<template v-for="item of contentData['没好是由']">
				<div :key="item.name + 'pack'">
					<div
						v-for="(ele,eleIndex) of item.listPackageBatchInfo"
						:key="eleIndex + 'eleIndex'"
						class="putStorage storageDiv"
					>
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
				</div>
			</template>
			<template v-for="item of contentData['没好是由']">
				<div :key="item.name + 'tran'">
					<div
						v-for="(ele,eleIndex) of item.listTransportInfo"
						:key="eleIndex + 'eleIndex2'"
						class="outStorage storageDiv"
					>
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
			</template>
		</div>
		<div v-if="maxTotalObj.name == '没好是由'" class="material_main_item_bottom">
			<div class="materialBoxs">
				<img v-for="item of 18" :key="item" :src="MaterialBox" alt />
			</div>
			<img class="materialGroup" :src="MaterialGroup" alt />
		</div>
		<div
			v-if="maxTotalObj.name != '没好是由' && contentData['没好是由'] && contentData['没好是由'].some(item => !item.listTransportInfo && !item.listPackageBatchInfo) && inventoryData.length && inventoryData.find(item => item.name == '没好是由')"
			class="material_main_item_bottom"
		>
			<div class="materialBoxs">
				<img
					v-for="item of Math.round(inventoryData.find(item => item.name == '没好是由').count / maxTotalObj.count)"
					:key="item"
					:src="MaterialBox"
					alt
				/>
			</div>
			<img class="materialGroup" :src="MaterialGroup" alt />
		</div>

		<div
			class="unqualifiedModal"
			v-if="reportInfoObj && reportInfoObj['没好是由'] && reportInfoObj['没好是由'].flag"
		>
			<img class="forkImg" @click="reportInfoObj['没好是由'].flag = false" :src="ForkImg" alt />
			<div>
				<span>取样地点:</span>
				<span>{{reportInfoObj['没好是由'].sampleAddr}}</span>
			</div>
			<div>
				<span>取料名称:</span>
				<span>{{reportInfoObj['没好是由'].materialName}}</span>
			</div>
			<div>
				<span>取样时间:</span>
				<span>{{reportInfoObj['没好是由'].sampleTime}}</span>
			</div>
			<div>
				<span>样品分类:</span>
				<span>{{reportInfoObj['没好是由'].sampleTypeName}}</span>
			</div>
			<div>
				<span>检验结果:</span>
				<span>不合格</span>
			</div>
			<div>
				<span>检验项:</span>
				<div class="inspection_Item" v-if="reportInfoObj['没好是由'].itemsAuditVOList">
					<span v-for="item of reportInfoObj['没好是由'].itemsAuditVOList" :key="item.id">
						<span>{{item.name}}</span>
						<span>{{item.place}}</span>
					</span>
				</div>
			</div>
		</div>
	</div>
</template>