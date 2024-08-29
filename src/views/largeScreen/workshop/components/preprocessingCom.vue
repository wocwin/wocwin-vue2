<template>
  <!-- 油库 -->
  <div class="coalTarScreen_preprocessingCom">
    <div class="coalTarBigBH positionDiv">
      <div class="accidentShelf">
        <!-- <img class="accidentShadeImg" :src="AccidentShade" alt="" /> -->
        <!-- <div class="accidentShadeImg"></div> -->
        <div class="unqualifiedModal" v-if="reportInfoObj && reportInfoObj['软沥青'] && reportInfoObj['软沥青'].flag">
            <img class="forkImg" @click="$emit('updateReportInfoFlagFuc','软沥青')" :src="ForkImg" alt="">
            <div>
              <span>取样地点:</span>
              <span>{{reportInfoObj['软沥青'].sampleAddr}}</span>
            </div>
            <div>
              <span>取料名称:</span>
              <span>{{reportInfoObj['软沥青'].materialName}}</span>
            </div>
            <div>
              <span>取样时间:</span>
              <span>{{reportInfoObj['软沥青'].sampleTime}}</span>
            </div>
            <div>
              <span>样品分类:</span>
              <span>{{reportInfoObj['软沥青'].sampleTypeName}}</span>
            </div>
            <div>
              <span>检验结果:</span>
              <span>不合格</span>
            </div>
            <div>
              <span>检验项:</span>
              <div class="inspection_Item" v-if="reportInfoObj['软沥青'].itemsAuditVOList">
                  <span v-for="item of reportInfoObj['软沥青'].itemsAuditVOList" :key="item.id">
                    <span>{{item.name}}</span>
                    <span>{{item.place}}</span>
                  </span>
              </div>
            </div>
          </div>
        <img class="accidentShelfImg" :src="AccidentWarning" alt="" />
        <img
          class="accidentWaterImg"
          :src="AccidentWarningWater"
          :style="{ height: (dataSource['软沥青(针状焦)'] && dataSource['软沥青(针状焦)'].height ? (dataSource['软沥青(针状焦)'].stock / dataSource['软沥青(针状焦)'].height) ? (dataSource['软沥青(针状焦)'].stock / dataSource['软沥青(针状焦)'].height) > 1 ? 2.3 : .12 + (dataSource['软沥青(针状焦)'].stock / dataSource['软沥青(针状焦)'].height) * 2.18: 0 : 0 )+ 'rem', }"
          alt=""
        />
        <div
          class="borderErrLine boraccidentBHLine"
          :style="{top:
              (dataSource['软沥青(针状焦)'] && dataSource['软沥青(针状焦)'].height ? ((dataSource['软沥青(针状焦)'].alarmUpper / dataSource['软沥青(针状焦)'].height)
                ? 2.36 - ((dataSource['软沥青(针状焦)'].alarmUpper / dataSource['软沥青(针状焦)'].height) > 1 ? 2.13 : (dataSource['软沥青(针状焦)'].alarmUpper / dataSource['软沥青(针状焦)'].height) * 2.13)
                : 2.36) : 2.36) + 'rem',}"
        ></div>
        <div
          class="borderWarningLine boraccidentBHLine"
          :style="{top:
              (dataSource['软沥青(针状焦)'] && dataSource['软沥青(针状焦)'].height ? ((dataSource['软沥青(针状焦)'].alarmLower / dataSource['软沥青(针状焦)'].height)
                ? 2.36 - ((dataSource['软沥青(针状焦)'].alarmLower / dataSource['软沥青(针状焦)'].height) > 1 ? 2.13 : (dataSource['软沥青(针状焦)'].alarmLower / dataSource['软沥青(针状焦)'].height) * 2.13)
                : 2.36) : 2.36) + 'rem',}"
        ></div>
        <img
          class="accidentArrowsBH arrowsBH"
          :src="ArrowsError"
          :style="{top:
              (dataSource['软沥青(针状焦)'] && dataSource['软沥青(针状焦)'].height ? ((dataSource['软沥青(针状焦)'].alarmUpper / dataSource['软沥青(针状焦)'].height)
                ? 2.4 - ((dataSource['软沥青(针状焦)'].alarmUpper / dataSource['软沥青(针状焦)'].height) > 1 ? 2.13 : (dataSource['软沥青(针状焦)'].alarmUpper / dataSource['软沥青(针状焦)'].height) * 2.13)
                : 2.4) : 2.4) + 'rem',}"
          alt=""
        />
        <img
          class="accidentArrowsBH arrowsBH"
          :src="ArrowsWarning"
          :style="{top:
              (dataSource['软沥青(针状焦)'] && dataSource['软沥青(针状焦)'].height ? ((dataSource['软沥青(针状焦)'].alarmLower / dataSource['软沥青(针状焦)'].height)
                ? 2.4 - ((dataSource['软沥青(针状焦)'].alarmLower / dataSource['软沥青(针状焦)'].height) > 1 ? 2.13 : (dataSource['软沥青(针状焦)'].alarmLower / dataSource['软沥青(针状焦)'].height) * 2.13)
                : 2.4) : 2.4) + 'rem',}"
          alt=""
        />
        <div class="accidentShelfRight">
          <img :src="TipsMax" :style="{ top: '.7rem' }" alt="" />
          <div :style="{ top: '.7rem' }">
            <span class="word_14">当前库存</span>
            <div>
              <span class="word_inventory_20">{{dataSource['软沥青(针状焦)'] && dataSource['软沥青(针状焦)'].stock}}</span>
              <span class="word_14 word_unit" v-if="dataSource['软沥青(针状焦)'] && dataSource['软沥青(针状焦)'].stock">吨</span>
            </div>
          </div>
          <img :src="TipsMax" :style="{ top: '1.5rem' }" alt="" />
          <div :style="{ top: '1.5rem' }">
            <span class="word_14">期初库存</span>
            <div>
              <span class="word_inventory_20">{{inventoryData['软沥青(针状焦)'] && inventoryData['软沥青(针状焦)'].startStock}}</span>
              <span class="word_14 word_unit" v-if="inventoryData['软沥青(针状焦)'] && inventoryData['软沥青(针状焦)'].startStock">吨</span>
            </div>
          </div>
        </div>
      </div>
      <div class="monthlyOutput">
        <div class="monthlyOutputWord">
          <span class="word_16">D-1消耗量</span>
          <span class="word_24" v-if="cumulativeProductionData['软沥青(针状焦)']">{{cumulativeProductionData['软沥青(针状焦)'].totalMonthAmount}}吨</span>
        </div>
        <div class="progressBar">
          <span :style="{ width: cumulativeProductionData['软沥青(针状焦)'] && planAmountData['软沥青(针状焦)'] ? ((cumulativeProductionData['软沥青(针状焦)'].totalMonthAmount / planAmountData['软沥青(针状焦)'].planCount) > 1 ? 100 : (cumulativeProductionData['软沥青(针状焦)'].totalMonthAmount / planAmountData['软沥青(针状焦)'].planCount) * 100) + '%' : 0 }"></span>
          <span></span>
        </div>
        <div class="monthlyOutputWord">
          <span class="word_16">本月计划消耗量</span>
          <span class="word_24" v-if="planAmountData['软沥青(针状焦)']">{{planAmountData['软沥青(针状焦)'].planCount}}吨</span>
        </div>
      </div>
    </div>
    <div class="positionMinisDiv positionMinisDiv1">
      <div class="oilDepotA positionOilDepotDiv">
        <div class="accidentShelf">
          <!-- <img class="accidentShadeImg" :src="AccidentShade" alt="" /> -->
          <!-- <div class="accidentShadeImg"></div> -->
          <div class="unqualifiedModal" v-if="reportInfoObj && reportInfoObj['甲基萘油'] && reportInfoObj['甲基萘油'].flag">
            <img class="forkImg" @click="$emit('updateReportInfoFlagFuc','甲基萘油')" :src="ForkImg" alt="">
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
          <img class="accidentShelfImg" :src="AccidentWarning" alt="" />
          <img
            class="accidentWaterImg accidentNormalWaterImg"
            :src="AccidentWarningWater"
            :style="{ height: (dataSource['甲基萘油(针状焦)'] && dataSource['甲基萘油(针状焦)'].height ? (dataSource['甲基萘油(针状焦)'].stock / dataSource['甲基萘油(针状焦)'].height) ? (dataSource['甲基萘油(针状焦)'].stock / dataSource['甲基萘油(针状焦)'].height) > 1 ? 1.75 : .12 + (dataSource['甲基萘油(针状焦)'].stock / dataSource['甲基萘油(针状焦)'].height) * 1.63: 0 : 0 )+ 'rem', }"
            alt=""
          />
          <div
          class="borderErrLine boraccidentLine"
          :style="{top:
              (dataSource['甲基萘油(针状焦)'] && dataSource['甲基萘油(针状焦)'].height ? ((dataSource['甲基萘油(针状焦)'].alarmUpper / dataSource['甲基萘油(针状焦)'].height)
                ? 1.7 - ((dataSource['甲基萘油(针状焦)'].alarmUpper / dataSource['甲基萘油(针状焦)'].height) > 1 ? 1.55 : (dataSource['甲基萘油(针状焦)'].alarmUpper / dataSource['甲基萘油(针状焦)'].height) * 1.55)
                : 1.7) : 1.7) + 'rem',}"
        ></div>
        <div
          class="borderWarningLine boraccidentLine"
          :style="{top:
              (dataSource['甲基萘油(针状焦)'] && dataSource['甲基萘油(针状焦)'].height ? ((dataSource['甲基萘油(针状焦)'].alarmLower / dataSource['甲基萘油(针状焦)'].height)
                ? 1.7 - ((dataSource['甲基萘油(针状焦)'].alarmLower / dataSource['甲基萘油(针状焦)'].height) > 1 ? 1.55 : (dataSource['甲基萘油(针状焦)'].alarmLower / dataSource['甲基萘油(针状焦)'].height) * 1.55)
                : 1.7) : 1.7) + 'rem',}"
        ></div>
          <img
            class="accidentArrows arrows"
            :src="ArrowsError"
            :style="{top:
              (dataSource['甲基萘油(针状焦)'] && dataSource['甲基萘油(针状焦)'].height ? ((dataSource['甲基萘油(针状焦)'].alarmUpper / dataSource['甲基萘油(针状焦)'].height)
                ? 1.75 - ((dataSource['甲基萘油(针状焦)'].alarmUpper / dataSource['甲基萘油(针状焦)'].height) > 1 ? 1.55 : (dataSource['甲基萘油(针状焦)'].alarmUpper / dataSource['甲基萘油(针状焦)'].height) * 1.55)
                : 1.75) : 1.75) + 'rem',}"
            alt=""
          />
          <img
            class="accidentArrows arrows"
            :src="ArrowsWarning"
            :style="{top:
              (dataSource['甲基萘油(针状焦)'] && dataSource['甲基萘油(针状焦)'].height ? ((dataSource['甲基萘油(针状焦)'].alarmLower / dataSource['甲基萘油(针状焦)'].height)
                ? 1.75 - ((dataSource['甲基萘油(针状焦)'].alarmLower / dataSource['甲基萘油(针状焦)'].height) > 1 ? 1.55 : (dataSource['甲基萘油(针状焦)'].alarmLower / dataSource['甲基萘油(针状焦)'].height) * 1.55)
                : 1.75) : 1.75) + 'rem',}"
            alt=""
          />
          <div class="accidentShelfRight">
            <img :src="tipsMiddle" :style="{ top: '.25rem' }" alt="" />
            <div :style="{ top: '.25rem' }">
              <span class="word_14">当前库存</span>
              <div>
                <span class="word_inventory_20">{{dataSource['甲基萘油(针状焦)'] && dataSource['甲基萘油(针状焦)'].stock}}</span>
                <span class="word_14 word_unit" v-if="dataSource['甲基萘油(针状焦)'] && dataSource['甲基萘油(针状焦)'].stock">吨</span>
              </div>
            </div>
            <img :src="tipsMiddle" :style="{ top: '1rem' }" alt="" />
            <div :style="{ top: '1rem' }">
              <span class="word_14">期初库存</span>
              <div>
                <span class="word_inventory_20">{{inventoryData['甲基萘油(针状焦)'] && inventoryData['甲基萘油(针状焦)'].startStock}}</span>
              <span class="word_14 word_unit" v-if="inventoryData['甲基萘油(针状焦)'] && inventoryData['甲基萘油(针状焦)'].startStock">吨</span>
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
          <span class="word_20" v-if="cumulativeProductionData['甲基萘油(针状焦)']">{{cumulativeProductionData['甲基萘油(针状焦)'].totalMonthAmount}}吨</span>
        </div>
        <div class="progressBar">
          <span :style="{ width: cumulativeProductionData['甲基萘油(针状焦)'] && planAmountData['甲基萘油(针状焦)'] ? ((cumulativeProductionData['甲基萘油(针状焦)'].totalMonthAmount / planAmountData['甲基萘油(针状焦)'].planCount) > 1 ? 100 : (cumulativeProductionData['甲基萘油(针状焦)'].totalMonthAmount / planAmountData['甲基萘油(针状焦)'].planCount) * 100) + '%' : 0 }"></span>
          <span></span>  
        </div>
        <div class="monthlyOutputWord">
          <span class="word_12">本月计划产量</span>
          <span class="word_20" v-if="planAmountData['甲基萘油(针状焦)']">{{planAmountData['甲基萘油(针状焦)'].planCount}}吨</span>
        </div>
      </div>
      </div>
      <div class="oilDepotA positionOilDepotDiv">
        <div class="accidentShelf">
          <!-- <img class="accidentShadeImg" :src="AccidentShade" alt="" /> -->
          <!-- <div class="accidentShadeImg"></div> -->
          <div class="unqualifiedModal" v-if="reportInfoObj && reportInfoObj['混合溶剂'] && reportInfoObj['混合溶剂'].flag">
            <img class="forkImg" @click="$emit('updateReportInfoFlagFuc','混合溶剂')" :src="ForkImg" alt="">
            <div>
              <span>取样地点:</span>
              <span>{{reportInfoObj['混合溶剂'].sampleAddr}}</span>
            </div>
            <div>
              <span>取料名称:</span>
              <span>{{reportInfoObj['混合溶剂'].materialName}}</span>
            </div>
            <div>
              <span>取样时间:</span>
              <span>{{reportInfoObj['混合溶剂'].sampleTime}}</span>
            </div>
            <div>
              <span>样品分类:</span>
              <span>{{reportInfoObj['混合溶剂'].sampleTypeName}}</span>
            </div>
            <div>
              <span>检验结果:</span>
              <span>不合格</span>
            </div>
            <div>
              <span>检验项:</span>
              <div class="inspection_Item" v-if="reportInfoObj['混合溶剂'].itemsAuditVOList">
                  <span v-for="item of reportInfoObj['混合溶剂'].itemsAuditVOList" :key="item.id">
                    <span>{{item.name}}</span>
                    <span>{{item.place}}</span>
                  </span>
              </div>
            </div>
          </div>
          <img class="accidentShelfImg" :src="AccidentWarning" alt="" />
          <img
            class="accidentWaterImg accidentNormalWaterImg"
            :src="AccidentWarningWater"
            :style="{ height: (dataSource['混合溶剂'] && dataSource['混合溶剂'].height ? (dataSource['混合溶剂'].stock / dataSource['混合溶剂'].height) ? (dataSource['混合溶剂'].stock / dataSource['混合溶剂'].height) > 1 ? 1.75 : .12 + (dataSource['混合溶剂'].stock / dataSource['混合溶剂'].height) * 1.63: 0 : 0 )+ 'rem', }"
            alt=""
          />
          <div
          class="borderErrLine boraccidentLine"
          :style="{top:
              (dataSource['混合溶剂'] && dataSource['混合溶剂'].height ? ((dataSource['混合溶剂'].alarmUpper / dataSource['混合溶剂'].height)
                ? 1.7 - ((dataSource['混合溶剂'].alarmUpper / dataSource['混合溶剂'].height) > 1 ? 1.55 : (dataSource['混合溶剂'].alarmUpper / dataSource['混合溶剂'].height) * 1.55)
                : 1.7) : 1.7) + 'rem',}"
        ></div>
        <div
          class="borderWarningLine boraccidentLine"
          :style="{top:
              (dataSource['混合溶剂'] && dataSource['混合溶剂'].height ? ((dataSource['混合溶剂'].alarmLower / dataSource['混合溶剂'].height)
                ? 1.7 - ((dataSource['混合溶剂'].alarmLower / dataSource['混合溶剂'].height) > 1 ? 1.55 : (dataSource['混合溶剂'].alarmLower / dataSource['混合溶剂'].height) * 1.55)
                : 1.7) : 1.7) + 'rem',}"
        ></div>
          <img
            class="accidentArrows arrows"
            :src="ArrowsError"
            :style="{top:
              (dataSource['混合溶剂'] && dataSource['混合溶剂'].height ? ((dataSource['混合溶剂'].alarmUpper / dataSource['混合溶剂'].height)
                ? 1.75 - ((dataSource['混合溶剂'].alarmUpper / dataSource['混合溶剂'].height) > 1 ? 1.55 : (dataSource['混合溶剂'].alarmUpper / dataSource['混合溶剂'].height) * 1.55)
                : 1.75) : 1.75) + 'rem',}"
            alt=""
          />
          <img
            class="accidentArrows arrows"
            :src="ArrowsWarning"
            :style="{top:
              (dataSource['混合溶剂'] && dataSource['混合溶剂'].height ? ((dataSource['混合溶剂'].alarmLower / dataSource['混合溶剂'].height)
                ? 1.75 - ((dataSource['混合溶剂'].alarmLower / dataSource['混合溶剂'].height) > 1 ? 1.55 : (dataSource['混合溶剂'].alarmLower / dataSource['混合溶剂'].height) * 1.55)
                : 1.75) : 1.75) + 'rem',}"
            alt=""
          />
          <div class="accidentShelfRight">
            <img :src="TipsMax" :style="{ top: '-.1rem' }" alt="" />
            <div :style="{ top: '-.1rem' }">
              <span class="word_14">T-4008A</span>
              <div>
                <span class="word_inventory_20">{{dataSource['混合溶剂T-4008A'] && dataSource['混合溶剂T-4008A'].stock}}</span>
                <span class="word_14 word_unit" v-if="dataSource['混合溶剂T-4008A'] && dataSource['混合溶剂T-4008A'].stock">mm</span>
              </div>
            </div>
            <img :src="TipsMax" :style="{ top: '.52rem' }" alt="" />
            <div :style="{ top: '.52rem' }">
              <span class="word_14">T-4008B</span>
              <div>
                <span class="word_inventory_20">{{dataSource['混合溶剂T-4008B'] && dataSource['混合溶剂T-4008B'].stock}}</span>
                <span class="word_14 word_unit" v-if="dataSource['混合溶剂T-4008B'] && dataSource['混合溶剂T-4008B'].stock">mm</span>
              </div>
            </div>
            <img :src="TipsMax" :style="{ top: '1.14rem' }" alt="" />
            <div :style="{ top: '1.14rem' }">
              <span class="word_14">2T-4008A</span>
              <div>
                <span class="word_inventory_20">{{dataSource['混合溶剂2T-4008A'] && dataSource['混合溶剂2T-4008A'].stock}}</span>
                <span class="word_14 word_unit" v-if="dataSource['混合溶剂2T-4008A'] && dataSource['混合溶剂2T-4008A'].stock">mm</span>
              </div>
            </div>
            <img :src="TipsMax" :style="{ top: '1.76rem' }" alt="" />
            <div :style="{ top: '1.76rem' }">
              <span class="word_14">2T-4008B</span>
              <div>
                <span class="word_inventory_20">{{dataSource['混合溶剂2T-4008B'] && dataSource['混合溶剂2T-4008B'].stock}}</span>
                <span class="word_14 word_unit" v-if="dataSource['混合溶剂2T-4008B'] && dataSource['混合溶剂2T-4008B'].stock">mm</span>
              </div>
            </div>
          </div>
          <div class="equipmentInfo word_Bold_16">
            <span>混合溶剂</span>
          </div>
        </div>
      </div>
      <div class="oilDepotA positionOilDepotDiv">
        <div class="accidentShelf">
          <!-- <img class="accidentShadeImg" :src="AccidentShade" alt="" /> -->
          <!-- <div class="accidentShadeImg"></div> -->
          <div class="unqualifiedModal" v-if="reportInfoObj && reportInfoObj['溶剂油'] && reportInfoObj['溶剂油'].flag">
            <img class="forkImg" @click="$emit('updateReportInfoFlagFuc','溶剂油')" :src="ForkImg" alt="">
            <div>
              <span>取样地点:</span>
              <span>{{reportInfoObj['溶剂油'].sampleAddr}}</span>
            </div>
            <div>
              <span>取料名称:</span>
              <span>{{reportInfoObj['溶剂油'].materialName}}</span>
            </div>
            <div>
              <span>取样时间:</span>
              <span>{{reportInfoObj['溶剂油'].sampleTime}}</span>
            </div>
            <div>
              <span>样品分类:</span>
              <span>{{reportInfoObj['溶剂油'].sampleTypeName}}</span>
            </div>
            <div>
              <span>检验结果:</span>
              <span>不合格</span>
            </div>
            <div>
              <span>检验项:</span>
              <div class="inspection_Item" v-if="reportInfoObj['溶剂油'].itemsAuditVOList">
                  <span v-for="item of reportInfoObj['溶剂油'].itemsAuditVOList" :key="item.id">
                    <span>{{item.name}}</span>
                    <span>{{item.place}}</span>
                  </span>
              </div>
            </div>
          </div>
          <img class="accidentShelfImg" :src="AccidentWarning" alt="" />
          <img
            class="accidentWaterImg accidentNormalWaterImg"
            :src="AccidentWarningWater"
            :style="{ height: (dataSource['溶剂油'] && dataSource['溶剂油'].height ? (dataSource['溶剂油'].stock / dataSource['溶剂油'].height) ? (dataSource['溶剂油'].stock / dataSource['溶剂油'].height) > 1 ? 1.75 : .12 + (dataSource['溶剂油'].stock / dataSource['溶剂油'].height) * 1.63: 0 : 0 )+ 'rem', }"
            alt=""
          />
          <div
          class="borderErrLine boraccidentLine"
          :style="{top:
              (dataSource['溶剂油'] && dataSource['溶剂油'].height ? ((dataSource['溶剂油'].alarmUpper / dataSource['溶剂油'].height)
                ? 1.7 - ((dataSource['溶剂油'].alarmUpper / dataSource['溶剂油'].height) > 1 ? 1.55 : (dataSource['溶剂油'].alarmUpper / dataSource['溶剂油'].height) * 1.55)
                : 1.7) : 1.7) + 'rem',}"
        ></div>
        <div
          class="borderWarningLine boraccidentLine"
          :style="{top:
              (dataSource['溶剂油'] && dataSource['溶剂油'].height ? ((dataSource['溶剂油'].alarmLower / dataSource['溶剂油'].height)
                ? 1.7 - ((dataSource['溶剂油'].alarmLower / dataSource['溶剂油'].height) > 1 ? 1.55 : (dataSource['溶剂油'].alarmLower / dataSource['溶剂油'].height) * 1.55)
                : 1.7) : 1.7) + 'rem',}"
        ></div>
          <img
            class="accidentArrows arrows"
            :src="ArrowsError"
            :style="{top:
              (dataSource['溶剂油'] && dataSource['溶剂油'].height ? ((dataSource['溶剂油'].alarmUpper / dataSource['溶剂油'].height)
                ? 1.75 - ((dataSource['溶剂油'].alarmUpper / dataSource['溶剂油'].height) > 1 ? 1.55 : (dataSource['溶剂油'].alarmUpper / dataSource['溶剂油'].height) * 1.55)
                : 1.75) : 1.75) + 'rem',}"
            alt=""
          />
          <img
            class="accidentArrows arrows"
            :src="ArrowsWarning"
            :style="{top:
              (dataSource['溶剂油'] && dataSource['溶剂油'].height ? ((dataSource['溶剂油'].alarmLower / dataSource['溶剂油'].height)
                ? 1.75 - ((dataSource['溶剂油'].alarmLower / dataSource['溶剂油'].height) > 1 ? 1.55 : (dataSource['溶剂油'].alarmLower / dataSource['溶剂油'].height) * 1.55)
                : 1.75) : 1.75) + 'rem',}"
            alt=""
          />
          <div class="accidentShelfRight">
            <img :src="tipsMiddle" :style="{ top: '.25rem' }" alt="" />
            <div :style="{ top: '.25rem' }">
              <span class="word_14">当前库存</span>
              <div>
                <span class="word_inventory_20">{{dataSource['溶剂油'] && dataSource['溶剂油'].stock}}</span>
                <span class="word_14 word_unit" v-if="dataSource['溶剂油'] && dataSource['溶剂油'].stock">吨</span>
              </div>
            </div>
            <img :src="tipsMiddle" :style="{ top: '1rem' }" alt="" />
            <div :style="{ top: '1rem' }">
              <span class="word_14">期初库存</span>
              <div>
                <span class="word_inventory_20">{{inventoryData['溶剂油'] && inventoryData['溶剂油'].startStock}}</span>
                <span class="word_14 word_unit" v-if="inventoryData['溶剂油'] && inventoryData['溶剂油'].startStock">吨</span>
              </div>
            </div>
          </div>
          <div class="equipmentInfo word_Bold_16">
            <span>溶剂油</span>
          </div>
        </div>
        <div class="monthlyOutput">
          <div class="monthlyOutputWord">
            <span class="word_12">D-1产量</span>
            <span class="word_20" v-if="cumulativeProductionData['溶剂油']">{{cumulativeProductionData['溶剂油'].totalMonthAmount}}吨</span>
          </div>
          <div class="progressBar">
            <span :style="{ width: cumulativeProductionData['溶剂油'] && planAmountData['溶剂油'] ? ((cumulativeProductionData['溶剂油'].totalMonthAmount / planAmountData['溶剂油'].planCount) > 1 ? 100 : (cumulativeProductionData['溶剂油'].totalMonthAmount / planAmountData['溶剂油'].planCount) * 100) + '%' : 0 }"></span>
            <span></span>  
          </div>
          <div class="monthlyOutputWord">
            <span class="word_12">本月计划产量</span>
            <span class="word_20" v-if="planAmountData['溶剂油']">{{planAmountData['溶剂油'].planCount}}吨</span>
          </div>
      </div>
      </div>
    </div>
    <div class="equipment_parameter_info equipment_parameter_info1">
      <div class="equipment_parameter_info_top">
        <div class="equipment_name" style="left: 50.1%;top: 46%;">
            <span>抽提塔</span>
            <span>K-4001AB</span>
        </div>
        <div class="equipment_parameter_info_88w">
          <div class="moduleItem tableTwoRow">
            <div class="item_title">K-4001A</div>
            <table>
              <tbody>
                <tr class="item_header">
                  <td>TE_4005A</td>
                </tr>
                <tr class="item_data">
                  <td class="item_data data_unit_td">
                    <span class="item_data" :style="{color: equipmentListData['K-4001A'] && equipmentListData['K-4001A']['TE_4005A'] && equipmentListData['K-4001A']['TE_4005A'].type}">{{equipmentListData['K-4001A'] && equipmentListData['K-4001A']['TE_4005A'] && equipmentListData['K-4001A']['TE_4005A'].data}}</span>
                    <span class="item_unit">℃</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="moduleItem tableTwoRow">
            <table>
              <tbody>
                <tr class="item_header">
                  <td>TE_4005B</td>
                </tr>
                <tr class="item_data">
                  <td class="item_data data_unit_td">
                    <span class="item_data" :style="{color: equipmentListData['K-4001A'] && equipmentListData['K-4001A']['TE_4005B'] && equipmentListData['K-4001A']['TE_4005B'].type}">{{equipmentListData['K-4001A'] && equipmentListData['K-4001A']['TE_4005B'] && equipmentListData['K-4001A']['TE_4005B'].data}}</span>
                    <span class="item_unit">℃</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="moduleItem tableTwoRow">
            <table>
              <tbody>
                <tr class="item_header">
                  <td>TE_4005C</td>
                </tr>
                <tr class="item_data">
                  <td class="item_data data_unit_td">
                    <span class="item_data" :style="{color: equipmentListData['K-4001A'] && equipmentListData['K-4001A']['TE_4005C'] && equipmentListData['K-4001A']['TE_4005C'].type}">{{equipmentListData['K-4001A'] && equipmentListData['K-4001A']['TE_4005C'] && equipmentListData['K-4001A']['TE_4005C'].data}}</span>
                    <span class="item_unit">℃</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="equipment_parameter_info_88w">
          <div class="moduleItem tableTwoRow">
            <div class="item_title">K-4001B</div>
            <table>
              <tbody>
                <tr class="item_header">
                  <td>TE_4005D</td>
                </tr>
                <tr class="item_data">
                  <td class="item_data data_unit_td">
                    <span class="item_data" :style="{color: equipmentListData['K-4001B'] && equipmentListData['K-4001B']['TE_4005D'] && equipmentListData['K-4001B']['TE_4005D'].type}">{{equipmentListData['K-4001B'] && equipmentListData['K-4001B']['TE_4005D'] && equipmentListData['K-4001B']['TE_4005D'].data}}</span>
                    <span class="item_unit">℃</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="moduleItem tableTwoRow">
            <table>
              <tbody>
                <tr class="item_header">
                  <td>TE_4005E</td>
                </tr>
                <tr class="item_data">
                  <td class="item_data data_unit_td">
                    <span class="item_data" :style="{color: equipmentListData['K-4001B'] && equipmentListData['K-4001B']['TE_4005E'] && equipmentListData['K-4001B']['TE_4005E'].type}">{{equipmentListData['K-4001B'] && equipmentListData['K-4001B']['TE_4005E'] && equipmentListData['K-4001B']['TE_4005E'].data}}</span>
                    <span class="item_unit">℃</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="moduleItem tableTwoRow">
            <table>
              <tbody>
                <tr class="item_header">
                  <td>TE_4005F</td>
                </tr>
                <tr class="item_data">
                  <td class="item_data data_unit_td">
                    <span class="item_data" :style="{color: equipmentListData['K-4001B'] && equipmentListData['K-4001B']['TE_4005F'] && equipmentListData['K-4001B']['TE_4005F'].type}">{{equipmentListData['K-4001B'] && equipmentListData['K-4001B']['TE_4005F'] && equipmentListData['K-4001B']['TE_4005F'].data}}</span>
                    <span class="item_unit">℃</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="equipment_parameter_info_bottom equipment_parameter_info_bottom_main">
        <div class="equipment_parameter_info_bottom_table">
          <table>
            <tbody>
              <tr class="item_header">
                <td>PT_4037</td>
                <td>PT_4038</td>
                <td>FT_4023</td>
                <td>PT_4039</td>
                <td>PT_4040</td>
              </tr>
              <tr class="item_data">
                <td :style="{color: equipmentListData['K-4001A'] && equipmentListData['K-4001A']['PT_4037'] && equipmentListData['K-4001A']['PT_4037'].type}">{{equipmentListData['K-4001A'] && equipmentListData['K-4001A']['PT_4037'] && equipmentListData['K-4001A']['PT_4037'].data}}</td>
                <td :style="{color: equipmentListData['K-4001A'] && equipmentListData['K-4001A']['PT_4038'] && equipmentListData['K-4001A']['PT_4038'].type}">{{equipmentListData['K-4001A'] && equipmentListData['K-4001A']['PT_4038'] && equipmentListData['K-4001A']['PT_4038'].data}}</td>
                <td :style="{color: equipmentListData['K-4001A'] && equipmentListData['K-4001A']['FT_4023'] && equipmentListData['K-4001A']['FT_4023'].type}">{{equipmentListData['K-4001A'] && equipmentListData['K-4001A']['FT_4023'] && equipmentListData['K-4001A']['FT_4023'].data}}</td>
                <td :style="{color: equipmentListData['K-4001B'] && equipmentListData['K-4001B']['PT_4039'] && equipmentListData['K-4001B']['PT_4039'].type}">{{equipmentListData['K-4001B'] && equipmentListData['K-4001B']['PT_4039'] && equipmentListData['K-4001B']['PT_4039'].data}}</td>
                <td :style="{color: equipmentListData['K-4001B'] && equipmentListData['K-4001B']['PT_4040'] && equipmentListData['K-4001B']['PT_4040'].type}">{{equipmentListData['K-4001B'] && equipmentListData['K-4001B']['PT_4040'] && equipmentListData['K-4001B']['PT_4040'].data}}</td>
              </tr>
              <tr class="item_unit">
                <td>Kpa</td>
                <td>Kpa</td>
                <td>m³/h</td>
                <td>Kpa</td>
                <td>Kpa</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="equipment_parameter_info equipment_parameter_info2">
      <div class="equipment_parameter_info_top">
        <div class="equipment_name" style="left: 32.8%;top: 45%;">
            <span>抽提塔</span>
            <span>K-4002AB</span>
        </div>
        <div class="equipment_parameter_info_88w">
          <div class="moduleItem tableTwoRow">
            <div class="item_title">K-4002A</div>
            <table>
              <tbody>
                <tr class="item_header">
                  <td>LT_4018A</td>
                </tr>
                <tr class="item_data">
                  <td class="item_data data_unit_td">
                    <span class="item_data" :style="{color: equipmentListData['K-4002A'] && equipmentListData['K-4002A']['LT_4018A'] && equipmentListData['K-4002A']['LT_4018A'].type}">{{equipmentListData['K-4002A'] && equipmentListData['K-4002A']['LT_4018A'] && equipmentListData['K-4002A']['LT_4018A'].data}}</span>
                    <span class="item_unit">mm</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="moduleItem tableTwoRow">
            <table>
              <tbody>
                <tr class="item_header">
                  <td>LT_4005A</td>
                </tr>
                <tr class="item_data">
                  <td class="item_data data_unit_td">
                    <span class="item_data" :style="{color: equipmentListData['K-4002A'] && equipmentListData['K-4002A']['LT_4005A'] && equipmentListData['K-4002A']['LT_4005A'].type}">{{equipmentListData['K-4002A'] && equipmentListData['K-4002A']['LT_4005A'] && equipmentListData['K-4002A']['LT_4005A'].data}}</span>
                    <span class="item_unit">mm</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="moduleItem tableTwoRow">
            <table>
              <tbody>
                <tr class="item_header">
                  <td>LT_4005B</td>
                </tr>
                <tr class="item_data">
                  <td class="item_data data_unit_td">
                    <span class="item_data" :style="{color: equipmentListData['K-4002A'] && equipmentListData['K-4002A']['LT_4005B'] && equipmentListData['K-4002A']['LT_4005B'].type}">{{equipmentListData['K-4002A'] && equipmentListData['K-4002A']['LT_4005B'] && equipmentListData['K-4002A']['LT_4005B'].data}}</span>
                    <span class="item_unit">mm</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="equipment_parameter_info_295w">
          <div class="moduleItem">
            <div class="item_title">K-4002B</div>
            <table>
              <tbody>
                <tr class="item_header">
                    <td>LT_4018B</td>
                    <td>LT_4005C</td>
                    <td>LT_4005D</td>
                </tr>
                <tr class="item_data">
                    <td :style="{color: equipmentListData['K-4002B'] && equipmentListData['K-4002B']['LT_4018B'] && equipmentListData['K-4002B']['LT_4018B'].type}">{{equipmentListData['K-4002B'] && equipmentListData['K-4002B']['LT_4018B'] && equipmentListData['K-4002B']['LT_4018B'].data}}</td>
                    <td :style="{color: equipmentListData['K-4002B'] && equipmentListData['K-4002B']['LT_4005C'] && equipmentListData['K-4002B']['LT_4005C'].type}">{{equipmentListData['K-4002B'] && equipmentListData['K-4002B']['LT_4005C'] && equipmentListData['K-4002B']['LT_4005C'].data}}</td>
                    <td :style="{color: equipmentListData['K-4002B'] && equipmentListData['K-4002B']['LT_4005D'] && equipmentListData['K-4002B']['LT_4005D'].type}">{{equipmentListData['K-4002B'] && equipmentListData['K-4002B']['LT_4005D'] && equipmentListData['K-4002B']['LT_4005D'].data}}</td>
                </tr>
                <tr class="item_unit">
                    <td>mm</td>
                    <td>mm</td>
                    <td>mm</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="moduleItem">
            <table>
              <tbody>
                <tr class="item_header">
                    <td>TE_4006D</td>
                    <td>TE_4006E</td>
                    <td>TE_4006F</td>
                    <td>PT_4043</td>
                </tr>
                <tr class="item_data">
                    <td :style="{color: equipmentListData['K-4002B'] && equipmentListData['K-4002B']['TE_4006D'] && equipmentListData['K-4002B']['TE_4006D'].type}">{{equipmentListData['K-4002B'] && equipmentListData['K-4002B']['TE_4006D'] && equipmentListData['K-4002B']['TE_4006D'].data}}</td>
                    <td :style="{color: equipmentListData['K-4002B'] && equipmentListData['K-4002B']['TE_4006E'] && equipmentListData['K-4002B']['TE_4006E'].type}">{{equipmentListData['K-4002B'] && equipmentListData['K-4002B']['TE_4006E'] && equipmentListData['K-4002B']['TE_4006E'].data}}</td>
                    <td :style="{color: equipmentListData['K-4002B'] && equipmentListData['K-4002B']['TE_4006F'] && equipmentListData['K-4002B']['TE_4006F'].type}">{{equipmentListData['K-4002B'] && equipmentListData['K-4002B']['TE_4006F'] && equipmentListData['K-4002B']['TE_4006F'].data}}</td>
                    <td :style="{color: equipmentListData['K-4002B'] && equipmentListData['K-4002B']['PT_4043'] && equipmentListData['K-4002B']['PT_4043'].type}">{{equipmentListData['K-4002B'] && equipmentListData['K-4002B']['PT_4043'] && equipmentListData['K-4002B']['PT_4043'].data}}</td>
                </tr>
                <tr class="item_unit">
                    <td>℃</td>
                    <td>℃</td>
                    <td>℃</td>
                    <td>KPa</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="equipment_parameter_info_bottom equipment_parameter_info_bottom_main">
        <div class="equipment_parameter_info_bottom_table">
          <table>
            <tbody>
              <tr class="item_header">
                <td>TE_4006A</td>
                <td>TE_4006B</td>
                <td>TE_4006C</td>
                <td>PT_4041</td>
                <td>FT_4024</td>
              </tr>
              <tr class="item_data">
                <td :style="{color: equipmentListData['K-4002A'] && equipmentListData['K-4002A']['TE_4006A'] && equipmentListData['K-4002A']['TE_4006A'].type}">{{equipmentListData['K-4002A'] && equipmentListData['K-4002A']['TE_4006A'] && equipmentListData['K-4002A']['TE_4006A'].data}}</td>
                <td :style="{color: equipmentListData['K-4002A'] && equipmentListData['K-4002A']['TE_4006B'] && equipmentListData['K-4002A']['TE_4006B'].type}">{{equipmentListData['K-4002A'] && equipmentListData['K-4002A']['TE_4006B'] && equipmentListData['K-4002A']['TE_4006B'].data}}</td>
                <td :style="{color: equipmentListData['K-4002A'] && equipmentListData['K-4002A']['TE_4006C'] && equipmentListData['K-4002A']['TE_4006C'].type}">{{equipmentListData['K-4002A'] && equipmentListData['K-4002A']['TE_4006C'] && equipmentListData['K-4002A']['TE_4006C'].data}}</td>
                <td>无字段</td>
                <td :style="{color: equipmentListData['K-4002A'] && equipmentListData['K-4002A']['FT_4024'] && equipmentListData['K-4002A']['FT_4024'].type}">{{equipmentListData['K-4002A'] && equipmentListData['K-4002A']['FT_4024'] && equipmentListData['K-4002A']['FT_4024'].data}}</td>
              </tr>
              <tr class="item_unit">
                <td>℃</td>
                <td>℃</td>
                <td>℃</td>
                <td>Kpa</td>
                <td>m³/h</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="equipment_parameter_info equipment_parameter_info3">
      <div class="equipment_parameter_info_top">
        <div class="equipment_name" style="left: 50.1%;top: 39%;">
            <span>轻相加热炉</span>
            <span>F-4001</span>
        </div>
        <div class="equipment_parameter_info_154w">
          <div class="moduleItem">
            <table>
              <tbody>
                <tr class="item_header">
                  <td>PT_4012</td>
                  <td>PT_4013</td>
                </tr>
                <tr class="item_data">
                  <td :style="{color: equipmentListData['F-4001'] && equipmentListData['F-4001']['PT_4012'] && equipmentListData['F-4001']['PT_4012'].type}">{{equipmentListData['F-4001'] && equipmentListData['F-4001']['PT_4012'] && equipmentListData['F-4001']['PT_4012'].data}}</td>
                  <td :style="{color: equipmentListData['F-4001'] && equipmentListData['F-4001']['PT_4013'] && equipmentListData['F-4001']['PT_4013'].type}">{{equipmentListData['F-4001'] && equipmentListData['F-4001']['PT_4013'] && equipmentListData['F-4001']['PT_4013'].data}}</td>
                </tr>
                <tr class="item_unit">
                  <td>Mpa</td>
                  <td>Mpa</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="moduleItem">
            <table>
              <tbody>
                <tr class="item_header">
                  <td>PT_4081</td>
                  <td>PT_4082</td>
                </tr>
                <tr class="item_data">
                  <td :style="{color: equipmentListData['F-4001'] && equipmentListData['F-4001']['PT_4081'] && equipmentListData['F-4001']['PT_4081'].type}">{{equipmentListData['F-4001'] && equipmentListData['F-4001']['PT_4081'] && equipmentListData['F-4001']['PT_4081'].data}}</td>
                  <td :style="{color: equipmentListData['F-4001'] && equipmentListData['F-4001']['PT_4082'] && equipmentListData['F-4001']['PT_4082'].type}">{{equipmentListData['F-4001'] && equipmentListData['F-4001']['PT_4082'] && equipmentListData['F-4001']['PT_4082'].data}}</td>
                </tr>
                <tr class="item_unit">
                  <td>Pa</td>
                  <td>KPa</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="equipment_parameter_info_154w">
          <div class="moduleItem">
            <table>
              <tbody>
                <tr class="item_header">
                  <td>PT_4086</td>
                  <td>PT_4087</td>
                </tr>
                <tr class="item_data">
                  <td :style="{color: equipmentListData['F-4001'] && equipmentListData['F-4001']['PT_4086'] && equipmentListData['F-4001']['PT_4086'].type}">{{equipmentListData['F-4001'] && equipmentListData['F-4001']['PT_4086'] && equipmentListData['F-4001']['PT_4086'].data}}</td>
                  <td :style="{color: equipmentListData['F-4001'] && equipmentListData['F-4001']['PT_4087'] && equipmentListData['F-4001']['PT_4087'].type}">{{equipmentListData['F-4001'] && equipmentListData['F-4001']['PT_4087'] && equipmentListData['F-4001']['PT_4087'].data}}</td>
                </tr>
                <tr class="item_unit">
                  <td>KPa</td>
                  <td>KPa</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="moduleItem">
            <table>
              <tbody>
                <tr class="item_header">
                  <td>FT_4080</td>
                  <td>AT_4080</td>
                </tr>
                <tr class="item_data">
                  <td :style="{color: equipmentListData['F-4001'] && equipmentListData['F-4001']['FT_4080'] && equipmentListData['F-4001']['FT_4080'].type}">{{equipmentListData['F-4001'] && equipmentListData['F-4001']['FT_4080'] && equipmentListData['F-4001']['FT_4080'].data}}</td>
                  <td :style="{color: equipmentListData['F-4001'] && equipmentListData['F-4001']['AT_4080'] && equipmentListData['F-4001']['AT_4080'].type}">{{equipmentListData['F-4001'] && equipmentListData['F-4001']['AT_4080'] && equipmentListData['F-4001']['AT_4080'].data}}</td>
                </tr>
                <tr class="item_unit">
                  <td>Dm³/h</td>
                  <td>%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="equipment_parameter_info_bottom equipment_parameter_info_bottom_main">
        <div class="equipment_parameter_info_bottom_table">
          <table>
            <tbody>
              <tr class="item_header">
                <td>TE_4037</td>
                <td>TE_4038</td>
                <td>TE_4039</td>
                <td>TT_4080</td>
                <td>TT_4081B_C</td>
              </tr>
              <tr class="item_data">
                <td :style="{color: equipmentListData['F-4001'] && equipmentListData['F-4001']['TE_4037'] && equipmentListData['F-4001']['TE_4037'].type}">{{equipmentListData['F-4001'] && equipmentListData['F-4001']['TE_4037'] && equipmentListData['F-4001']['TE_4037'].data}}</td>
                <td :style="{color: equipmentListData['F-4001'] && equipmentListData['F-4001']['TE_4038'] && equipmentListData['F-4001']['TE_4038'].type}">{{equipmentListData['F-4001'] && equipmentListData['F-4001']['TE_4038'] && equipmentListData['F-4001']['TE_4038'].data}}</td>
                <td :style="{color: equipmentListData['F-4001'] && equipmentListData['F-4001']['TE_4039'] && equipmentListData['F-4001']['TE_4039'].type}">{{equipmentListData['F-4001'] && equipmentListData['F-4001']['TE_4039'] && equipmentListData['F-4001']['TE_4039'].data}}</td>
                <td :style="{color: equipmentListData['F-4001'] && equipmentListData['F-4001']['TT_4080'] && equipmentListData['F-4001']['TT_4080'].type}">{{equipmentListData['F-4001'] && equipmentListData['F-4001']['TT_4080'] && equipmentListData['F-4001']['TT_4080'].data}}</td>
                <td :style="{color: equipmentListData['F-4001'] && equipmentListData['F-4001']['TT_4081B_C'] && equipmentListData['F-4001']['TT_4081B_C'].type}">{{equipmentListData['F-4001'] && equipmentListData['F-4001']['TT_4081B_C'] && equipmentListData['F-4001']['TT_4081B_C'].data}}</td>
              </tr>
              <tr class="item_unit">
                <td>℃</td>
                <td>℃</td>
                <td>℃</td>
                <td>℃</td>
                <td>℃</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="equipment_parameter_info equipment_parameter_info4">
      <div class="equipment_parameter_info_top">
        <div class="equipment_name" style="left: 50.1%;top: 39%;">
            <span>重相加热炉</span>
            <span>F-4002</span>
        </div>
        <div class="equipment_parameter_info_154w">
          <div class="moduleItem">
            <table>
              <tbody>
                <tr class="item_header">
                  <td>PT_4015</td>
                  <td>PT_4016</td>
                </tr>
                <tr class="item_data">
                  <td :style="{color: equipmentListData['F-4002'] && equipmentListData['F-4002']['PT_4015'] && equipmentListData['F-4002']['PT_4015'].type}">{{equipmentListData['F-4002'] && equipmentListData['F-4002']['PT_4015'] && equipmentListData['F-4002']['PT_4015'].data}}</td>
                  <td :style="{color: equipmentListData['F-4002'] && equipmentListData['F-4002']['PT_4016'] && equipmentListData['F-4002']['PT_4016'].type}">{{equipmentListData['F-4002'] && equipmentListData['F-4002']['PT_4016'] && equipmentListData['F-4002']['PT_4016'].data}}</td>
                </tr>
                <tr class="item_unit">
                  <td>Mpa</td>
                  <td>Mpa</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="moduleItem">
            <table>
              <tbody>
                <tr class="item_header">
                  <td>PT_4091</td>
                  <td>PT_4092</td>
                </tr>
                <tr class="item_data">
                  <td :style="{color: equipmentListData['F-4002'] && equipmentListData['F-4002']['PT_4091'] && equipmentListData['F-4002']['PT_4091'].type}">{{equipmentListData['F-4002'] && equipmentListData['F-4002']['PT_4091'] && equipmentListData['F-4002']['PT_4091'].data}}</td>
                  <td :style="{color: equipmentListData['F-4002'] && equipmentListData['F-4002']['PT_4092'] && equipmentListData['F-4002']['PT_4092'].type}">{{equipmentListData['F-4002'] && equipmentListData['F-4002']['PT_4092'] && equipmentListData['F-4002']['PT_4092'].data}}</td>
                </tr>
                <tr class="item_unit">
                  <td>Pa</td>
                  <td>KPa</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="equipment_parameter_info_154w">
          <div class="moduleItem">
            <table>
              <tbody>
                <tr class="item_header">
                  <td>PT_4096</td>
                  <td>PT_4097</td>
                </tr>
                <tr class="item_data">
                  <td :style="{color: equipmentListData['F-4002'] && equipmentListData['F-4002']['PT_4096'] && equipmentListData['F-4002']['PT_4096'].type}">{{equipmentListData['F-4002'] && equipmentListData['F-4002']['PT_4096'] && equipmentListData['F-4002']['PT_4096'].data}}</td>
                  <td :style="{color: equipmentListData['F-4002'] && equipmentListData['F-4002']['PT_4097'] && equipmentListData['F-4002']['PT_4097'].type}">{{equipmentListData['F-4002'] && equipmentListData['F-4002']['PT_4097'] && equipmentListData['F-4002']['PT_4097'].data}}</td>
                </tr>
                <tr class="item_unit">
                  <td>KPa</td>
                  <td>KPa</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="moduleItem">
            <table>
              <tbody>
                <tr class="item_header">
                  <td>FT_4090</td>
                  <td>AT_4090</td>
                </tr>
                <tr class="item_data">
                  <td :style="{color: equipmentListData['F-4002'] && equipmentListData['F-4002']['FT_4090'] && equipmentListData['F-4002']['FT_4090'].type}">{{equipmentListData['F-4002'] && equipmentListData['F-4002']['FT_4090'] && equipmentListData['F-4002']['FT_4090'].data}}</td>
                  <td :style="{color: equipmentListData['F-4002'] && equipmentListData['F-4002']['AT_4090'] && equipmentListData['F-4002']['AT_4090'].type}">{{equipmentListData['F-4002'] && equipmentListData['F-4002']['AT_4090'] && equipmentListData['F-4002']['AT_4090'].data}}</td>
                </tr>
                <tr class="item_unit">
                  <td>Dm³/h</td>
                  <td>%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="equipment_parameter_info_bottom equipment_parameter_info_bottom_main">
        <div class="equipment_parameter_info_bottom_table">
          <table>
            <tbody>
              <tr class="item_header">
                <td>TE_4041</td>
                <td>TE_4042</td>
                <td>TE_4043</td>
                <td>TT_4090</td>
                <td>TT_4091B_C</td>
              </tr>
              <tr class="item_data">
                <td :style="{color: equipmentListData['F-4002'] && equipmentListData['F-4002']['TE_4041'] && equipmentListData['F-4002']['TE_4041'].type}">{{equipmentListData['F-4002'] && equipmentListData['F-4002']['TE_4041'] && equipmentListData['F-4002']['TE_4041'].data}}</td>
                <td :style="{color: equipmentListData['F-4002'] && equipmentListData['F-4002']['TE_4042'] && equipmentListData['F-4002']['TE_4042'].type}">{{equipmentListData['F-4002'] && equipmentListData['F-4002']['TE_4042'] && equipmentListData['F-4002']['TE_4042'].data}}</td>
                <td :style="{color: equipmentListData['F-4002'] && equipmentListData['F-4002']['TE_4043'] && equipmentListData['F-4002']['TE_4043'].type}">{{equipmentListData['F-4002'] && equipmentListData['F-4002']['TE_4043'] && equipmentListData['F-4002']['TE_4043'].data}}</td>
                <td :style="{color: equipmentListData['F-4002'] && equipmentListData['F-4002']['TT_4090'] && equipmentListData['F-4002']['TT_4090'].type}">{{equipmentListData['F-4002'] && equipmentListData['F-4002']['TT_4090'] && equipmentListData['F-4002']['TT_4090'].data}}</td>
                <td :style="{color: equipmentListData['F-4002'] && equipmentListData['F-4002']['TT_4091B_C'] && equipmentListData['F-4002']['TT_4091B_C'].type}">{{equipmentListData['F-4002'] && equipmentListData['F-4002']['TT_4091B_C'] && equipmentListData['F-4002']['TT_4091B_C'].data}}</td>
              </tr>
              <tr class="item_unit">
                <td>℃</td>
                <td>℃</td>
                <td>℃</td>
                <td>℃</td>
                <td>℃</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="positionMinisDiv positionMinisDiv2">
      <div class="oilDepotA positionOilDepotDiv">
        <div class="accidentShelf">
          <!-- <img class="accidentShadeImg" :src="AccidentShade" alt="" /> -->
          <!-- <div class="accidentShadeImg"></div> -->
          <div class="unqualifiedModal" v-if="reportInfoObj && reportInfoObj['重质沥青'] && reportInfoObj['重质沥青'].flag">
            <img class="forkImg" @click="$emit('updateReportInfoFlagFuc','重质沥青')" :src="ForkImg" alt="">
            <div>
              <span>取样地点:</span>
              <span>{{reportInfoObj['重质沥青'].sampleAddr}}</span>
            </div>
            <div>
              <span>取料名称:</span>
              <span>{{reportInfoObj['重质沥青'].materialName}}</span>
            </div>
            <div>
              <span>取样时间:</span>
              <span>{{reportInfoObj['重质沥青'].sampleTime}}</span>
            </div>
            <div>
              <span>样品分类:</span>
              <span>{{reportInfoObj['重质沥青'].sampleTypeName}}</span>
            </div>
            <div>
              <span>检验结果:</span>
              <span>不合格</span>
            </div>
            <div>
              <span>检验项:</span>
              <div class="inspection_Item" v-if="reportInfoObj['重质沥青'].itemsAuditVOList">
                  <span v-for="item of reportInfoObj['重质沥青'].itemsAuditVOList" :key="item.id">
                    <span>{{item.name}}</span>
                    <span>{{item.place}}</span>
                  </span>
              </div>
            </div>
          </div>
          <img class="accidentShelfImg" :src="AccidentNormal" alt="" />
          <img
            class="accidentWaterImg accidentNormalWaterImg"
            :src="AccidentNormalWater"
            :style="{ height: (dataSource['重质沥青(针状焦)'] && dataSource['重质沥青(针状焦)'].height ? (dataSource['重质沥青(针状焦)'].stock / dataSource['重质沥青(针状焦)'].height) ? (dataSource['重质沥青(针状焦)'].stock / dataSource['重质沥青(针状焦)'].height) > 1 ? 1.75 : .12 + (dataSource['重质沥青(针状焦)'].stock / dataSource['重质沥青(针状焦)'].height) * 1.63: 0 : 0 )+ 'rem', }"
            alt=""
          />
          <div
          class="borderErrLine boraccidentLine"
          :style="{top:
              (dataSource['重质沥青(针状焦)'] && dataSource['重质沥青(针状焦)'].height ? ((dataSource['重质沥青(针状焦)'].alarmUpper / dataSource['重质沥青(针状焦)'].height)
                ? 1.7 - ((dataSource['重质沥青(针状焦)'].alarmUpper / dataSource['重质沥青(针状焦)'].height) > 1 ? 1.55 : (dataSource['重质沥青(针状焦)'].alarmUpper / dataSource['重质沥青(针状焦)'].height) * 1.55)
                : 1.7) : 1.7) + 'rem',}"
        ></div>
        <div
          class="borderWarningLine boraccidentLine"
          :style="{top:
              (dataSource['重质沥青(针状焦)'] && dataSource['重质沥青(针状焦)'].height ? ((dataSource['重质沥青(针状焦)'].alarmLower / dataSource['重质沥青(针状焦)'].height)
                ? 1.7 - ((dataSource['重质沥青(针状焦)'].alarmLower / dataSource['重质沥青(针状焦)'].height) > 1 ? 1.55 : (dataSource['重质沥青(针状焦)'].alarmLower / dataSource['重质沥青(针状焦)'].height) * 1.55)
                : 1.7) : 1.7) + 'rem',}"
        ></div>
          <img
            class="accidentArrows arrows"
            :src="ArrowsError"
            :style="{top:
              (dataSource['重质沥青(针状焦)'] && dataSource['重质沥青(针状焦)'].height ? ((dataSource['重质沥青(针状焦)'].alarmUpper / dataSource['重质沥青(针状焦)'].height)
                ? 1.75 - ((dataSource['重质沥青(针状焦)'].alarmUpper / dataSource['重质沥青(针状焦)'].height) > 1 ? 1.55 : (dataSource['重质沥青(针状焦)'].alarmUpper / dataSource['重质沥青(针状焦)'].height) * 1.55)
                : 1.75) : 1.75) + 'rem',}"
            alt=""
          />
          <img
            class="accidentArrows arrows"
            :src="ArrowsWarning"
            :style="{top:
              (dataSource['重质沥青(针状焦)'] && dataSource['重质沥青(针状焦)'].height ? ((dataSource['重质沥青(针状焦)'].alarmLower / dataSource['重质沥青(针状焦)'].height)
                ? 1.75 - ((dataSource['重质沥青(针状焦)'].alarmLower / dataSource['重质沥青(针状焦)'].height) > 1 ? 1.55 : (dataSource['重质沥青(针状焦)'].alarmLower / dataSource['重质沥青(针状焦)'].height) * 1.55)
                : 1.75) : 1.75) + 'rem',}"
            alt=""
          />
          <div class="accidentShelfRight">
            <img :src="tipsMiddle" :style="{ top: '.25rem' }" alt="" />
            <div :style="{ top: '.25rem' }">
              <span class="word_14">当前库存</span>
              <div>
                <span class="word_inventory_20">{{dataSource['重质沥青(针状焦)'] && dataSource['重质沥青(针状焦)'].stock}}</span>
                <span class="word_14 word_unit" v-if="dataSource['重质沥青(针状焦)'] && dataSource['重质沥青(针状焦)'].stock">吨</span>
              </div>
            </div>
            <img :src="tipsMiddle" :style="{ top: '1rem' }" alt="" />
            <div :style="{ top: '1rem' }">
              <span class="word_14">期初库存</span>
              <div>
                <span class="word_inventory_20">{{inventoryData['重质沥青(针状焦)'] && inventoryData['重质沥青(针状焦)'].startStock}}</span>
                <span class="word_14 word_unit" v-if="inventoryData['重质沥青(针状焦)'] && inventoryData['重质沥青(针状焦)'].startStock">吨</span>
              </div>
            </div>
          </div>
          <div class="equipmentInfo word_Bold_16">
            <span>重质沥青</span>
          </div>
        </div>
        <div class="monthlyOutput">
        <div class="monthlyOutputWord">
          <span class="word_12">D-1产量</span>
          <span class="word_20" v-if="cumulativeProductionData['重质沥青(针状焦)']">{{cumulativeProductionData['重质沥青(针状焦)'].totalMonthAmount}}吨</span>
        </div>
        <div class="progressBar">
          <span :style="{ width: cumulativeProductionData['重质沥青(针状焦)'] && planAmountData['重质沥青(针状焦)'] ? ((cumulativeProductionData['重质沥青(针状焦)'].totalMonthAmount / planAmountData['重质沥青(针状焦)'].planCount) > 1 ? 100 : (cumulativeProductionData['重质沥青(针状焦)'].totalMonthAmount / planAmountData['重质沥青(针状焦)'].planCount) * 100) + '%' : 0 }"></span>
          <span></span>  
        </div>
        <div class="monthlyOutputWord">
          <span class="word_12">本月计划产量</span>
          <span class="word_20" v-if="planAmountData['重质沥青(针状焦)']">{{planAmountData['重质沥青(针状焦)'].planCount}}吨</span>
        </div>
      </div>
      </div>
      <div class="oilDepotA positionOilDepotDiv">
        <div class="accidentShelf">
          <!-- <img class="accidentShadeImg" :src="AccidentShade" alt="" /> -->
          <!-- <div class="accidentShadeImg"></div> -->
          <div class="unqualifiedModal" v-if="reportInfoObj && reportInfoObj['蒽油'] && reportInfoObj['蒽油'].flag">
            <img class="forkImg" @click="$emit('updateReportInfoFlagFuc','蒽油')" :src="ForkImg" alt="">
            <div>
              <span>取样地点:</span>
              <span>{{reportInfoObj['蒽油'].sampleAddr}}</span>
            </div>
            <div>
              <span>取料名称:</span>
              <span>{{reportInfoObj['蒽油'].materialName}}</span>
            </div>
            <div>
              <span>取样时间:</span>
              <span>{{reportInfoObj['蒽油'].sampleTime}}</span>
            </div>
            <div>
              <span>样品分类:</span>
              <span>{{reportInfoObj['蒽油'].sampleTypeName}}</span>
            </div>
            <div>
              <span>检验结果:</span>
              <span>不合格</span>
            </div>
            <div>
              <span>检验项:</span>
              <div class="inspection_Item" v-if="reportInfoObj['蒽油'].itemsAuditVOList">
                  <span v-for="item of reportInfoObj['蒽油'].itemsAuditVOList" :key="item.id">
                    <span>{{item.name}}</span>
                    <span>{{item.place}}</span>
                  </span>
              </div>
            </div>
          </div>
          <img class="accidentShelfImg" :src="AccidentNormal" alt="" />
          <img
            class="accidentWaterImg accidentNormalWaterImg"
            :src="AccidentNormalWater"
            :style="{ height: (dataSource['蒽油(针状焦)'] && dataSource['蒽油(针状焦)'].height ? (dataSource['蒽油(针状焦)'].stock / dataSource['蒽油(针状焦)'].height) ? (dataSource['蒽油(针状焦)'].stock / dataSource['蒽油(针状焦)'].height) > 1 ? 1.75 : .12 + (dataSource['蒽油(针状焦)'].stock / dataSource['蒽油(针状焦)'].height) * 1.63: 0 : 0 )+ 'rem', }"
            alt=""
          />
          <div
          class="borderErrLine boraccidentLine"
          :style="{top:
              (dataSource['蒽油(针状焦)'] && dataSource['蒽油(针状焦)'].height ? ((dataSource['蒽油(针状焦)'].alarmUpper / dataSource['蒽油(针状焦)'].height)
                ? 1.7 - ((dataSource['蒽油(针状焦)'].alarmUpper / dataSource['蒽油(针状焦)'].height) > 1 ? 1.55 : (dataSource['蒽油(针状焦)'].alarmUpper / dataSource['蒽油(针状焦)'].height) * 1.55)
                : 1.7) : 1.7) + 'rem',}"
        ></div>
        <div
          class="borderWarningLine boraccidentLine"
          :style="{top:
              (dataSource['蒽油(针状焦)'] && dataSource['蒽油(针状焦)'].height ? ((dataSource['蒽油(针状焦)'].alarmLower / dataSource['蒽油(针状焦)'].height)
                ? 1.7 - ((dataSource['蒽油(针状焦)'].alarmLower / dataSource['蒽油(针状焦)'].height) > 1 ? 1.55 : (dataSource['蒽油(针状焦)'].alarmLower / dataSource['蒽油(针状焦)'].height) * 1.55)
                : 1.7) : 1.7) + 'rem',}"
        ></div>
          <img
            class="accidentArrows arrows"
            :src="ArrowsError"
            :style="{top:
              (dataSource['蒽油(针状焦)'] && dataSource['蒽油(针状焦)'].height ? ((dataSource['蒽油(针状焦)'].alarmUpper / dataSource['蒽油(针状焦)'].height)
                ? 1.75 - ((dataSource['蒽油(针状焦)'].alarmUpper / dataSource['蒽油(针状焦)'].height) > 1 ? 1.55 : (dataSource['蒽油(针状焦)'].alarmUpper / dataSource['蒽油(针状焦)'].height) * 1.55)
                : 1.75) : 1.75) + 'rem',}"
            alt=""
          />
          <img
            class="accidentArrows arrows"
            :src="ArrowsWarning"
            :style="{top:
              (dataSource['蒽油(针状焦)'] && dataSource['蒽油(针状焦)'].height ? ((dataSource['蒽油(针状焦)'].alarmLower / dataSource['蒽油(针状焦)'].height)
                ? 1.75 - ((dataSource['蒽油(针状焦)'].alarmLower / dataSource['蒽油(针状焦)'].height) > 1 ? 1.55 : (dataSource['蒽油(针状焦)'].alarmLower / dataSource['蒽油(针状焦)'].height) * 1.55)
                : 1.75) : 1.75) + 'rem',}"
            alt=""
          />
          <div class="accidentShelfRight">
            <img :src="tipsMiddle" :style="{ top: '.25rem' }" alt="" />
            <div :style="{ top: '.25rem' }">
              <span class="word_14">当前库存</span>
              <div>
                <span class="word_inventory_20">{{dataSource['蒽油(针状焦)'] && dataSource['蒽油(针状焦)'].stock}}</span>
                <span class="word_14 word_unit" v-if="dataSource['蒽油(针状焦)'] && dataSource['蒽油(针状焦)'].stock">吨</span>
              </div>
            </div>
            <img :src="tipsMiddle" :style="{ top: '1rem' }" alt="" />
            <div :style="{ top: '1rem' }">
              <span class="word_14">期初库存</span>
              <div>
                <span class="word_inventory_20">{{inventoryData['蒽油(针状焦)'] && inventoryData['蒽油(针状焦)'].startStock}}</span>
                <span class="word_14 word_unit" v-if="inventoryData['蒽油(针状焦)'] && inventoryData['蒽油(针状焦)'].startStock">吨</span>
              </div>
            </div>
          </div>
          <div class="equipmentInfo word_Bold_16">
            <span>蒽油</span>
          </div>
        </div>
        <div class="monthlyOutput">
        <div class="monthlyOutputWord">
          <span class="word_12">D-1产量</span>
          <span class="word_20" v-if="cumulativeProductionData['蒽油(针状焦)']">{{cumulativeProductionData['蒽油(针状焦)'].totalMonthAmount}}吨</span>
        </div>
        <div class="progressBar">
          <span :style="{ width: cumulativeProductionData['蒽油(针状焦)'] && planAmountData['蒽油(针状焦)'] ? ((cumulativeProductionData['蒽油(针状焦)'].totalMonthAmount / planAmountData['蒽油(针状焦)'].planCount) > 1 ? 100 : (cumulativeProductionData['蒽油(针状焦)'].totalMonthAmount / planAmountData['蒽油(针状焦)'].planCount) * 100) + '%' : 0 }"></span>
          <span></span>  
        </div>
        <div class="monthlyOutputWord">
          <span class="word_12">本月计划产量</span>
          <span class="word_20" v-if="planAmountData['蒽油(针状焦)']">{{planAmountData['蒽油(针状焦)'].planCount}}吨</span>
        </div>
      </div>
      </div>
      <div class="oilDepotA positionOilDepotDiv">
        <div class="accidentShelf">
          <!-- <img class="accidentShadeImg" :src="AccidentShade" alt="" /> -->
          <!-- <div class="accidentShadeImg"></div> -->
          <div class="unqualifiedModal" v-if="reportInfoObj && reportInfoObj['精制沥青'] && reportInfoObj['精制沥青'].flag">
            <img class="forkImg" @click="$emit('updateReportInfoFlagFuc','精制沥青')" :src="ForkImg" alt="">
            <div>
              <span>取样地点:</span>
              <span>{{reportInfoObj['精制沥青'].sampleAddr}}</span>
            </div>
            <div>
              <span>取料名称:</span>
              <span>{{reportInfoObj['精制沥青'].materialName}}</span>
            </div>
            <div>
              <span>取样时间:</span>
              <span>{{reportInfoObj['精制沥青'].sampleTime}}</span>
            </div>
            <div>
              <span>样品分类:</span>
              <span>{{reportInfoObj['精制沥青'].sampleTypeName}}</span>
            </div>
            <div>
              <span>检验结果:</span>
              <span>不合格</span>
            </div>
            <div>
              <span>检验项:</span>
              <div class="inspection_Item" v-if="reportInfoObj['精制沥青'].itemsAuditVOList">
                  <span v-for="item of reportInfoObj['精制沥青'].itemsAuditVOList" :key="item.id">
                    <span>{{item.name}}</span>
                    <span>{{item.place}}</span>
                  </span>
              </div>
            </div>
          </div>
          <img class="accidentShelfImg" :src="AccidentError" alt="" />
          <img
            class="accidentWaterImg accidentNormalWaterImg"
            :src="AccidentErrorWater"
            :style="{ height: (dataSource['精制沥青(针状焦)'] && dataSource['精制沥青(针状焦)'].height ? (dataSource['精制沥青(针状焦)'].stock / dataSource['精制沥青(针状焦)'].height) ? (dataSource['精制沥青(针状焦)'].stock / dataSource['精制沥青(针状焦)'].height) > 1 ? 1.75 : .12 + (dataSource['精制沥青(针状焦)'].stock / dataSource['精制沥青(针状焦)'].height) * 1.63: 0 : 0 )+ 'rem', }"
            alt=""
          />
          <div
          class="borderErrLine boraccidentLine"
          :style="{top:
              (dataSource['精制沥青(针状焦)'] && dataSource['精制沥青(针状焦)'].height ? ((dataSource['精制沥青(针状焦)'].alarmUpper / dataSource['精制沥青(针状焦)'].height)
                ? 1.7 - ((dataSource['精制沥青(针状焦)'].alarmUpper / dataSource['精制沥青(针状焦)'].height) > 1 ? 1.55 : (dataSource['精制沥青(针状焦)'].alarmUpper / dataSource['精制沥青(针状焦)'].height) * 1.55)
                : 1.7) : 1.7) + 'rem',}"
        ></div>
        <div
          class="borderWarningLine boraccidentLine"
          :style="{top:
              (dataSource['精制沥青(针状焦)'] && dataSource['精制沥青(针状焦)'].height ? ((dataSource['精制沥青(针状焦)'].alarmLower / dataSource['精制沥青(针状焦)'].height)
                ? 1.7 - ((dataSource['精制沥青(针状焦)'].alarmLower / dataSource['精制沥青(针状焦)'].height) > 1 ? 1.55 : (dataSource['精制沥青(针状焦)'].alarmLower / dataSource['精制沥青(针状焦)'].height) * 1.55)
                : 1.7) : 1.7) + 'rem',}"
        ></div>
          <img
            class="accidentArrows arrows"
            :src="ArrowsError"
            :style="{top:
              (dataSource['精制沥青(针状焦)'] && dataSource['精制沥青(针状焦)'].height ? ((dataSource['精制沥青(针状焦)'].alarmUpper / dataSource['精制沥青(针状焦)'].height)
                ? 1.75 - ((dataSource['精制沥青(针状焦)'].alarmUpper / dataSource['精制沥青(针状焦)'].height) > 1 ? 1.55 : (dataSource['精制沥青(针状焦)'].alarmUpper / dataSource['精制沥青(针状焦)'].height) * 1.55)
                : 1.75) : 1.75) + 'rem',}"
            alt=""
          />
          <img
            class="accidentArrows arrows"
            :src="ArrowsWarning"
            :style="{top:
              (dataSource['精制沥青(针状焦)'] && dataSource['精制沥青(针状焦)'].height ? ((dataSource['精制沥青(针状焦)'].alarmLower / dataSource['精制沥青(针状焦)'].height)
                ? 1.75 - ((dataSource['精制沥青(针状焦)'].alarmLower / dataSource['精制沥青(针状焦)'].height) > 1 ? 1.55 : (dataSource['精制沥青(针状焦)'].alarmLower / dataSource['精制沥青(针状焦)'].height) * 1.55)
                : 1.75) : 1.75) + 'rem',}"
            alt=""
          />
          <div class="accidentShelfRight">
            <img :src="tipsMiddle" :style="{ top: '.25rem' }" alt="" />
            <div :style="{ top: '.25rem' }">
              <span class="word_14">当前库存</span>
              <div>
                <span class="word_inventory_20">{{dataSource['精制沥青(针状焦)'] && dataSource['精制沥青(针状焦)'].stock}}</span>
                <span class="word_14 word_unit" v-if="dataSource['精制沥青(针状焦)'] && dataSource['精制沥青(针状焦)'].stock">吨</span>
              </div>
            </div>
            <img :src="tipsMiddle" :style="{ top: '1rem' }" alt="" />
            <div :style="{ top: '1rem' }">
              <span class="word_14">期初库存</span>
              <div>
                <span class="word_inventory_20">{{inventoryData['精制沥青(针状焦)'] && inventoryData['精制沥青(针状焦)'].startStock}}</span>
                <span class="word_14 word_unit" v-if="inventoryData['精制沥青(针状焦)'] && inventoryData['精制沥青(针状焦)'].startStock">吨</span>
              </div>
            </div>
          </div>
          <div class="equipmentInfo word_Bold_16">
            <span>精制沥青</span>
          </div>
        </div>
        <div class="monthlyOutput">
        <div class="monthlyOutputWord">
          <span class="word_12">D-1产量</span>
          <span class="word_20" v-if="cumulativeProductionData['精制沥青(针状焦)']">{{cumulativeProductionData['精制沥青(针状焦)'].totalMonthAmount}}吨</span>
        </div>
        <div class="progressBar">
          <span :style="{ width: cumulativeProductionData['精制沥青(针状焦)'] && planAmountData['精制沥青(针状焦)'] ? ((cumulativeProductionData['精制沥青(针状焦)'].totalMonthAmount / planAmountData['精制沥青(针状焦)'].planCount) > 1 ? 100 : (cumulativeProductionData['精制沥青(针状焦)'].totalMonthAmount / planAmountData['精制沥青(针状焦)'].planCount) * 100) + '%' : 0 }"></span>
          <span></span>  
        </div>
        <div class="monthlyOutputWord">
          <span class="word_12">本月计划产量</span>
          <span class="word_20" v-if="planAmountData['精制沥青(针状焦)']">{{planAmountData['精制沥青(针状焦)'].planCount}}吨</span>
        </div>
      </div>
      </div>
    </div>
    <div class="equipment_parameter_info equipment_parameter_info5">
      <div class="equipment_parameter_info_top">
        <div class="equipment_name" style="left: 51.4%;top: 48%;">
            <span>重相蒸馏塔</span>
            <span>K-4004</span>
        </div>
        <div class="equipment_parameter_info_88w_260H">
          <div class="moduleItem tableTwoRow">
            <table>
              <tbody>
                <tr class="item_header">
                  <td>TE_4013</td>
                </tr>
                <tr class="item_data">
                  <td class="item_data data_unit_td">
                    <span class="item_data" :style="{color: equipmentListData['K-4004'] && equipmentListData['K-4004']['TE_4013'] && equipmentListData['K-4004']['TE_4013'].type}">{{equipmentListData['K-4004'] && equipmentListData['K-4004']['TE_4013'] && equipmentListData['K-4004']['TE_4013'].data}}</span>
                    <span class="item_unit">℃</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="moduleItem tableTwoRow">
            <table>
              <tbody>
                <tr class="item_header">
                  <td>TE_4064A</td>
                </tr>
                <tr class="item_data">
                  <td class="item_data data_unit_td">
                    <span class="item_data" :style="{color: equipmentListData['K-4004'] && equipmentListData['K-4004']['TE_4064A'] && equipmentListData['K-4004']['TE_4064A'].type}">{{equipmentListData['K-4004'] && equipmentListData['K-4004']['TE_4064A'] && equipmentListData['K-4004']['TE_4064A'].data}}</span>
                    <span class="item_unit">℃</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="moduleItem tableTwoRow">
            <table>
              <tbody>
                <tr class="item_header">
                  <td>TE_4064B</td>
                </tr>
                <tr class="item_data">
                  <td class="item_data data_unit_td">
                    <span class="item_data" :style="{color: equipmentListData['K-4004'] && equipmentListData['K-4004']['TE_4064B'] && equipmentListData['K-4004']['TE_4064B'].type}">{{equipmentListData['K-4004'] && equipmentListData['K-4004']['TE_4064B'] && equipmentListData['K-4004']['TE_4064B'].data}}</span>
                    <span class="item_unit">℃</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="equipment_parameter_info_88w_260H">
          <div class="moduleItem tableTwoRow">
            <table>
              <tbody>
                <tr class="item_header">
                  <td>TE_4064C</td>
                </tr>
                <tr class="item_data">
                  <td class="item_data data_unit_td">
                    <span class="item_data" :style="{color: equipmentListData['K-4004'] && equipmentListData['K-4004']['TE_4064C'] && equipmentListData['K-4004']['TE_4064C'].type}">{{equipmentListData['K-4004'] && equipmentListData['K-4004']['TE_4064C'] && equipmentListData['K-4004']['TE_4064C'].data}}</span>
                    <span class="item_unit">℃</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="moduleItem tableTwoRow">
            <table>
              <tbody>
                <tr class="item_header">
                  <td>FT_4017</td>
                </tr>
                <tr class="item_data">
                  <td class="item_data data_unit_td">
                    <span class="item_data" :style="{color: equipmentListData['K-4004'] && equipmentListData['K-4004']['FT_4017'] && equipmentListData['K-4004']['FT_4017'].type}">{{equipmentListData['K-4004'] && equipmentListData['K-4004']['FT_4017'] && equipmentListData['K-4004']['FT_4017'].data}}</span>
                    <span class="item_unit">m³/h</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="moduleItem tableTwoRow">
            <table>
              <tbody>
                <tr class="item_header">
                  <td>FT_4041</td>
                </tr>
                <tr class="item_data">
                  <td class="item_data data_unit_td">
                    <span class="item_data" :style="{color: equipmentListData['K-4004'] && equipmentListData['K-4004']['FT_4041'] && equipmentListData['K-4004']['FT_4041'].type}">{{equipmentListData['K-4004'] && equipmentListData['K-4004']['FT_4041'] && equipmentListData['K-4004']['FT_4041'].data}}</span>
                    <span class="item_unit">m³/h</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="equipment_parameter_info_bottom equipment_parameter_info_bottom_main">
        <div class="equipment_parameter_info_bottom_table">
          <table>
            <tbody>
              <tr class="item_header">
                <td>PT_4006</td>
                <td>PT_4007</td>
                <td>LT_4012A</td>
                <td>LT_4012B</td>
              </tr>
              <tr class="item_data">
                <td :style="{color: equipmentListData['K-4004'] && equipmentListData['K-4004']['PT_4006'] && equipmentListData['K-4004']['PT_4006'].type}">{{equipmentListData['K-4004'] && equipmentListData['K-4004']['PT_4006'] && equipmentListData['K-4004']['PT_4006'].data}}</td>
                <td :style="{color: equipmentListData['K-4004'] && equipmentListData['K-4004']['PT_4007'] && equipmentListData['K-4004']['PT_4007'].type}">{{equipmentListData['K-4004'] && equipmentListData['K-4004']['PT_4007'] && equipmentListData['K-4004']['PT_4007'].data}}</td>
                <td :style="{color: equipmentListData['K-4004'] && equipmentListData['K-4004']['LT_4012A'] && equipmentListData['K-4004']['LT_4012A'].type}">{{equipmentListData['K-4004'] && equipmentListData['K-4004']['LT_4012A'] && equipmentListData['K-4004']['LT_4012A'].data}}</td>
                <td :style="{color: equipmentListData['K-4004'] && equipmentListData['K-4004']['LT_4012B'] && equipmentListData['K-4004']['LT_4012B'].type}">{{equipmentListData['K-4004'] && equipmentListData['K-4004']['LT_4012B'] && equipmentListData['K-4004']['LT_4012B'].data}}</td>
              </tr>
              <tr class="item_unit">
                <td>Kpa</td>
                <td>Kpa</td>
                <td>cm</td>
                <td>mm</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="equipment_parameter_info equipment_parameter_info6">
      <div class="equipment_parameter_info_top">
        <div class="equipment_name" style="left: 50.3%;top: 48%;">
            <span>轻相蒸馏塔</span>
            <span>K-4003</span>
        </div>
        <div class="equipment_parameter_info_88w_260H">
          <div class="moduleItem tableTwoRow">
            <table>
              <tbody>
                <tr class="item_header">
                  <td>TE_4007</td>
                </tr>
                <tr class="item_data">
                  <td class="item_data data_unit_td">
                    <span class="item_data" :style="{color: equipmentListData['K-4003'] && equipmentListData['K-4003']['TE_4007'] && equipmentListData['K-4003']['TE_4007'].type}">{{equipmentListData['K-4003'] && equipmentListData['K-4003']['TE_4007'] && equipmentListData['K-4003']['TE_4007'].data}}</span>
                    <span class="item_unit">℃</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="moduleItem tableTwoRow">
            <table>
              <tbody>
                <tr class="item_header">
                  <td>TE_4063A</td>
                </tr>
                <tr class="item_data">
                  <td class="item_data data_unit_td">
                    <span class="item_data" :style="{color: equipmentListData['K-4003'] && equipmentListData['K-4003']['TE_4063A'] && equipmentListData['K-4003']['TE_4063A'].type}">{{equipmentListData['K-4003'] && equipmentListData['K-4003']['TE_4063A'] && equipmentListData['K-4003']['TE_4063A'].data}}</span>
                    <span class="item_unit">℃</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="moduleItem tableTwoRow">
            <table>
              <tbody>
                <tr class="item_header">
                  <td>TE_4063B</td>
                </tr>
                <tr class="item_data">
                  <td class="item_data data_unit_td">
                    <span class="item_data" :style="{color: equipmentListData['K-4003'] && equipmentListData['K-4003']['TE_4063B'] && equipmentListData['K-4003']['TE_4063B'].type}">{{equipmentListData['K-4003'] && equipmentListData['K-4003']['TE_4063B'] && equipmentListData['K-4003']['TE_4063B'].data}}</span>
                    <span class="item_unit">℃</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="equipment_parameter_info_88w_260H">
          <div class="moduleItem tableTwoRow">
            <table>
              <tbody>
                <tr class="item_header">
                  <td>TE_4063C</td>
                </tr>
                <tr class="item_data">
                  <td class="item_data data_unit_td">
                    <span class="item_data" :style="{color: equipmentListData['K-4003'] && equipmentListData['K-4003']['TE_4063C'] && equipmentListData['K-4003']['TE_4063C'].type}">{{equipmentListData['K-4003'] && equipmentListData['K-4003']['TE_4063C'] && equipmentListData['K-4003']['TE_4063C'].data}}</span>
                    <span class="item_unit">℃</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="moduleItem tableTwoRow">
            <table>
              <tbody>
                <tr class="item_header">
                  <td>FT_4014</td>
                </tr>
                <tr class="item_data">
                  <td class="item_data data_unit_td">
                    <span class="item_data" :style="{color: equipmentListData['K-4003'] && equipmentListData['K-4003']['FT_4014'] && equipmentListData['K-4003']['FT_4014'].type}">{{equipmentListData['K-4003'] && equipmentListData['K-4003']['FT_4014'] && equipmentListData['K-4003']['FT_4014'].data}}</span>
                    <span class="item_unit">m³/h</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="moduleItem tableTwoRow">
            <table>
              <tbody>
                <tr class="item_header">
                  <td>FT_4027</td>
                </tr>
                <tr class="item_data">
                  <td class="item_data data_unit_td">
                    <span class="item_data" :style="{color: equipmentListData['K-4003'] && equipmentListData['K-4003']['FT_4027'] && equipmentListData['K-4003']['FT_4027'].type}">{{equipmentListData['K-4003'] && equipmentListData['K-4003']['FT_4027'] && equipmentListData['K-4003']['FT_4027'].data}}</span>
                    <span class="item_unit">m³/h</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="equipment_parameter_info_bottom equipment_parameter_info_bottom_main">
        <div class="equipment_parameter_info_bottom_table">
          <table>
            <tbody>
              <tr class="item_header">
                <td>PT_4004</td>
                <td>PT_4005</td>
                <td>LT_4010A</td>
                <td>LT_4010B</td>
              </tr>
              <tr class="item_data">
                <td :style="{color: equipmentListData['K-4003'] && equipmentListData['K-4003']['PT_4004'] && equipmentListData['K-4003']['PT_4004'].type}">{{equipmentListData['K-4003'] && equipmentListData['K-4003']['PT_4004'] && equipmentListData['K-4003']['PT_4004'].data}}</td>
                <td :style="{color: equipmentListData['K-4003'] && equipmentListData['K-4003']['PT_4005'] && equipmentListData['K-4003']['PT_4005'].type}">{{equipmentListData['K-4003'] && equipmentListData['K-4003']['PT_4005'] && equipmentListData['K-4003']['PT_4005'].data}}</td>
                <td :style="{color: equipmentListData['K-4003'] && equipmentListData['K-4003']['LT_4010A'] && equipmentListData['K-4003']['LT_4010A'].type}">{{equipmentListData['K-4003'] && equipmentListData['K-4003']['LT_4010A'] && equipmentListData['K-4003']['LT_4010A'].data}}</td>
                <td :style="{color: equipmentListData['K-4003'] && equipmentListData['K-4003']['LT_4010B'] && equipmentListData['K-4003']['LT_4010B'].type}">{{equipmentListData['K-4003'] && equipmentListData['K-4003']['LT_4010B'] && equipmentListData['K-4003']['LT_4010B'].data}}</td>
              </tr>
              <tr class="item_unit">
                <td>Kpa</td>
                <td>Kpa</td>
                <td>cm</td>
                <td>mm</td>
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
    },
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
      TipsMax: require("@/assets/image/coalTarScreen/tipsMax.svg"),
      TipsMini: require("@/assets/image/coalTarScreen/tipsMini.svg"),
      tipsMiddle: require("@/assets/image/coalTarScreen/tipsMiddle.svg"),
      ArrowsError: require("@/assets/image/coalTarScreen/arrowsError.svg"),
      ArrowsWarning: require("@/assets/image/coalTarScreen/arrowsWarning.svg"),
      ForkImg: require("@/assets/image/coalTarScreen/fork.svg"),
      tableData: [
          {
            name: 'PT_4037',
            value: 0.3,
            type: 1     
          },
          {
            name: 'PT_4038',
            value: 0.3,
            type: 1     
          },
          {
            name: 'PT_4039',
            value: 0.3,
            type: 1     
          }
      ],
      tableData2: [
          {
            name: 'PT_4037',
            unit: '%'   
          },
          {
            name: 'PT_4038',
            unit: '%'   
          },
          {
            name: 'PT_4039',
            unit: '%'   
          },
      ],
    };
  },
};
</script>
<style lang="scss">
.coalTarScreen_preprocessingCom {
  width: 33.5rem;
  height: 100%;
//   border: 1px solid #ccc;
  position: relative;
  .accidentArrows{
    transform: translateX(2.15rem);
  }
  .positionDiv {
    position: absolute;
    width: 6rem;
    height: 3.7rem;
    // border: 1px solid #ccc;
    display: flex;
    flex-direction: column;
    .accidentShelf {
      display: flex;
      position: relative;
      height: 2.8rem;
      .unqualifiedModal{
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
      }
      img {
        position: absolute;
      }
      .accidentShadeImg {
        position: absolute;
        left: 1.5rem;
        width: 3rem;
        height: 3.4rem;
        top: -0.3rem;
        background: url("~@/assets/image/coalTarScreen/accidentShade.svg");
        z-index: 1;
      }
      .accidentShelfImg {
        margin-left: 1.5rem;
        width: 3rem;
        height: 2.8rem;
        z-index: 99;
      }
      .accidentWaterImg {
        left: 1.77rem;
        width: 2.47rem;
        bottom: 0.18rem;
        z-index: 1;
      }
      .accidentNormalWaterImg {
        left: 1.8rem;
      }
      .accidentShelfRight {
        position: absolute;
        left: 4.5rem;
        width: 1.5rem;
        height: 100%;
        display: flex;
        flex-direction: column;
        position: relative;
        img {
          width: 1.08rem;
          height: 0.6rem;
          left: 0;
        }
        & > div {
          position: absolute;
          width: 1.08rem;
          height: 0.6rem;
          left: 0;
          display: flex;
          flex-direction: column;
          padding-left: 0.07rem;
          & > span {
            line-height: 0.18rem;
          }
          & > div {
            display: flex;
            line-height: 0.31rem;
          }
        }
      }
    }
    .monthlyOutput {
      margin-top: 0.1rem;
      height: 0.7rem;
      display: flex;
      justify-content: center;
      & > div {
        display: flex;
      }
      .progressBar {
        width: 2rem;
        margin: 0 0.1rem;
        height: 0.24rem;
        border-radius: 0.02rem;
        background: #1c2a4b;
        & > span {
          display: inline-block;
          height: 100%;
          background: #0c69ff;
        }
      }
      .monthlyOutputWord {
        width: 1.3rem;
        height: 100%;
        flex-direction: column;
      }
      .monthlyOutputWord:first-child {
        text-align: right;
      }
    }
  }
  .positionMinisDiv {
    position: absolute;
    height: 3.3rem;
    top: 6.33rem;
    display: flex;
    .positionOilDepotDiv {
      display: flex;
      flex-direction: column;
      position: relative;
      img {
        position: absolute;
      }
      .accidentShelf {
        flex: 1;
        display: flex;
        .unqualifiedModal{
          left: -.05rem;
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
          left: 2.3rem;
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
        transform: translate(-0.1rem, -0.2rem);
        // justify-content: center;
        & > div {
          display: flex;
        }
        .progressBar {
          width: 1.2rem;
          margin: 0 0.1rem;
          height: 0.16rem;
          border-radius: 0.02rem;
          background: #1c2a4b;
          & > span {
            display: inline-block;
            height: 100%;
            background: #0c69ff;
          }
        }
        .monthlyOutputWord {
          // width: 1rem;
          // height: 100%;
          flex: 1;
          flex-direction: column;
        }
        .monthlyOutputWord:first-child {
          text-align: right;
        }
      }
    }
  }
  .positionMinisDiv2{
      width: 11rem;
      left: 22.8rem;
      .positionOilDepotDiv:first-child {
            width: 3.35rem;
            .boraccidentLine{
              left: 35%;
            }
            .monthlyOutput{
              transform: translate(-.5rem, -0.2rem);
            }
      }
      .positionOilDepotDiv:nth-child(2) {
            width: 3.95rem;
            .boraccidentLine{
              left: 29.75%;
            }
            .monthlyOutput{
              transform: translate(-.8rem, -0.2rem);
            }
      }
      .positionOilDepotDiv:last-child {
            flex: 1;
            .boraccidentLine{
              left: 31.05%;
            }
            .monthlyOutput{
              transform: translate(-.6rem, -0.2rem);
            }
      }
  }
  .positionMinisDiv1 {
    width: 15.1rem;
    left: 1.8rem;
    .positionOilDepotDiv:first-child {
      .boraccidentLine{
        left: 22.75%;
      }
      width: 5.033rem;
      .monthlyOutput{
        transform: translate(-1.3rem, -0.2rem);
      }
    }
    .positionOilDepotDiv:nth-child(2) {
      width: 5.7rem;
      .boraccidentLine{
        left: 20.5%;
      }
      .accidentShelfRight {
        img {
          width: 1.08rem;
          height: 0.6rem;
          left: 0;
        }
        & > div {
          width: 1.08rem;
          height: 0.6rem;
        }
      }
    }
    .positionOilDepotDiv:last-child {
      flex: 1;
      .boraccidentLine{
        left: 26.75%;
      }
      .monthlyOutput{
        transform: translate(-.95rem, -0.2rem);
      }
    }
  }
  .coalTarBigBH {
    top: 1.2rem;
  }
  .coalTarBigAB {
    top: 5.5rem;
  }
  .equipment_parameter_info {
    position: absolute;
    top: 1.35rem;
    display: flex;
    flex-direction: column;
    .equipment_parameter_info_bottom_main{
        margin-top: .15rem;
    }
    .item_title{
        line-height: .18rem;
        margin-top: .02rem;
        margin-bottom: .14rem;
    }
  }
  .equipment_parameter_info1{
        left: 6.55rem;
        width: 4rem;
        height: 4.24rem;
  }
  .equipment_parameter_info2{
        left: 10.79rem;
        width: 6rem;
        height: 4.24rem;
        .equipment_parameter_info_bottom_main{
            margin-top: .06rem;
        }
  }
  .equipment_parameter_info5{
        left: 23.05rem;
        width: 4.28rem;
        height: 4.24rem;
        .equipment_parameter_info_bottom_main{
            margin-top: .06rem;
        }
  }
  .equipment_parameter_info6{
        left: 28.6rem;
        width: 4.28rem;
        height: 4.24rem;
        .equipment_parameter_info_bottom_main{
            margin-top: .06rem;
        }
  }
  .equipment_parameter_info3{
        left: 17rem;
        width: 5.16rem;
        height: 3.52rem;
        .equipment_parameter_info_bottom_main{
            margin-top: .06rem;
        }
  }
  .equipment_parameter_info4{
        top: 5.76rem;
        left: 17rem;
        width: 5.16rem;
        height: 3.52rem;
        .equipment_parameter_info_bottom_main{
            margin-top: .06rem;
        }
  }
}
@import "../style/foo.scss";
</style>
