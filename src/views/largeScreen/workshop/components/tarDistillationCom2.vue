<template>
  <!-- 油库 -->
  <div class="coalTarScreen_tarDistillationCom">
    <div class="positionMinisDiv">
      <div class="oilDepotA positionOilDepotDiv">
        <div class="accidentShelf">
          <!-- <img class="accidentShadeImg" :src="AccidentShade" alt="" /> -->
          <!-- <div class="accidentShadeImg"></div> -->
          <div class="unqualifiedModal" v-if="reportInfoObj && reportInfoObj['轻油'] && reportInfoObj['轻油'].flag">
            <img class="forkImg" @click="$emit('updateReportInfoFlagFuc','轻油')" :src="ForkImg" alt="">
            <div>
              <span>取样地点:</span>
              <span>{{reportInfoObj['轻油'].sampleAddr}}</span>
            </div>
            <div>
              <span>取料名称:</span>
              <span>{{reportInfoObj['轻油'].materialName}}</span>
            </div>
            <div>
              <span>取样时间:</span>
              <span>{{reportInfoObj['轻油'].sampleTime}}</span>
            </div>
            <div>
              <span>样品分类:</span>
              <span>{{reportInfoObj['轻油'].sampleTypeName}}</span>
            </div>
            <div>
              <span>检验结果:</span>
              <span>不合格</span>
            </div>
            <div>
              <span>检验项:</span>
              <div class="inspection_Item" v-if="reportInfoObj['轻油'].itemsAuditVOList">
                  <span v-for="item of reportInfoObj['轻油'].itemsAuditVOList" :key="item.id">
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
            :style="{ height: (dataSource['轻油'] && dataSource['轻油'].height ? (dataSource['轻油'].stock / dataSource['轻油'].height) ? (dataSource['轻油'].stock / dataSource['轻油'].height) > 1 ? 1.75 : .12 + (dataSource['轻油'].stock / dataSource['轻油'].height) * 1.63: 0 : 0 )+ 'rem', }"
            alt=""
          />
          <div
          class="borderErrLine boraccidentLine"
          :style="{top:
              (dataSource['轻油'] && dataSource['轻油'].height ? ((dataSource['轻油'].alarmUpper / dataSource['轻油'].height)
                ? 1.7 - ((dataSource['轻油'].alarmUpper / dataSource['轻油'].height) > 1 ? 1.55 : (dataSource['轻油'].alarmUpper / dataSource['轻油'].height) * 1.55)
                : 1.7) : 1.7) + 'rem',}"
        ></div>
        <div
          class="borderWarningLine boraccidentLine"
          :style="{top:
              (dataSource['轻油'] && dataSource['轻油'].height ? ((dataSource['轻油'].alarmLower / dataSource['轻油'].height)
                ? 1.7 - ((dataSource['轻油'].alarmLower / dataSource['轻油'].height) > 1 ? 1.55 : (dataSource['轻油'].alarmLower / dataSource['轻油'].height) * 1.55)
                : 1.7) : 1.7) + 'rem',}"
        ></div>
          <img
            class="accidentArrows arrows"
            :src="ArrowsError"
            :style="{top:
              (dataSource['轻油'] && dataSource['轻油'].height ? ((dataSource['轻油'].alarmUpper / dataSource['轻油'].height)
                ? 1.75 - ((dataSource['轻油'].alarmUpper / dataSource['轻油'].height) > 1 ? 1.55 : (dataSource['轻油'].alarmUpper / dataSource['轻油'].height) * 1.55)
                : 1.75) : 1.75) + 'rem',}"
            alt=""
          />
          <img
            class="accidentArrows arrows"
            :src="ArrowsWarning"
            :style="{top:
              (dataSource['轻油'] && dataSource['轻油'].height ? ((dataSource['轻油'].alarmLower / dataSource['轻油'].height)
                ? 1.75 - ((dataSource['轻油'].alarmLower / dataSource['轻油'].height) > 1 ? 1.55 : (dataSource['轻油'].alarmLower / dataSource['轻油'].height) * 1.55)
                : 1.75) : 1.75) + 'rem',}"
            alt=""
          />
          <div class="accidentShelfRight">
            <img :src="tipsMiddle" :style="{ top: '.25rem' }" alt="" />
            <div :style="{ top: '.25rem' }">
              <span class="word_14">当前库存</span>
              <div>
                <span class="word_inventory_20">{{dataSource['轻油'] && dataSource['轻油'].stock}}</span>
                <span class="word_14 word_unit" v-if="dataSource['轻油'] && dataSource['轻油'].stock">吨</span>
              </div>
            </div>
            <img :src="tipsMiddle" :style="{ top: '1rem' }" alt="" />
            <div :style="{ top: '1rem' }">
              <span class="word_14">期初库存</span>
              <div>
                <span class="word_inventory_20">{{inventoryData['轻油'] && inventoryData['轻油'].startStock}}</span>
              <span class="word_14 word_unit" v-if="inventoryData['轻油'] && inventoryData['轻油'].startStock">吨</span>
              </div>
            </div>
          </div>
          <div class="equipmentInfo word_Bold_16">
            <span>轻油</span>
          </div>
        </div>
        <div class="monthlyOutput">
        <div class="monthlyOutputWord">
          <span class="word_12">D-1产量</span>
          <span class="word_20" v-if="cumulativeProductionData['轻油']">{{cumulativeProductionData['轻油'].totalMonthAmount}}吨</span>
        </div>
        <div class="progressBar">
          <span :style="{ width: cumulativeProductionData['轻油'] && planAmountData['轻油'] ? ((cumulativeProductionData['轻油'].totalMonthAmount / planAmountData['轻油'].planCount) > 1 ? 100 : (cumulativeProductionData['轻油'].totalMonthAmount / planAmountData['轻油'].planCount) * 100) + '%' : 0 }"></span>
          <span></span>
        </div>
        <div class="monthlyOutputWord">
          <span class="word_12">本月计划产量</span>
          <span class="word_20" v-if="planAmountData['轻油']">{{planAmountData['轻油'].planCount}}吨</span>
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
            :style="{ height: (dataSource['蒽油(煤焦油)'] && dataSource['蒽油(煤焦油)'].height ? (dataSource['蒽油(煤焦油)'].stock / dataSource['蒽油(煤焦油)'].height) ? (dataSource['蒽油(煤焦油)'].stock / dataSource['蒽油(煤焦油)'].height) > 1 ? 1.75 : .12 + (dataSource['蒽油(煤焦油)'].stock / dataSource['蒽油(煤焦油)'].height) * 1.63: 0 : 0 )+ 'rem', }"
            alt=""
          />
          <div
          class="borderErrLine boraccidentLine"
          :style="{top:
              (dataSource['蒽油(煤焦油)'] && dataSource['蒽油(煤焦油)'].height ? ((dataSource['蒽油(煤焦油)'].alarmUpper / dataSource['蒽油(煤焦油)'].height)
                ? 1.7 - ((dataSource['蒽油(煤焦油)'].alarmUpper / dataSource['蒽油(煤焦油)'].height) > 1 ? 1.55 : (dataSource['蒽油(煤焦油)'].alarmUpper / dataSource['蒽油(煤焦油)'].height) * 1.55)
                : 1.7) : 1.7) + 'rem',}"
        ></div>
        <div
          class="borderWarningLine boraccidentLine"
          :style="{top:
              (dataSource['蒽油(煤焦油)'] && dataSource['蒽油(煤焦油)'].height ? ((dataSource['蒽油(煤焦油)'].alarmLower / dataSource['蒽油(煤焦油)'].height)
                ? 1.7 - ((dataSource['蒽油(煤焦油)'].alarmLower / dataSource['蒽油(煤焦油)'].height) > 1 ? 1.55 : (dataSource['蒽油(煤焦油)'].alarmLower / dataSource['蒽油(煤焦油)'].height) * 1.55)
                : 1.7) : 1.7) + 'rem',}"
        ></div>
          <img
            class="accidentArrows arrows"
            :src="ArrowsError"
            :style="{top:
              (dataSource['蒽油(煤焦油)'] && dataSource['蒽油(煤焦油)'].height ? ((dataSource['蒽油(煤焦油)'].alarmUpper / dataSource['蒽油(煤焦油)'].height)
                ? 1.75 - ((dataSource['蒽油(煤焦油)'].alarmUpper / dataSource['蒽油(煤焦油)'].height) > 1 ? 1.55 : (dataSource['蒽油(煤焦油)'].alarmUpper / dataSource['蒽油(煤焦油)'].height) * 1.55)
                : 1.75) : 1.75) + 'rem',}"
            alt=""
          />
          <img
            class="accidentArrows arrows"
            :src="ArrowsWarning"
            :style="{top:
              (dataSource['蒽油(煤焦油)'] && dataSource['蒽油(煤焦油)'].height ? ((dataSource['蒽油(煤焦油)'].alarmLower / dataSource['蒽油(煤焦油)'].height)
                ? 1.75 - ((dataSource['蒽油(煤焦油)'].alarmLower / dataSource['蒽油(煤焦油)'].height) > 1 ? 1.55 : (dataSource['蒽油(煤焦油)'].alarmLower / dataSource['蒽油(煤焦油)'].height) * 1.55)
                : 1.75) : 1.75) + 'rem',}"
            alt=""
          />
          <div class="accidentShelfRight">
            <img :src="tipsMiddle" :style="{ top: '.25rem' }" alt="" />
            <div :style="{ top: '.25rem' }">
              <span class="word_14">当前库存</span>
              <div>
                <span class="word_inventory_20">{{dataSource['蒽油(煤焦油)'] && dataSource['蒽油(煤焦油)'].stock}}</span>
                <span class="word_14 word_unit" v-if="dataSource['蒽油(煤焦油)'] && dataSource['蒽油(煤焦油)'].stock">吨</span>
              </div>
            </div>
            <img :src="tipsMiddle" :style="{ top: '1rem' }" alt="" />
            <div :style="{ top: '1rem' }">
              <span class="word_14">期初库存</span>
              <div>
                <span class="word_inventory_20">{{inventoryData['蒽油(煤焦油)'] && inventoryData['蒽油(煤焦油)'].startStock}}</span>
              <span class="word_14 word_unit" v-if="inventoryData['蒽油(煤焦油)'] && inventoryData['蒽油(煤焦油)'].startStock">吨</span>
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
          <span class="word_20" v-if="cumulativeProductionData['蒽油(煤焦油)']">{{cumulativeProductionData['蒽油(煤焦油)'].totalMonthAmount}}吨</span>
        </div>
        <div class="progressBar">
          <span :style="{ width: cumulativeProductionData['蒽油(煤焦油)'] && planAmountData['蒽油(煤焦油)'] ? ((cumulativeProductionData['蒽油(煤焦油)'].totalMonthAmount / planAmountData['蒽油(煤焦油)'].planCount) > 1 ? 100 : (cumulativeProductionData['蒽油(煤焦油)'].totalMonthAmount / planAmountData['蒽油(煤焦油)'].planCount) * 100) + '%' : 0 }"></span>
          <span></span>
        </div>
        <div class="monthlyOutputWord">
          <span class="word_12">本月计划产量</span>
          <span class="word_20" v-if="planAmountData['蒽油(煤焦油)']">{{planAmountData['蒽油(煤焦油)'].planCount}}吨</span>
        </div>
      </div>
      </div>
      <div class="oilDepotA positionOilDepotDiv">
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
          <img class="accidentShelfImg" :src="AccidentNormal" alt="" />
          <img
            class="accidentWaterImg accidentNormalWaterImg"
            :src="AccidentNormalWater"
            :style="{ height: (dataSource['软沥青(煤焦油)'] && dataSource['软沥青(煤焦油)'].height ? (dataSource['软沥青(煤焦油)'].stock / dataSource['软沥青(煤焦油)'].height) ? (dataSource['软沥青(煤焦油)'].stock / dataSource['软沥青(煤焦油)'].height) > 1 ? 1.75 : .12 + (dataSource['软沥青(煤焦油)'].stock / dataSource['软沥青(煤焦油)'].height) * 1.63: 0 : 0 )+ 'rem', }"
            alt=""
          />
          <div
          class="borderErrLine boraccidentLine"
          :style="{top:
              (dataSource['软沥青(煤焦油)'] && dataSource['软沥青(煤焦油)'].height ? ((dataSource['软沥青(煤焦油)'].alarmUpper / dataSource['软沥青(煤焦油)'].height)
                ? 1.7 - ((dataSource['软沥青(煤焦油)'].alarmUpper / dataSource['软沥青(煤焦油)'].height) > 1 ? 1.55 : (dataSource['软沥青(煤焦油)'].alarmUpper / dataSource['软沥青(煤焦油)'].height) * 1.55)
                : 1.7) : 1.7) + 'rem',}"
        ></div>
        <div
          class="borderWarningLine boraccidentLine"
          :style="{top:
              (dataSource['软沥青(煤焦油)'] && dataSource['软沥青(煤焦油)'].height ? ((dataSource['软沥青(煤焦油)'].alarmLower / dataSource['软沥青(煤焦油)'].height)
                ? 1.7 - ((dataSource['软沥青(煤焦油)'].alarmLower / dataSource['软沥青(煤焦油)'].height) > 1 ? 1.55 : (dataSource['软沥青(煤焦油)'].alarmLower / dataSource['软沥青(煤焦油)'].height) * 1.55)
                : 1.7) : 1.7) + 'rem',}"
        ></div>
          <img
            class="accidentArrows arrows"
            :src="ArrowsError"
            :style="{top:
              (dataSource['软沥青(煤焦油)'] && dataSource['软沥青(煤焦油)'].height ? ((dataSource['软沥青(煤焦油)'].alarmUpper / dataSource['软沥青(煤焦油)'].height)
                ? 1.75 - ((dataSource['软沥青(煤焦油)'].alarmUpper / dataSource['软沥青(煤焦油)'].height) > 1 ? 1.55 : (dataSource['软沥青(煤焦油)'].alarmUpper / dataSource['软沥青(煤焦油)'].height) * 1.55)
                : 1.75) : 1.75) + 'rem',}"
            alt=""
          />
          <img
            class="accidentArrows arrows"
            :src="ArrowsWarning"
            :style="{top:
              (dataSource['软沥青(煤焦油)'] && dataSource['软沥青(煤焦油)'].height ? ((dataSource['软沥青(煤焦油)'].alarmLower / dataSource['软沥青(煤焦油)'].height)
                ? 1.75 - ((dataSource['软沥青(煤焦油)'].alarmLower / dataSource['软沥青(煤焦油)'].height) > 1 ? 1.55 : (dataSource['软沥青(煤焦油)'].alarmLower / dataSource['软沥青(煤焦油)'].height) * 1.55)
                : 1.75) : 1.75) + 'rem',}"
            alt=""
          />
          <div class="accidentShelfRight">
            <img :src="tipsMiddle" :style="{ top: '.25rem' }" alt="" />
            <div :style="{ top: '.25rem' }">
              <span class="word_14">当前库存</span>
              <div>
                <span class="word_inventory_20">{{dataSource['软沥青(煤焦油)'] && dataSource['软沥青(煤焦油)'].stock}}</span>
                <span class="word_14 word_unit" v-if="dataSource['软沥青(煤焦油)'] && dataSource['软沥青(煤焦油)'].stock">吨</span>
              </div>
            </div>
            <img :src="tipsMiddle" :style="{ top: '1rem' }" alt="" />
            <div :style="{ top: '1rem' }">
              <span class="word_14">期初库存</span>
              <div>
                <span class="word_inventory_20">{{inventoryData['软沥青(煤焦油)'] && inventoryData['软沥青(煤焦油)'].startStock}}</span>
              <span class="word_14 word_unit" v-if="inventoryData['软沥青(煤焦油)'] && inventoryData['软沥青(煤焦油)'].startStock">吨</span>
              </div>
            </div>
          </div>
          <div class="equipmentInfo word_Bold_16">
            <span>软沥青</span>
          </div>
        </div>
        <div class="monthlyOutput">
        <div class="monthlyOutputWord">
          <span class="word_12">D-1产量</span>
          <span class="word_20" v-if="cumulativeProductionData['软沥青(煤焦油)']">{{cumulativeProductionData['软沥青(煤焦油)'].totalMonthAmount}}吨</span>
        </div>
        <div class="progressBar">
          <span :style="{ width: cumulativeProductionData['软沥青(煤焦油)'] && planAmountData['软沥青(煤焦油)'] ? ((cumulativeProductionData['软沥青(煤焦油)'].totalMonthAmount / planAmountData['软沥青(煤焦油)'].planCount) > 1 ? 100 : (cumulativeProductionData['软沥青(煤焦油)'].totalMonthAmount / planAmountData['软沥青(煤焦油)'].planCount) * 100) + '%' : 0 }"></span>
          <span></span>
        </div>
        <div class="monthlyOutputWord">
          <span class="word_12">本月计划产量</span>
          <span class="word_20" v-if="planAmountData['软沥青(煤焦油)']">{{planAmountData['软沥青(煤焦油)'].planCount}}吨</span>
        </div>
      </div>
      </div>
      <div class="oilDepotA positionOilDepotDiv">
        <div class="accidentShelf">
          <!-- <img class="accidentShadeImg" :src="AccidentShade" alt="" /> -->
          <!-- <div class="accidentShadeImg"></div> -->
          <div class="unqualifiedModal" v-if="reportInfoObj && reportInfoObj['中温沥青'] && reportInfoObj['中温沥青'].flag">
            <img class="forkImg" @click="$emit('updateReportInfoFlagFuc','中温沥青')" :src="ForkImg" alt="">
            <div>
              <span>取样地点:</span>
              <span>{{reportInfoObj['中温沥青'].sampleAddr}}</span>
            </div>
            <div>
              <span>取料名称:</span>
              <span>{{reportInfoObj['中温沥青'].materialName}}</span>
            </div>
            <div>
              <span>取样时间:</span>
              <span>{{reportInfoObj['中温沥青'].sampleTime}}</span>
            </div>
            <div>
              <span>样品分类:</span>
              <span>{{reportInfoObj['中温沥青'].sampleTypeName}}</span>
            </div>
            <div>
              <span>检验结果:</span>
              <span>不合格</span>
            </div>
            <div>
              <span>检验项:</span>
              <div class="inspection_Item" v-if="reportInfoObj['中温沥青'].itemsAuditVOList">
                  <span v-for="item of reportInfoObj['中温沥青'].itemsAuditVOList" :key="item.id">
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
            :style="{ height: (dataSource['中温沥青'] && dataSource['中温沥青'].height ? (dataSource['中温沥青'].stock / dataSource['中温沥青'].height) ? (dataSource['中温沥青'].stock / dataSource['中温沥青'].height) > 1 ? 1.75 : .12 + (dataSource['中温沥青'].stock / dataSource['中温沥青'].height) * 1.63: 0 : 0 )+ 'rem', }"
            alt=""
          />
          <div
          class="borderErrLine boraccidentLine"
          :style="{top:
              (dataSource['中温沥青'] && dataSource['中温沥青'].height ? ((dataSource['中温沥青'].alarmUpper / dataSource['中温沥青'].height)
                ? 1.7 - ((dataSource['中温沥青'].alarmUpper / dataSource['中温沥青'].height) > 1 ? 1.55 : (dataSource['中温沥青'].alarmUpper / dataSource['中温沥青'].height) * 1.55)
                : 1.7) : 1.7) + 'rem',}"
        ></div>
        <div
          class="borderWarningLine boraccidentLine"
          :style="{top:
              (dataSource['中温沥青'] && dataSource['中温沥青'].height ? ((dataSource['中温沥青'].alarmLower / dataSource['中温沥青'].height)
                ? 1.7 - ((dataSource['中温沥青'].alarmLower / dataSource['中温沥青'].height) > 1 ? 1.55 : (dataSource['中温沥青'].alarmLower / dataSource['中温沥青'].height) * 1.55)
                : 1.7) : 1.7) + 'rem',}"
        ></div>
          <img
            class="accidentArrows arrows"
            :src="ArrowsError"
            :style="{top:
              (dataSource['中温沥青'] && dataSource['中温沥青'].height ? ((dataSource['中温沥青'].alarmUpper / dataSource['中温沥青'].height)
                ? 1.75 - ((dataSource['中温沥青'].alarmUpper / dataSource['中温沥青'].height) > 1 ? 1.55 : (dataSource['中温沥青'].alarmUpper / dataSource['中温沥青'].height) * 1.55)
                : 1.75) : 1.75) + 'rem',}"
            alt=""
          />
          <img
            class="accidentArrows arrows"
            :src="ArrowsWarning"
            :style="{top:
              (dataSource['中温沥青'] && dataSource['中温沥青'].height ? ((dataSource['中温沥青'].alarmLower / dataSource['中温沥青'].height)
                ? 1.75 - ((dataSource['中温沥青'].alarmLower / dataSource['中温沥青'].height) > 1 ? 1.55 : (dataSource['中温沥青'].alarmLower / dataSource['中温沥青'].height) * 1.55)
                : 1.75) : 1.75) + 'rem',}"
            alt=""
          />
          <div class="accidentShelfRight">
            <img :src="tipsMiddle" :style="{ top: '.25rem' }" alt="" />
            <div :style="{ top: '.25rem' }">
              <span class="word_14">当前库存</span>
              <div>
                <span class="word_inventory_20">{{dataSource['中温沥青'] && dataSource['中温沥青'].stock}}</span>
                <span class="word_14 word_unit" v-if="dataSource['中温沥青'] && dataSource['中温沥青'].stock">吨</span>
              </div>
            </div>
            <img :src="tipsMiddle" :style="{ top: '1rem' }" alt="" />
            <div :style="{ top: '1rem' }">
              <span class="word_14">期初库存</span>
              <div>
                <span class="word_inventory_20">{{inventoryData['中温沥青'] && inventoryData['中温沥青'].startStock}}</span>
              <span class="word_14 word_unit" v-if="inventoryData['中温沥青'] && inventoryData['中温沥青'].startStock">吨</span>
              </div>
            </div>
          </div>
          <div class="equipmentInfo word_Bold_16">
            <span>中温沥青</span>
          </div>
        </div>
        <div class="monthlyOutput">
        <div class="monthlyOutputWord">
          <span class="word_12">D-1产量</span>
          <span class="word_20" v-if="cumulativeProductionData['中温沥青']">{{cumulativeProductionData['中温沥青'].totalMonthAmount}}吨</span>
        </div>
        <div class="progressBar">
          <span :style="{ width: cumulativeProductionData['中温沥青'] && planAmountData['中温沥青'] ? ((cumulativeProductionData['中温沥青'].totalMonthAmount / planAmountData['中温沥青'].planCount) > 1 ? 100 : (cumulativeProductionData['中温沥青'].totalMonthAmount / planAmountData['中温沥青'].planCount) * 100) + '%' : 0 }"></span>
          <span></span>
        </div>
        <div class="monthlyOutputWord">
          <span class="word_12">本月计划产量</span>
          <span class="word_20" v-if="planAmountData['中温沥青']">{{planAmountData['中温沥青'].planCount}}吨</span>
        </div>
      </div>
      </div>
      <div class="oilDepotA positionOilDepotDiv">
        <div class="accidentShelf">
          <!-- <img class="accidentShadeImg" :src="AccidentShade" alt="" /> -->
          <!-- <div class="accidentShadeImg"></div> -->
          <div class="unqualifiedModal" v-if="reportInfoObj && reportInfoObj['酚油'] && reportInfoObj['酚油'].flag">
            <img class="forkImg" @click="$emit('updateReportInfoFlagFuc','酚油')" :src="ForkImg" alt="">
            <div>
              <span>取样地点:</span>
              <span>{{reportInfoObj['酚油'].sampleAddr}}</span>
            </div>
            <div>
              <span>取料名称:</span>
              <span>{{reportInfoObj['酚油'].materialName}}</span>
            </div>
            <div>
              <span>取样时间:</span>
              <span>{{reportInfoObj['酚油'].sampleTime}}</span>
            </div>
            <div>
              <span>样品分类:</span>
              <span>{{reportInfoObj['酚油'].sampleTypeName}}</span>
            </div>
            <div>
              <span>检验结果:</span>
              <span>不合格</span>
            </div>
            <div>
              <span>检验项:</span>
              <div class="inspection_Item" v-if="reportInfoObj['酚油'].itemsAuditVOList">
                  <span v-for="item of reportInfoObj['酚油'].itemsAuditVOList" :key="item.id">
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
            :style="{ height: (dataSource['酚油'] && dataSource['酚油'].height ? (dataSource['酚油'].stock / dataSource['酚油'].height) ? (dataSource['酚油'].stock / dataSource['酚油'].height) > 1 ? 1.75 : .12 + (dataSource['酚油'].stock / dataSource['酚油'].height) * 1.63: 0 : 0 )+ 'rem', }"
            alt=""
          />
          <div
          class="borderErrLine boraccidentLine"
          :style="{top:
              (dataSource['酚油'] && dataSource['酚油'].height ? ((dataSource['酚油'].alarmUpper / dataSource['酚油'].height)
                ? 1.7 - ((dataSource['酚油'].alarmUpper / dataSource['酚油'].height) > 1 ? 1.55 : (dataSource['酚油'].alarmUpper / dataSource['酚油'].height) * 1.55)
                : 1.7) : 1.7) + 'rem',}"
        ></div>
        <div
          class="borderWarningLine boraccidentLine"
          :style="{top:
              (dataSource['酚油'] && dataSource['酚油'].height ? ((dataSource['酚油'].alarmLower / dataSource['酚油'].height)
                ? 1.7 - ((dataSource['酚油'].alarmLower / dataSource['酚油'].height) > 1 ? 1.55 : (dataSource['酚油'].alarmLower / dataSource['酚油'].height) * 1.55)
                : 1.7) : 1.7) + 'rem',}"
        ></div>
          <img
            class="accidentArrows arrows"
            :src="ArrowsError"
            :style="{top:
              (dataSource['酚油'] && dataSource['酚油'].height ? ((dataSource['酚油'].alarmUpper / dataSource['酚油'].height)
                ? 1.75 - ((dataSource['酚油'].alarmUpper / dataSource['酚油'].height) > 1 ? 1.55 : (dataSource['酚油'].alarmUpper / dataSource['酚油'].height) * 1.55)
                : 1.75) : 1.75) + 'rem',}"
            alt=""
          />
          <img
            class="accidentArrows arrows"
            :src="ArrowsWarning"
            :style="{top:
              (dataSource['酚油'] && dataSource['酚油'].height ? ((dataSource['酚油'].alarmLower / dataSource['酚油'].height)
                ? 1.75 - ((dataSource['酚油'].alarmLower / dataSource['酚油'].height) > 1 ? 1.55 : (dataSource['酚油'].alarmLower / dataSource['酚油'].height) * 1.55)
                : 1.75) : 1.75) + 'rem',}"
            alt=""
          />
          <div class="accidentShelfRight">
            <img :src="tipsMiddle" :style="{ top: '.25rem' }" alt="" />
            <div :style="{ top: '.25rem' }">
              <span class="word_14">当前库存</span>
              <div>
                <span class="word_inventory_20">{{dataSource['酚油'] && dataSource['酚油'].stock}}</span>
                <span class="word_14 word_unit" v-if="dataSource['酚油'] && dataSource['酚油'].stock">吨</span>
              </div>
            </div>
            <img :src="tipsMiddle" :style="{ top: '1rem' }" alt="" />
            <div :style="{ top: '1rem' }">
              <span class="word_14">期初库存</span>
              <div>
                <span class="word_inventory_20">{{inventoryData['酚油'] && inventoryData['酚油'].startStock}}</span>
              <span class="word_14 word_unit" v-if="inventoryData['酚油'] && inventoryData['酚油'].startStock">吨</span>
              </div>
            </div>
          </div>
          <div class="equipmentInfo word_Bold_16">
            <span>酚油</span>
          </div>
        </div>
        <div class="monthlyOutput">
        <div class="monthlyOutputWord">
          <span class="word_12">D-1产量</span>
          <span class="word_20" v-if="cumulativeProductionData['酚油']">{{cumulativeProductionData['酚油'].totalMonthAmount}}吨</span>
        </div>
        <div class="progressBar">
          <span :style="{ width: cumulativeProductionData['酚油'] && planAmountData['酚油'] ? ((cumulativeProductionData['酚油'].totalMonthAmount / planAmountData['酚油'].planCount) > 1 ? 100 : (cumulativeProductionData['酚油'].totalMonthAmount / planAmountData['酚油'].planCount) * 100) + '%' : 0 }"></span>
          <span></span>
        </div>
        <div class="monthlyOutputWord">
          <span class="word_12">本月计划产量</span>
          <span class="word_20" v-if="planAmountData['酚油']">{{planAmountData['酚油'].planCount}}吨</span>
        </div>
      </div>
      </div>
      <div class="oilDepotA positionOilDepotDiv">
        <div class="accidentShelf">
          <!-- <img class="accidentShadeImg" :src="AccidentShade" alt="" /> -->
          <!-- <div class="accidentShadeImg"></div> -->
          <div class="unqualifiedModal" v-if="reportInfoObj && reportInfoObj['萘油'] && reportInfoObj['萘油'].flag">
            <img class="forkImg" @click="$emit('updateReportInfoFlagFuc','萘油')" :src="ForkImg" alt="">
            <div>
              <span>取样地点:</span>
              <span>{{reportInfoObj['萘油'].sampleAddr}}</span>
            </div>
            <div>
              <span>取料名称:</span>
              <span>{{reportInfoObj['萘油'].materialName}}</span>
            </div>
            <div>
              <span>取样时间:</span>
              <span>{{reportInfoObj['萘油'].sampleTime}}</span>
            </div>
            <div>
              <span>样品分类:</span>
              <span>{{reportInfoObj['萘油'].sampleTypeName}}</span>
            </div>
            <div>
              <span>检验结果:</span>
              <span>不合格</span>
            </div>
            <div>
              <span>检验项:</span>
              <div class="inspection_Item" v-if="reportInfoObj['萘油'].itemsAuditVOList">
                  <span v-for="item of reportInfoObj['萘油'].itemsAuditVOList" :key="item.id">
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
            :style="{ height: (dataSource['萘油'] && dataSource['萘油'].height ? (dataSource['萘油'].stock / dataSource['萘油'].height) ? (dataSource['萘油'].stock / dataSource['萘油'].height) > 1 ? 1.75 : .12 + (dataSource['萘油'].stock / dataSource['萘油'].height) * 1.63: 0 : 0 )+ 'rem', }"
            alt=""
          />
          <div
          class="borderErrLine boraccidentLine"
          :style="{top:
              (dataSource['萘油'] && dataSource['萘油'].height ? ((dataSource['萘油'].alarmUpper / dataSource['萘油'].height)
                ? 1.7 - ((dataSource['萘油'].alarmUpper / dataSource['萘油'].height) > 1 ? 1.55 : (dataSource['萘油'].alarmUpper / dataSource['萘油'].height) * 1.55)
                : 1.7) : 1.7) + 'rem',}"
        ></div>
        <div
          class="borderWarningLine boraccidentLine"
          :style="{top:
              (dataSource['萘油'] && dataSource['萘油'].height ? ((dataSource['萘油'].alarmLower / dataSource['萘油'].height)
                ? 1.7 - ((dataSource['萘油'].alarmLower / dataSource['萘油'].height) > 1 ? 1.55 : (dataSource['萘油'].alarmLower / dataSource['萘油'].height) * 1.55)
                : 1.7) : 1.7) + 'rem',}"
        ></div>
          <img
            class="accidentArrows arrows"
            :src="ArrowsError"
            :style="{top:
              (dataSource['萘油'] && dataSource['萘油'].height ? ((dataSource['萘油'].alarmUpper / dataSource['萘油'].height)
                ? 1.75 - ((dataSource['萘油'].alarmUpper / dataSource['萘油'].height) > 1 ? 1.55 : (dataSource['萘油'].alarmUpper / dataSource['萘油'].height) * 1.55)
                : 1.75) : 1.75) + 'rem',}"
            alt=""
          />
          <img
            class="accidentArrows arrows"
            :src="ArrowsWarning"
            :style="{top:
              (dataSource['萘油'] && dataSource['萘油'].height ? ((dataSource['萘油'].alarmLower / dataSource['萘油'].height)
                ? 1.75 - ((dataSource['萘油'].alarmLower / dataSource['萘油'].height) > 1 ? 1.55 : (dataSource['萘油'].alarmLower / dataSource['萘油'].height) * 1.55)
                : 1.75) : 1.75) + 'rem',}"
            alt=""
          />
          <div class="accidentShelfRight">
            <img :src="tipsMiddle" :style="{ top: '.25rem' }" alt="" />
            <div :style="{ top: '.25rem' }">
              <span class="word_14">当前库存</span>
              <div>
                <span class="word_inventory_20">{{dataSource['萘油'] && dataSource['萘油'].stock}}</span>
                <span class="word_14 word_unit" v-if="dataSource['萘油'] && dataSource['萘油'].stock">吨</span>
              </div>
            </div>
            <img :src="tipsMiddle" :style="{ top: '1rem' }" alt="" />
            <div :style="{ top: '1rem' }">
              <span class="word_14">期初库存</span>
              <div>
                <span class="word_inventory_20">{{inventoryData['萘油'] && inventoryData['萘油'].startStock}}</span>
              <span class="word_14 word_unit" v-if="inventoryData['萘油'] && inventoryData['萘油'].startStock">吨</span>
              </div>
            </div>
          </div>
        </div>
        <div class="monthlyOutput">
        <div class="monthlyOutputWord">
          <span class="word_12">D-1产量</span>
          <span class="word_20" v-if="cumulativeProductionData['萘油']">{{cumulativeProductionData['萘油'].totalMonthAmount}}吨</span>
        </div>
        <div class="progressBar">
          <span :style="{ width: cumulativeProductionData['萘油'] && planAmountData['萘油'] ? ((cumulativeProductionData['萘油'].totalMonthAmount / planAmountData['萘油'].planCount) > 1 ? 100 : (cumulativeProductionData['萘油'].totalMonthAmount / planAmountData['萘油'].planCount) * 100) + '%' : 0 }"></span>
          <span></span>
        </div>
        <div class="monthlyOutputWord">
          <span class="word_12">本月计划产量</span>
          <span class="word_20" v-if="planAmountData['萘油']">{{planAmountData['萘油'].planCount}}吨</span>
        </div>
      </div>
      </div>
    </div>
    <div class="equipment_parameter_info equipment_parameter_info_main1">
      <div class="equipment_parameter_info_top">
        <div class="equipment_name" style="left: 49.8%;top: 66%;">
            <span>脱水塔</span>
            <span>2K-2101</span>
        </div>
        <div class="equipment_parameter_info_128w">
          <div class="moduleItem">
            <table>
              <tbody>
                <tr class="item_header">
                  <td>顶温</td>
                  <td>顶压</td>
                </tr>
                <tr class="item_data">
                  <td :style="{color: equipmentListData['2K-2101'] && equipmentListData['2K-2101']['2TE_2109'] && equipmentListData['2K-2101']['2TE_2109'].type}">{{equipmentListData['2K-2101'] && equipmentListData['2K-2101']['2TE_2109'] && equipmentListData['2K-2101']['2TE_2109'].data}}</td>
                  <td :style="{color: equipmentListData['2K-2101'] && equipmentListData['2K-2101']['2PT_2102'] && equipmentListData['2K-2101']['2PT_2102'].type}">{{equipmentListData['2K-2101'] && equipmentListData['2K-2101']['2PT_2102'] && equipmentListData['2K-2101']['2PT_2102'].data}}</td>
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
                  <td>底温</td>
                  <td>底压</td>
                </tr>
                <tr class="item_data">
                  <td :style="{color: equipmentListData['2K-2101'] && equipmentListData['2K-2101']['2TE_2111'] && equipmentListData['2K-2101']['2TE_2111'].type}">{{equipmentListData['2K-2101'] && equipmentListData['2K-2101']['2TE_2111'] && equipmentListData['2K-2101']['2TE_2111'].data}}</td>
                  <td :style="{color: equipmentListData['2K-2101'] && equipmentListData['2K-2101']['2PT_2103'] && equipmentListData['2K-2101']['2PT_2103'].type}">{{equipmentListData['2K-2101'] && equipmentListData['2K-2101']['2PT_2103'] && equipmentListData['2K-2101']['2PT_2103'].data}}</td>
                </tr>
                <tr class="item_unit">
                  <td>℃</td>
                  <td>Kpa</td>
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
                  <td>回流量</td>
                  <td>循环量</td>
                </tr>
                <tr class="item_data">
                  <td :style="{color: equipmentListData['2K-2101'] && equipmentListData['2K-2101']['2PT_2103'] && equipmentListData['2K-2101']['2PT_2103'].type}">{{equipmentListData['2K-2101'] && equipmentListData['2K-2101']['2PT_2103'] && equipmentListData['2K-2101']['2PT_2103'].data}}</td>
                  <td :style="{color: equipmentListData['2E-2102'] && equipmentListData['2E-2102']['2FT_2121'] && equipmentListData['2E-2102']['2FT_2121'].type}">{{equipmentListData['2E-2102'] && equipmentListData['2E-2102']['2FT_2121'] && equipmentListData['2E-2102']['2FT_2121'].data}}</td>
                </tr>
                <tr class="item_unit">
                  <td>m³/h</td>
                  <td>m³/h</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="moduleItem">
            <table>
              <tbody>
                <tr class="item_header">
                  <td>
                    <div>原料</div>
                    <div>进料量</div>
                  </td>
                  <td>
                    <div>塔底</div>
                    <div>采出量</div>
                  </td>
                </tr>
                <tr class="item_data">
                  <td :style="{color: equipmentListData['2K-2101'] && equipmentListData['2K-2101']['2FT_2110'] && equipmentListData['2K-2101']['2FT_2110'].type}">{{equipmentListData['2K-2101'] && equipmentListData['2K-2101']['2FT_2110'] && equipmentListData['2K-2101']['2FT_2110'].data}}</td>
                  <td :style="{color: equipmentListData['2F-2101'] && equipmentListData['2F-2101']['2FT_2104'] && equipmentListData['2F-2101']['2FT_2104'].type}">{{equipmentListData['2F-2101'] && equipmentListData['2F-2101']['2FT_2104'] && equipmentListData['2F-2101']['2FT_2104'].data}}</td>
                </tr>
                <tr class="item_unit">
                  <td>m³/h</td>
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
                <td>焦油换热后温度</td>
                <td>重沸器焦油出口温</td>
                <td>轻油冷却后温</td>
                <td>液位</td>
              </tr>
              <tr class="item_data">
                <td :style="{color: equipmentListData['2E-2101'] && equipmentListData['2E-2101']['2TE_2103'] && equipmentListData['2E-2101']['2TE_2103'].type}">{{equipmentListData['2E-2101'] && equipmentListData['2E-2101']['2TE_2103'] && equipmentListData['2E-2101']['2TE_2103'].data}}</td>
                <td :style="{color: equipmentListData['2E-2102'] && equipmentListData['2E-2102']['2TE_2112'] && equipmentListData['2E-2102']['2TE_2112'].type}">{{equipmentListData['2E-2102'] && equipmentListData['2E-2102']['2TE_2112'] && equipmentListData['2E-2102']['2TE_2112'].data}}</td>
                <td :style="{color: equipmentListData['2E-2103'] && equipmentListData['2E-2103']['2TE_2130'] && equipmentListData['2E-2103']['2TE_2130'].type}">{{equipmentListData['2E-2103'] && equipmentListData['2E-2103']['2TE_2130'] && equipmentListData['2E-2103']['2TE_2130'].data}}</td>
                <td :style="{color: equipmentListData['2K-2101'] && equipmentListData['2K-2101']['2LT_2103'] && equipmentListData['2K-2101']['2LT_2103'].type}">{{equipmentListData['2K-2101'] && equipmentListData['2K-2101']['2LT_2103'] && equipmentListData['2K-2101']['2LT_2103'].data}}</td>
              </tr>
              <tr class="item_unit">
                <td>℃</td>
                <td>℃</td>
                <td>℃</td>
                <td>mm</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="equipment_parameter_info equipment_parameter_info_main2">
      <div class="equipment_parameter_info_top">
        <div class="equipment_name" style="left: 50%;top: 66%;">
            <span>加热炉</span>
            <span>2F-2101</span>
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
                  <td :style="{color: equipmentListData['2F-2101'] && equipmentListData['2F-2101']['2TT_2182'] && equipmentListData['2F-2101']['2TT_2182'].type}">{{equipmentListData['2F-2101'] && equipmentListData['2F-2101']['2TT_2182'] && equipmentListData['2F-2101']['2TT_2182'].data}}</td>
                  <td :style="{color: equipmentListData['2F-2101'] && equipmentListData['2F-2101']['2PT_2181'] && equipmentListData['2F-2101']['2PT_2181'].type}">{{equipmentListData['2F-2101'] && equipmentListData['2F-2101']['2PT_2181'] && equipmentListData['2F-2101']['2PT_2181'].data}}</td>
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
                  <td :style="{color: equipmentListData['2F-2101'] && equipmentListData['2F-2101']['2PT_2182'] && equipmentListData['2F-2101']['2PT_2182'].type}">{{equipmentListData['2F-2101'] && equipmentListData['2F-2101']['2PT_2182'] && equipmentListData['2F-2101']['2PT_2182'].data}}</td>
                  <td :style="{color: equipmentListData['2F-2101'] && equipmentListData['2F-2101']['2FT_2181'] && equipmentListData['2F-2101']['2FT_2181'].type}">{{equipmentListData['2F-2101'] && equipmentListData['2F-2101']['2FT_2181'] && equipmentListData['2F-2101']['2FT_2181'].data}}</td>
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
                  <td :style="{color: equipmentListData['2F-2101'] && equipmentListData['2F-2101']['2PT_2187'] && equipmentListData['2F-2101']['2PT_2187'].type}">{{equipmentListData['2F-2101'] && equipmentListData['2F-2101']['2PT_2187'] && equipmentListData['2F-2101']['2PT_2187'].data}}</td>
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
                  <td :style="{color: equipmentListData['2F-2101'] && equipmentListData['2F-2101']['2FT_2180'] && equipmentListData['2F-2101']['2FT_2180'].type}">{{equipmentListData['2F-2101'] && equipmentListData['2F-2101']['2FT_2180'] && equipmentListData['2F-2101']['2FT_2180'].data}}</td>
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
                <td :style="{color: equipmentListData['2E-2110'] && equipmentListData['2E-2110']['2TE_2124'] && equipmentListData['2E-2110']['2TE_2124'].type}">{{equipmentListData['2E-2110'] && equipmentListData['2E-2110']['2TE_2124'] && equipmentListData['2E-2110']['2TE_2124'].data}}</td>
                <td :style="{color: equipmentListData['2F-2101'] && equipmentListData['2F-2101']['2PT_2106'] && equipmentListData['2F-2101']['2PT_2106'].type}">{{equipmentListData['2F-2101'] && equipmentListData['2F-2101']['2PT_2106'] && equipmentListData['2F-2101']['2PT_2106'].data}}</td>
                <td :style="{color: equipmentListData['2F-2101'] && equipmentListData['2F-2101']['2PT_2116'] && equipmentListData['2F-2101']['2PT_2116'].type}">{{equipmentListData['2F-2101'] && equipmentListData['2F-2101']['2PT_2116'] && equipmentListData['2F-2101']['2PT_2116'].data}}</td>
                <td :style="{color: equipmentListData['2F-2101'] && equipmentListData['2F-2101']['2TE_2115'] && equipmentListData['2F-2101']['2TE_2115'].type}">{{equipmentListData['2F-2101'] && equipmentListData['2F-2101']['2TE_2115'] && equipmentListData['2F-2101']['2TE_2115'].data}}</td>
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
    <div class="equipment_parameter_info equipment_parameter_info_main3">
      <div class="equipment_parameter_info_top">
        <div class="equipment_name" style="left: 49.5%;top: 66%;">
            <span>主塔</span>
            <span>2K-2102</span>
        </div>
        <div class="equipment_parameter_info_198w">
          <div class="moduleItem">
            <div class="item_title">液位</div>
            <table>
              <tbody>
                <tr class="item_header">
                  <td>LT_2104A</td>
                  <td>LT_2104B</td>
                </tr>
                <tr class="item_data">
                  <td :style="{color: equipmentListData['2K-2102'] && equipmentListData['2K-2102']['2LT_2104A'] && equipmentListData['2K-2102']['2LT_2104A'].type}">{{equipmentListData['2K-2102'] && equipmentListData['2K-2102']['2LT_2104A'] && equipmentListData['2K-2102']['2LT_2104A'].data}}</td>
                  <td :style="{color: equipmentListData['2K-2102'] && equipmentListData['2K-2102']['2LT_2104B'] && equipmentListData['2K-2102']['2LT_2104B'].type}">{{equipmentListData['2K-2102'] && equipmentListData['2K-2102']['2LT_2104B'] && equipmentListData['2K-2102']['2LT_2104B'].data}}</td>
                </tr>
                <tr class="item_unit">
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
                  <td>酚油冷却后温</td>
                  <td>酚油采出量</td>
                </tr>
                <tr class="item_data">
                  <td :style="{color: equipmentListData['2E-2103'] && equipmentListData['2E-2103']['2TE_2131'] && equipmentListData['2E-2103']['2TE_2131'].type}">{{equipmentListData['2E-2103'] && equipmentListData['2E-2103']['2TE_2131'] && equipmentListData['2E-2103']['2TE_2131'].data}}</td>
                  <td :style="{color: equipmentListData['2K-2102'] && equipmentListData['2K-2102']['2FT_2106'] && equipmentListData['2K-2102']['2FT_2106'].type}">{{equipmentListData['2K-2102'] && equipmentListData['2K-2102']['2FT_2106'] && equipmentListData['2K-2102']['2FT_2106'].data}}</td>
                </tr>
                <tr class="item_unit">
                  <td>℃</td>
                  <td>m³/h</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="equipment_parameter_info_198w">
          <div class="moduleItem">
            <table>
              <tbody>
                <tr class="item_header">
                  <td>顶温</td>
                  <td>顶压</td>
                </tr>
                <tr class="item_data">
                  <td :style="{color: equipmentListData['2K-2102'] && equipmentListData['2K-2102']['2FT_2106'] && equipmentListData['2K-2102']['2FT_2106'].type}">{{equipmentListData['2K-2102'] && equipmentListData['2K-2102']['2FT_2106'] && equipmentListData['2K-2102']['2FT_2106'].data}}</td>
                  <td :style="{color: equipmentListData['2K-2102'] && equipmentListData['2K-2102']['2PT_2104'] && equipmentListData['2K-2102']['2PT_2104'].type}">{{equipmentListData['2K-2102'] && equipmentListData['2K-2102']['2PT_2104'] && equipmentListData['2K-2102']['2PT_2104'].data}}</td>
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
                  <td>
                    <div>底温</div>
                    <div>(TE_2122)</div>
                  </td>
                  <td>
                    <div>底温</div>
                    <div>(TE_2122)</div>
                  </td>
                  <td>底压</td>
                </tr>
                <tr class="item_data">
                  <td :style="{color: equipmentListData['2K-2102'] && equipmentListData['2K-2102']['2TE_2122'] && equipmentListData['2K-2102']['2TE_2122'].type}">{{equipmentListData['2K-2102'] && equipmentListData['2K-2102']['2TE_2122'] && equipmentListData['2K-2102']['2TE_2122'].data}}</td>
                  <td :style="{color: equipmentListData['2K-2102'] && equipmentListData['2K-2102']['2TE_2122'] && equipmentListData['2K-2102']['2TE_2122'].type}">{{equipmentListData['2K-2102'] && equipmentListData['2K-2102']['2TE_2122'] && equipmentListData['2K-2102']['2TE_2122'].data}}</td>
                  <td :style="{color: equipmentListData['2K-2102'] && equipmentListData['2K-2102']['2PT_2105'] && equipmentListData['2K-2102']['2PT_2105'].type}">{{equipmentListData['2K-2102'] && equipmentListData['2K-2102']['2PT_2105'] && equipmentListData['2K-2102']['2PT_2105'].data}}</td>
                </tr>
                <tr class="item_unit">
                  <td>℃</td>
                  <td>℃</td>
                  <td>Kpa</td>
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
                <td>
                  <div>蒽油</div>
                  <div>(TE_2120A)</div>
                </td>
                <td>
                  <div>蒽油</div>
                  <div>(TE_2120B)</div>
                </td>
                <td>
                  <div>蒽油</div>
                  <div>(TE_2120C)</div>
                </td>
                <td>
                  <div>洗油</div>
                  <div>(TE_2119A)</div>
                </td>
                <td>
                  <div>萘油</div>
                  <div>(TE_2118A)</div>
                </td>
                <td>
                  <div>萘油</div>
                  <div>(TE_2118B)</div>
                </td>
                <td>
                  <div>萘油</div>
                  <div>(2TE_2118C)</div>
                </td>
              </tr>
              <tr class="item_data">
                  <td :style="{color: equipmentListData['K-2102'] && equipmentListData['K-2102']['2TE_2120A'] && equipmentListData['K-2102']['2TE_2120A'].type}">{{equipmentListData['K-2102'] && equipmentListData['K-2102']['2TE_2120A'] && equipmentListData['K-2102']['2TE_2120A'].data}}</td>
                  <td :style="{color: equipmentListData['2K-2102'] && equipmentListData['2K-2102']['2TE_2120B'] && equipmentListData['2K-2102']['2TE_2120B'].type}">{{equipmentListData['2K-2102'] && equipmentListData['2K-2102']['2TE_2120B'] && equipmentListData['2K-2102']['2TE_2120B'].data}}</td>
                  <td :style="{color: equipmentListData['2K-2102'] && equipmentListData['2K-2102']['2TE_2120C'] && equipmentListData['2K-2102']['2TE_2120C'].type}">{{equipmentListData['2K-2102'] && equipmentListData['2K-2102']['2TE_2120C'] && equipmentListData['2K-2102']['2TE_2120C'].data}}</td>
                  <td :style="{color: equipmentListData['2K-2102'] && equipmentListData['2K-2102']['2TE_2119A'] && equipmentListData['2K-2102']['2TE_2119A'].type}">{{equipmentListData['2K-2102'] && equipmentListData['2K-2102']['2TE_2119A'] && equipmentListData['2K-2102']['2TE_2119A'].data}}</td>
                  <td :style="{color: equipmentListData['2K-2102'] && equipmentListData['2K-2102']['2TE_2118A'] && equipmentListData['2K-2102']['2TE_2118A'].type}">{{equipmentListData['2K-2102'] && equipmentListData['2K-2102']['2TE_2118A'] && equipmentListData['2K-2102']['2TE_2118A'].data}}</td>
                  <td :style="{color: equipmentListData['2K-2102'] && equipmentListData['2K-2102']['2TE_2118B'] && equipmentListData['2K-2102']['2TE_2118B'].type}">{{equipmentListData['2K-2102'] && equipmentListData['2K-2102']['2TE_2118B'] && equipmentListData['2K-2102']['2TE_2118B'].data}}</td>
                  <td :style="{color: equipmentListData['2K-2102'] && equipmentListData['2K-2102']['2TE_2118C'] && equipmentListData['2K-2102']['2TE_2118C'].type}">{{equipmentListData['2K-2102'] && equipmentListData['2K-2102']['2TE_2118C'] && equipmentListData['2K-2102']['2TE_2118C'].data}}</td>
              </tr>
              <tr class="item_unit">
                <td>℃</td>
                <td>℃</td>
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
    <div class="equipment_parameter_info equipment_parameter_info_main4">
      <div class="equipment_parameter_info_top">
        <div class="equipment_name" style="left: 37%;top: 66%;">
            <span>初馏塔</span>
            <span>2K-2401</span>
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
                  <td :style="{color: equipmentListData['2K-2401'] && equipmentListData['2K-2401']['2TE_2402'] && equipmentListData['2K-2401']['2TE_2402'].type}">{{equipmentListData['2K-2401'] && equipmentListData['2K-2401']['2TE_2402'] && equipmentListData['2K-2401']['2TE_2402'].data}}</td>
                  <td :style="{color: equipmentListData['2K-2401'] && equipmentListData['2K-2401']['2PT_2406'] && equipmentListData['2K-2401']['2PT_2406'].type}">{{equipmentListData['2K-2401'] && equipmentListData['2K-2401']['2PT_2406'] && equipmentListData['2K-2401']['2PT_2406'].data}}</td>
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
                      <span class="item_data" :style="{color: equipmentListData['2K-2401'] && equipmentListData['2K-2401']['2LT_2401'] && equipmentListData['2K-2401']['2LT_2401'].type}">{{equipmentListData['2K-2401'] && equipmentListData['2K-2401']['2LT_2401'] && equipmentListData['2K-2401']['2LT_2401'].data}}</span>
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
                  <td :style="{color: equipmentListData['2K-2401'] && equipmentListData['2K-2401']['2TE_2417'] && equipmentListData['2K-2401']['2TE_2417'].type}">{{equipmentListData['2K-2401'] && equipmentListData['2K-2401']['2TE_2417'] && equipmentListData['2K-2401']['2TE_2417'].data}}</td>
                  <td :style="{color: equipmentListData['2K-2401'] && equipmentListData['2K-2401']['2PT_2407'] && equipmentListData['2K-2401']['2PT_2407'].type}">{{equipmentListData['2K-2401'] && equipmentListData['2K-2401']['2PT_2407'] && equipmentListData['2K-2401']['2PT_2407'].data}}</td>
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
                    <td>循环量</td>
                  </tr>
                  <tr class="item_data">
                    <td :style="{color: equipmentListData['2K-2401'] && equipmentListData['2K-2401']['2FT_2401'] && equipmentListData['2K-2401']['2FT_2401'].type}">{{equipmentListData['2K-2401'] && equipmentListData['2K-2401']['2FT_2401'] && equipmentListData['2K-2401']['2FT_2401'].data}}</td>
                    <td :style="{color: equipmentListData['2T-2401'] && equipmentListData['2T-2401']['2FT_2411'] && equipmentListData['2T-2401']['2FT_2411'].type}">{{equipmentListData['2T-2401'] && equipmentListData['2T-2401']['2FT_2411'] && equipmentListData['2T-2401']['2FT_2411'].data}}</td>
                  </tr>
                  <tr class="item_unit">
                    <td>m³/h</td>
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
                    <td>酚油采出量</td>
                  </tr>
                  <tr class="item_data">
                    <td :style="{color: equipmentListData['2K-2401'] && equipmentListData['2K-2401']['2FT_2414'] && equipmentListData['2K-2401']['2FT_2414'].type}">{{equipmentListData['2K-2401'] && equipmentListData['2K-2401']['2FT_2414'] && equipmentListData['2K-2401']['2FT_2414'].data}}</td>
                    <td :style="{color: equipmentListData['2E-2407'] && equipmentListData['2E-2407']['2FT_2408'] && equipmentListData['2E-2407']['2FT_2408'].type}">{{equipmentListData['2E-2407'] && equipmentListData['2E-2407']['2FT_2408'] && equipmentListData['2E-2407']['2FT_2408'].data}}</td>
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
              <div class="item_title">第一凝缩器</div>
              <table>
                <tbody>
                  <tr class="item_header">
                    <td>温度</td>
                    <td>压力</td>
                  </tr>
                  <tr class="item_data">
                    <td :style="{color: equipmentListData['2E-2406'] && equipmentListData['2E-2406']['2TE_2411'] && equipmentListData['2E-2406']['2TE_2411'].type}">{{equipmentListData['2E-2406'] && equipmentListData['2E-2406']['2TE_2411'] && equipmentListData['2E-2406']['2TE_2411'].data}}</td>
                    <td :style="{color: equipmentListData['2E-2406'] && equipmentListData['2E-2406']['2PT_2401'] && equipmentListData['2E-2406']['2PT_2401'].type}">{{equipmentListData['2E-2406'] && equipmentListData['2E-2406']['2PT_2401'] && equipmentListData['2E-2406']['2PT_2401'].data}}</td>
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
                    <td :style="{color: equipmentListData['2E-2406'] && equipmentListData['2E-2406']['2LT_2405'] && equipmentListData['2E-2406']['2LT_2405'].type}">{{equipmentListData['2E-2406'] && equipmentListData['2E-2406']['2LT_2405'] && equipmentListData['2E-2406']['2LT_2405'].data}}</td>
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
                <td>萘油换热后温度</td>
                <td>回流槽_温度</td>
                <td>回流槽液位度</td>
              </tr>
              <tr class="item_data">
                <td :style="{color: equipmentListData['2E-2402'] && equipmentListData['2E-2402']['2TE_2406'] && equipmentListData['2E-2402']['2TE_2406'].type}">{{equipmentListData['2E-2402'] && equipmentListData['2E-2402']['2TE_2406'] && equipmentListData['2E-2402']['2TE_2406'].data}}</td>
                <td :style="{color: equipmentListData['2T-2401'] && equipmentListData['2T-2401']['2TE_2431'] && equipmentListData['2T-2401']['2TE_2431'].type}">{{equipmentListData['2T-2401'] && equipmentListData['2T-2401']['2TE_2431'] && equipmentListData['2T-2401']['2TE_2431'].data}}</td>
                <td :style="{color: equipmentListData['2T-2401'] && equipmentListData['2T-2401']['2LT_2402'] && equipmentListData['2T-2401']['2LT_2402'].type}">{{equipmentListData['2T-2401'] && equipmentListData['2T-2401']['2LT_2402'] && equipmentListData['2T-2401']['2LT_2402'].data}}</td>
              </tr>
              <tr class="item_unit">
                <td>℃</td>
                <td>℃</td>
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
.coalTarScreen_tarDistillationCom {
  width: 20.6rem;
  height: 100%;
//   border: 1px solid #ccc;
  position: relative;
  .positionDiv {
    position: absolute;
    width: 6rem;
    height: 3.7rem;
    // border: 1px solid #ccc;
    display: flex;
    flex-direction: column;
  }
  .boraccidentLine{
    left: 35.18%;
  }
  .accidentArrows{
    transform: translateX(2.15rem);
  }
  .positionMinisDiv {
    position: absolute;
    width: 20rem;
    height: 3.3rem;
    top: 6.33rem;
    left: 0;
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
          left: 2.28rem;
          width: 1.5rem;
          height: 100%;
          display: flex;
          flex-direction: column;
          position: relative;
          img {
            width: .95rem;
            height: 0.6rem;
            left: 0;
          }
          & > div {
            position: absolute;
            width: .95rem;
            height: 0.6rem;
            padding-left: 0.07rem;
            left: 0;
            display: flex;
            flex-direction: column;
            &>span{
                line-height: .18rem;
            }
            & > div {
              line-height: .31rem;
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
        transform: translate(-0.5rem, -0.2rem);
        // justify-content: center;
        & > div {
          display: flex;
        }
        .progressBar {
          width: 1.2rem;
          margin: 0 0.1rem;
          height: 0.16rem;
          display: flex;
          &>span{
              background: #0C69FF;
              border-radius: .03rem;
          }
          &>span:last-child{
              flex:1;
              background: #1C2A4B;
              border-radius: .03rem;
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
      // .monthlyOutput:first-child{
      //   transform: translate(-0.8rem, -0.2rem);
      // }
      // .monthlyOutput:last-child{
      //   transform: translate(-0.3rem, -0.2rem);
      // }
    }
  }
  .equipment_parameter_info {
    position: absolute;
    display: flex;
    flex-direction: column;
  }
  .equipment_parameter_info_main1 {
    left: 0.27rem;
    top: 1.1rem;
    width: 5rem;
    height: 4.36rem;
  }
  .equipment_parameter_info_main2 {
    left: 5.5rem;
    top: 1.1rem;
    width: 5rem;
    height: 4.36rem;
  }
  .equipment_parameter_info_main3 {
    left: 10.73rem;
    top: 1.1rem;
    width: 6.6rem;
    height: 4.36rem;
  }
  .equipment_parameter_info_main4 {
    left: 18.3rem;
    top: 1.1rem;
    width: 7.17rem;
    height: 4.36rem;
    .equipment_parameter_info_top_right{
        &>div:first-child{
            margin-right: .06rem;
        }
    }
  }
}
@import "../style/foo.scss";
</style>
