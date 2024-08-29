<template>
  <!-- 油库 -->
  <div class="coalTarScreen_delayedCokingCom">
    <div class="positionMinisDiv">
      <div class="oilDepotA positionOilDepotDiv">
        <div class="accidentShelf">
          <!-- <img class="accidentShadeImg" :src="AccidentShade" alt="" /> -->
          <!-- <div class="accidentShadeImg"></div> -->
          <div class="unqualifiedModal" v-if="reportInfoObj && reportInfoObj['焦化轻油'] && reportInfoObj['焦化轻油'].flag">
            <img class="forkImg" @click="$emit('updateReportInfoFlagFuc','焦化轻油')" :src="ForkImg" alt="">
            <div>
              <span>取样地点:</span>
              <span>{{reportInfoObj['焦化轻油'].sampleAddr}}</span>
            </div>
            <div>
              <span>取料名称:</span>
              <span>{{reportInfoObj['焦化轻油'].materialName}}</span>
            </div>
            <div>
              <span>取样时间:</span>
              <span>{{reportInfoObj['焦化轻油'].sampleTime}}</span>
            </div>
            <div>
              <span>样品分类:</span>
              <span>{{reportInfoObj['焦化轻油'].sampleTypeName}}</span>
            </div>
            <div>
              <span>检验结果:</span>
              <span>不合格</span>
            </div>
            <div>
              <span>检验项:</span>
              <div class="inspection_Item" v-if="reportInfoObj['焦化轻油'].itemsAuditVOList">
                  <span v-for="item of reportInfoObj['焦化轻油'].itemsAuditVOList" :key="item.id">
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
            :style="{ height: (dataSource['焦化轻油(针状焦)'] && dataSource['焦化轻油(针状焦)'].height ? (dataSource['焦化轻油(针状焦)'].stock / dataSource['焦化轻油(针状焦)'].height) ? (dataSource['焦化轻油(针状焦)'].stock / dataSource['焦化轻油(针状焦)'].height) > 1 ? 1.75 : .12 + (dataSource['焦化轻油(针状焦)'].stock / dataSource['焦化轻油(针状焦)'].height) * 1.63: 0 : 0 )+ 'rem', }"
            alt=""
          />
          <div
          class="borderErrLine boraccidentLine"
          :style="{top:
              (dataSource['焦化轻油(针状焦)'] && dataSource['焦化轻油(针状焦)'].height ? ((dataSource['焦化轻油(针状焦)'].alarmUpper / dataSource['焦化轻油(针状焦)'].height)
                ? 1.7 - ((dataSource['焦化轻油(针状焦)'].alarmUpper / dataSource['焦化轻油(针状焦)'].height) > 1 ? 1.55 : (dataSource['焦化轻油(针状焦)'].alarmUpper / dataSource['焦化轻油(针状焦)'].height) * 1.55)
                : 1.7) : 1.7) + 'rem',}"
        ></div>
        <div
          class="borderWarningLine boraccidentLine"
          :style="{top:
              (dataSource['焦化轻油(针状焦)'] && dataSource['焦化轻油(针状焦)'].height ? ((dataSource['焦化轻油(针状焦)'].alarmLower / dataSource['焦化轻油(针状焦)'].height)
                ? 1.7 - ((dataSource['焦化轻油(针状焦)'].alarmLower / dataSource['焦化轻油(针状焦)'].height) > 1 ? 1.55 : (dataSource['焦化轻油(针状焦)'].alarmLower / dataSource['焦化轻油(针状焦)'].height) * 1.55)
                : 1.7) : 1.7) + 'rem',}"
        ></div>
          <img
            class="accidentArrows arrows"
            :src="ArrowsError"
            :style="{top:
              (dataSource['焦化轻油(针状焦)'] && dataSource['焦化轻油(针状焦)'].height ? ((dataSource['焦化轻油(针状焦)'].alarmUpper / dataSource['焦化轻油(针状焦)'].height)
                ? 1.75 - ((dataSource['焦化轻油(针状焦)'].alarmUpper / dataSource['焦化轻油(针状焦)'].height) > 1 ? 1.55 : (dataSource['焦化轻油(针状焦)'].alarmUpper / dataSource['焦化轻油(针状焦)'].height) * 1.55)
                : 1.75) : 1.75) + 'rem',}"
            alt=""
          />
          <img
            class="accidentArrows arrows"
            :src="ArrowsWarning"
            :style="{top:
              (dataSource['焦化轻油(针状焦)'] && dataSource['焦化轻油(针状焦)'].height ? ((dataSource['焦化轻油(针状焦)'].alarmLower / dataSource['焦化轻油(针状焦)'].height)
                ? 1.75 - ((dataSource['焦化轻油(针状焦)'].alarmLower / dataSource['焦化轻油(针状焦)'].height) > 1 ? 1.55 : (dataSource['焦化轻油(针状焦)'].alarmLower / dataSource['焦化轻油(针状焦)'].height) * 1.55)
                : 1.75) : 1.75) + 'rem',}"
            alt=""
          />
          <div class="accidentShelfRight">
            <img :src="tipsMiddle" :style="{ top: '.25rem' }" alt="" />
            <div :style="{ top: '.25rem' }">
              <span class="word_14">当前库存</span>
              <div>
                <span class="word_inventory_20">{{dataSource['焦化轻油(针状焦)'] && dataSource['焦化轻油(针状焦)'].stock}}</span>
                <span class="word_14 word_unit" v-if="dataSource['焦化轻油(针状焦)'] && dataSource['焦化轻油(针状焦)'].stock">吨</span>
              </div>
            </div>
            <img :src="tipsMiddle" :style="{ top: '1rem' }" alt="" />
            <div :style="{ top: '1rem' }">
              <span class="word_14">期初库存</span>
              <div>
                <span class="word_inventory_20">{{inventoryData['焦化轻油(针状焦)'] && inventoryData['焦化轻油(针状焦)'].startStock}}</span>
                <span class="word_14 word_unit" v-if="inventoryData['焦化轻油(针状焦)'] && inventoryData['焦化轻油(针状焦)'].startStock">吨</span>
              </div>
            </div>
          </div>
          <div class="equipmentInfo word_Bold_16">
            <span>焦化轻油</span>
          </div>
        </div>
        <div class="monthlyOutput">
        <div class="monthlyOutputWord">
          <span class="word_12">D-1产量</span>
          <span class="word_20" v-if="cumulativeProductionData['焦化轻油(针状焦)']">{{cumulativeProductionData['焦化轻油(针状焦)'].totalMonthAmount}}吨</span>
        </div>
        <div class="progressBar">
          <span :style="{ width: cumulativeProductionData['焦化轻油(针状焦)'] && planAmountData['焦化轻油(针状焦)'] ? ((cumulativeProductionData['焦化轻油(针状焦)'].totalMonthAmount / planAmountData['焦化轻油(针状焦)'].planCount) > 1 ? 100 : (cumulativeProductionData['焦化轻油(针状焦)'].totalMonthAmount / planAmountData['焦化轻油(针状焦)'].planCount) * 100) + '%' : 0 }"></span>
          <span></span>  
        </div>
        <div class="monthlyOutputWord">
          <span class="word_12">本月计划产量</span>
          <span class="word_20" v-if="planAmountData['焦化轻油(针状焦)']">{{planAmountData['焦化轻油(针状焦)'].planCount}}吨</span>
        </div>
      </div>
      </div>
      <div class="oilDepotA positionOilDepotDiv">
        <div class="accidentShelf">
          <!-- <img class="accidentShadeImg" :src="AccidentShade" alt="" /> -->
          <!-- <div class="accidentShadeImg"></div> -->
          <div class="unqualifiedModal" v-if="reportInfoObj && reportInfoObj['焦化重油'] && reportInfoObj['焦化重油'].flag">
            <img class="forkImg" @click="$emit('updateReportInfoFlagFuc','焦化重油')" :src="ForkImg" alt="">
            <div>
              <span>取样地点:</span>
              <span>{{reportInfoObj['焦化重油'].sampleAddr}}</span>
            </div>
            <div>
              <span>取料名称:</span>
              <span>{{reportInfoObj['焦化重油'].materialName}}</span>
            </div>
            <div>
              <span>取样时间:</span>
              <span>{{reportInfoObj['焦化重油'].sampleTime}}</span>
            </div>
            <div>
              <span>样品分类:</span>
              <span>{{reportInfoObj['焦化重油'].sampleTypeName}}</span>
            </div>
            <div>
              <span>检验结果:</span>
              <span>不合格</span>
            </div>
            <div>
              <span>检验项:</span>
              <div class="inspection_Item" v-if="reportInfoObj['焦化重油'].itemsAuditVOList">
                  <span v-for="item of reportInfoObj['焦化重油'].itemsAuditVOList" :key="item.id">
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
            :style="{ height: (dataSource['焦化重油(针状焦)'] && dataSource['焦化重油(针状焦)'].height ? (dataSource['焦化重油(针状焦)'].stock / dataSource['焦化重油(针状焦)'].height) ? (dataSource['焦化重油(针状焦)'].stock / dataSource['焦化重油(针状焦)'].height) > 1 ? 1.75 : .12 + (dataSource['焦化重油(针状焦)'].stock / dataSource['焦化重油(针状焦)'].height) * 1.63: 0 : 0 )+ 'rem', }"
            alt=""
          />
          <div
          class="borderErrLine boraccidentLine"
          :style="{top:
              (dataSource['焦化重油(针状焦)'] && dataSource['焦化重油(针状焦)'].height ? ((dataSource['焦化重油(针状焦)'].alarmUpper / dataSource['焦化重油(针状焦)'].height)
                ? 1.7 - ((dataSource['焦化重油(针状焦)'].alarmUpper / dataSource['焦化重油(针状焦)'].height) > 1 ? 1.55 : (dataSource['焦化重油(针状焦)'].alarmUpper / dataSource['焦化重油(针状焦)'].height) * 1.55)
                : 1.7) : 1.7) + 'rem',}"
        ></div>
        <div
          class="borderWarningLine boraccidentLine"
          :style="{top:
              (dataSource['焦化重油(针状焦)'] && dataSource['焦化重油(针状焦)'].height ? ((dataSource['焦化重油(针状焦)'].alarmLower / dataSource['焦化重油(针状焦)'].height)
                ? 1.7 - ((dataSource['焦化重油(针状焦)'].alarmLower / dataSource['焦化重油(针状焦)'].height) > 1 ? 1.55 : (dataSource['焦化重油(针状焦)'].alarmLower / dataSource['焦化重油(针状焦)'].height) * 1.55)
                : 1.7) : 1.7) + 'rem',}"
        ></div>
          <img
            class="accidentArrows arrows"
            :src="ArrowsError"
            :style="{top:
              (dataSource['焦化重油(针状焦)'] && dataSource['焦化重油(针状焦)'].height ? ((dataSource['焦化重油(针状焦)'].alarmUpper / dataSource['焦化重油(针状焦)'].height)
                ? 1.75 - ((dataSource['焦化重油(针状焦)'].alarmUpper / dataSource['焦化重油(针状焦)'].height) > 1 ? 1.55 : (dataSource['焦化重油(针状焦)'].alarmUpper / dataSource['焦化重油(针状焦)'].height) * 1.55)
                : 1.75) : 1.75) + 'rem',}"
            alt=""
          />
          <img
            class="accidentArrows arrows"
            :src="ArrowsWarning"
            :style="{top:
              (dataSource['焦化重油(针状焦)'] && dataSource['焦化重油(针状焦)'].height ? ((dataSource['焦化重油(针状焦)'].alarmLower / dataSource['焦化重油(针状焦)'].height)
                ? 1.75 - ((dataSource['焦化重油(针状焦)'].alarmLower / dataSource['焦化重油(针状焦)'].height) > 1 ? 1.55 : (dataSource['焦化重油(针状焦)'].alarmLower / dataSource['焦化重油(针状焦)'].height) * 1.55)
                : 1.75) : 1.75) + 'rem',}"
            alt=""
          />
          <div class="accidentShelfRight">
            <img :src="tipsMiddle" :style="{ top: '.25rem' }" alt="" />
            <div :style="{ top: '.25rem' }">
              <span class="word_14">当前库存</span>
              <div>
                <span class="word_inventory_20">{{dataSource['焦化重油(针状焦)'] && dataSource['焦化重油(针状焦)'].stock}}</span>
                <span class="word_14 word_unit" v-if="dataSource['焦化重油(针状焦)'] && dataSource['焦化重油(针状焦)'].stock">吨</span>
              </div>
            </div>
            <img :src="tipsMiddle" :style="{ top: '1rem' }" alt="" />
            <div :style="{ top: '1rem' }">
              <span class="word_14">期初库存</span>
              <div>
                <span class="word_inventory_20">{{inventoryData['焦化重油(针状焦)'] && inventoryData['焦化重油(针状焦)'].startStock}}</span>
                <span class="word_14 word_unit" v-if="inventoryData['焦化重油(针状焦)'] && inventoryData['焦化重油(针状焦)'].startStock">吨</span>
              </div>
            </div>
          </div>
          <div class="equipmentInfo word_Bold_16">
            <span>焦化重油</span>
          </div>
        </div>
        <div class="monthlyOutput">
        <div class="monthlyOutputWord">
          <span class="word_12">D-1产量</span>
          <span class="word_20" v-if="cumulativeProductionData['焦化重油(针状焦)']">{{cumulativeProductionData['焦化重油(针状焦)'].totalMonthAmount}}吨</span>
        </div>
        <div class="progressBar">
          <span :style="{ width: cumulativeProductionData['焦化重油(针状焦)'] && planAmountData['焦化重油(针状焦)'] ? ((cumulativeProductionData['焦化重油(针状焦)'].totalMonthAmount / planAmountData['焦化重油(针状焦)'].planCount) > 1 ? 100 : (cumulativeProductionData['焦化重油(针状焦)'].totalMonthAmount / planAmountData['焦化重油(针状焦)'].planCount) * 100) + '%' : 0 }"></span>
          <span></span>  
        </div>
        <div class="monthlyOutputWord">
          <span class="word_12">本月计划产量</span>
          <span class="word_20" v-if="planAmountData['焦化重油(针状焦)']">{{planAmountData['焦化重油(针状焦)'].planCount}}吨</span>
        </div>
      </div>
      </div>
    </div>
    <div class="equipment_parameter_info equipment_parameter_info_main2">
      <div class="equipment_parameter_info_top">
        <div class="equipment_name" style="left: 51.1%;top: 46.1%;">
            <span>分馏塔</span>
            <span>K-4101</span>
        </div>
        <div class="equipment_parameter_info_186w">
          <div class="moduleItem">
            <table>
              <tbody>
                <tr class="item_header">
                  <td>
                    <div>SOP进料</div>
                    <div>(FT_4108)</div>
                  </td>
                  <td>
                    <div>HO流出</div>
                    <div>(FT_4115)</div>
                  </td>
                </tr>
                <tr class="item_data">
                  <td :style="{color: equipmentListData['FT-4108'] && equipmentListData['FT-4108']['FT_4108'] && equipmentListData['FT-4108']['FT_4108'].type}">{{equipmentListData['FT-4108'] && equipmentListData['FT-4108']['FT_4108'] && equipmentListData['FT-4108']['FT_4108'].data}}</td>
                  <td :style="{color: equipmentListData['E-4104'] && equipmentListData['E-4104']['FT_4115'] && equipmentListData['E-4104']['FT_4115'].type}">{{equipmentListData['E-4104'] && equipmentListData['E-4104']['FT_4115'] && equipmentListData['E-4104']['FT_4115'].data}}</td>
                </tr>
                <tr class="item_unit">
                  <td>kg/h</td>
                  <td>kg/h</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="moduleItem">
            <table>
              <tbody>
                <tr class="item_header">
                  <td>
                    <div>COFG送出</div>
                    <div>(FIQ_4107)</div>
                  </td>
                </tr>
                <tr class="item_data">
                  <td :style="{color: equipmentListData['T-4101'] && equipmentListData['T-4101']['FT_4107C'] && equipmentListData['T-4101']['FT_4107C'].type}">{{equipmentListData['T-4101'] && equipmentListData['T-4101']['FT_4107C'] && equipmentListData['T-4101']['FT_4107C'].data}}</td>
                </tr>
                <tr class="item_unit">
                  <td>Nm³/h</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="equipment_parameter_info_186w">
          <div class="moduleItem">
            <table>
              <tbody>
                <tr class="item_header">
                  <td>
                    <div>HO回流</div>
                    <div>(TE_4110_8)</div>
                  </td>
                  <td>
                    <div>HO采出</div>
                    <div>(TE_4110_7)</div>
                  </td>
                </tr>
                <tr class="item_data">
                  <td :style="{color: equipmentListData['E-4102'] && equipmentListData['E-4102']['TE_4110_8'] && equipmentListData['E-4102']['TE_4110_8'].type}">{{equipmentListData['E-4102'] && equipmentListData['E-4102']['TE_4110_8'] && equipmentListData['E-4102']['TE_4110_8'].data}}</td>
                  <td :style="{color: equipmentListData['E-4104'] && equipmentListData['E-4104']['TE_4110_7'] && equipmentListData['E-4104']['TE_4110_7'].type}">{{equipmentListData['E-4104'] && equipmentListData['E-4104']['TE_4110_7'] && equipmentListData['E-4104']['TE_4110_7'].data}}</td>
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
                  <td>
                    <div>塔顶油气</div>
                    <div>(TE_4110_5)</div>
                  </td>
                  <td>
                    <div>塔底温度</div>
                    <div>(TE_4112_5)</div>
                  </td>
                </tr>
                <tr class="item_data">
                  <td>无字段</td>
                  <td>无字段</td>
                  <!-- <td :style="{color: equipmentListData['K-4101'] && equipmentListData['K-4101']['TE_2109'] && equipmentListData['K-4101']['TE_2109'].type}">{{equipmentListData['K-4101'] && equipmentListData['K-4101']['TE_2109'] && equipmentListData['K-4101']['TE_2109'].data}}</td>
                  <td :style="{color: equipmentListData['K-4101'] && equipmentListData['K-4101']['PT_2102'] && equipmentListData['K-4101']['PT_2102'].type}">{{equipmentListData['K-4101'] && equipmentListData['K-4101']['PT_2102'] && equipmentListData['K-4101']['PT_2102'].data}}</td> -->
                </tr>
                <tr class="item_unit">
                  <td>℃</td>
                  <td>℃</td>
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
                  <div>分馏塔21层</div>
                  <div>(PT_4104)</div>
                </td>
                <td>
                  <div>T-4152</div>
                  <div>(PT_4154)</div>
                </td>
                <td>
                  <div>E_4102</div>
                  <div>(PIC_4106)</div>
                </td>
                <td>
                  <div>集油箱</div>
                  <div>(LT_4103)</div>
                </td>
                <td>
                  <div>集油箱</div>
                  <div>(LT_4104)</div>
                </td>
                <td>
                  <div>塔底</div>
                  <div>(LT_4105)</div>
                </td>
              </tr>
              <tr class="item_data">
                <td :style="{color: equipmentListData['K-4101'] && equipmentListData['K-4101']['PT_4104'] && equipmentListData['K-4101']['PT_4104'].type}">{{equipmentListData['K-4101'] && equipmentListData['K-4101']['PT_4104'] && equipmentListData['K-4101']['PT_4104'].data}}</td>
                <td :style="{color: equipmentListData['T-4152'] && equipmentListData['T-4152']['PT_4154'] && equipmentListData['T-4152']['PT_4154'].type}">{{equipmentListData['T-4152'] && equipmentListData['T-4152']['PT_4154'] && equipmentListData['T-4152']['PT_4154'].data}}</td>
                <td :style="{color: equipmentListData['E-4102'] && equipmentListData['E-4102']['PIC_4106'] && equipmentListData['E-4102']['PIC_4106'].type}">{{equipmentListData['E-4102'] && equipmentListData['E-4102']['PIC_4106'] && equipmentListData['E-4102']['PIC_4106'].data}}</td>
                <td :style="{color: equipmentListData['K-4101'] && equipmentListData['K-4101']['LT_4103'] && equipmentListData['K-4101']['LT_4103'].type}">{{equipmentListData['K-4101'] && equipmentListData['K-4101']['LT_4103'] && equipmentListData['K-4101']['LT_4103'].data}}</td>
                <td :style="{color: equipmentListData['K-4101'] && equipmentListData['K-4101']['LT_4104'] && equipmentListData['K-4101']['LT_4104'].type}">{{equipmentListData['K-4101'] && equipmentListData['K-4101']['LT_4104'] && equipmentListData['K-4101']['LT_4104'].data}}</td>
                <td :style="{color: equipmentListData['K-4101'] && equipmentListData['K-4101']['LT_4105'] && equipmentListData['K-4101']['LT_4105'].type}">{{equipmentListData['K-4101'] && equipmentListData['K-4101']['LT_4105'] && equipmentListData['K-4101']['LT_4105'].data}}</td>
              </tr>
              <tr class="item_unit">
                <td>MPa</td>
                <td>MPa</td>
                <td>%</td>
                <td>mm</td>
                <td>mm</td>
                <td>mm</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="equipment_parameter_info equipment_parameter_info_main1">
      <div class="equipment_parameter_info_top">
        <div class="equipment_name" style="left: 73%;top: 56%;">
            <span>加热炉</span>
            <span>F-4101</span>
        </div>
        <div class="equipment_parameter_info_105w">
          <div class="moduleItem">
            <table>
              <tbody>
                <tr class="item_header">
                  <td>
                    <div>入口温度</div>
                    <div>(TE_4105)</div>
                  </td>
                </tr>
                <tr class="item_data">
                  <td :style="{color: equipmentListData['K-4101'] && equipmentListData['K-4101']['TE_4105'] && equipmentListData['K-4101']['TE_4105'].type}">{{equipmentListData['K-4101'] && equipmentListData['K-4101']['TE_4105'] && equipmentListData['K-4101']['TE_4105'].data}}</td>
                </tr>
                <tr class="item_unit">
                  <td>℃</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="moduleItem">
            <table>
              <tbody>
                <tr class="item_header">
                  <td>
                    <div>出口温度</div>
                    <div>(TT_4185)</div>
                  </td>
                </tr>
                <tr class="item_data">
                  <td :style="{color: equipmentListData['F-4101'] && equipmentListData['F-4101']['TT_4185'] && equipmentListData['F-4101']['TT_4185'].type}">{{equipmentListData['F-4101'] && equipmentListData['F-4101']['TT_4185'] && equipmentListData['F-4101']['TT_4185'].data}}</td>
                </tr>
                <tr class="item_unit">
                  <td>Nm³/h</td>
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
                  <div>混合油进口流量</div>
                  <div>(TT_4185)</div>
                </td>
                <td>
                  <div>注水流量</div>
                  <div>(FT_4103)</div>
                </td>
              </tr>
              <tr class="item_data">
                <td :style="{color: equipmentListData['FT-4101'] && equipmentListData['FT-4101']['FT_4101'] && equipmentListData['FT-4101']['FT_4101'].type}">{{equipmentListData['FT-4101'] && equipmentListData['FT-4101']['FT_4101'] && equipmentListData['FT-4101']['FT_4101'].data}}</td>
                <td :style="{color: equipmentListData['FT-4103'] && equipmentListData['FT-4103']['FT_4103'] && equipmentListData['FT-4103']['FT_4103'].type}">{{equipmentListData['FT-4103'] && equipmentListData['FT-4103']['FT_4103'] && equipmentListData['FT-4103']['FT_4103'].data}}</td>
              </tr>
              <tr class="item_unit">
                <td>m³/h</td>
                <td>t/h</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="equipment_parameter_info equipment_parameter_info_main3">
      <div class="equipment_parameter_info_top">
        <div class="equipment_name" style="left: 40%;top: 63%;">
            <span>焦化塔</span>
            <span>R-4101A</span>
        </div>
        <div class="equipment_name" style="left: 62%;top: 63%;">
            <span>焦化塔</span>
            <span>R-4101B</span>
        </div>
        <div class="equipment_parameter_info_100w">
          <div class="moduleItem">
            <table>
              <tbody>
                <tr class="item_header">
                  <td>
                    <div>塔顶压力</div>
                    <div>(PT_4103C)</div>
                  </td>
                </tr>
                <tr class="item_data">
                  <td :style="{color: equipmentListData['R-4101A'] && equipmentListData['R-4101A']['PT_4103C'] && equipmentListData['R-4101A']['PT_4103C'].type}">{{equipmentListData['R-4101A'] && equipmentListData['R-4101A']['PT_4103C'] && equipmentListData['R-4101A']['PT_4103C'].data}}</td>
                </tr>
                <tr class="item_unit">
                  <td>MPa</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="moduleItem">
            <table>
              <tbody>
                <tr class="item_header">
                  <td>
                    <div>塔顶温度</div>
                    <div>(TE_4110_1A)</div>
                  </td>
                </tr>
                <tr class="item_data">
                  <td :style="{color: equipmentListData['R-4101A'] && equipmentListData['R-4101A']['TE_4110_1A'] && equipmentListData['R-4101A']['TE_4110_1A'].type}">{{equipmentListData['R-4101A'] && equipmentListData['R-4101A']['TE_4110_1A'] && equipmentListData['R-4101A']['TE_4110_1A'].data}}</td>
                </tr>
                <tr class="item_unit">
                  <td>℃</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="equipment_parameter_info_100w">
          <div class="moduleItem">
            <table>
              <tbody>
                <tr class="item_header">
                  <td>
                    <div>塔顶压力</div>
                    <div>(PT_4103D)</div>
                  </td>
                </tr>
                <tr class="item_data">
                  <td :style="{color: equipmentListData['R-4101B'] && equipmentListData['R-4101B']['PT_4103D'] && equipmentListData['R-4101B']['PT_4103D'].type}">{{equipmentListData['R-4101B'] && equipmentListData['R-4101B']['PT_4103D'] && equipmentListData['R-4101B']['PT_4103D'].data}}</td>
                </tr>
                <tr class="item_unit">
                  <td>MPa</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="moduleItem">
            <table>
              <tbody>
                <tr class="item_header">
                  <td>
                    <div>塔顶温度</div>
                    <div>(TE_4110_1B)</div>
                  </td>
                </tr>
                <tr class="item_data">
                  <td :style="{color: equipmentListData['R-4101B'] && equipmentListData['R-4101B']['TE_4110_1B'] && equipmentListData['R-4101B']['TE_4110_1B'].type}">{{equipmentListData['R-4101B'] && equipmentListData['R-4101B']['TE_4110_1B'] && equipmentListData['R-4101B']['TE_4110_1B'].data}}</td>
                </tr>
                <tr class="item_unit">
                  <td>℃</td>
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
                  冷焦水流量（FT_4104）
                </td>
                <td>
                  冷焦蒸汽流量（FT_4105）
                </td>
              </tr>
              <tr class="item_data tableTwoRowCol">
                <td class="item_data data_unit_td">
                    <span class="item_data" :style="{color: equipmentListData['R-4101A'] && equipmentListData['R-4101A']['FT_4104'] && equipmentListData['R-4101A']['FT_4104'].type}">{{equipmentListData['R-4101A'] && equipmentListData['R-4101A']['FT_4104'] && equipmentListData['R-4101A']['FT_4104'].data}}</span>
                    <span class="item_unit">m³/h</span>
                </td>
                <td class="item_data data_unit_td">
                    <span class="item_data" :style="{color: equipmentListData['R-4101B'] && equipmentListData['R-4101B']['FT_4105'] && equipmentListData['R-4101B']['FT_4105'].type}">{{equipmentListData['R-4101B'] && equipmentListData['R-4101B']['FT_4105'] && equipmentListData['R-4101B']['FT_4105'].data}}</span>
                    <span class="item_unit">kg/h</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="coalTarScreen_delayedCokingCom_coking_div">
        <img :src="TipsMax" alt="" />
        <div>
            <span class="word_14">LT_4101B</span>
            <div>
            <span class="word_24">{{dataSource['蕉坑LT_4101B'] && dataSource['蕉坑LT_4101B'].stock}}</span>
            <span class="word_14 word_unit" v-if="dataSource['蕉坑LT_4101B'] && dataSource['蕉坑LT_4101B'].stock">mm</span>
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
      TipsMax: require("@/assets/image/coalTarScreen/tipsMax.svg"),
      ArrowsError: require("@/assets/image/coalTarScreen/arrowsError.svg"),
      ArrowsWarning: require("@/assets/image/coalTarScreen/arrowsWarning.svg"),  
      ForkImg: require("@/assets/image/coalTarScreen/fork.svg")
    };
  },
};
</script>
<style lang="scss" scoped>
.coalTarScreen_delayedCokingCom {
  width: 17.2rem;
  height: 100%;
//   border: 1px solid #ccc;
  position: relative;
  .accidentArrows{
    transform: translateX(2.15rem);
  }
  .boraccidentLine{
    left: 24.4%;
  }
  .positionDiv {
    position: absolute;
    width: 6rem;
    height: 3.7rem;
    // border: 1px solid #ccc;
    display: flex;
    flex-direction: column;
  }
  .coalTarScreen_delayedCokingCom_coking_div{
      img{
            width: 1.08rem;
            height: .6rem;
            position: absolute;
            left: 15.56rem;
            top: 6.4rem;
      }
      & > div {
            position: absolute;
            width: 1.08rem;
            height: .6rem;
            padding-left: 0.07rem;
            left: 15.56rem;
            top: 6.4rem;
            display: flex;
            flex-direction: column;
            & > span {
                line-height: 0.18rem;
            }
            & > div {
                line-height: 0.31rem;
                display: flex;
            }
      }
  }
  .positionMinisDiv {
    position: absolute;
    display: flex;
    width: 9.6rem;
    height: 3.1rem;
    top: 6.33rem;
    left: 1rem;
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
      .monthlyOutput {
        height: 0.7rem;
        display: flex;
        transform: translateX(-0.1rem);
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
    left: 0.58rem;
    top: 1.35rem;
    width: 5.97rem;
    height: 4.24rem;
  }
  .equipment_parameter_info_main3 {
    left: 11.48rem;
    top: 1.35rem;
    width: 5.43rem;
    height: 4.24rem;
    .equipment_parameter_info_bottom {
        justify-content: center;
        .equipment_parameter_info_bottom_table {
            width: 3.48rem;
        }
    }
  }
  .equipment_parameter_info_main1 {
    left: 7.42rem;
    top: 1.35rem;
    width: 3.1rem;
    height: 4.24rem;
    .equipment_parameter_info_top_right {
      & > div:first-child {
        margin-right: 0.06rem;
      }
    }
  }
}
@import "../style/foo.scss";
</style>
