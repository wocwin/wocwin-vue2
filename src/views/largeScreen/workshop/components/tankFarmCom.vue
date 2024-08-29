<template>
  <!-- 油库 -->
  <div class="coalTarScreen_tankFarmCom">
    <div class="purchaseNumberDiv">
        <div class="purchase_title">煤焦油</div>
        <div class="purchase_info">
            <div>今日购入：<span>{{purchaseNumberObj['煤焦油'] && purchaseNumberObj['煤焦油'].netWeight || 0}}&nbsp;吨</span></div>
            <div>本月累计购入：<span>{{purchaseNumberObj['煤焦油'] && purchaseNumberObj['煤焦油'].monthNetWeight || 0}}&nbsp;吨</span></div>
        </div>
    </div>
    <div class="coalTarBigBH positionDiv">
      <div class="accidentShelf">
        <!-- <img class="accidentShadeImg" :src="AccidentShade" alt="" /> -->
        <!-- <div class="accidentShadeImg"></div> -->
        <div class="unqualifiedModal" v-if="reportInfoObj && reportInfoObj['煤焦油'] && reportInfoObj['煤焦油'].flag">
            <img class="forkImg" @click="$emit('updateReportInfoFlagFuc','煤焦油')" :src="ForkImg" alt="">
            <div>
              <span>取样地点:</span>
              <span>{{reportInfoObj['煤焦油'].sampleAddr}}</span>
            </div>
            <div>
              <span>取料名称:</span>
              <span>{{reportInfoObj['煤焦油'].materialName}}</span>
            </div>
            <div>
              <span>取样时间:</span>
              <span>{{reportInfoObj['煤焦油'].sampleTime}}</span>
            </div>
            <div>
              <span>样品分类:</span>
              <span>{{reportInfoObj['煤焦油'].sampleTypeName}}</span>
            </div>
            <div>
              <span>检验结果:</span>
              <span>不合格</span>
            </div>
            <div>
              <span>检验项:</span>
              <div class="inspection_Item" v-if="reportInfoObj['煤焦油'].itemsAuditVOList">
                  <span v-for="item of reportInfoObj['煤焦油'].itemsAuditVOList" :key="item.id">
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
          :style="{ height: (dataSource['煤焦油(煤焦油)'] && dataSource['煤焦油(煤焦油)'].height ? (dataSource['煤焦油(煤焦油)'].stock / dataSource['煤焦油(煤焦油)'].height) ? (dataSource['煤焦油(煤焦油)'].stock / dataSource['煤焦油(煤焦油)'].height) > 1 ? 2.3 : .12 + (dataSource['煤焦油(煤焦油)'].stock / dataSource['煤焦油(煤焦油)'].height) * 2.18: 0 : 0 )+ 'rem', }"
          alt=""
        />
        <div
          class="borderErrLine boraccidentBHLine"
          :style="{top:
              (dataSource['煤焦油(煤焦油)'] && dataSource['煤焦油(煤焦油)'].height ? ((dataSource['煤焦油(煤焦油)'].alarmUpper / dataSource['煤焦油(煤焦油)'].height)
                ? 2.36 - ((dataSource['煤焦油(煤焦油)'].alarmUpper / dataSource['煤焦油(煤焦油)'].height) > 1 ? 2.13 : (dataSource['煤焦油(煤焦油)'].alarmUpper / dataSource['煤焦油(煤焦油)'].height) * 2.13)
                : 2.36) : 2.36) + 'rem',}"
        ></div>
        <div
          class="borderWarningLine boraccidentBHLine"
          :style="{top:
              (dataSource['煤焦油(煤焦油)'] && dataSource['煤焦油(煤焦油)'].height ? ((dataSource['煤焦油(煤焦油)'].alarmLower / dataSource['煤焦油(煤焦油)'].height)
                ? 2.36 - ((dataSource['煤焦油(煤焦油)'].alarmLower / dataSource['煤焦油(煤焦油)'].height) > 1 ? 2.13 : (dataSource['煤焦油(煤焦油)'].alarmLower / dataSource['煤焦油(煤焦油)'].height) * 2.13)
                : 2.36) : 2.36) + 'rem',}"
        ></div>
        <img
          class="accidentArrowsBH arrowsBH"
          :src="ArrowsError"
          :style="{top:
              (dataSource['煤焦油(煤焦油)'] && dataSource['煤焦油(煤焦油)'].height ? ((dataSource['煤焦油(煤焦油)'].alarmUpper / dataSource['煤焦油(煤焦油)'].height)
                ? 2.4 - ((dataSource['煤焦油(煤焦油)'].alarmUpper / dataSource['煤焦油(煤焦油)'].height) > 1 ? 2.13 : (dataSource['煤焦油(煤焦油)'].alarmUpper / dataSource['煤焦油(煤焦油)'].height) * 2.13)
                : 2.4) : 2.4) + 'rem',}"
          alt=""
        />
        <img
          class="accidentArrowsBH arrowsBH"
          :src="ArrowsWarning"
          :style="{top:
              (dataSource['煤焦油(煤焦油)'] && dataSource['煤焦油(煤焦油)'].height ? ((dataSource['煤焦油(煤焦油)'].alarmLower / dataSource['煤焦油(煤焦油)'].height)
                ? 2.4 - ((dataSource['煤焦油(煤焦油)'].alarmLower / dataSource['煤焦油(煤焦油)'].height) > 1 ? 2.13 : (dataSource['煤焦油(煤焦油)'].alarmLower / dataSource['煤焦油(煤焦油)'].height) * 2.13)
                : 2.4) : 2.4) + 'rem',}"
          alt=""
        />
        <div class="accidentShelfRight">
          <img :src="TipsMax" :style="{ top: '.7rem' }" alt="" />
          <div :style="{ top: '.7rem' }">
            <span class="word_14">当前库存</span>
            <div>
              <span class="word_inventory_20">{{dataSource['煤焦油(煤焦油)'] && dataSource['煤焦油(煤焦油)'].stock}}</span>
              <span class="word_14 word_unit" v-if="dataSource['煤焦油(煤焦油)'] && dataSource['煤焦油(煤焦油)'].stock">吨</span>
            </div>
          </div>
          <img :src="TipsMax" :style="{ top: '1.5rem' }" alt="" />
          <div :style="{ top: '1.5rem' }">
            <span class="word_14">期初库存</span>
            <div>
              <span class="word_inventory_20">{{inventoryData['煤焦油(煤焦油)'] && inventoryData['煤焦油(煤焦油)'].startStock}}</span>
              <span class="word_14 word_unit" v-if="inventoryData['煤焦油(煤焦油)'] && inventoryData['煤焦油(煤焦油)'].startStock">吨</span>
            </div>
          </div>
        </div>
      </div>
      <div class="monthlyOutput">
        <div class="monthlyOutputWord">
          <span class="word_16">D-1消耗量</span>
          <span class="word_24" v-if="cumulativeProductionData['煤焦油(煤焦油)']">{{cumulativeProductionData['煤焦油(煤焦油)'].totalMonthAmount}}吨</span>
        </div>
        <div class="progressBar">
          <span :style="{ width: cumulativeProductionData['煤焦油(煤焦油)'] && planAmountData['煤焦油(煤焦油)'] ? ((cumulativeProductionData['煤焦油(煤焦油)'].totalMonthAmount / planAmountData['煤焦油(煤焦油)'].planCount) > 1 ? 100 : (cumulativeProductionData['煤焦油(煤焦油)'].totalMonthAmount / planAmountData['煤焦油(煤焦油)'].planCount) * 100) + '%' : 0 }"></span>
          <span></span>
        </div>
        <div class="monthlyOutputWord">
          <span class="word_16">本月计划消耗量</span>
          <span class="word_24" v-if="planAmountData['煤焦油(煤焦油)']">{{planAmountData['煤焦油(煤焦油)'].planCount}}吨</span>
        </div>
      </div>
    </div>
    <div class="coalTarBigAB positionDiv">
      <div class="accidentShelf">
        <!-- <img class="accidentShadeImg" :src="AccidentShade" alt="" /> -->
        <!-- <div class="accidentShadeImg"></div> -->
        <div class="unqualifiedModal" v-if="reportInfoObj && reportInfoObj['炭黑油'] && reportInfoObj['炭黑油'].flag">
            <img class="forkImg" @click="$emit('updateReportInfoFlagFuc','炭黑油')" :src="ForkImg" alt="">
            <div>
              <span>取样地点:</span>
              <span>{{reportInfoObj['炭黑油'].sampleAddr}}</span>
            </div>
            <div>
              <span>取料名称:</span>
              <span>{{reportInfoObj['炭黑油'].materialName}}</span>
            </div>
            <div>
              <span>取样时间:</span>
              <span>{{reportInfoObj['炭黑油'].sampleTime}}</span>
            </div>
            <div>
              <span>样品分类:</span>
              <span>{{reportInfoObj['炭黑油'].sampleTypeName}}</span>
            </div>
            <div>
              <span>检验结果:</span>
              <span>不合格</span>
            </div>
            <div>
              <span>检验项:</span>
              <div class="inspection_Item" v-if="reportInfoObj['炭黑油'].itemsAuditVOList">
                  <span v-for="item of reportInfoObj['炭黑油'].itemsAuditVOList" :key="item.id">
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
          :style="{ height: (dataSource['炭黑油'] && dataSource['炭黑油'].height ? (dataSource['炭黑油'].stock / dataSource['炭黑油'].height) ? (dataSource['炭黑油'].stock / dataSource['炭黑油'].height) > 1 ? 2.3 : .12 + (dataSource['炭黑油'].stock / dataSource['炭黑油'].height) * 2.18: 0 : 0 )+ 'rem', }"
          alt=""
        />
        <div
          class="borderErrLine boraccidentBHLine"
          :style="{top:
              (dataSource['炭黑油'] && dataSource['炭黑油'].height ? ((dataSource['炭黑油'].alarmUpper / dataSource['炭黑油'].height)
                ? 2.36 - ((dataSource['炭黑油'].alarmUpper / dataSource['炭黑油'].height) > 1 ? 2.13 : (dataSource['炭黑油'].alarmUpper / dataSource['炭黑油'].height) * 2.13)
                : 2.36) : 2.36) + 'rem',}"
        ></div>
        <div
          class="borderWarningLine boraccidentBHLine"
          :style="{top:
              (dataSource['炭黑油'] && dataSource['炭黑油'].height ? ((dataSource['炭黑油'].alarmLower / dataSource['炭黑油'].height)
                ? 2.36 - ((dataSource['炭黑油'].alarmLower / dataSource['炭黑油'].height) > 1 ? 2.13 : (dataSource['炭黑油'].alarmLower / dataSource['炭黑油'].height) * 2.13)
                : 2.36) : 2.36) + 'rem',}"
        ></div>
        <img
          class="accidentArrowsBH arrowsBH"
          :src="ArrowsError"
          :style="{top:
              (dataSource['炭黑油'] && dataSource['炭黑油'].height ? ((dataSource['炭黑油'].alarmUpper / dataSource['炭黑油'].height)
                ? 2.4 - ((dataSource['炭黑油'].alarmUpper / dataSource['炭黑油'].height) > 1 ? 2.13 : (dataSource['炭黑油'].alarmUpper / dataSource['炭黑油'].height) * 2.13)
                : 2.4) : 2.4) + 'rem',}"
          alt=""
        />
        <img
          class="accidentArrowsBH arrowsBH"
          :src="ArrowsWarning"
          :style="{top:
              (dataSource['炭黑油'] && dataSource['炭黑油'].height ? ((dataSource['炭黑油'].alarmLower / dataSource['炭黑油'].height)
                ? 2.4 - ((dataSource['炭黑油'].alarmLower / dataSource['炭黑油'].height) > 1 ? 2.13 : (dataSource['炭黑油'].alarmLower / dataSource['炭黑油'].height) * 2.13)
                : 2.4) : 2.4) + 'rem',}"
          alt=""
        />
        <div class="accidentShelfRight">
          <img :src="TipsMax" :style="{ top: '.7rem' }" alt="" />
          <div :style="{ top: '.7rem' }">
            <span class="word_14">当前库存</span>
            <div>
              <span class="word_inventory_20">{{dataSource['炭黑油'] && dataSource['炭黑油'].stock}}</span>
              <span class="word_14 word_unit" v-if="dataSource['炭黑油'] && dataSource['炭黑油'].stock">吨</span>
            </div>
          </div>
          <img :src="TipsMax" :style="{ top: '1.5rem' }" alt="" />
          <div :style="{ top: '1.5rem' }">
            <span class="word_14">期初库存</span>
            <div>
              <span class="word_inventory_20">{{inventoryData['炭黑油'] && inventoryData['炭黑油'].startStock}}</span>
              <span class="word_14 word_unit" v-if="inventoryData['炭黑油'] && inventoryData['炭黑油'].startStock">吨</span>
            </div>
          </div>
        </div>
      </div>
      <div class="monthlyOutput">
        <div class="monthlyOutputWord">
          <span class="word_16">D-1产量</span>
          <span class="word_24" v-if="cumulativeProductionData['炭黑油']">{{cumulativeProductionData['炭黑油'].totalMonthAmount}}吨</span>
        </div>
        <div class="progressBar">
          <span :style="{ width: cumulativeProductionData['炭黑油'] && planAmountData['炭黑油'] ? ((cumulativeProductionData['炭黑油'].totalMonthAmount / planAmountData['炭黑油'].planCount) > 1 ? 100 : (cumulativeProductionData['炭黑油'].totalMonthAmount / planAmountData['炭黑油'].planCount) * 100) + '%' : 0 }"></span>
        </div>
        <div class="monthlyOutputWord">
          <span class="word_16">本月计划产量</span>
          <span class="word_24" v-if="planAmountData['炭黑油']">{{planAmountData['炭黑油'].planCount}}吨</span>
        </div>
      </div>
    </div>
    <div class="positionMinisDiv">
      <div class="oilDepotA positionOilDepotDiv">
        <div class="accidentShelf">
          <div class="unqualifiedModal" v-if="reportInfoObj && reportInfoObj['配油槽T-2866A'] && reportInfoObj['配油槽T-2866A'].flag">
            <img class="forkImg" @click="$emit('updateReportInfoFlagFuc','配油槽T-2866A')" :src="ForkImg" alt="">
            <div>
              <span>取样地点:</span>
              <span>{{reportInfoObj['配油槽T-2866A'].sampleAddr}}</span>
            </div>
            <div>
              <span>取料名称:</span>
              <span>{{reportInfoObj['配油槽T-2866A'].materialName}}</span>
            </div>
            <div>
              <span>取样时间:</span>
              <span>{{reportInfoObj['配油槽T-2866A'].sampleTime}}</span>
            </div>
            <div>
              <span>样品分类:</span>
              <span>{{reportInfoObj['配油槽T-2866A'].sampleTypeName}}</span>
            </div>
            <div>
              <span>检验结果:</span>
              <span>不合格</span>
            </div>
            <div>
              <span>检验项:</span>
              <div class="inspection_Item" v-if="reportInfoObj['配油槽T-2866A'].itemsAuditVOList">
                  <span v-for="item of reportInfoObj['配油槽T-2866A'].itemsAuditVOList" :key="item.id">
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
            :style="{ height: (dataSource['配油槽T-2866A'] && dataSource['配油槽T-2866A'].height ? (dataSource['配油槽T-2866A'].stock / dataSource['配油槽T-2866A'].height) ? (dataSource['配油槽T-2866A'].stock / dataSource['配油槽T-2866A'].height) > 1 ? 1.75 : .12 + (dataSource['配油槽T-2866A'].stock / dataSource['配油槽T-2866A'].height) * 1.63: 0 : 0 )+ 'rem', }"
            alt=""
          />
          <div
          class="borderErrLine boraccidentLine"
          :style="{top:
              (dataSource['配油槽T-2866A'] && dataSource['配油槽T-2866A'].height ? ((dataSource['配油槽T-2866A'].alarmUpper / dataSource['配油槽T-2866A'].height)
                ? 1.7 - ((dataSource['配油槽T-2866A'].alarmUpper / dataSource['配油槽T-2866A'].height) > 1 ? 1.55 : (dataSource['配油槽T-2866A'].alarmUpper / dataSource['配油槽T-2866A'].height) * 1.55)
                : 1.7) : 1.7) + 'rem',}"
        ></div>
        <div
          class="borderWarningLine boraccidentLine"
          :style="{top:
              (dataSource['配油槽T-2866A'] && dataSource['配油槽T-2866A'].height ? ((dataSource['配油槽T-2866A'].alarmLower / dataSource['配油槽T-2866A'].height)
                ? 1.7 - ((dataSource['配油槽T-2866A'].alarmLower / dataSource['配油槽T-2866A'].height) > 1 ? 1.55 : (dataSource['配油槽T-2866A'].alarmLower / dataSource['配油槽T-2866A'].height) * 1.55)
                : 1.7) : 1.7) + 'rem',}"
        ></div>
          <img
            class="accidentArrows arrows"
            :src="ArrowsError"
            :style="{top:
              (dataSource['配油槽T-2866A'] && dataSource['配油槽T-2866A'].height ? ((dataSource['配油槽T-2866A'].alarmUpper / dataSource['配油槽T-2866A'].height)
                ? 1.75 - ((dataSource['配油槽T-2866A'].alarmUpper / dataSource['配油槽T-2866A'].height) > 1 ? 1.55 : (dataSource['配油槽T-2866A'].alarmUpper / dataSource['配油槽T-2866A'].height) * 1.55)
                : 1.75) : 1.75) + 'rem',}"
            alt=""
          />
          <img
            class="accidentArrows arrows"
            :src="ArrowsWarning"
            :style="{top:
              (dataSource['配油槽T-2866A'] && dataSource['配油槽T-2866A'].height ? ((dataSource['配油槽T-2866A'].alarmLower / dataSource['配油槽T-2866A'].height)
                ? 1.75 - ((dataSource['配油槽T-2866A'].alarmLower / dataSource['配油槽T-2866A'].height) > 1 ? 1.55 : (dataSource['配油槽T-2866A'].alarmLower / dataSource['配油槽T-2866A'].height) * 1.55)
                : 1.75) : 1.75) + 'rem',}"
            alt=""
          />
          <div class="equipmentInfo word_Bold_16">
            <span>配油槽</span>
            <span>T-2866A</span>
          </div>
          <div class="accidentShelfBottom">
            <img :src="TipsMini" alt="" />
            <div>
              <span class="word_inventory_20">{{dataSource['配油槽T-2866A'] && dataSource['配油槽T-2866A'].stock}}</span>
              <span class="word_14 word_unit" v-if="dataSource['配油槽T-2866A'] && dataSource['配油槽T-2866A'].stock">mm</span>
            </div>
          </div>
        </div>
      </div>
      <div class="oilDepotA positionOilDepotDiv">
        <div class="accidentShelf">
          <div class="unqualifiedModal" v-if="reportInfoObj && reportInfoObj['配油槽T-2866B'] && reportInfoObj['配油槽T-2866B'].flag">
            <img class="forkImg" @click="$emit('updateReportInfoFlagFuc','配油槽T-2866B')" :src="ForkImg" alt="">
            <div>
              <span>取样地点:</span>
              <span>{{reportInfoObj['配油槽T-2866B'].sampleAddr}}</span>
            </div>
            <div>
              <span>取料名称:</span>
              <span>{{reportInfoObj['配油槽T-2866B'].materialName}}</span>
            </div>
            <div>
              <span>取样时间:</span>
              <span>{{reportInfoObj['配油槽T-2866B'].sampleTime}}</span>
            </div>
            <div>
              <span>样品分类:</span>
              <span>{{reportInfoObj['配油槽T-2866B'].sampleTypeName}}</span>
            </div>
            <div>
              <span>检验结果:</span>
              <span>不合格</span>
            </div>
            <div>
              <span>检验项:</span>
              <div class="inspection_Item" v-if="reportInfoObj['配油槽T-2866B'].itemsAuditVOList">
                  <span v-for="item of reportInfoObj['配油槽T-2866B'].itemsAuditVOList" :key="item.id">
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
            :style="{ height: (dataSource['配油槽T-2866B'] && dataSource['配油槽T-2866B'].height ? (dataSource['配油槽T-2866B'].stock / dataSource['配油槽T-2866B'].height) ? (dataSource['配油槽T-2866B'].stock / dataSource['配油槽T-2866B'].height) > 1 ? 1.75 : .12 + (dataSource['配油槽T-2866B'].stock / dataSource['配油槽T-2866B'].height) * 1.63: 0 : 0 )+ 'rem', }"
            alt=""
          />
          <div
          class="borderErrLine boraccidentLine"
          :style="{top:
              (dataSource['配油槽T-2866B'] && dataSource['配油槽T-2866B'].height ? ((dataSource['配油槽T-2866B'].alarmUpper / dataSource['配油槽T-2866B'].height)
                ? 1.7 - ((dataSource['配油槽T-2866B'].alarmUpper / dataSource['配油槽T-2866B'].height) > 1 ? 1.55 : (dataSource['配油槽T-2866B'].alarmUpper / dataSource['配油槽T-2866B'].height) * 1.55)
                : 1.7) : 1.7) + 'rem',}"
        ></div>
        <div
          class="borderWarningLine boraccidentLine"
          :style="{top:
              (dataSource['配油槽T-2866B'] && dataSource['配油槽T-2866B'].height ? ((dataSource['配油槽T-2866B'].alarmLower / dataSource['配油槽T-2866B'].height)
                ? 1.7 - ((dataSource['配油槽T-2866B'].alarmLower / dataSource['配油槽T-2866B'].height) > 1 ? 1.55 : (dataSource['配油槽T-2866B'].alarmLower / dataSource['配油槽T-2866B'].height) * 1.55)
                : 1.7) : 1.7) + 'rem',}"
        ></div>
          <img
            class="accidentArrows arrows"
            :src="ArrowsError"
            :style="{top:
              (dataSource['配油槽T-2866B'] && dataSource['配油槽T-2866B'].height ? ((dataSource['配油槽T-2866B'].alarmUpper / dataSource['配油槽T-2866B'].height)
                ? 1.75 - ((dataSource['配油槽T-2866B'].alarmUpper / dataSource['配油槽T-2866B'].height) > 1 ? 1.55 : (dataSource['配油槽T-2866B'].alarmUpper / dataSource['配油槽T-2866B'].height) * 1.55)
                : 1.75) : 1.75) + 'rem',}"
            alt=""
          />
          <img
            class="accidentArrows arrows"
            :src="ArrowsWarning"
            :style="{top:
              (dataSource['配油槽T-2866B'] && dataSource['配油槽T-2866B'].height ? ((dataSource['配油槽T-2866B'].alarmLower / dataSource['配油槽T-2866B'].height)
                ? 1.75 - ((dataSource['配油槽T-2866B'].alarmLower / dataSource['配油槽T-2866B'].height) > 1 ? 1.55 : (dataSource['配油槽T-2866B'].alarmLower / dataSource['配油槽T-2866B'].height) * 1.55)
                : 1.75) : 1.75) + 'rem',}"
            alt=""
          />
          <div class="equipmentInfo word_Bold_16">
            <span>配油槽</span>
            <span>T-2866B</span>
          </div>
          <div class="accidentShelfBottom">
            <img :src="TipsMini" alt="" />
            <div>
              <span class="word_inventory_20">{{dataSource['配油槽T-2866B'] && dataSource['配油槽T-2866B'].stock}}</span>
              <span class="word_14 word_unit" v-if="dataSource['配油槽T-2866B'] && dataSource['配油槽T-2866B'].stock">mm</span>
            </div>
          </div>
        </div>
      </div>
      <div class="oilDepotA positionOilDepotDiv">
        <div class="accidentShelf">
          <div class="unqualifiedModal" v-if="reportInfoObj && reportInfoObj['配油槽T-2866C'] && reportInfoObj['配油槽T-2866C'].flag">
            <img class="forkImg" @click="$emit('updateReportInfoFlagFuc','配油槽T-2866C')" :src="ForkImg" alt="">
            <div>
              <span>取样地点:</span>
              <span>{{reportInfoObj['配油槽T-2866C'].sampleAddr}}</span>
            </div>
            <div>
              <span>取料名称:</span>
              <span>{{reportInfoObj['配油槽T-2866C'].materialName}}</span>
            </div>
            <div>
              <span>取样时间:</span>
              <span>{{reportInfoObj['配油槽T-2866C'].sampleTime}}</span>
            </div>
            <div>
              <span>样品分类:</span>
              <span>{{reportInfoObj['配油槽T-2866C'].sampleTypeName}}</span>
            </div>
            <div>
              <span>检验结果:</span>
              <span>不合格</span>
            </div>
            <div>
              <span>检验项:</span>
              <div class="inspection_Item" v-if="reportInfoObj['配油槽T-2866C'].itemsAuditVOList">
                  <span v-for="item of reportInfoObj['配油槽T-2866C'].itemsAuditVOList" :key="item.id">
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
            :style="{ height: (dataSource['配油槽T-2866C'] && dataSource['配油槽T-2866C'].height ? (dataSource['配油槽T-2866C'].stock / dataSource['配油槽T-2866C'].height) ? (dataSource['配油槽T-2866C'].stock / dataSource['配油槽T-2866C'].height) > 1 ? 1.75 : .12 + (dataSource['配油槽T-2866C'].stock / dataSource['配油槽T-2866C'].height) * 1.63: 0 : 0 )+ 'rem', }"
            alt=""
          />
          <div
          class="borderErrLine boraccidentLine"
          :style="{top:
              (dataSource['配油槽T-2866C'] && dataSource['配油槽T-2866C'].height ? ((dataSource['配油槽T-2866C'].alarmUpper / dataSource['配油槽T-2866C'].height)
                ? 1.7 - ((dataSource['配油槽T-2866C'].alarmUpper / dataSource['配油槽T-2866C'].height) > 1 ? 1.55 : (dataSource['配油槽T-2866C'].alarmUpper / dataSource['配油槽T-2866C'].height) * 1.55)
                : 1.7) : 1.7) + 'rem',}"
        ></div>
        <div
          class="borderWarningLine boraccidentLine"
          :style="{top:
              (dataSource['配油槽T-2866C'] && dataSource['配油槽T-2866C'].height ? ((dataSource['配油槽T-2866C'].alarmLower / dataSource['配油槽T-2866C'].height)
                ? 1.7 - ((dataSource['配油槽T-2866C'].alarmLower / dataSource['配油槽T-2866C'].height) > 1 ? 1.55 : (dataSource['配油槽T-2866C'].alarmLower / dataSource['配油槽T-2866C'].height) * 1.55)
                : 1.7) : 1.7) + 'rem',}"
        ></div>
          <img
            class="accidentArrows arrows"
            :src="ArrowsError"
            :style="{top:
              (dataSource['配油槽T-2866C'] && dataSource['配油槽T-2866C'].height ? ((dataSource['配油槽T-2866C'].alarmUpper / dataSource['配油槽T-2866C'].height)
                ? 1.75 - ((dataSource['配油槽T-2866C'].alarmUpper / dataSource['配油槽T-2866C'].height) > 1 ? 1.55 : (dataSource['配油槽T-2866C'].alarmUpper / dataSource['配油槽T-2866C'].height) * 1.55)
                : 1.75) : 1.75) + 'rem',}"
            alt=""
          />
          <img
            class="accidentArrows arrows"
            :src="ArrowsWarning"
            :style="{top:
              (dataSource['配油槽T-2866C'] && dataSource['配油槽T-2866C'].height ? ((dataSource['配油槽T-2866C'].alarmLower / dataSource['配油槽T-2866C'].height)
                ? 1.75 - ((dataSource['配油槽T-2866C'].alarmLower / dataSource['配油槽T-2866C'].height) > 1 ? 1.55 : (dataSource['配油槽T-2866C'].alarmLower / dataSource['配油槽T-2866C'].height) * 1.55)
                : 1.75) : 1.75) + 'rem',}"
            alt=""
          />
          <div class="equipmentInfo word_Bold_16">
            <span>配油槽</span>
            <span>T-2866C</span>
          </div>
          <div class="accidentShelfBottom">
            <img :src="TipsMini" alt="" />
            <div>
              <span class="word_inventory_20">{{dataSource['配油槽T-2866C'] && dataSource['配油槽T-2866C'].stock}}</span>
              <span class="word_14 word_unit" v-if="dataSource['配油槽T-2866C'] && dataSource['配油槽T-2866C'].stock">mm</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="equipment_parameter_info">
      <div class="equipment_parameter_info_top">
        <div class="equipment_parameter_info_128w">
          <div class="moduleItem">
            <div class="item_title">转鼓转速</div>
            <table>
              <tbody>
                <tr class="item_header">
                  <td>B</td>
                  <td>C</td>
                </tr>
                <tr class="item_data">
                  <td :style="{color: equipmentListData['Z2601B'] && equipmentListData['Z2601B']['AI40004_2'] && equipmentListData['Z2601B']['AI40004_2'].type}">{{equipmentListData['Z2601B'] && equipmentListData['Z2601B']['AI40004_2'] && equipmentListData['Z2601B']['AI40004_2'].data}}</td>
                  <td :style="{color: equipmentListData['Z2601C'] && equipmentListData['Z2601C']['AI40004_1'] && equipmentListData['Z2601C']['AI40004_1'].type}">{{equipmentListData['Z2601C'] && equipmentListData['Z2601C']['AI40004_1'] && equipmentListData['Z2601C']['AI40004_1'].data}}</td>
                </tr>
                <tr class="item_unit">
                  <td>r/min</td>
                  <td>r/min</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="moduleItem">
            <div class="item_title">螺旋差速</div>
            <table>
              <tbody>
                <tr class="item_header">
                  <td>B</td>
                  <td>C</td>
                </tr>
                <tr class="item_data">
                  <td :style="{color: equipmentListData['Z2601B'] && equipmentListData['Z2601B']['AI40005_2'] && equipmentListData['Z2601B']['AI40005_2'].type}">{{equipmentListData['Z2601B'] && equipmentListData['Z2601B']['AI40005_2'] && equipmentListData['Z2601B']['AI40005_2'].data}}</td>
                  <td :style="{color: equipmentListData['Z2601C'] && equipmentListData['Z2601C']['AI40005_1'] && equipmentListData['Z2601C']['AI40005_1'].type}">{{equipmentListData['Z2601C'] && equipmentListData['Z2601C']['AI40005_1'] && equipmentListData['Z2601C']['AI40005_1'].data}}</td>
                </tr>
                <tr class="item_unit">
                  <td>r/min</td>
                  <td>r/min</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="equipment_parameter_info_128w">
          <div class="moduleItem">
            <div class="item_title">螺旋扭矩</div>
            <table>
              <tbody>
                <tr class="item_header">
                  <td>B</td>
                  <td>C</td>
                </tr>
                <tr class="item_data">
                  <td :style="{color: equipmentListData['Z2601B'] && equipmentListData['Z2601B']['AI40001_2'] && equipmentListData['Z2601B']['AI40001_2'].type}">{{equipmentListData['Z2601B'] && equipmentListData['Z2601B']['AI40001_2'] && equipmentListData['Z2601B']['AI40001_2'].data}}</td>
                  <td :style="{color: equipmentListData['Z2601C'] && equipmentListData['Z2601C']['AI40001_1'] && equipmentListData['Z2601C']['AI40001_1'].type}">{{equipmentListData['Z2601C'] && equipmentListData['Z2601C']['AI40001_1'] && equipmentListData['Z2601C']['AI40001_1'].data}}</td>
                </tr>
                <tr class="item_unit">
                  <td>%</td>
                  <td>%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="moduleItem">
            <div class="item_title">进料量</div>
            <table>
              <tbody>
                <tr class="item_header">
                  <td>B</td>
                  <td>C</td>
                </tr>
                <tr class="item_data">
                  <td :style="{color: equipmentListData['Z2601B'] && equipmentListData['Z2601B']['FT_2601B'] && equipmentListData['Z2601B']['FT_2601B'].type}">{{equipmentListData['Z2601B'] && equipmentListData['Z2601B']['FT_2601B'] && equipmentListData['Z2601B']['FT_2601B'].data}}</td>
                  <td :style="{color: equipmentListData['Z2601C'] && equipmentListData['Z2601C']['FT_2601C'] && equipmentListData['Z2601C']['FT_2601C'].type}">{{equipmentListData['Z2601C'] && equipmentListData['Z2601C']['FT_2601C'] && equipmentListData['Z2601C']['FT_2601C'].data}}</td>
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
        <div class="moduleItem">
          <div class="item_title">进料端轴温</div>
          <table>
            <tbody>
              <tr class="item_header">
                <td>B</td>
                <td>C</td>
              </tr>
              <tr class="item_data">
                <td :style="{color: equipmentListData['Z2601B'] && equipmentListData['Z2601B']['AI40003_2'] && equipmentListData['Z2601B']['AI40003_2'].type}">{{equipmentListData['Z2601B'] && equipmentListData['Z2601B']['AI40003_2'] && equipmentListData['Z2601B']['AI40003_2'].data}}</td>
                <td :style="{color: equipmentListData['Z2601C'] && equipmentListData['Z2601C']['AI40003_1'] && equipmentListData['Z2601C']['AI40003_1'].type}">{{equipmentListData['Z2601C'] && equipmentListData['Z2601C']['AI40003_1'] && equipmentListData['Z2601C']['AI40003_1'].data}}</td>
              </tr>
              <tr class="item_unit">
                <td>℃</td>
                <td>℃</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="moduleItem">
          <div class="item_title">驱动端轴温</div>
          <table>
            <tbody>
              <tr class="item_header">
                <td>B</td>
                <td>C</td>
              </tr>
              <tr class="item_data">
                <td :style="{color: equipmentListData['Z2601B'] && equipmentListData['Z2601B']['AI40006_2'] && equipmentListData['Z2601B']['AI40006_2'].type}">{{equipmentListData['Z2601B'] && equipmentListData['Z2601B']['AI40006_2'] && equipmentListData['Z2601B']['AI40006_2'].data}}</td>
                <td :style="{color: equipmentListData['Z2601C'] && equipmentListData['Z2601C']['AI40006_1'] && equipmentListData['Z2601C']['AI40006_1'].type}">{{equipmentListData['Z2601C'] && equipmentListData['Z2601C']['AI40006_1'] && equipmentListData['Z2601C']['AI40006_1'].data}}</td>
              </tr>
              <tr class="item_unit">
                <td>℃</td>
                <td>℃</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="moduleItem">
          <div class="item_title">转鼓设定值</div>
          <table>
            <tbody>
              <tr class="item_header">
                <td>B</td>
                <td>C</td>
              </tr>
              <tr class="item_data">
                <td>无字段</td>
                <td>无字段</td>
                <!-- <td :style="{color: equipmentListData['Z2601B'] && equipmentListData['Z2601B']['FT_2601B'] && equipmentListData['Z2601B']['FT_2601B'].type}">{{equipmentListData['Z2601B'] && equipmentListData['Z2601B']['FT_2601B'] && equipmentListData['Z2601B']['FT_2601B'].data}}</td>
                <td :style="{color: equipmentListData['Z2601C'] && equipmentListData['Z2601C']['FT_2601C'] && equipmentListData['Z2601C']['FT_2601C'].type}">{{equipmentListData['Z2601C'] && equipmentListData['Z2601C']['FT_2601C'] && equipmentListData['Z2601C']['FT_2601C'].data}}</td> -->
              </tr>
              <tr class="item_unit">
                <td>%</td>
                <td>%</td>
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
    purchaseNumberObj: {
      type: Object, //购入量
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
      TipsMax: require("@/assets/image/coalTarScreen/tipsMax.svg"),
      TipsMini: require("@/assets/image/coalTarScreen/tipsMini.svg"),
      ArrowsError: require("@/assets/image/coalTarScreen/arrowsError.svg"),
      ArrowsWarning: require("@/assets/image/coalTarScreen/arrowsWarning.svg"),
      ForkImg: require("@/assets/image/coalTarScreen/fork.svg")
      // 'data': {
      //   '设备1': {
      //       '仪表1': {
      //         '变量1': 541.29,
      //         'color': '黄色'
      //       },
      //       '仪表2': {
      //         '变量': 541.29,
      //         'color': '黄色'
      //       },
      //   },
      //   '设备2': {
      //       '仪表1': {
      //         '变量1': 541.29,
      //         'color': '黄色'
      //       },
      //       '仪表2': {
      //         '变量': 541.29,
      //         'color': '黄色'
      //       },
      //   },
      // },
    };
  },
};
</script>
<style lang="scss">
.coalTarScreen_tankFarmCom {
  width: 13.3rem;
  height: 100%;
  // border: 1px solid #ccc;
  position: relative;
  .purchaseNumberDiv{
    position: absolute;
    top: -.04rem;
    left: .16rem;
    display: flex;
    width: 2.8rem;
    height: .5rem;
    align-items: center;
    .purchase_title{
      width: .7rem;
      font-size: .2rem;
      font-weight: 700;
      line-height: .6rem;
      color: #fff;
    }
    .purchase_info{
      flex: 1;
      font-size: .16rem;
      color: #B8B8B8;
      &>div{
        line-height: .25rem;
      }
      span{
        color: #fff;
      }
    }
  }
  .positionDiv {
    position: absolute;
    width: 6rem;
    height: 3.7rem;
    // border: 1px solid #ccc;
    display: flex;
    flex-direction: column;
    .unqualifiedModal{
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
    }
    .accidentShelf {
      display: flex;
      position: relative;
      height: 2.8rem;
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
    width: 7.5rem;
    height: 3.3rem;
    top: 6.33rem;
    left: 5.8rem;
    display: flex;
    .positionOilDepotDiv {
      flex: 1;
      display: flex;
      position: relative;
      .unqualifiedModal{
          left: 2%;
          top: 18%;
          transform: translateY(-18%);
      }
      img {
        position: absolute;
      }
      .accidentShelf {
        flex: 1;
        display: flex;
        justify-content: center;
        .accidentShelfImg {
          width: 2.3rem;
          height: 2.1rem;
          z-index: 99;
        }
        .accidentWaterImg {
          width: 1.85rem;
          bottom: 1.32rem;
          z-index: 1;
        }
        .equipmentInfo {
          position: absolute;
          width: 0.9rem;
          height: 0.52rem;
          border: 0.02rem solid rgba(12, 105, 255, 0.33);
          background: rgba(20, 40, 71, 0.74);
          opacity: 0.9;
          bottom: 0.95rem;
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
    left: 6.05rem;
    top: 1.1rem;
    width: 6.8rem;
    height: 4.36rem;
    display: flex;
    flex-direction: column;
  }
}
@import "../style/foo.scss";
</style>
