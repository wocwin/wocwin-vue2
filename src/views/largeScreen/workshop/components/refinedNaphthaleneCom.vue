<template>
  <!-- 油库 -->
  <div class="coalTarScreen_refinedNaphthaleneCom">
    <div class="positionMinisDiv">
      <div class="oilDepotA positionOilDepotDiv">
        <div class="accidentShelf">
          <!-- <img class="accidentShadeImg" :src="AccidentShade" alt="" /> -->
          <!-- <div class="accidentShadeImg"></div> -->
          <div class="unqualifiedModal" v-if="reportInfoObj && reportInfoObj['工业萘'] && reportInfoObj['工业萘'].flag">
            <img class="forkImg" @click="$emit('updateReportInfoFlagFuc','工业萘')" :src="ForkImg" alt="">
            <div>
              <span>取样地点:</span>
              <span>{{reportInfoObj['工业萘'].sampleAddr}}</span>
            </div>
            <div>
              <span>取料名称:</span>
              <span>{{reportInfoObj['工业萘'].materialName}}</span>
            </div>
            <div>
              <span>取样时间:</span>
              <span>{{reportInfoObj['工业萘'].sampleTime}}</span>
            </div>
            <div>
              <span>样品分类:</span>
              <span>{{reportInfoObj['工业萘'].sampleTypeName}}</span>
            </div>
            <div>
              <span>检验结果:</span>
              <span>不合格</span>
            </div>
            <div>
              <span>检验项:</span>
              <div class="inspection_Item" v-if="reportInfoObj['工业萘'].itemsAuditVOList">
                  <span v-for="item of reportInfoObj['工业萘'].itemsAuditVOList" :key="item.id">
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
            :style="{ height: (dataSource['工业萘'] && dataSource['工业萘'].height ? (dataSource['工业萘'].stock / dataSource['工业萘'].height) ? (dataSource['工业萘'].stock / dataSource['工业萘'].height) > 1 ? 1.75 : .12 + (dataSource['工业萘'].stock / dataSource['工业萘'].height) * 1.63: 0 : 0 )+ 'rem', }"
            alt=""
          />
          <div
          class="borderErrLine boraccidentLine"
          :style="{top:
              (dataSource['工业萘'] && dataSource['工业萘'].height ? ((dataSource['工业萘'].alarmUpper / dataSource['工业萘'].height)
                ? 1.7 - ((dataSource['工业萘'].alarmUpper / dataSource['工业萘'].height) > 1 ? 1.55 : (dataSource['工业萘'].alarmUpper / dataSource['工业萘'].height) * 1.55)
                : 1.7) : 1.7) + 'rem',}"
        ></div>
        <div
          class="borderWarningLine boraccidentLine"
          :style="{top:
              (dataSource['工业萘'] && dataSource['工业萘'].height ? ((dataSource['工业萘'].alarmLower / dataSource['工业萘'].height)
                ? 1.7 - ((dataSource['工业萘'].alarmLower / dataSource['工业萘'].height) > 1 ? 1.55 : (dataSource['工业萘'].alarmLower / dataSource['工业萘'].height) * 1.55)
                : 1.7) : 1.7) + 'rem',}"
        ></div>
          <img
            class="accidentArrows arrows"
            :src="ArrowsError"
            :style="{top:
              (dataSource['工业萘'] && dataSource['工业萘'].height ? ((dataSource['工业萘'].alarmUpper / dataSource['工业萘'].height)
                ? 1.75 - ((dataSource['工业萘'].alarmUpper / dataSource['工业萘'].height) > 1 ? 1.55 : (dataSource['工业萘'].alarmUpper / dataSource['工业萘'].height) * 1.55)
                : 1.75) : 1.75) + 'rem',}"
            alt=""
          />
          <img
            class="accidentArrows arrows"
            :src="ArrowsWarning"
            :style="{top:
              (dataSource['工业萘'] && dataSource['工业萘'].height ? ((dataSource['工业萘'].alarmLower / dataSource['工业萘'].height)
                ? 1.75 - ((dataSource['工业萘'].alarmLower / dataSource['工业萘'].height) > 1 ? 1.55 : (dataSource['工业萘'].alarmLower / dataSource['工业萘'].height) * 1.55)
                : 1.75) : 1.75) + 'rem',}"
            alt=""
          />
          <div class="accidentShelfRight">
            <img :src="tipsMiddle" :style="{ top: '.25rem' }" alt="" />
            <div :style="{ top: '.25rem' }">
              <span class="word_14">当前库存</span>
              <div>
                <span class="word_inventory_20">{{dataSource['工业萘'] && dataSource['工业萘'].stock}}</span>
                <span class="word_14 word_unit" v-if="dataSource['工业萘'] && dataSource['工业萘'].stock">吨</span>
              </div>
            </div>
            <img :src="tipsMiddle" :style="{ top: '1rem' }" alt="" />
            <div :style="{ top: '1rem' }">
              <span class="word_14">期初库存</span>
              <div>
                <span class="word_inventory_20">{{inventoryData['工业萘'] && inventoryData['工业萘'].startStock}}</span>
              <span class="word_14 word_unit" v-if="inventoryData['工业萘'] && inventoryData['工业萘'].startStock">吨</span>
              </div>
            </div>
          </div>
          <div class="equipmentInfo word_Bold_16">
            <span>工业萘</span>
          </div>
        </div>
        <div class="monthlyOutput">
            <div class="monthlyOutputWord">
              <span class="word_12">D-1产量</span>
              <span class="word_20" v-if="cumulativeProductionData['工业萘']">{{cumulativeProductionData['工业萘'].totalMonthAmount}}吨</span>
            </div>
            <div class="progressBar">
              <span :style="{ width: cumulativeProductionData['工业萘'] && planAmountData['工业萘'] ? ((cumulativeProductionData['工业萘'].totalMonthAmount / planAmountData['工业萘'].planCount) > 1 ? 100 : (cumulativeProductionData['工业萘'].totalMonthAmount / planAmountData['工业萘'].planCount) * 100) + '%' : 0 }"></span>
              <span></span>  
            </div>
            <div class="monthlyOutputWord">
              <span class="word_12">本月计划产量</span>
              <span class="word_20" v-if="planAmountData['工业萘']">{{planAmountData['工业萘'].planCount}}吨</span>
            </div>
      </div>
      </div>
      <div class="oilDepotA positionOilDepotDiv">
        <div class="accidentShelf">
          <!-- <img class="accidentShadeImg" :src="AccidentShade" alt="" /> -->
          <!-- <div class="accidentShadeImg"></div> -->
          <div class="unqualifiedModal" v-if="reportInfoObj && reportInfoObj['萘残油'] && reportInfoObj['萘残油'].flag">
            <img class="forkImg" @click="$emit('updateReportInfoFlagFuc','萘残油')" :src="ForkImg" alt="">
            <div>
              <span>取样地点:</span>
              <span>{{reportInfoObj['萘残油'].sampleAddr}}</span>
            </div>
            <div>
              <span>取料名称:</span>
              <span>{{reportInfoObj['萘残油'].materialName}}</span>
            </div>
            <div>
              <span>取样时间:</span>
              <span>{{reportInfoObj['萘残油'].sampleTime}}</span>
            </div>
            <div>
              <span>样品分类:</span>
              <span>{{reportInfoObj['萘残油'].sampleTypeName}}</span>
            </div>
            <div>
              <span>检验结果:</span>
              <span>不合格</span>
            </div>
            <div>
              <span>检验项:</span>
              <div class="inspection_Item" v-if="reportInfoObj['萘残油'].itemsAuditVOList">
                  <span v-for="item of reportInfoObj['萘残油'].itemsAuditVOList" :key="item.id">
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
            :style="{ height: (dataSource['萘残油'] && dataSource['萘残油'].height ? (dataSource['萘残油'].stock / dataSource['萘残油'].height) ? (dataSource['萘残油'].stock / dataSource['萘残油'].height) > 1 ? 1.75 : .12 + (dataSource['萘残油'].stock / dataSource['萘残油'].height) * 1.63: 0 : 0 )+ 'rem', }"
            alt=""
          />
          <div
          class="borderErrLine boraccidentLine"
          :style="{top:
              (dataSource['萘残油'] && dataSource['萘残油'].height ? ((dataSource['萘残油'].alarmUpper / dataSource['萘残油'].height)
                ? 1.7 - ((dataSource['萘残油'].alarmUpper / dataSource['萘残油'].height) > 1 ? 1.55 : (dataSource['萘残油'].alarmUpper / dataSource['萘残油'].height) * 1.55)
                : 1.7) : 1.7) + 'rem',}"
        ></div>
        <div
          class="borderWarningLine boraccidentLine"
          :style="{top:
              (dataSource['萘残油'] && dataSource['萘残油'].height ? ((dataSource['萘残油'].alarmLower / dataSource['萘残油'].height)
                ? 1.7 - ((dataSource['萘残油'].alarmLower / dataSource['萘残油'].height) > 1 ? 1.55 : (dataSource['萘残油'].alarmLower / dataSource['萘残油'].height) * 1.55)
                : 1.7) : 1.7) + 'rem',}"
        ></div>
          <img
            class="accidentArrows arrows"
            :src="ArrowsError"
            :style="{top:
              (dataSource['萘残油'] && dataSource['萘残油'].height ? ((dataSource['萘残油'].alarmUpper / dataSource['萘残油'].height)
                ? 1.75 - ((dataSource['萘残油'].alarmUpper / dataSource['萘残油'].height) > 1 ? 1.55 : (dataSource['萘残油'].alarmUpper / dataSource['萘残油'].height) * 1.55)
                : 1.75) : 1.75) + 'rem',}"
            alt=""
          />
          <img
            class="accidentArrows arrows"
            :src="ArrowsWarning"
            :style="{top:
              (dataSource['萘残油'] && dataSource['萘残油'].height ? ((dataSource['萘残油'].alarmLower / dataSource['萘残油'].height)
                ? 1.75 - ((dataSource['萘残油'].alarmLower / dataSource['萘残油'].height) > 1 ? 1.55 : (dataSource['萘残油'].alarmLower / dataSource['萘残油'].height) * 1.55)
                : 1.75) : 1.75) + 'rem',}"
            alt=""
          />
          <div class="accidentShelfRight">
            <img :src="tipsMiddle" :style="{ top: '.25rem' }" alt="" />
            <div :style="{ top: '.25rem' }">
              <span class="word_14">当前库存</span>
              <div>
                <span class="word_inventory_20">{{dataSource['萘残油'] && dataSource['萘残油'].stock}}</span>
                <span class="word_14 word_unit" v-if="dataSource['萘残油'] && dataSource['萘残油'].stock">吨</span>
              </div>
            </div>
            <img :src="tipsMiddle" :style="{ top: '1rem' }" alt="" />
            <div :style="{ top: '1rem' }">
              <span class="word_14">期初库存</span>
              <div>
                <span class="word_inventory_20">{{inventoryData['萘残油'] && inventoryData['萘残油'].startStock}}</span>
              <span class="word_14 word_unit" v-if="inventoryData['萘残油'] && inventoryData['萘残油'].startStock">吨</span>
              </div>
            </div>
          </div>
          <div class="equipmentInfo word_Bold_16">
            <span>萘残油</span>
          </div>
        </div>
        <div class="monthlyOutput">
            <div class="monthlyOutputWord">
              <span class="word_12">D-1产量</span>
              <span class="word_20" v-if="cumulativeProductionData['萘残油']">{{cumulativeProductionData['萘残油'].totalMonthAmount}}吨</span>
            </div>
            <div class="progressBar">
              <span :style="{ width: cumulativeProductionData['萘残油'] && planAmountData['萘残油'] ? ((cumulativeProductionData['萘残油'].totalMonthAmount / planAmountData['萘残油'].planCount) > 1 ? 100 : (cumulativeProductionData['萘残油'].totalMonthAmount / planAmountData['萘残油'].planCount) * 100) + '%' : 0 }"></span>
              <span></span>  
            </div>
            <div class="monthlyOutputWord">
              <span class="word_12">本月计划产量</span>
              <span class="word_20" v-if="planAmountData['萘残油']">{{planAmountData['萘残油'].planCount}}吨</span>
            </div>
      </div>
      </div>
    </div>
    <div class="equipment_parameter_info equipment_parameter_info_main1">
      <div class="equipment_parameter_info_top">
        <div class="equipment_parameter_info_156w">
          <div class="moduleItem">
            <table>
              <tbody>
                <tr class="item_header">
                  <td>进料槽</td>
                  <td>进料量</td>
                </tr>
                <tr class="item_data">
                  <td>无字段</td>
                  <td>无字段</td>
                </tr>
                <tr class="item_unit">
                  <td>℃</td>
                  <td>mm</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="moduleItem">
            <table>
              <tbody>
                <tr class="item_header">
                  <td>进水温度</td>
                  <td>出水温度</td>
                </tr>
                <tr class="item_data">
                  <td :style="{color: equipmentListData['Z-2201AB'] && equipmentListData['Z-2201AB']['TE_2201'] && equipmentListData['Z-2201AB']['TE_2201'].type}">{{equipmentListData['Z-2201AB'] && equipmentListData['Z-2201AB']['TE_2201'] && equipmentListData['Z-2201AB']['TE_2201'].data}}</td>
                  <td :style="{color: equipmentListData['Z-2201AB'] && equipmentListData['Z-2201AB']['TE_2202'] && equipmentListData['Z-2201AB']['TE_2202'].type}">{{equipmentListData['Z-2201AB'] && equipmentListData['Z-2201AB']['TE_2202'] && equipmentListData['Z-2201AB']['TE_2202'].data}}</td>
                </tr>
                <tr class="item_unit">
                  <td>℃</td>
                  <td>℃</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="equipment_parameter_info_196w">
          <div class="moduleItem">
            <table>
              <tbody>
                <tr class="item_header">
                  <td>
                    <div>进料</div>
                    <div>开始时间</div>
                  </td>
                  <td>
                    <div>进料</div>
                    <div>结束时间</div>
                  </td>
                </tr>
                <tr class="item_data">
                  <td>无字段</td>
                  <td>无字段</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="moduleItem">
            <table>
              <tbody>
                <tr class="item_header">
                  <td>
                    <div>结晶</div>
                    <div>完成时间</div>
                  </td>
                  <td>
                    排放时间
                  </td>
                </tr>
                <tr class="item_data">
                  <td>无字段</td>
                  <td>无字段</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="equipment_parameter_info_bottom">
        <div class="equipment_parameter_info_bottom_merge_table">
          <table cellspacing="0" cellpadding="0">
            <tbody>
              <tr class="item_header">
                <td>预冷温度</td>
                <td>结晶温度</td>
                <td>发汗1温度</td>
                <td>发汗1时间</td>
                <td>发汗2温度</td>
                <td>发汗2时间</td>
              </tr>
              <tr class="item_data">
                <td>无字段</td>
                <td>无字段</td>
                <td>无字段</td>
                <td rowspan="2">无字段</td>
                <td rowspan="2">无字段</td>
              </tr>
              <tr class="item_unit">
                <td>℃</td>
                <td>℃</td>
                <td>℃</td>
                <!-- <td rowspan="0"></td> -->
                <td>℃</td>
                <!-- <td rowspan="0"></td> -->
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div
      class="equipment_parameter_info equipment_parameter_info_main_threeItem equipment_parameter_info_main_threeItem1"
    >
      <div class="moduleItem_flex">
        <div></div>
        <div class="equipment_parameter_info_418w">
          <div class="moduleItem">
            <table>
              <tbody>
                <tr class="item_header">
                  <td>进料槽</td>
                  <td>进料量</td>
                  <td>进水温度</td>
                  <td>出水温度</td>
                </tr>
                <tr class="item_data">
                  <td>无字段</td>
                  <td>无字段</td>
                  <td :style="{color: equipmentListData['Z-2202AB'] && equipmentListData['Z-2202AB']['TE_2211'] && equipmentListData['Z-2202AB']['TE_2211'].type}">{{equipmentListData['Z-2202AB'] && equipmentListData['Z-2202AB']['TE_2211'] && equipmentListData['Z-2202AB']['TE_2211'].data}}</td>
                  <td :style="{color: equipmentListData['Z-2202AB'] && equipmentListData['Z-2202AB']['TE_2212'] && equipmentListData['Z-2202AB']['TE_2212'].type}">{{equipmentListData['Z-2202AB'] && equipmentListData['Z-2202AB']['TE_2212'] && equipmentListData['Z-2202AB']['TE_2212'].data}}</td>
                </tr>
                <tr class="item_unit">
                  <td>℃</td>
                  <td>mm</td>
                  <td>℃</td>
                  <td>℃</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="moduleItem_flex">
        <div></div>
        <div class="equipment_parameter_info_418w">
          <div class="moduleItem">
            <table>
              <tbody>
                <tr class="item_header">
                  <td>
                    <div>进料</div>
                    <div>开始时间</div>
                  </td>
                  <td>
                    <div>进料</div>
                    <div>结束时间</div>
                  </td>
                  <td>
                    <div>结晶</div>
                    <div>开始时间</div>
                  </td>
                  <td>
                    <div>结晶</div>
                    <div>结束时间</div>
                  </td>
                </tr>
                <tr class="item_data">
                  <td>无字段</td>
                  <td>无字段</td>
                  <td>无字段</td>
                  <td>无字段</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="equipment_parameter_info_bottom">
        <div class="equipment_parameter_info_bottom_merge_table">
          <table cellspacing="0" cellpadding="0">
            <tbody>
              <tr class="item_header">
                <td>预冷温度</td>
                <td>结晶温度</td>
                <td>发汗1温度</td>
                <td>发汗1时间</td>
                <td>发汗2温度</td>
                <td>发汗2时间</td>
              </tr>
              <tr class="item_data">
                <td>无字段</td>
                <td>无字段</td>
                <td>无字段</td>
                <td rowspan="2">
                  无字段
                </td>
                <td>无字段</td>
                <td rowspan="2">
                  无字段
                </td>
              </tr>
              <tr class="item_unit">
                <td>℃</td>
                <td>℃</td>
                <td>℃</td>
                <!-- <td rowspan="0"></td> -->
                <td>℃</td>
                <!-- <td rowspan="0"></td> -->
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
        <div
      class="equipment_parameter_info equipment_parameter_info_main_threeItem equipment_parameter_info_main_threeItem2"
    >
      <div class="moduleItem_flex">
        <div></div>
        <div class="equipment_parameter_info_418w">
          <div class="moduleItem">
            <table>
              <tbody>
                <tr class="item_header">
                  <td>进料槽</td>
                  <td>进料量</td>
                  <td>进水温度</td>
                  <td>出水温度</td>
                </tr>
                <tr class="item_data">
                  <td>无字段</td>
                  <td>无字段</td>
                  <td :style="{color: equipmentListData['Z-2203AB'] && equipmentListData['Z-2203AB']['TE_2221'] && equipmentListData['Z-2203AB']['TE_2221'].type}">{{equipmentListData['Z-2203AB'] && equipmentListData['Z-2203AB']['TE_2221'] && equipmentListData['Z-2203AB']['TE_2221'].data}}</td>
                  <td :style="{color: equipmentListData['Z-2203AB'] && equipmentListData['Z-2203AB']['TE_2222'] && equipmentListData['Z-2203AB']['TE_2222'].type}">{{equipmentListData['Z-2203AB'] && equipmentListData['Z-2203AB']['TE_2222'] && equipmentListData['Z-2203AB']['TE_2222'].data}}</td>
                </tr>
                <tr class="item_unit">
                  <td>℃</td>
                  <td>mm</td>
                  <td>℃</td>
                  <td>℃</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="moduleItem_flex">
        <div></div>
        <div class="equipment_parameter_info_418w">
          <div class="moduleItem">
            <table>
              <tbody>
                <tr class="item_header">
                  <td>
                    <div>进料</div>
                    <div>开始时间</div>
                  </td>
                  <td>
                    <div>进料</div>
                    <div>结束时间</div>
                  </td>
                  <td>
                    <div>结晶</div>
                    <div>开始时间</div>
                  </td>
                  <td>
                    <div>结晶</div>
                    <div>结束时间</div>
                  </td>
                </tr>
                <tr class="item_data">
                  <td>
                    无字段
                  </td>
                  <td>
                    无字段
                  </td>
                  <td>
                    无字段
                  </td>
                  <td>
                    无字段
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="equipment_parameter_info_bottom">
        <div class="equipment_parameter_info_bottom_merge_table">
          <table cellspacing="0" cellpadding="0">
            <tbody>
              <tr class="item_header">
                <td>预冷温度</td>
                <td>结晶温度</td>
                <td>发汗1温度</td>
                <td>发汗1时间</td>
                <td>发汗2温度</td>
                <td>发汗2时间</td>
              </tr>
              <tr class="item_data">
                <td>无字段</td>
                <td>无字段</td>
                <td>无字段</td>
                <td rowspan="2">
                  无字段
                </td>
                <td>无字段</td>
                <td rowspan="2">
                  无字段
                </td>
              </tr>
              <tr class="item_unit">
                <td>℃</td>
                <td>℃</td>
                <td>℃</td>
                <!-- <td rowspan="0"></td> -->
                <td>℃</td>
                <!-- <td rowspan="0"></td> -->
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
.coalTarScreen_refinedNaphthaleneCom {
  width: 16.1rem;
  height: 100%;
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
    left: 29.3%;
  }
  .accidentArrows{
    transform: translateX(2.15rem);
  }
  .positionMinisDiv {
    position: absolute;
    width: 8rem;
    height: 3.3rem;
    top: 6.33rem;
    left: 1.05rem;
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
            left: -1%;
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
    left: 0.43rem;
    top: 1.1rem;
    width: 7.17rem;
    height: 4.36rem;
    .equipment_parameter_info_top_right {
      & > div:first-child {
        margin-right: 0.06rem;
      }
    }
  }
  .equipment_parameter_info_main_threeItem {
    left: 8.43rem;
    top: 0.85rem;
    width: 7.26rem;
    display: flex;
    flex-direction: column;
    .moduleItem_flex {
      width: 100%;
      display: flex;
      & > div:first-child {
        flex: 1;
      }
    }
    .moduleItem_flex:first-child{
        margin-bottom: .06rem;
    }
  }
  .equipment_parameter_info_main_threeItem1 {
    left: 8.43rem;
    top: 0.85rem;
  }
  .equipment_parameter_info_main_threeItem2 {
    left: 8.43rem;
    top: 5.4rem;
  }
}
@import "../style/foo.scss";
</style>
