<template>
  <!-- 油库 -->
  <div class="coalTarScreen_restructuringAsphaltCom">
    <div class="positionMinisDiv positionMinisDiv1">
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
          <img class="accidentShelfImg" :src="AccidentWarning" alt="" />
          <img
            class="accidentWaterImg accidentNormalWaterImg"
            :src="AccidentWarningWater"
            :style="{ height: (dataSource['重质沥青(煤焦油)'] && dataSource['重质沥青(煤焦油)'].height ? (dataSource['重质沥青(煤焦油)'].stock / dataSource['重质沥青(煤焦油)'].height) ? (dataSource['重质沥青(煤焦油)'].stock / dataSource['重质沥青(煤焦油)'].height) > 1 ? 1.75 : .12 + (dataSource['重质沥青(煤焦油)'].stock / dataSource['重质沥青(煤焦油)'].height) * 1.63: 0 : 0 )+ 'rem', }"
            alt=""
          />
          <div
          class="borderErrLine boraccidentLine"
          :style="{top:
              (dataSource['重质沥青(煤焦油)'] && dataSource['重质沥青(煤焦油)'].height ? ((dataSource['重质沥青(煤焦油)'].alarmUpper / dataSource['重质沥青(煤焦油)'].height)
                ? 1.7 - ((dataSource['重质沥青(煤焦油)'].alarmUpper / dataSource['重质沥青(煤焦油)'].height) > 1 ? 1.55 : (dataSource['重质沥青(煤焦油)'].alarmUpper / dataSource['重质沥青(煤焦油)'].height) * 1.55)
                : 1.7) : 1.7) + 'rem',}"
        ></div>
        <div
          class="borderWarningLine boraccidentLine"
          :style="{top:
              (dataSource['重质沥青(煤焦油)'] && dataSource['重质沥青(煤焦油)'].height ? ((dataSource['重质沥青(煤焦油)'].alarmLower / dataSource['重质沥青(煤焦油)'].height)
                ? 1.7 - ((dataSource['重质沥青(煤焦油)'].alarmLower / dataSource['重质沥青(煤焦油)'].height) > 1 ? 1.55 : (dataSource['重质沥青(煤焦油)'].alarmLower / dataSource['重质沥青(煤焦油)'].height) * 1.55)
                : 1.7) : 1.7) + 'rem',}"
        ></div>
          <img
            class="accidentArrows arrows"
            :src="ArrowsError"
            :style="{top:
              (dataSource['重质沥青(煤焦油)'] && dataSource['重质沥青(煤焦油)'].height ? ((dataSource['重质沥青(煤焦油)'].alarmUpper / dataSource['重质沥青(煤焦油)'].height)
                ? 1.75 - ((dataSource['重质沥青(煤焦油)'].alarmUpper / dataSource['重质沥青(煤焦油)'].height) > 1 ? 1.55 : (dataSource['重质沥青(煤焦油)'].alarmUpper / dataSource['重质沥青(煤焦油)'].height) * 1.55)
                : 1.75) : 1.75) + 'rem',}"
            alt=""
          />
          <img
            class="accidentArrows arrows"
            :src="ArrowsWarning"
            :style="{top:
              (dataSource['重质沥青(煤焦油)'] && dataSource['重质沥青(煤焦油)'].height ? ((dataSource['重质沥青(煤焦油)'].alarmLower / dataSource['重质沥青(煤焦油)'].height)
                ? 1.75 - ((dataSource['重质沥青(煤焦油)'].alarmLower / dataSource['重质沥青(煤焦油)'].height) > 1 ? 1.55 : (dataSource['重质沥青(煤焦油)'].alarmLower / dataSource['重质沥青(煤焦油)'].height) * 1.55)
                : 1.75) : 1.75) + 'rem',}"
            alt=""
          />
          <div class="accidentShelfRight">
            <img :src="tipsMiddle" :style="{ top: '.25rem' }" alt="" />
            <div :style="{ top: '.25rem' }">
              <span class="word_14">当前库存</span>
              <div>
                <span class="word_inventory_20">{{dataSource['重质沥青(煤焦油)'] && dataSource['重质沥青(煤焦油)'].stock}}</span>
                <span class="word_14 word_unit" v-if="dataSource['重质沥青(煤焦油)'] && dataSource['重质沥青(煤焦油)'].stock">吨</span>
              </div>
            </div>
            <img :src="tipsMiddle" :style="{ top: '1rem' }" alt="" />
            <div :style="{ top: '1rem' }">
              <span class="word_14">期初库存</span>
              <div>
                <span class="word_inventory_20">{{inventoryData['重质沥青(煤焦油)'] && inventoryData['重质沥青(煤焦油)'].startStock}}</span>
              <span class="word_14 word_unit" v-if="inventoryData['重质沥青(煤焦油)'] && inventoryData['重质沥青(煤焦油)'].startStock">吨</span>
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
          <span class="word_20" v-if="cumulativeProductionData['重质沥青(煤焦油)']">{{cumulativeProductionData['重质沥青(煤焦油)'].totalMonthAmount}}吨</span>
        </div>
        <div class="progressBar">
          <span :style="{ width: cumulativeProductionData['重质沥青(煤焦油)'] && planAmountData['重质沥青(煤焦油)'] ? ((cumulativeProductionData['重质沥青(煤焦油)'].totalMonthAmount / planAmountData['重质沥青(煤焦油)'].planCount) > 1 ? 100 : (cumulativeProductionData['重质沥青(煤焦油)'].totalMonthAmount / planAmountData['重质沥青(煤焦油)'].planCount) * 100) + '%' : 0 }"></span>
          <span></span>  
        </div>
        <div class="monthlyOutputWord">
          <span class="word_12">本月计划产量</span>
          <span class="word_20" v-if="planAmountData['重质沥青(煤焦油)']">{{planAmountData['重质沥青(煤焦油)'].planCount}}吨</span>
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
          <img class="accidentShelfImg" :src="AccidentWarning" alt="" />
          <img
            class="accidentWaterImg accidentNormalWaterImg"
            :src="AccidentWarningWater"
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
          <img class="accidentShelfImg" :src="AccidentWarning" alt="" />
          <img
            class="accidentWaterImg accidentNormalWaterImg"
            :src="AccidentWarningWater"
            :style="{ height: (dataSource['精制沥青(煤焦油)'] && dataSource['精制沥青(煤焦油)'].height ? (dataSource['精制沥青(煤焦油)'].stock / dataSource['精制沥青(煤焦油)'].height) ? (dataSource['精制沥青(煤焦油)'].stock / dataSource['精制沥青(煤焦油)'].height) > 1 ? 1.75 : .12 + (dataSource['精制沥青(煤焦油)'].stock / dataSource['精制沥青(煤焦油)'].height) * 1.63: 0 : 0 )+ 'rem', }"
            alt=""
          />
          <div
          class="borderErrLine boraccidentLine"
          :style="{top:
              (dataSource['精制沥青(煤焦油)'] && dataSource['精制沥青(煤焦油)'].height ? ((dataSource['精制沥青(煤焦油)'].alarmUpper / dataSource['精制沥青(煤焦油)'].height)
                ? 1.7 - ((dataSource['精制沥青(煤焦油)'].alarmUpper / dataSource['精制沥青(煤焦油)'].height) > 1 ? 1.55 : (dataSource['精制沥青(煤焦油)'].alarmUpper / dataSource['精制沥青(煤焦油)'].height) * 1.55)
                : 1.7) : 1.7) + 'rem',}"
        ></div>
        <div
          class="borderWarningLine boraccidentLine"
          :style="{top:
              (dataSource['精制沥青(煤焦油)'] && dataSource['精制沥青(煤焦油)'].height ? ((dataSource['精制沥青(煤焦油)'].alarmLower / dataSource['精制沥青(煤焦油)'].height)
                ? 1.7 - ((dataSource['精制沥青(煤焦油)'].alarmLower / dataSource['精制沥青(煤焦油)'].height) > 1 ? 1.55 : (dataSource['精制沥青(煤焦油)'].alarmLower / dataSource['精制沥青(煤焦油)'].height) * 1.55)
                : 1.7) : 1.7) + 'rem',}"
        ></div>
          <img
            class="accidentArrows arrows"
            :src="ArrowsError"
            :style="{top:
              (dataSource['精制沥青(煤焦油)'] && dataSource['精制沥青(煤焦油)'].height ? ((dataSource['精制沥青(煤焦油)'].alarmUpper / dataSource['精制沥青(煤焦油)'].height)
                ? 1.75 - ((dataSource['精制沥青(煤焦油)'].alarmUpper / dataSource['精制沥青(煤焦油)'].height) > 1 ? 1.55 : (dataSource['精制沥青(煤焦油)'].alarmUpper / dataSource['精制沥青(煤焦油)'].height) * 1.55)
                : 1.75) : 1.75) + 'rem',}"
            alt=""
          />
          <img
            class="accidentArrows arrows"
            :src="ArrowsWarning"
            :style="{top:
              (dataSource['精制沥青(煤焦油)'] && dataSource['精制沥青(煤焦油)'].height ? ((dataSource['精制沥青(煤焦油)'].alarmLower / dataSource['精制沥青(煤焦油)'].height)
                ? 1.75 - ((dataSource['精制沥青(煤焦油)'].alarmLower / dataSource['精制沥青(煤焦油)'].height) > 1 ? 1.55 : (dataSource['精制沥青(煤焦油)'].alarmLower / dataSource['精制沥青(煤焦油)'].height) * 1.55)
                : 1.75) : 1.75) + 'rem',}"
            alt=""
          />
          <div class="accidentShelfRight">
            <img :src="tipsMiddle" :style="{ top: '.25rem' }" alt="" />
            <div :style="{ top: '.25rem' }">
              <span class="word_14">当前库存</span>
              <div>
                <span class="word_inventory_20">{{dataSource['精制沥青(煤焦油)'] && dataSource['精制沥青(煤焦油)'].stock}}</span>
                <span class="word_14 word_unit" v-if="dataSource['精制沥青(煤焦油)'] && dataSource['精制沥青(煤焦油)'].stock">吨</span>
              </div>
            </div>
            <img :src="tipsMiddle" :style="{ top: '1rem' }" alt="" />
            <div :style="{ top: '1rem' }">
              <span class="word_14">期初库存</span>
              <div>
                <span class="word_inventory_20">{{inventoryData['精制沥青(煤焦油)'] && inventoryData['精制沥青(煤焦油)'].startStock}}</span>
              <span class="word_14 word_unit" v-if="inventoryData['精制沥青(煤焦油)'] && inventoryData['精制沥青(煤焦油)'].startStock">吨</span>
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
              <span class="word_20" v-if="cumulativeProductionData['精制沥青(煤焦油)']">{{cumulativeProductionData['精制沥青(煤焦油)'].totalMonthAmount}}吨</span>
            </div>
            <div class="progressBar">
              <span :style="{ width: cumulativeProductionData['精制沥青(煤焦油)'] && planAmountData['精制沥青(煤焦油)'] ? ((cumulativeProductionData['精制沥青(煤焦油)'].totalMonthAmount / planAmountData['精制沥青(煤焦油)'].planCount) > 1 ? 100 : (cumulativeProductionData['精制沥青(煤焦油)'].totalMonthAmount / planAmountData['精制沥青(煤焦油)'].planCount) * 100) + '%' : 0 }"></span>
              <span></span>  
            </div>
            <div class="monthlyOutputWord">
              <span class="word_12">本月计划产量</span>
              <span class="word_20" v-if="planAmountData['精制沥青(煤焦油)']">{{planAmountData['精制沥青(煤焦油)'].planCount}}吨</span>
            </div>
        </div>
      </div>
    </div>
    <div class="positionMinisDiv positionMinisDiv2">
      <div class="oilDepotA positionOilDepotDiv">
        <div class="accidentShelf">
          <!-- <img class="accidentShadeImg" :src="AccidentShade" alt="" /> -->
          <!-- <div class="accidentShadeImg"></div> -->
          <div class="unqualifiedModal" v-if="reportInfoObj && reportInfoObj['改质沥青'] && reportInfoObj['改质沥青'].flag">
            <img class="forkImg" @click="$emit('updateReportInfoFlagFuc','改质沥青')" :src="ForkImg" alt="">
            <div>
              <span>取样地点:</span>
              <span>{{reportInfoObj['改质沥青'].sampleAddr}}</span>
            </div>
            <div>
              <span>取料名称:</span>
              <span>{{reportInfoObj['改质沥青'].materialName}}</span>
            </div>
            <div>
              <span>取样时间:</span>
              <span>{{reportInfoObj['改质沥青'].sampleTime}}</span>
            </div>
            <div>
              <span>样品分类:</span>
              <span>{{reportInfoObj['改质沥青'].sampleTypeName}}</span>
            </div>
            <div>
              <span>检验结果:</span>
              <span>不合格</span>
            </div>
            <div>
              <span>检验项:</span>
              <div class="inspection_Item" v-if="reportInfoObj['改质沥青'].itemsAuditVOList">
                  <span v-for="item of reportInfoObj['改质沥青'].itemsAuditVOList" :key="item.id">
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
            :style="{ height: (dataSource['改质沥青'] && dataSource['改质沥青'].height ? (dataSource['改质沥青'].stock / dataSource['改质沥青'].height) ? (dataSource['改质沥青'].stock / dataSource['改质沥青'].height) > 1 ? 1.75 : .12 + (dataSource['改质沥青'].stock / dataSource['改质沥青'].height) * 1.63: 0 : 0 )+ 'rem', }"
            alt=""
          />
          <div
          class="borderErrLine boraccidentLine"
          :style="{top:
              (dataSource['改质沥青'] && dataSource['改质沥青'].height ? ((dataSource['改质沥青'].alarmUpper / dataSource['改质沥青'].height)
                ? 1.7 - ((dataSource['改质沥青'].alarmUpper / dataSource['改质沥青'].height) > 1 ? 1.55 : (dataSource['改质沥青'].alarmUpper / dataSource['改质沥青'].height) * 1.55)
                : 1.7) : 1.7) + 'rem',}"
        ></div>
        <div
          class="borderWarningLine boraccidentLine"
          :style="{top:
              (dataSource['改质沥青'] && dataSource['改质沥青'].height ? ((dataSource['改质沥青'].alarmLower / dataSource['改质沥青'].height)
                ? 1.7 - ((dataSource['改质沥青'].alarmLower / dataSource['改质沥青'].height) > 1 ? 1.55 : (dataSource['改质沥青'].alarmLower / dataSource['改质沥青'].height) * 1.55)
                : 1.7) : 1.7) + 'rem',}"
        ></div>
          <img
            class="accidentArrows arrows"
            :src="ArrowsError"
            :style="{top:
              (dataSource['改质沥青'] && dataSource['改质沥青'].height ? ((dataSource['改质沥青'].alarmUpper / dataSource['改质沥青'].height)
                ? 1.75 - ((dataSource['改质沥青'].alarmUpper / dataSource['改质沥青'].height) > 1 ? 1.55 : (dataSource['改质沥青'].alarmUpper / dataSource['改质沥青'].height) * 1.55)
                : 1.75) : 1.75) + 'rem',}"
            alt=""
          />
          <img
            class="accidentArrows arrows"
            :src="ArrowsWarning"
            :style="{top:
              (dataSource['改质沥青'] && dataSource['改质沥青'].height ? ((dataSource['改质沥青'].alarmLower / dataSource['改质沥青'].height)
                ? 1.75 - ((dataSource['改质沥青'].alarmLower / dataSource['改质沥青'].height) > 1 ? 1.55 : (dataSource['改质沥青'].alarmLower / dataSource['改质沥青'].height) * 1.55)
                : 1.75) : 1.75) + 'rem',}"
            alt=""
          />
          <div class="accidentShelfRight">
            <img :src="tipsMiddle" :style="{ top: '.25rem' }" alt="" />
            <div :style="{ top: '.25rem' }">
              <span class="word_14">当前库存</span>
              <div>
                <span class="word_inventory_20">{{dataSource['改质沥青'] && dataSource['改质沥青'].stock}}</span>
                <span class="word_14 word_unit" v-if="dataSource['改质沥青'] && dataSource['改质沥青'].stock">吨</span>
              </div>
            </div>
            <img :src="tipsMiddle" :style="{ top: '1rem' }" alt="" />
            <div :style="{ top: '1rem' }">
              <span class="word_14">期初库存</span>
              <div>
                <span class="word_inventory_20">{{inventoryData['改质沥青'] && inventoryData['改质沥青'].startStock}}</span>
              <span class="word_14 word_unit" v-if="inventoryData['改质沥青'] && inventoryData['改质沥青'].startStock">吨</span>
              </div>
            </div>
          </div>
          <div class="equipmentInfo word_Bold_16">
            <span>改质沥青</span>
          </div>
        </div>
        <div class="monthlyOutput">
        <div class="monthlyOutputWord">
          <span class="word_12">D-1产量</span>
          <span class="word_20" v-if="cumulativeProductionData['改质沥青']">{{cumulativeProductionData['改质沥青'].totalMonthAmount}}吨</span>
        </div>
        <div class="progressBar">
          <span :style="{ width: cumulativeProductionData['改质沥青'] && planAmountData['改质沥青'] ? ((cumulativeProductionData['改质沥青'].totalMonthAmount / planAmountData['改质沥青'].planCount) > 1 ? 100 : (cumulativeProductionData['改质沥青'].totalMonthAmount / planAmountData['改质沥青'].planCount) * 100) + '%' : 0 }"></span>
          <span></span>  
        </div>
        <div class="monthlyOutputWord">
          <span class="word_12">本月计划产量</span>
          <span class="word_20" v-if="planAmountData['改质沥青']">{{planAmountData['改质沥青'].planCount}}吨</span>
        </div>
      </div>
      </div>
      <div class="oilDepotA positionOilDepotDiv">
        <div class="accidentShelf">
          <!-- <img class="accidentShadeImg" :src="AccidentShade" alt="" /> -->
          <!-- <div class="accidentShadeImg"></div> -->
          <div class="unqualifiedModal" v-if="reportInfoObj && reportInfoObj['粘结剂沥青'] && reportInfoObj['粘结剂沥青'].flag">
            <img class="forkImg" @click="$emit('updateReportInfoFlagFuc','粘结剂沥青')" :src="ForkImg" alt="">
            <div>
              <span>取样地点:</span>
              <span>{{reportInfoObj['粘结剂沥青'].sampleAddr}}</span>
            </div>
            <div>
              <span>取料名称:</span>
              <span>{{reportInfoObj['粘结剂沥青'].materialName}}</span>
            </div>
            <div>
              <span>取样时间:</span>
              <span>{{reportInfoObj['粘结剂沥青'].sampleTime}}</span>
            </div>
            <div>
              <span>样品分类:</span>
              <span>{{reportInfoObj['粘结剂沥青'].sampleTypeName}}</span>
            </div>
            <div>
              <span>检验结果:</span>
              <span>不合格</span>
            </div>
            <div>
              <span>检验项:</span>
              <div class="inspection_Item" v-if="reportInfoObj['粘结剂沥青'].itemsAuditVOList">
                  <span v-for="item of reportInfoObj['粘结剂沥青'].itemsAuditVOList" :key="item.id">
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
            :style="{ height: (dataSource['粘结剂沥青'] && dataSource['粘结剂沥青'].height ? (dataSource['粘结剂沥青'].stock / dataSource['粘结剂沥青'].height) ? (dataSource['粘结剂沥青'].stock / dataSource['粘结剂沥青'].height) > 1 ? 1.75 : .12 + (dataSource['粘结剂沥青'].stock / dataSource['粘结剂沥青'].height) * 1.63: 0 : 0 )+ 'rem', }"
            alt=""
          />
          <div
          class="borderErrLine boraccidentLine"
          :style="{top:
              (dataSource['粘结剂沥青'] && dataSource['粘结剂沥青'].height ? ((dataSource['粘结剂沥青'].alarmUpper / dataSource['粘结剂沥青'].height)
                ? 1.7 - ((dataSource['粘结剂沥青'].alarmUpper / dataSource['粘结剂沥青'].height) > 1 ? 1.55 : (dataSource['粘结剂沥青'].alarmUpper / dataSource['粘结剂沥青'].height) * 1.55)
                : 1.7) : 1.7) + 'rem',}"
        ></div>
        <div
          class="borderWarningLine boraccidentLine"
          :style="{top:
              (dataSource['粘结剂沥青'] && dataSource['粘结剂沥青'].height ? ((dataSource['粘结剂沥青'].alarmLower / dataSource['粘结剂沥青'].height)
                ? 1.7 - ((dataSource['粘结剂沥青'].alarmLower / dataSource['粘结剂沥青'].height) > 1 ? 1.55 : (dataSource['粘结剂沥青'].alarmLower / dataSource['粘结剂沥青'].height) * 1.55)
                : 1.7) : 1.7) + 'rem',}"
        ></div>
          <img
            class="accidentArrows arrows"
            :src="ArrowsError"
            :style="{top:
              (dataSource['粘结剂沥青'] && dataSource['粘结剂沥青'].height ? ((dataSource['粘结剂沥青'].alarmUpper / dataSource['粘结剂沥青'].height)
                ? 1.75 - ((dataSource['粘结剂沥青'].alarmUpper / dataSource['粘结剂沥青'].height) > 1 ? 1.55 : (dataSource['粘结剂沥青'].alarmUpper / dataSource['粘结剂沥青'].height) * 1.55)
                : 1.75) : 1.75) + 'rem',}"
            alt=""
          />
          <img
            class="accidentArrows arrows"
            :src="ArrowsWarning"
            :style="{top:
              (dataSource['粘结剂沥青'] && dataSource['粘结剂沥青'].height ? ((dataSource['粘结剂沥青'].alarmLower / dataSource['粘结剂沥青'].height)
                ? 1.75 - ((dataSource['粘结剂沥青'].alarmLower / dataSource['粘结剂沥青'].height) > 1 ? 1.55 : (dataSource['粘结剂沥青'].alarmLower / dataSource['粘结剂沥青'].height) * 1.55)
                : 1.75) : 1.75) + 'rem',}"
            alt=""
          />
          <div class="accidentShelfRight">
            <img :src="tipsMiddle" :style="{ top: '.25rem' }" alt="" />
            <div :style="{ top: '.25rem' }">
              <span class="word_14">当前库存</span>
              <div>
                <span class="word_inventory_20">{{dataSource['粘结剂沥青'] && dataSource['粘结剂沥青'].stock}}</span>
                <span class="word_14 word_unit" v-if="dataSource['粘结剂沥青'] && dataSource['粘结剂沥青'].stock">吨</span>
              </div>
            </div>
            <img :src="tipsMiddle" :style="{ top: '1rem' }" alt="" />
            <div :style="{ top: '1rem' }">
              <span class="word_14">期初库存</span>
              <div>
                <span class="word_inventory_20">{{inventoryData['粘结剂沥青'] && inventoryData['粘结剂沥青'].startStock}}</span>
              <span class="word_14 word_unit" v-if="inventoryData['粘结剂沥青'] && inventoryData['粘结剂沥青'].startStock">吨</span>
              </div>
            </div>
          </div>
          <div class="equipmentInfo word_Bold_16">
            <span>粘结剂沥青</span>
          </div>
        </div>
        <div class="monthlyOutput">
        <div class="monthlyOutputWord">
          <span class="word_12">D-1产量</span>
          <span class="word_20" v-if="cumulativeProductionData['粘结剂沥青']">{{cumulativeProductionData['粘结剂沥青'].totalMonthAmount}}吨</span>
        </div>
        <div class="progressBar">
          <span :style="{ width: cumulativeProductionData['粘结剂沥青'] && planAmountData['粘结剂沥青'] ? ((cumulativeProductionData['粘结剂沥青'].totalMonthAmount / planAmountData['粘结剂沥青'].planCount) > 1 ? 100 : (cumulativeProductionData['粘结剂沥青'].totalMonthAmount / planAmountData['粘结剂沥青'].planCount) * 100) + '%' : 0 }"></span>
          <span></span>  
        </div>
        <div class="monthlyOutputWord">
          <span class="word_12">本月计划产量</span>
          <span class="word_20" v-if="planAmountData['粘结剂沥青']">{{planAmountData['粘结剂沥青'].planCount}}吨</span>
        </div>
      </div>
      </div>
          <div class="oilDepotA positionOilDepotDiv">
        <div class="accidentShelf">
          <!-- <img class="accidentShadeImg" :src="AccidentShade" alt="" /> -->
          <!-- <div class="accidentShadeImg"></div> -->
          <div class="unqualifiedModal" v-if="reportInfoObj && reportInfoObj['浸渍沥青'] && reportInfoObj['浸渍沥青'].flag">
            <img class="forkImg" @click="$emit('updateReportInfoFlagFuc','浸渍沥青')" :src="ForkImg" alt="">
            <div>
              <span>取样地点:</span>
              <span>{{reportInfoObj['浸渍沥青'].sampleAddr}}</span>
            </div>
            <div>
              <span>取料名称:</span>
              <span>{{reportInfoObj['浸渍沥青'].materialName}}</span>
            </div>
            <div>
              <span>取样时间:</span>
              <span>{{reportInfoObj['浸渍沥青'].sampleTime}}</span>
            </div>
            <div>
              <span>样品分类:</span>
              <span>{{reportInfoObj['浸渍沥青'].sampleTypeName}}</span>
            </div>
            <div>
              <span>检验结果:</span>
              <span>不合格</span>
            </div>
            <div>
              <span>检验项:</span>
              <div class="inspection_Item" v-if="reportInfoObj['浸渍沥青'].itemsAuditVOList">
                  <span v-for="item of reportInfoObj['浸渍沥青'].itemsAuditVOList" :key="item.id">
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
            :style="{ height: (dataSource['浸渍沥青'] && dataSource['浸渍沥青'].height ? (dataSource['浸渍沥青'].stock / dataSource['浸渍沥青'].height) ? (dataSource['浸渍沥青'].stock / dataSource['浸渍沥青'].height) > 1 ? 1.75 : .12 + (dataSource['浸渍沥青'].stock / dataSource['浸渍沥青'].height) * 1.63: 0 : 0 )+ 'rem', }"
            alt=""
          />
          <div
          class="borderErrLine boraccidentLine"
          :style="{top:
              (dataSource['浸渍沥青'] && dataSource['浸渍沥青'].height ? ((dataSource['浸渍沥青'].alarmUpper / dataSource['浸渍沥青'].height)
                ? 1.7 - ((dataSource['浸渍沥青'].alarmUpper / dataSource['浸渍沥青'].height) > 1 ? 1.55 : (dataSource['浸渍沥青'].alarmUpper / dataSource['浸渍沥青'].height) * 1.55)
                : 1.7) : 1.7) + 'rem',}"
        ></div>
        <div
          class="borderWarningLine boraccidentLine"
          :style="{top:
              (dataSource['浸渍沥青'] && dataSource['浸渍沥青'].height ? ((dataSource['浸渍沥青'].alarmLower / dataSource['浸渍沥青'].height)
                ? 1.7 - ((dataSource['浸渍沥青'].alarmLower / dataSource['浸渍沥青'].height) > 1 ? 1.55 : (dataSource['浸渍沥青'].alarmLower / dataSource['浸渍沥青'].height) * 1.55)
                : 1.7) : 1.7) + 'rem',}"
        ></div>
          <img
            class="accidentArrows arrows"
            :src="ArrowsError"
            :style="{top:
              (dataSource['浸渍沥青'] && dataSource['浸渍沥青'].height ? ((dataSource['浸渍沥青'].alarmUpper / dataSource['浸渍沥青'].height)
                ? 1.75 - ((dataSource['浸渍沥青'].alarmUpper / dataSource['浸渍沥青'].height) > 1 ? 1.55 : (dataSource['浸渍沥青'].alarmUpper / dataSource['浸渍沥青'].height) * 1.55)
                : 1.75) : 1.75) + 'rem',}"
            alt=""
          />
          <img
            class="accidentArrows arrows"
            :src="ArrowsWarning"
            :style="{top:
              (dataSource['浸渍沥青'] && dataSource['浸渍沥青'].height ? ((dataSource['浸渍沥青'].alarmLower / dataSource['浸渍沥青'].height)
                ? 1.75 - ((dataSource['浸渍沥青'].alarmLower / dataSource['浸渍沥青'].height) > 1 ? 1.55 : (dataSource['浸渍沥青'].alarmLower / dataSource['浸渍沥青'].height) * 1.55)
                : 1.75) : 1.75) + 'rem',}"
            alt=""
          />
          <div class="accidentShelfRight">
            <img :src="tipsMiddle" :style="{ top: '.25rem' }" alt="" />
            <div :style="{ top: '.25rem' }">
              <span class="word_14">当前库存</span>
              <div>
                <span class="word_inventory_20">{{dataSource['浸渍沥青'] && dataSource['浸渍沥青'].stock}}</span>
                <span class="word_14 word_unit" v-if="dataSource['浸渍沥青'] && dataSource['浸渍沥青'].stock">吨</span>
              </div>
            </div>
            <img :src="tipsMiddle" :style="{ top: '1rem' }" alt="" />
            <div :style="{ top: '1rem' }">
              <span class="word_14">期初库存</span>
              <div>
                <span class="word_inventory_20">{{inventoryData['浸渍沥青'] && inventoryData['浸渍沥青'].startStock}}</span>
              <span class="word_14 word_unit" v-if="inventoryData['浸渍沥青'] && inventoryData['浸渍沥青'].startStock">吨</span>
              </div>
            </div>
          </div>
          <div class="equipmentInfo word_Bold_16">
            <span>浸渍沥青</span>
          </div>
        </div>
        <div class="monthlyOutput">
        <div class="monthlyOutputWord">
          <span class="word_12">D-1产量</span>
          <span class="word_20" v-if="cumulativeProductionData['浸渍沥青']">{{cumulativeProductionData['浸渍沥青'].totalMonthAmount}}吨</span>
        </div>
        <div class="progressBar">
          <span :style="{ width: cumulativeProductionData['浸渍沥青'] && planAmountData['浸渍沥青'] ? ((cumulativeProductionData['浸渍沥青'].totalMonthAmount / planAmountData['浸渍沥青'].planCount) > 1 ? 100 : (cumulativeProductionData['浸渍沥青'].totalMonthAmount / planAmountData['浸渍沥青'].planCount) * 100) + '%' : 0 }"></span>
          <span></span>  
        </div>
        <div class="monthlyOutputWord">
          <span class="word_12">本月计划产量</span>
          <span class="word_20" v-if="planAmountData['浸渍沥青']">{{planAmountData['浸渍沥青'].planCount}}吨</span>
        </div>
      </div>
      </div>
      <div class="oilDepotA positionOilDepotDiv">
        <div class="accidentShelf">
          <!-- <img class="accidentShadeImg" :src="AccidentShade" alt="" /> -->
          <!-- <div class="accidentShadeImg"></div> -->
          <div class="unqualifiedModal" v-if="reportInfoObj && reportInfoObj['闪蒸油'] && reportInfoObj['闪蒸油'].flag">
            <img class="forkImg" @click="$emit('updateReportInfoFlagFuc','闪蒸油')" :src="ForkImg" alt="">
            <div>
              <span>取样地点:</span>
              <span>{{reportInfoObj['闪蒸油'].sampleAddr}}</span>
            </div>
            <div>
              <span>取料名称:</span>
              <span>{{reportInfoObj['闪蒸油'].materialName}}</span>
            </div>
            <div>
              <span>取样时间:</span>
              <span>{{reportInfoObj['闪蒸油'].sampleTime}}</span>
            </div>
            <div>
              <span>样品分类:</span>
              <span>{{reportInfoObj['闪蒸油'].sampleTypeName}}</span>
            </div>
            <div>
              <span>检验结果:</span>
              <span>不合格</span>
            </div>
            <div>
              <span>检验项:</span>
              <div class="inspection_Item" v-if="reportInfoObj['闪蒸油'].itemsAuditVOList">
                  <span v-for="item of reportInfoObj['闪蒸油'].itemsAuditVOList" :key="item.id">
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
            :style="{ height: (dataSource['闪蒸油'] && dataSource['闪蒸油'].height ? (dataSource['闪蒸油'].stock / dataSource['闪蒸油'].height) ? (dataSource['闪蒸油'].stock / dataSource['闪蒸油'].height) > 1 ? 1.75 : .12 + (dataSource['闪蒸油'].stock / dataSource['闪蒸油'].height) * 1.63: 0 : 0 )+ 'rem', }"
            alt=""
          />
          <div
          class="borderErrLine boraccidentLine"
          :style="{top:
              (dataSource['闪蒸油'] && dataSource['闪蒸油'].height ? ((dataSource['闪蒸油'].alarmUpper / dataSource['闪蒸油'].height)
                ? 1.7 - ((dataSource['闪蒸油'].alarmUpper / dataSource['闪蒸油'].height) > 1 ? 1.55 : (dataSource['闪蒸油'].alarmUpper / dataSource['闪蒸油'].height) * 1.55)
                : 1.7) : 1.7) + 'rem',}"
        ></div>
        <div
          class="borderWarningLine boraccidentLine"
          :style="{top:
              (dataSource['闪蒸油'] && dataSource['闪蒸油'].height ? ((dataSource['闪蒸油'].alarmLower / dataSource['闪蒸油'].height)
                ? 1.7 - ((dataSource['闪蒸油'].alarmLower / dataSource['闪蒸油'].height) > 1 ? 1.55 : (dataSource['闪蒸油'].alarmLower / dataSource['闪蒸油'].height) * 1.55)
                : 1.7) : 1.7) + 'rem',}"
        ></div>
          <img
            class="accidentArrows arrows"
            :src="ArrowsError"
            :style="{top:
              (dataSource['闪蒸油'] && dataSource['闪蒸油'].height ? ((dataSource['闪蒸油'].alarmUpper / dataSource['闪蒸油'].height)
                ? 1.75 - ((dataSource['闪蒸油'].alarmUpper / dataSource['闪蒸油'].height) > 1 ? 1.55 : (dataSource['闪蒸油'].alarmUpper / dataSource['闪蒸油'].height) * 1.55)
                : 1.75) : 1.75) + 'rem',}"
            alt=""
          />
          <img
            class="accidentArrows arrows"
            :src="ArrowsWarning"
            :style="{top:
              (dataSource['闪蒸油'] && dataSource['闪蒸油'].height ? ((dataSource['闪蒸油'].alarmLower / dataSource['闪蒸油'].height)
                ? 1.75 - ((dataSource['闪蒸油'].alarmLower / dataSource['闪蒸油'].height) > 1 ? 1.55 : (dataSource['闪蒸油'].alarmLower / dataSource['闪蒸油'].height) * 1.55)
                : 1.75) : 1.75) + 'rem',}"
            alt=""
          />
          <div class="accidentShelfRight">
            <img :src="tipsMiddle" :style="{ top: '.25rem' }" alt="" />
            <div :style="{ top: '.25rem' }">
              <span class="word_14">当前库存</span>
              <div>
                <span class="word_inventory_20">{{dataSource['闪蒸油'] && dataSource['闪蒸油'].stock}}</span>
                <span class="word_14 word_unit" v-if="dataSource['闪蒸油'] && dataSource['闪蒸油'].stock">吨</span>
              </div>
            </div>
            <img :src="tipsMiddle" :style="{ top: '1rem' }" alt="" />
            <div :style="{ top: '1rem' }">
              <span class="word_14">期初库存</span>
              <div>
                <span class="word_inventory_20">{{inventoryData['闪蒸油'] && inventoryData['闪蒸油'].startStock}}</span>
              <span class="word_14 word_unit" v-if="inventoryData['闪蒸油'] && inventoryData['闪蒸油'].startStock">吨</span>
              </div>
            </div>
          </div>
          <div class="equipmentInfo word_Bold_16">
            <span>闪蒸油</span>
          </div>
        </div>
        <div class="monthlyOutput">
        <div class="monthlyOutputWord">
          <span class="word_12">D-1产量</span>
          <span class="word_20" v-if="cumulativeProductionData['闪蒸油']">{{cumulativeProductionData['闪蒸油'].totalMonthAmount}}吨</span>
        </div>
        <div class="progressBar">
          <span :style="{ width: cumulativeProductionData['闪蒸油'] && planAmountData['闪蒸油'] ? ((cumulativeProductionData['闪蒸油'].totalMonthAmount / planAmountData['闪蒸油'].planCount) > 1 ? 100 : (cumulativeProductionData['闪蒸油'].totalMonthAmount / planAmountData['闪蒸油'].planCount) * 100) + '%' : 0 }"></span>
          <span></span>  
        </div>
        <div class="monthlyOutputWord">
          <span class="word_12">本月计划产量</span>
          <span class="word_20" v-if="planAmountData['闪蒸油']">{{planAmountData['闪蒸油'].planCount}}吨</span>
        </div>
      </div>
      </div>    
    </div>
    <div class="equipment_parameter_info equipment_parameter_info_main1">
      <div class="equipment_parameter_info_top">
      </div>
      <div class="equipment_parameter_info_bottom">
        <div class="equipment_parameter_info_bottom_table">
          <table>
            <tbody>
              <tr class="item_header">
                <td>
                  <div>10万吨</div>
                  <div>循环油温度</div>
                </td>
                <td>
                  <div>5万吨</div>
                  <div>循环油温度</div>
                </td>
                <td>
                  <div>2万吨</div>
                  <div>出口沥青温度</div>
                </td>
              </tr>
              <tr class="item_data">
                <td :style="{color: equipmentListData['F-2801'] && equipmentListData['F-2801']['TE_2857'] && equipmentListData['F-2801']['TE_2857'].type}">{{equipmentListData['F-2801'] && equipmentListData['F-2801']['TE_2857'] && equipmentListData['F-2801']['TE_2857'].data}}</td>
                <td :style="{color: equipmentListData['2F-2801'] && equipmentListData['2F-2801']['2TE_2857'] && equipmentListData['2F-2801']['2TE_2857'].type}">{{equipmentListData['2F-2801'] && equipmentListData['2F-2801']['2TE_2857'] && equipmentListData['2F-2801']['2TE_2857'].data}}</td>
                <td :style="{color: equipmentListData['F-2501'] && equipmentListData['F-2501']['TE_2557'] && equipmentListData['F-2501']['TE_2557'].type}">{{equipmentListData['F-2501'] && equipmentListData['F-2501']['TE_2557'] && equipmentListData['F-2501']['TE_2557'].data}}</td>
              </tr>
              <tr class="item_unit">
                <td>℃</td>
                <td>℃</td>
                <td>℃</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="equipment_parameter_info equipment_parameter_info_main2">
      <div class="equipment_parameter_info_top">
        <div class="equipment_parameter_info_128w">
          <div class="moduleItem">
            <div class="item_title">10万吨</div>
            <table>
              <tbody>
                <tr class="item_header">
                  <td>顶部温度</td>
                  <td>底部温度</td>
                </tr>
                <tr class="item_data">
                  <td :style="{color: equipmentListData['R-2801'] && equipmentListData['R-2801']['TE_2804'] && equipmentListData['R-2801']['TE_2804'].type}">{{equipmentListData['R-2801'] && equipmentListData['R-2801']['TE_2804'] && equipmentListData['R-2801']['TE_2804'].data}}</td>
                  <td :style="{color: equipmentListData['R-2801'] && equipmentListData['R-2801']['TE_2802'] && equipmentListData['R-2801']['TE_2802'].type}">{{equipmentListData['R-2801'] && equipmentListData['R-2801']['TE_2802'] && equipmentListData['R-2801']['TE_2802'].data}}</td>
                </tr>
                <tr class="item_unit">
                  <td>℃</td>
                  <td>℃</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="moduleItem">
            <table>
              <tbody>
                <tr class="item_header">
                  <td>顶压力</td>
                  <td>液位</td>
                </tr>
                <tr class="item_data">
                  <td :style="{color: equipmentListData['R-2801'] && equipmentListData['R-2801']['PT_2803'] && equipmentListData['R-2801']['PT_2803'].type}">{{equipmentListData['R-2801'] && equipmentListData['R-2801']['PT_2803'] && equipmentListData['R-2801']['PT_2803'].data}}</td>
                  <td :style="{color: equipmentListData['R-2801'] && equipmentListData['R-2801']['LT_2802'] && equipmentListData['R-2801']['LT_2802'].type}">{{equipmentListData['R-2801'] && equipmentListData['R-2801']['LT_2802'] && equipmentListData['R-2801']['LT_2802'].data}}</td>
                </tr>
                <tr class="item_unit">
                  <td>Kpa</td>
                  <td>mm</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="equipment_parameter_info_128w">
          <div class="moduleItem">
            <div class="item_title">5万吨</div>
            <table>
              <tbody>
                <tr class="item_header">
                  <td>顶部温度</td>
                  <td>底部温度</td>
                </tr>
                <tr class="item_data">
                  <td :style="{color: equipmentListData['2R-2801'] && equipmentListData['2R-2801']['2TE_2804'] && equipmentListData['2R-2801']['2TE_2804'].type}">{{equipmentListData['2R-2801'] && equipmentListData['2R-2801']['2TE_2804'] && equipmentListData['2R-2801']['2TE_2804'].data}}</td>
                  <td :style="{color: equipmentListData['2R-2801'] && equipmentListData['2R-2801']['2TE_2802'] && equipmentListData['2R-2801']['2TE_2802'].type}">{{equipmentListData['2R-2801'] && equipmentListData['2R-2801']['2TE_2802'] && equipmentListData['2R-2801']['2TE_2802'].data}}</td>
                </tr>
                <tr class="item_unit">
                  <td>℃</td>
                  <td>℃</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="moduleItem">
            <table>
              <tbody>
                <tr class="item_header">
                  <td>顶压力</td>
                  <td>液位</td>
                </tr>
                <tr class="item_data">
                  <td :style="{color: equipmentListData['2R-2801'] && equipmentListData['2R-2801']['2PT_2803'] && equipmentListData['2R-2801']['2PT_2803'].type}">{{equipmentListData['2R-2801'] && equipmentListData['2R-2801']['2PT_2803'] && equipmentListData['2R-2801']['2PT_2803'].data}}</td>
                  <td :style="{color: equipmentListData['2R-2801'] && equipmentListData['2R-2801']['2LT_2802'] && equipmentListData['2R-2801']['2LT_2802'].type}">{{equipmentListData['2R-2801'] && equipmentListData['2R-2801']['2LT_2802'] && equipmentListData['2R-2801']['2LT_2802'].data}}</td>
                </tr>
                <tr class="item_unit">
                  <td>Kpa</td>
                  <td>mm</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="equipment_parameter_info_bottom">
        <div class="equipment_parameter_info_bottom_table">
          <div class="item_title">2万吨</div>
          <table>
            <tbody>
              <tr class="item_header">
                <td>顶部温度</td>
                <td>沥青温度</td>
                <td>顶压力</td>
                <td>液位</td>
              </tr>
              <tr class="item_data">
                <td :style="{color: equipmentListData['R-2501'] && equipmentListData['R-2501']['TE_2504'] && equipmentListData['R-2501']['TE_2504'].type}">{{equipmentListData['R-2501'] && equipmentListData['R-2501']['TE_2504'] && equipmentListData['R-2501']['TE_2504'].data}}</td>
                <td :style="{color: equipmentListData['R-2501'] && equipmentListData['R-2501']['TE_2502'] && equipmentListData['R-2501']['TE_2502'].type}">{{equipmentListData['R-2501'] && equipmentListData['R-2501']['TE_2502'] && equipmentListData['R-2501']['TE_2502'].data}}</td>
                <td :style="{color: equipmentListData['R-2501'] && equipmentListData['R-2501']['PT_2503'] && equipmentListData['R-2501']['PT_2503'].type}">{{equipmentListData['R-2501'] && equipmentListData['R-2501']['PT_2503'] && equipmentListData['R-2501']['PT_2503'].data}}</td>
                <td :style="{color: equipmentListData['R-2501'] && equipmentListData['R-2501']['LT_2502'] && equipmentListData['R-2501']['LT_2502'].type}">{{equipmentListData['R-2501'] && equipmentListData['R-2501']['LT_2502'] && equipmentListData['R-2501']['LT_2502'].data}}</td>
              </tr>
              <tr class="item_unit">
                <td>℃</td>
                <td>℃</td>
                <td>Kpa</td>
                <td>mm</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="equipment_parameter_info equipment_parameter_info_main3">
      <div class="equipment_parameter_info_top">
        <div class="equipment_parameter_info_128w">
          <div class="moduleItem">
            <div class="item_title">10万吨</div>
            <table>
              <tbody>
                <tr class="item_header">
                  <td>顶压力</td>
                  <td>液位</td>
                </tr>
                <tr class="item_data">
                  <td :style="{color: equipmentListData['T-2801'] && equipmentListData['T-2801']['PT_2807B'] && equipmentListData['T-2801']['PT_2807B'].type}">{{equipmentListData['T-2801'] && equipmentListData['T-2801']['PT_2807B'] && equipmentListData['T-2801']['PT_2807B'].data}}</td>
                  <td :style="{color: equipmentListData['T-2801'] && equipmentListData['T-2801']['LT_2805'] && equipmentListData['T-2801']['LT_2805'].type}">{{equipmentListData['T-2801'] && equipmentListData['T-2801']['LT_2805'] && equipmentListData['T-2801']['LT_2805'].data}}</td>
                </tr>
                <tr class="item_unit">
                  <td>Kpa</td>
                  <td>mm</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="moduleItem">
            <table>
              <tbody>
                <tr class="item_header">
                  <td>底部温度</td>
                  <td>沥青流量</td>
                </tr>
                <tr class="item_data">
                  <td :style="{color: equipmentListData['T-2801'] && equipmentListData['T-2801']['TE_2810'] && equipmentListData['T-2801']['TE_2810'].type}">{{equipmentListData['T-2801'] && equipmentListData['T-2801']['TE_2810'] && equipmentListData['T-2801']['TE_2810'].data}}</td>
                  <td :style="{color: equipmentListData['T-2801'] && equipmentListData['T-2801']['FT_2803'] && equipmentListData['T-2801']['FT_2803'].type}">{{equipmentListData['T-2801'] && equipmentListData['T-2801']['FT_2803'] && equipmentListData['T-2801']['FT_2803'].data}}</td>
                </tr>
                <tr class="item_unit">
                  <td>℃</td>
                  <td>m³/h</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="equipment_parameter_info_128w">
          <div class="moduleItem">
            <div class="item_title">5万吨</div>
            <table>
              <tbody>
                <tr class="item_header">
                  <td>顶压力</td>
                  <td>液位</td>
                </tr>
                <tr class="item_data">
                  <td :style="{color: equipmentListData['2T-2801'] && equipmentListData['2T-2801']['2PT_2807B'] && equipmentListData['2T-2801']['2PT_2807B'].type}">{{equipmentListData['2T-2801'] && equipmentListData['2T-2801']['2PT_2807B'] && equipmentListData['2T-2801']['2PT_2807B'].data}}</td>
                  <td :style="{color: equipmentListData['2T-2801'] && equipmentListData['2T-2801']['2LT_2805'] && equipmentListData['2T-2801']['2LT_2805'].type}">{{equipmentListData['2T-2801'] && equipmentListData['2T-2801']['2LT_2805'] && equipmentListData['2T-2801']['2LT_2805'].data}}</td>
                </tr>
                <tr class="item_unit">
                  <td>Kpa</td>
                  <td>mm</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="moduleItem">
            <table>
              <tbody>
                <tr class="item_header">
                  <td>底部温度</td>
                  <td>沥青流量</td>
                </tr>
                <tr class="item_data">
                  <td :style="{color: equipmentListData['2T-2801'] && equipmentListData['2T-2801']['2TE_2810'] && equipmentListData['2T-2801']['2TE_2810'].type}">{{equipmentListData['2T-2801'] && equipmentListData['2T-2801']['2TE_2810'] && equipmentListData['2T-2801']['2TE_2810'].data}}</td>
                  <td :style="{color: equipmentListData['2T-2801'] && equipmentListData['2T-2801']['2FT_2803'] && equipmentListData['2T-2801']['2FT_2803'].type}">{{equipmentListData['2T-2801'] && equipmentListData['2T-2801']['2FT_2803'] && equipmentListData['2T-2801']['2FT_2803'].data}}</td>
                </tr>
                <tr class="item_unit">
                  <td>℃</td>
                  <td>m³/h</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="equipment_parameter_info_bottom">
        <div class="equipment_parameter_info_bottom_table">
          <div class="item_title">2万吨</div>
          <table>
            <tbody>
              <tr class="item_header">
                <td>顶压力</td>
              </tr>
              <tr class="item_data">
                <td :style="{color: equipmentListData['T-2501'] && equipmentListData['T-2501']['PT_2507B'] && equipmentListData['T-2501']['PT_2507B'].type}">{{equipmentListData['T-2501'] && equipmentListData['T-2501']['PT_2507B'] && equipmentListData['T-2501']['PT_2507B'].data}}</td>
              </tr>
              <tr class="item_unit">
                <td>Kpa</td>
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
.coalTarScreen_restructuringAsphaltCom {
  width: 19.1rem;
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
  .accidentArrows{
    transform: translateX(2.15rem);
  }
  .positionMinisDiv {
    position: absolute;
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
            left: -2%;
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
          bottom: 1.12rem;
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
          bottom: .95rem;
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
        transform: translateX(-0.6rem);
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
          flex: 1;
          flex-direction: column;
        }
        .monthlyOutputWord:first-child {
          text-align: right;
        }
      }
    }
  }
  .positionMinisDiv1{
    .boraccidentLine{
      left: 34%;
    }
    width: 3.4rem;
    height: 8.5rem;
    left: 1.13rem;
    top: .9rem;
    // border: 1px solid #ccc;
    flex-direction: column;
    .positionOilDepotDiv .accidentShelf .accidentWaterImg {
      left: 0.23rem;
      bottom: .85rem;
    }
    .positionOilDepotDiv .accidentShelf .equipmentInfo {
      bottom: .65rem;
    }
    .positionOilDepotDiv .monthlyOutput{
      transform: translate(-.5rem,.12rem);
    }
  }
  .positionMinisDiv2{
    .boraccidentLine{
      left: 33%;
    }
    width: 14.3rem;
    height: 3.1rem;
    top: 6.53rem;
    left: 5.05rem;
  }
  .equipment_parameter_info {
    position: absolute;
    display: flex;
    flex-direction: column;
  }
  .equipment_parameter_info_main2 {
    left: 8.1rem;
    top: 1.3rem;
    width: 4.85rem;
    height: 4.36rem;
  }
  .equipment_parameter_info_main3{
    left: 13.9rem;
    top: 1.3rem;
    width: 4.85rem;
    height: 4.36rem;
  }
  .equipment_parameter_info_main1 {
    left: 4.85rem;
    top: 1.35rem;
    width: 3.09rem;
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
