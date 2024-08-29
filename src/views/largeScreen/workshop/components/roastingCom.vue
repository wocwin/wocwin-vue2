<template>
  <div class="coalTarScreen_roastingCom">
    <div class="positionMinisDiv">
      <div class="oilDepotA positionOilDepotDiv">
        <div class="accidentShelf">
          <div class="unqualifiedModal" v-if="reportInfoObj && reportInfoObj['脱水槽T-4201A'] && reportInfoObj['脱水槽T-4201A'].flag">
            <img class="forkImg" @click="$emit('updateReportInfoFlagFuc','脱水槽T-4201A')" :src="ForkImg" alt="">
            <div>
              <span>取样地点:</span>
              <span>{{reportInfoObj['脱水槽T-4201A'].sampleAddr}}</span>
            </div>
            <div>
              <span>取料名称:</span>
              <span>{{reportInfoObj['脱水槽T-4201A'].materialName}}</span>
            </div>
            <div>
              <span>取样时间:</span>
              <span>{{reportInfoObj['脱水槽T-4201A'].sampleTime}}</span>
            </div>
            <div>
              <span>样品分类:</span>
              <span>{{reportInfoObj['脱水槽T-4201A'].sampleTypeName}}</span>
            </div>
            <div>
              <span>检验结果:</span>
              <span>不合格</span>
            </div>
            <div>
              <span>检验项:</span>
              <div class="inspection_Item" v-if="reportInfoObj['脱水槽T-4201A'].itemsAuditVOList">
                  <span v-for="item of reportInfoObj['脱水槽T-4201A'].itemsAuditVOList" :key="item.id">
                    <span>{{item.name}}</span>
                    <span>{{item.place}}</span>
                  </span>
              </div>
            </div>
          </div>
          <img class="accidentShadeImg" :src="DehydrationShade" alt="" />
          <!-- <div class="accidentShadeImg"></div> -->
          <img class="accidentShelfImg" :src="Dehydration" alt="" />
          <img
            class="accidentWaterImg accidentNormalWaterImg"
            :src="DehydrationWater"
            :style="{ height: (dataSource['脱水槽T-4201A'] && dataSource['脱水槽T-4201A'].height ? (dataSource['脱水槽T-4201A'].stock / dataSource['脱水槽T-4201A'].height) ? (dataSource['脱水槽T-4201A'].stock / dataSource['脱水槽T-4201A'].height) > 1 ? 2 :  (dataSource['脱水槽T-4201A'].stock / dataSource['脱水槽T-4201A'].height) * 2: 0 : 0 )+ 'rem', }"
            alt=""
          />
          <div
            class="borderErrLine borDehydrationLine"
            :style="{top:
              (dataSource['脱水槽T-4201A'] && dataSource['脱水槽T-4201A'].height ? ((dataSource['脱水槽T-4201A'].alarmUpper / dataSource['脱水槽T-4201A'].height)
                ? 2.52 - ((dataSource['脱水槽T-4201A'].alarmUpper / dataSource['脱水槽T-4201A'].height) > 1 ? 1.92 : (dataSource['脱水槽T-4201A'].alarmUpper / dataSource['脱水槽T-4201A'].height) * 1.92)
                : 2.52) : 2.52) + 'rem',}"
        ></div>
        <div
            class="borderWarningLine borDehydrationLine"
            :style="{top:
              (dataSource['脱水槽T-4201A'] && dataSource['脱水槽T-4201A'].height ? ((dataSource['脱水槽T-4201A'].alarmLower / dataSource['脱水槽T-4201A'].height)
                ? 2.52 - ((dataSource['脱水槽T-4201A'].alarmLower / dataSource['脱水槽T-4201A'].height) > 1 ? 1.92 : (dataSource['脱水槽T-4201A'].alarmLower / dataSource['脱水槽T-4201A'].height) * 1.92)
                : 2.52) : 2.52) + 'rem',}"
        ></div>
        <img
            class="accidentArrows arrows"
            :src="ArrowsError"
            :style="{top:
              (dataSource['脱水槽T-4201A'] && dataSource['脱水槽T-4201A'].height ? ((dataSource['脱水槽T-4201A'].alarmUpper / dataSource['脱水槽T-4201A'].height)
                ? 2.55 - ((dataSource['脱水槽T-4201A'].alarmUpper / dataSource['脱水槽T-4201A'].height) > 1 ? 1.92 : (dataSource['脱水槽T-4201A'].alarmUpper / dataSource['脱水槽T-4201A'].height) * 1.92)
                : 2.55) : 2.55) + 'rem',}"
            alt=""
          />
        <img
          class="accidentArrows arrows"
          :src="ArrowsWarning"
          :style="{top:
              (dataSource['脱水槽T-4201A'] && dataSource['脱水槽T-4201A'].height ? ((dataSource['脱水槽T-4201A'].alarmLower / dataSource['脱水槽T-4201A'].height)
                ? 2.55 - ((dataSource['脱水槽T-4201A'].alarmLower / dataSource['脱水槽T-4201A'].height) > 1 ? 1.92 : (dataSource['脱水槽T-4201A'].alarmLower / dataSource['脱水槽T-4201A'].height) * 1.92)
                : 2.55) : 2.55) + 'rem',}"
          alt=""
        />
          <div class="accidentShelfRight">
            <img :src="TipsMax" :style="{ top: '1.2rem' }" alt="" />
            <div :style="{ top: '1.2rem' }">
              <span class="word_14">当前料位</span>
              <div>
                <span class="word_24">{{dataSource['脱水槽T-4201A'] && dataSource['脱水槽T-4201A'].stock}}</span>
                <span class="word_14 word_unit" v-if="dataSource['脱水槽T-4201A'] && dataSource['脱水槽T-4201A'].stock">mm</span>
              </div>
            </div>
          </div>
          <div class="equipmentInfo word_Bold_16">
            <span>脱水槽</span>
            <span>T-4201A</span>
          </div>
        </div>
      </div>
      <div class="oilDepotA positionOilDepotDiv">
        <div class="accidentShelf">
          <div class="unqualifiedModal" v-if="reportInfoObj && reportInfoObj['脱水槽T-4201B'] && reportInfoObj['脱水槽T-4201B'].flag">
            <img class="forkImg" @click="$emit('updateReportInfoFlagFuc','脱水槽T-4201B')" :src="ForkImg" alt="">
            <div>
              <span>取样地点:</span>
              <span>{{reportInfoObj['脱水槽T-4201B'].sampleAddr}}</span>
            </div>
            <div>
              <span>取料名称:</span>
              <span>{{reportInfoObj['脱水槽T-4201B'].materialName}}</span>
            </div>
            <div>
              <span>取样时间:</span>
              <span>{{reportInfoObj['脱水槽T-4201B'].sampleTime}}</span>
            </div>
            <div>
              <span>样品分类:</span>
              <span>{{reportInfoObj['脱水槽T-4201B'].sampleTypeName}}</span>
            </div>
            <div>
              <span>检验结果:</span>
              <span>不合格</span>
            </div>
            <div>
              <span>检验项:</span>
              <div class="inspection_Item" v-if="reportInfoObj['脱水槽T-4201B'].itemsAuditVOList">
                  <span v-for="item of reportInfoObj['脱水槽T-4201B'].itemsAuditVOList" :key="item.id">
                    <span>{{item.name}}</span>
                    <span>{{item.place}}</span>
                  </span>
              </div>
            </div>
          </div>
          <img class="accidentShadeImg" :src="DehydrationShade" alt="" />
          <!-- <div class="accidentShadeImg"></div> -->
          <img class="accidentShelfImg" :src="Dehydration" alt="" />
          <img
            class="accidentWaterImg accidentNormalWaterImg"
            :src="DehydrationWater"
            :style="{ height: (dataSource['脱水槽T-4201B'] && dataSource['脱水槽T-4201B'].height ? (dataSource['脱水槽T-4201B'].stock / dataSource['脱水槽T-4201B'].height) ? (dataSource['脱水槽T-4201B'].stock / dataSource['脱水槽T-4201B'].height) > 1 ? 2 :  (dataSource['脱水槽T-4201B'].stock / dataSource['脱水槽T-4201B'].height) * 2: 0 : 0 )+ 'rem', }"
            alt=""
          />
          <div
            class="borderErrLine borDehydrationLine"
            :style="{top:
              (dataSource['脱水槽T-4201B'] && dataSource['脱水槽T-4201B'].height ? ((dataSource['脱水槽T-4201B'].alarmUpper / dataSource['脱水槽T-4201B'].height)
                ? 2.52 - ((dataSource['脱水槽T-4201B'].alarmUpper / dataSource['脱水槽T-4201B'].height) > 1 ? 1.92 : (dataSource['脱水槽T-4201B'].alarmUpper / dataSource['脱水槽T-4201B'].height) * 1.92)
                : 2.52) : 2.52) + 'rem',}"
        ></div>
        <div
            class="borderWarningLine borDehydrationLine"
            :style="{top:
              (dataSource['脱水槽T-4201B'] && dataSource['脱水槽T-4201B'].height ? ((dataSource['脱水槽T-4201B'].alarmLower / dataSource['脱水槽T-4201B'].height)
                ? 2.52 - ((dataSource['脱水槽T-4201B'].alarmLower / dataSource['脱水槽T-4201B'].height) > 1 ? 1.92 : (dataSource['脱水槽T-4201B'].alarmLower / dataSource['脱水槽T-4201B'].height) * 1.92)
                : 2.52) : 2.52) + 'rem',}"
        ></div>
        <img
            class="accidentArrows arrows"
            :src="ArrowsError"
            :style="{top:
              (dataSource['脱水槽T-4201B'] && dataSource['脱水槽T-4201B'].height ? ((dataSource['脱水槽T-4201B'].alarmUpper / dataSource['脱水槽T-4201B'].height)
                ? 2.55 - ((dataSource['脱水槽T-4201B'].alarmUpper / dataSource['脱水槽T-4201B'].height) > 1 ? 1.92 : (dataSource['脱水槽T-4201B'].alarmUpper / dataSource['脱水槽T-4201B'].height) * 1.92)
                : 2.55) : 2.55) + 'rem',}"
            alt=""
          />
        <img
          class="accidentArrows arrows"
          :src="ArrowsWarning"
          :style="{top:
              (dataSource['脱水槽T-4201B'] && dataSource['脱水槽T-4201B'].height ? ((dataSource['脱水槽T-4201B'].alarmLower / dataSource['脱水槽T-4201B'].height)
                ? 2.55 - ((dataSource['脱水槽T-4201B'].alarmLower / dataSource['脱水槽T-4201B'].height) > 1 ? 1.92 : (dataSource['脱水槽T-4201B'].alarmLower / dataSource['脱水槽T-4201B'].height) * 1.92)
                : 2.55) : 2.55) + 'rem',}"
          alt=""
        />
          <div class="accidentShelfRight">
            <img :src="TipsMax" :style="{ top: '1.2rem' }" alt="" />
            <div :style="{ top: '1.2rem' }">
              <span class="word_14">当前料位</span>
              <div>
                <span class="word_24">{{dataSource['脱水槽T-4201B'] && dataSource['脱水槽T-4201B'].stock}}</span>
                <span class="word_14 word_unit" v-if="dataSource['脱水槽T-4201B'] && dataSource['脱水槽T-4201B'].stock">mm</span>
              </div>
            </div>
          </div>
          <div class="equipmentInfo word_Bold_16">
            <span>脱水槽</span>
            <span>T-4201B</span>
          </div>
        </div>
      </div>
      <div class="oilDepotA positionOilDepotDiv">
        <div class="accidentShelf">
          <div class="unqualifiedModal" v-if="reportInfoObj && reportInfoObj['脱水槽T-4201C'] && reportInfoObj['脱水槽T-4201C'].flag">
            <img class="forkImg" @click="$emit('updateReportInfoFlagFuc','脱水槽T-4201C')" :src="ForkImg" alt="">
            <div>
              <span>取样地点:</span>
              <span>{{reportInfoObj['脱水槽T-4201C'].sampleAddr}}</span>
            </div>
            <div>
              <span>取料名称:</span>
              <span>{{reportInfoObj['脱水槽T-4201C'].materialName}}</span>
            </div>
            <div>
              <span>取样时间:</span>
              <span>{{reportInfoObj['脱水槽T-4201C'].sampleTime}}</span>
            </div>
            <div>
              <span>样品分类:</span>
              <span>{{reportInfoObj['脱水槽T-4201C'].sampleTypeName}}</span>
            </div>
            <div>
              <span>检验结果:</span>
              <span>不合格</span>
            </div>
            <div>
              <span>检验项:</span>
              <div class="inspection_Item" v-if="reportInfoObj['脱水槽T-4201C'].itemsAuditVOList">
                  <span v-for="item of reportInfoObj['脱水槽T-4201C'].itemsAuditVOList" :key="item.id">
                    <span>{{item.name}}</span>
                    <span>{{item.place}}</span>
                  </span>
              </div>
            </div>
          </div>
          <img class="accidentShadeImg" :src="DehydrationShade" alt="" />
          <!-- <div class="accidentShadeImg"></div> -->
          <img class="accidentShelfImg" :src="Dehydration" alt="" />
          <img
            class="accidentWaterImg accidentNormalWaterImg"
            :src="DehydrationWater"
            :style="{ height: (dataSource['脱水槽T-4201C'] && dataSource['脱水槽T-4201C'].height ? (dataSource['脱水槽T-4201C'].stock / dataSource['脱水槽T-4201C'].height) ? (dataSource['脱水槽T-4201C'].stock / dataSource['脱水槽T-4201C'].height) > 1 ? 2 :  (dataSource['脱水槽T-4201C'].stock / dataSource['脱水槽T-4201C'].height) * 2: 0 : 0 )+ 'rem', }"
            alt=""
          />
          <div
            class="borderErrLine borDehydrationLine"
            :style="{top:
              (dataSource['脱水槽T-4201C'] && dataSource['脱水槽T-4201C'].height ? ((dataSource['脱水槽T-4201C'].alarmUpper / dataSource['脱水槽T-4201C'].height)
                ? 2.52 - ((dataSource['脱水槽T-4201C'].alarmUpper / dataSource['脱水槽T-4201C'].height) > 1 ? 1.92 : (dataSource['脱水槽T-4201C'].alarmUpper / dataSource['脱水槽T-4201C'].height) * 1.92)
                : 2.52) : 2.52) + 'rem',}"
        ></div>
        <div
            class="borderWarningLine borDehydrationLine"
            :style="{top:
              (dataSource['脱水槽T-4201C'] && dataSource['脱水槽T-4201C'].height ? ((dataSource['脱水槽T-4201C'].alarmLower / dataSource['脱水槽T-4201C'].height)
                ? 2.52 - ((dataSource['脱水槽T-4201C'].alarmLower / dataSource['脱水槽T-4201C'].height) > 1 ? 1.92 : (dataSource['脱水槽T-4201C'].alarmLower / dataSource['脱水槽T-4201C'].height) * 1.92)
                : 2.52) : 2.52) + 'rem',}"
        ></div>
        <img
            class="accidentArrows arrows"
            :src="ArrowsError"
            :style="{top:
              (dataSource['脱水槽T-4201C'] && dataSource['脱水槽T-4201C'].height ? ((dataSource['脱水槽T-4201C'].alarmUpper / dataSource['脱水槽T-4201C'].height)
                ? 2.55 - ((dataSource['脱水槽T-4201C'].alarmUpper / dataSource['脱水槽T-4201C'].height) > 1 ? 1.92 : (dataSource['脱水槽T-4201C'].alarmUpper / dataSource['脱水槽T-4201C'].height) * 1.92)
                : 2.55) : 2.55) + 'rem',}"
            alt=""
          />
        <img
          class="accidentArrows arrows"
          :src="ArrowsWarning"
          :style="{top:
              (dataSource['脱水槽T-4201C'] && dataSource['脱水槽T-4201C'].height ? ((dataSource['脱水槽T-4201C'].alarmLower / dataSource['脱水槽T-4201C'].height)
                ? 2.55 - ((dataSource['脱水槽T-4201C'].alarmLower / dataSource['脱水槽T-4201C'].height) > 1 ? 1.92 : (dataSource['脱水槽T-4201C'].alarmLower / dataSource['脱水槽T-4201C'].height) * 1.92)
                : 2.55) : 2.55) + 'rem',}"
          alt=""
        />
          <div class="accidentShelfRight">
            <img :src="TipsMax" :style="{ top: '1.2rem' }" alt="" />
            <div :style="{ top: '1.2rem' }">
              <span class="word_14">当前料位</span>
              <div>
                <span class="word_24">{{dataSource['脱水槽T-4201C'] && dataSource['脱水槽T-4201C'].stock}}</span>
                <span class="word_14 word_unit" v-if="dataSource['脱水槽T-4201C'] && dataSource['脱水槽T-4201C'].stock">mm</span>
              </div>
            </div>
          </div>
          <div class="equipmentInfo word_Bold_16">
            <span>脱水槽</span>
            <span>T-4201C</span>
          </div>
        </div>
      </div>
    </div>
    <div class="positionMiniStockBin positionMinisDiv_top">
      <div class="oilDepotA positionOilDepotDiv">
        <div class="accidentShelf">
          <div class="unqualifiedModal" v-if="reportInfoObj && reportInfoObj['生焦料仓AV-4201A'] && reportInfoObj['生焦料仓AV-4201A'].flag">
            <img class="forkImg" @click="$emit('updateReportInfoFlagFuc','生焦料仓AV-4201A')" :src="ForkImg" alt="">
            <div>
              <span>取样地点:</span>
              <span>{{reportInfoObj['生焦料仓AV-4201A'].sampleAddr}}</span>
            </div>
            <div>
              <span>取料名称:</span>
              <span>{{reportInfoObj['生焦料仓AV-4201A'].materialName}}</span>
            </div>
            <div>
              <span>取样时间:</span>
              <span>{{reportInfoObj['生焦料仓AV-4201A'].sampleTime}}</span>
            </div>
            <div>
              <span>样品分类:</span>
              <span>{{reportInfoObj['生焦料仓AV-4201A'].sampleTypeName}}</span>
            </div>
            <div>
              <span>检验结果:</span>
              <span>不合格</span>
            </div>
            <div>
              <span>检验项:</span>
              <div class="inspection_Item" v-if="reportInfoObj['生焦料仓AV-4201A'].itemsAuditVOList">
                  <span v-for="item of reportInfoObj['生焦料仓AV-4201A'].itemsAuditVOList" :key="item.id">
                    <span>{{item.name}}</span>
                    <span>{{item.place}}</span>
                  </span>
              </div>
            </div>
          </div>
          <img class="accidentShadeImg" :src="StorehouseShade" alt="" />
          <!-- <div class="accidentShadeImg"></div> -->
          <img class="accidentShelfImg" :src="Storehouse" alt="" />
          <img
            class="accidentWaterImg accidentNormalWaterImg"
            :src="StorehouseWater"
            :style="{ height: (dataSource['生焦料仓AV-4201A'] && dataSource['生焦料仓AV-4201A'].height ? (dataSource['生焦料仓AV-4201A'].stock / dataSource['生焦料仓AV-4201A'].height) ? (dataSource['生焦料仓AV-4201A'].stock / dataSource['生焦料仓AV-4201A'].height) > 1 ? 1.35 : (dataSource['生焦料仓AV-4201A'].stock / dataSource['生焦料仓AV-4201A'].height) * 1.35: 0 : 0 )+ 'rem', }"
            alt=""
          />
          <div class="accidentShelfRight">
            <img :src="TipsMax" :style="{ top: '1rem' }" alt="" />
            <div :style="{ top: '1rem' }">
              <span class="word_14">当前料位</span>
              <div>
                <span class="word_24">{{dataSource['生焦料仓AV-4201A'] && dataSource['生焦料仓AV-4201A'].stock}}</span>
                <span class="word_14 word_unit" v-if="dataSource['生焦料仓AV-4201A'] && dataSource['生焦料仓AV-4201A'].stock">mm</span>
              </div>
            </div>
          </div>
          <div class="equipmentInfo word_Bold_12">
            <span>生焦料仓A</span>
            <span>V-4201A</span>
            <span>（＜15mm）</span>
          </div>
        </div>
      </div>
      <div class="oilDepotA positionOilDepotDiv">
        <div class="accidentShelf">
          <div class="unqualifiedModal" v-if="reportInfoObj && reportInfoObj['生焦料仓BV-4201B'] && reportInfoObj['生焦料仓BV-4201B'].flag">
            <img class="forkImg" @click="$emit('updateReportInfoFlagFuc','生焦料仓BV-4201B')" :src="ForkImg" alt="">
            <div>
              <span>取样地点:</span>
              <span>{{reportInfoObj['生焦料仓BV-4201B'].sampleAddr}}</span>
            </div>
            <div>
              <span>取料名称:</span>
              <span>{{reportInfoObj['生焦料仓BV-4201B'].materialName}}</span>
            </div>
            <div>
              <span>取样时间:</span>
              <span>{{reportInfoObj['生焦料仓BV-4201B'].sampleTime}}</span>
            </div>
            <div>
              <span>样品分类:</span>
              <span>{{reportInfoObj['生焦料仓BV-4201B'].sampleTypeName}}</span>
            </div>
            <div>
              <span>检验结果:</span>
              <span>不合格</span>
            </div>
            <div>
              <span>检验项:</span>
              <div class="inspection_Item" v-if="reportInfoObj['生焦料仓BV-4201B'].itemsAuditVOList">
                  <span v-for="item of reportInfoObj['生焦料仓BV-4201B'].itemsAuditVOList" :key="item.id">
                    <span>{{item.name}}</span>
                    <span>{{item.place}}</span>
                  </span>
              </div>
            </div>
          </div>
          <img class="accidentShadeImg" :src="StorehouseShade" alt="" />
          <!-- <div class="accidentShadeImg"></div> -->
          <img class="accidentShelfImg" :src="Storehouse" alt="" />
          <img
            class="accidentWaterImg accidentNormalWaterImg"
            :src="StorehouseWater"
            :style="{ height: (dataSource['生焦料仓BV-4201B'] && dataSource['生焦料仓BV-4201B'].height ? (dataSource['生焦料仓BV-4201B'].stock / dataSource['生焦料仓BV-4201B'].height) ? (dataSource['生焦料仓BV-4201B'].stock / dataSource['生焦料仓BV-4201B'].height) > 1 ? 1.35 : (dataSource['生焦料仓BV-4201B'].stock / dataSource['生焦料仓BV-4201B'].height) * 1.35: 0 : 0 )+ 'rem', }"
            alt=""
          />
        <div class="accidentShelfRight">
          <img :src="TipsMax" :style="{ top: '1rem' }" alt="" />
          <div :style="{ top: '1rem' }">
            <span class="word_14">当前料位</span>
            <div>
              <span class="word_24">{{dataSource['生焦料仓BV-4201B'] && dataSource['生焦料仓BV-4201B'].stock}}</span>
              <span class="word_14 word_unit" v-if="dataSource['生焦料仓BV-4201B'] && dataSource['生焦料仓BV-4201B'].stock">mm</span>
            </div>
          </div>
        </div>
          <div class="equipmentInfo word_Bold_12">
            <span>生焦料仓B</span>
            <span>V-4201B</span>
            <span>（15-75mm）</span>
          </div>
        </div>
      </div>
      <div class="oilDepotA positionOilDepotDiv">
        <div class="accidentShelf">
          <div class="unqualifiedModal" v-if="reportInfoObj && reportInfoObj['生焦打包仓V-4101Q'] && reportInfoObj['生焦打包仓V-4101Q'].flag">
            <img class="forkImg" @click="$emit('updateReportInfoFlagFuc','生焦打包仓V-4101Q')" :src="ForkImg" alt="">
            <div>
              <span>取样地点:</span>
              <span>{{reportInfoObj['生焦打包仓V-4101Q'].sampleAddr}}</span>
            </div>
            <div>
              <span>取料名称:</span>
              <span>{{reportInfoObj['生焦打包仓V-4101Q'].materialName}}</span>
            </div>
            <div>
              <span>取样时间:</span>
              <span>{{reportInfoObj['生焦打包仓V-4101Q'].sampleTime}}</span>
            </div>
            <div>
              <span>样品分类:</span>
              <span>{{reportInfoObj['生焦打包仓V-4101Q'].sampleTypeName}}</span>
            </div>
            <div>
              <span>检验结果:</span>
              <span>不合格</span>
            </div>
            <div>
              <span>检验项:</span>
              <div class="inspection_Item" v-if="reportInfoObj['生焦打包仓V-4101Q'].itemsAuditVOList">
                  <span v-for="item of reportInfoObj['生焦打包仓V-4101Q'].itemsAuditVOList" :key="item.id">
                    <span>{{item.name}}</span>
                    <span>{{item.place}}</span>
                  </span>
              </div>
            </div>
          </div>
          <img class="accidentShadeImg" :src="StorehouseShade" alt="" />
          <img class="accidentShelfImg" :src="Storehouse" alt="" />
          <img
            class="accidentWaterImg accidentNormalWaterImg"
            :src="StorehouseWater"
            :style="{ height: (dataSource['生焦打包仓V-4101Q'] && dataSource['生焦打包仓V-4101Q'].height ? (dataSource['生焦打包仓V-4101Q'].stock / dataSource['生焦打包仓V-4101Q'].height) ? (dataSource['生焦打包仓V-4101Q'].stock / dataSource['生焦打包仓V-4101Q'].height) > 1 ? 1.35 : (dataSource['生焦打包仓V-4101Q'].stock / dataSource['生焦打包仓V-4101Q'].height) * 1.35: 0 : 0 )+ 'rem', }"
            alt=""
          />
        <div class="accidentShelfRight">
          <img :src="TipsMax" :style="{ top: '1rem' }" alt="" />
          <div :style="{ top: '1rem' }">
            <span class="word_14">当前料位</span>
            <div>
              <span class="word_24">{{dataSource['生焦打包仓V-4101Q'] && dataSource['生焦打包仓V-4101Q'].stock}}</span>
              <span class="word_14 word_unit" v-if="dataSource['生焦打包仓V-4101Q'] && dataSource['生焦打包仓V-4101Q'].stock">mm</span>
            </div>
          </div>
        </div>
          <div class="equipmentInfo word_Bold_12">
            <span>生焦打包仓</span>
            <span>V-4101Q</span>
            <span>（＜15mm）</span>
          </div>
        </div>
      </div>
      <div class="oilDepotA positionOilDepotDiv">
        <div class="accidentShelf">
          <div class="unqualifiedModal" v-if="reportInfoObj && reportInfoObj['煅烧生焦打包仓T-4202'] && reportInfoObj['煅烧生焦打包仓T-4202'].flag">
            <img class="forkImg" @click="$emit('updateReportInfoFlagFuc','煅烧生焦打包仓T-4202')" :src="ForkImg" alt="">
            <div>
              <span>取样地点:</span>
              <span>{{reportInfoObj['煅烧生焦打包仓T-4202'].sampleAddr}}</span>
            </div>
            <div>
              <span>取料名称:</span>
              <span>{{reportInfoObj['煅烧生焦打包仓T-4202'].materialName}}</span>
            </div>
            <div>
              <span>取样时间:</span>
              <span>{{reportInfoObj['煅烧生焦打包仓T-4202'].sampleTime}}</span>
            </div>
            <div>
              <span>样品分类:</span>
              <span>{{reportInfoObj['煅烧生焦打包仓T-4202'].sampleTypeName}}</span>
            </div>
            <div>
              <span>检验结果:</span>
              <span>不合格</span>
            </div>
            <div>
              <span>检验项:</span>
              <div class="inspection_Item" v-if="reportInfoObj['煅烧生焦打包仓T-4202'].itemsAuditVOList">
                  <span v-for="item of reportInfoObj['煅烧生焦打包仓T-4202'].itemsAuditVOList" :key="item.id">
                    <span>{{item.name}}</span>
                    <span>{{item.place}}</span>
                  </span>
              </div>
            </div>
          </div>
          <img class="accidentShadeImg" :src="StorehouseShade" alt="" />
          <img class="accidentShelfImg" :src="Storehouse" alt="" />
          <img
            class="accidentWaterImg accidentNormalWaterImg"
            :src="StorehouseWater"
            :style="{ height: (dataSource['煅烧生焦打包仓T-4202'] && dataSource['煅烧生焦打包仓T-4202'].height ? (dataSource['煅烧生焦打包仓T-4202'].stock / dataSource['煅烧生焦打包仓T-4202'].height) ? (dataSource['煅烧生焦打包仓T-4202'].stock / dataSource['煅烧生焦打包仓T-4202'].height) > 1 ? 1.35 : (dataSource['煅烧生焦打包仓T-4202'].stock / dataSource['煅烧生焦打包仓T-4202'].height) * 1.35: 0 : 0 )+ 'rem', }"
            alt=""
          />
        <div class="accidentShelfRight">
          <img :src="TipsMax" :style="{ top: '1rem' }" alt="" />
          <div :style="{ top: '1rem' }">
            <span class="word_14">当前料位</span>
            <div>
              <span class="word_24">{{dataSource['煅烧生焦打包仓T-4202'] && dataSource['煅烧生焦打包仓T-4202'].stock}}</span>
              <span class="word_14 word_unit" v-if="dataSource['煅烧生焦打包仓T-4202'] && dataSource['煅烧生焦打包仓T-4202'].stock">mm</span>
            </div>
          </div>
        </div>
          <div class="equipmentInfo word_Bold_12">
            <span>煅烧生焦打包仓</span>
            <span>T-4202</span>
            <span>（统焦）</span>
          </div>
        </div>
      </div>
      <div class="oilDepotA positionOilDepotDiv">
        <div class="accidentShelf">
          <div class="unqualifiedModal" v-if="reportInfoObj && reportInfoObj['打包及事故仓V-4201R'] && reportInfoObj['打包及事故仓V-4201R'].flag">
            <img class="forkImg" @click="$emit('updateReportInfoFlagFuc','打包及事故仓V-4201R')" :src="ForkImg" alt="">
            <div>
              <span>取样地点:</span>
              <span>{{reportInfoObj['打包及事故仓V-4201R'].sampleAddr}}</span>
            </div>
            <div>
              <span>取料名称:</span>
              <span>{{reportInfoObj['打包及事故仓V-4201R'].materialName}}</span>
            </div>
            <div>
              <span>取样时间:</span>
              <span>{{reportInfoObj['打包及事故仓V-4201R'].sampleTime}}</span>
            </div>
            <div>
              <span>样品分类:</span>
              <span>{{reportInfoObj['打包及事故仓V-4201R'].sampleTypeName}}</span>
            </div>
            <div>
              <span>检验结果:</span>
              <span>不合格</span>
            </div>
            <div>
              <span>检验项:</span>
              <div class="inspection_Item" v-if="reportInfoObj['打包及事故仓V-4201R'].itemsAuditVOList">
                  <span v-for="item of reportInfoObj['打包及事故仓V-4201R'].itemsAuditVOList" :key="item.id">
                    <span>{{item.name}}</span>
                    <span>{{item.place}}</span>
                  </span>
              </div>
            </div>
          </div>
          <img class="accidentShadeImg" :src="StorehouseShade" alt="" />
          <div class="accidentShadeImg"></div>
          <img class="accidentShelfImg" :src="Storehouse" alt="" />
          <img
            class="accidentWaterImg accidentNormalWaterImg"
            :src="StorehouseWater"
            :style="{ height: (dataSource['打包及事故仓V-4201R'] && dataSource['打包及事故仓V-4201R'].height ? (dataSource['打包及事故仓V-4201R'].stock / dataSource['打包及事故仓V-4201R'].height) ? (dataSource['打包及事故仓V-4201R'].stock / dataSource['打包及事故仓V-4201R'].height) > 1 ? 1.35 : (dataSource['打包及事故仓V-4201R'].stock / dataSource['打包及事故仓V-4201R'].height) * 1.35: 0 : 0 )+ 'rem', }"
            alt=""
          />
        <div class="accidentShelfRight">
          <img :src="TipsMax" :style="{ top: '1rem' }" alt="" />
          <div :style="{ top: '1rem' }">
            <span class="word_14">当前料位</span>
            <div>
              <span class="word_24">{{dataSource['打包及事故仓V-4201R'] && dataSource['打包及事故仓V-4201R'].stock}}</span>
              <span class="word_14 word_unit" v-if="dataSource['打包及事故仓V-4201R'] && dataSource['打包及事故仓V-4201R'].stock">mm</span>
            </div>
          </div>
        </div>
          <div class="equipmentInfo word_Bold_12">
            <span>打包及事故仓</span>
            <span>V-4201R</span>
            <span>（统焦）</span>
          </div>
        </div>
      </div>
    </div>
    <div class="positionMiniStockBin positionMinisDiv_bottom">
      <div class="oilDepotA positionOilDepotDiv">
        <div class="accidentShelf">
          <div class="unqualifiedModal" v-if="reportInfoObj && reportInfoObj['成品焦仓ASC4205A'] && reportInfoObj['成品焦仓ASC4205A'].flag">
            <img class="forkImg" @click="$emit('updateReportInfoFlagFuc','成品焦仓ASC4205A')" :src="ForkImg" alt="">
            <div>
              <span>取样地点:</span>
              <span>{{reportInfoObj['成品焦仓ASC4205A'].sampleAddr}}</span>
            </div>
            <div>
              <span>取料名称:</span>
              <span>{{reportInfoObj['成品焦仓ASC4205A'].materialName}}</span>
            </div>
            <div>
              <span>取样时间:</span>
              <span>{{reportInfoObj['成品焦仓ASC4205A'].sampleTime}}</span>
            </div>
            <div>
              <span>样品分类:</span>
              <span>{{reportInfoObj['成品焦仓ASC4205A'].sampleTypeName}}</span>
            </div>
            <div>
              <span>检验结果:</span>
              <span>不合格</span>
            </div>
            <div>
              <span>检验项:</span>
              <div class="inspection_Item" v-if="reportInfoObj['成品焦仓ASC4205A'].itemsAuditVOList">
                  <span v-for="item of reportInfoObj['成品焦仓ASC4205A'].itemsAuditVOList" :key="item.id">
                    <span>{{item.name}}</span>
                    <span>{{item.place}}</span>
                  </span>
              </div>
            </div>
          </div>
          <img class="accidentShadeImg" :src="StorehouseShade" alt="" />
          <!-- <div class="accidentShadeImg"></div> -->
          <img class="accidentShelfImg" :src="Storehouse" alt="" />
          <img
            class="accidentWaterImg accidentNormalWaterImg"
            :src="StorehouseWater"
            :style="{ height: (dataSource['成品焦仓ASC4205A'] && dataSource['成品焦仓ASC4205A'].height ? (dataSource['成品焦仓ASC4205A'].stock / dataSource['成品焦仓ASC4205A'].height) ? (dataSource['成品焦仓ASC4205A'].stock / dataSource['成品焦仓ASC4205A'].height) > 1 ? 1.35 : (dataSource['成品焦仓ASC4205A'].stock / dataSource['成品焦仓ASC4205A'].height) * 1.35: 0 : 0 )+ 'rem', }"
            alt=""
          />
        <div class="accidentShelfRight">
          <img :src="TipsMax" :style="{ top: '1rem' }" alt="" />
          <div :style="{ top: '1rem' }">
            <span class="word_14">当前料位</span>
            <div>
              <span class="word_24">{{dataSource['成品焦仓ASC4205A'] && dataSource['成品焦仓ASC4205A'].stock}}</span>
              <span class="word_14 word_unit" v-if="dataSource['成品焦仓ASC4205A'] && dataSource['成品焦仓ASC4205A'].stock">mm</span>
            </div>
          </div>
        </div>
          <div class="equipmentInfo word_Bold_12">
            <span>成品焦仓A</span>
            <span>SC4205A</span>
            <span>（＞45mm）</span>
          </div>
        </div>
      </div>
      <div class="oilDepotA positionOilDepotDiv">
        <div class="accidentShelf">
          <div class="unqualifiedModal" v-if="reportInfoObj && reportInfoObj['成品焦仓BSC4205B'] && reportInfoObj['成品焦仓BSC4205B'].flag">
            <img class="forkImg" @click="$emit('updateReportInfoFlagFuc','成品焦仓BSC4205B')" :src="ForkImg" alt="">
            <div>
              <span>取样地点:</span>
              <span>{{reportInfoObj['成品焦仓BSC4205B'].sampleAddr}}</span>
            </div>
            <div>
              <span>取料名称:</span>
              <span>{{reportInfoObj['成品焦仓BSC4205B'].materialName}}</span>
            </div>
            <div>
              <span>取样时间:</span>
              <span>{{reportInfoObj['成品焦仓BSC4205B'].sampleTime}}</span>
            </div>
            <div>
              <span>样品分类:</span>
              <span>{{reportInfoObj['成品焦仓BSC4205B'].sampleTypeName}}</span>
            </div>
            <div>
              <span>检验结果:</span>
              <span>不合格</span>
            </div>
            <div>
              <span>检验项:</span>
              <div class="inspection_Item" v-if="reportInfoObj['成品焦仓BSC4205B'].itemsAuditVOList">
                  <span v-for="item of reportInfoObj['成品焦仓BSC4205B'].itemsAuditVOList" :key="item.id">
                    <span>{{item.name}}</span>
                    <span>{{item.place}}</span>
                  </span>
              </div>
            </div>
          </div>
          <img class="accidentShadeImg" :src="StorehouseShade" alt="" />
          <!-- <div class="accidentShadeImg"></div> -->
          <img class="accidentShelfImg" :src="Storehouse" alt="" />
          <img
            class="accidentWaterImg accidentNormalWaterImg"
            :src="StorehouseWater"
            :style="{ height: (dataSource['成品焦仓BSC4205B'] && dataSource['成品焦仓BSC4205B'].height ? (dataSource['成品焦仓BSC4205B'].stock / dataSource['成品焦仓BSC4205B'].height) ? (dataSource['成品焦仓BSC4205B'].stock / dataSource['成品焦仓BSC4205B'].height) > 1 ? 1.35 : (dataSource['成品焦仓BSC4205B'].stock / dataSource['成品焦仓BSC4205B'].height) * 1.35: 0 : 0 )+ 'rem', }"
            alt=""
          />
        <div class="accidentShelfRight">
          <img :src="TipsMax" :style="{ top: '1rem' }" alt="" />
          <div :style="{ top: '1rem' }">
            <span class="word_14">当前料位</span>
            <div>
              <span class="word_24">{{dataSource['成品焦仓BSC4205B'] && dataSource['成品焦仓BSC4205B'].stock}}</span>
              <span class="word_14 word_unit" v-if="dataSource['成品焦仓BSC4205B'] && dataSource['成品焦仓BSC4205B'].stock">mm</span>
            </div>
          </div>
        </div>
          <div class="equipmentInfo word_Bold_12">
            <span>成品焦仓B</span>
            <span>SC4205B</span>
            <span>（12-45mm）</span>
          </div>
        </div>
      </div>
      <div class="oilDepotA positionOilDepotDiv">
        <div class="accidentShelf">
          <div class="unqualifiedModal" v-if="reportInfoObj && reportInfoObj['成品焦仓CSC4205C'] && reportInfoObj['成品焦仓CSC4205C'].flag">
            <img class="forkImg" @click="$emit('updateReportInfoFlagFuc','成品焦仓CSC4205C')" :src="ForkImg" alt="">
            <div>
              <span>取样地点:</span>
              <span>{{reportInfoObj['成品焦仓CSC4205C'].sampleAddr}}</span>
            </div>
            <div>
              <span>取料名称:</span>
              <span>{{reportInfoObj['成品焦仓CSC4205C'].materialName}}</span>
            </div>
            <div>
              <span>取样时间:</span>
              <span>{{reportInfoObj['成品焦仓CSC4205C'].sampleTime}}</span>
            </div>
            <div>
              <span>样品分类:</span>
              <span>{{reportInfoObj['成品焦仓CSC4205C'].sampleTypeName}}</span>
            </div>
            <div>
              <span>检验结果:</span>
              <span>不合格</span>
            </div>
            <div>
              <span>检验项:</span>
              <div class="inspection_Item" v-if="reportInfoObj['成品焦仓CSC4205C'].itemsAuditVOList">
                  <span v-for="item of reportInfoObj['成品焦仓CSC4205C'].itemsAuditVOList" :key="item.id">
                    <span>{{item.name}}</span>
                    <span>{{item.place}}</span>
                  </span>
              </div>
            </div>
          </div>
          <img class="accidentShadeImg" :src="StorehouseShade" alt="" />
          <!-- <div class="accidentShadeImg"></div> -->
          <img class="accidentShelfImg" :src="Storehouse" alt="" />
          <img
            class="accidentWaterImg accidentNormalWaterImg"
            :src="StorehouseWater"
            :style="{ height: (dataSource['成品焦仓CSC4205C'] && dataSource['成品焦仓CSC4205C'].height ? (dataSource['成品焦仓CSC4205C'].stock / dataSource['成品焦仓CSC4205C'].height) ? (dataSource['成品焦仓CSC4205C'].stock / dataSource['成品焦仓CSC4205C'].height) > 1 ? 1.35 : (dataSource['成品焦仓CSC4205C'].stock / dataSource['成品焦仓CSC4205C'].height) * 1.35: 0 : 0 )+ 'rem', }"
            alt=""
          />
        <div class="accidentShelfRight">
          <img :src="TipsMax" :style="{ top: '1rem' }" alt="" />
          <div :style="{ top: '1rem' }">
            <span class="word_14">当前料位</span>
            <div>
              <span class="word_24">{{dataSource['成品焦仓CSC4205C'] && dataSource['成品焦仓CSC4205C'].stock}}</span>
              <span class="word_14 word_unit" v-if="dataSource['成品焦仓CSC4205C'] && dataSource['成品焦仓CSC4205C'].stock">mm</span>
            </div>
          </div>
        </div>
          <div class="equipmentInfo word_Bold_12">
            <span>成品焦仓C</span>
            <span>SC4205C</span>
            <span>（0-4mm）</span>
          </div>
        </div>
      </div>
      <div class="oilDepotA positionOilDepotDiv">
        <div class="accidentShelf">
          <div class="unqualifiedModal" v-if="reportInfoObj && reportInfoObj['成品焦仓DSC4205D'] && reportInfoObj['成品焦仓DSC4205D'].flag">
            <img class="forkImg" @click="$emit('updateReportInfoFlagFuc','成品焦仓DSC4205D')" :src="ForkImg" alt="">
            <div>
              <span>取样地点:</span>
              <span>{{reportInfoObj['成品焦仓DSC4205D'].sampleAddr}}</span>
            </div>
            <div>
              <span>取料名称:</span>
              <span>{{reportInfoObj['成品焦仓DSC4205D'].materialName}}</span>
            </div>
            <div>
              <span>取样时间:</span>
              <span>{{reportInfoObj['成品焦仓DSC4205D'].sampleTime}}</span>
            </div>
            <div>
              <span>样品分类:</span>
              <span>{{reportInfoObj['成品焦仓DSC4205D'].sampleTypeName}}</span>
            </div>
            <div>
              <span>检验结果:</span>
              <span>不合格</span>
            </div>
            <div>
              <span>检验项:</span>
              <div class="inspection_Item" v-if="reportInfoObj['成品焦仓DSC4205D'].itemsAuditVOList">
                  <span v-for="item of reportInfoObj['成品焦仓DSC4205D'].itemsAuditVOList" :key="item.id">
                    <span>{{item.name}}</span>
                    <span>{{item.place}}</span>
                  </span>
              </div>
            </div>
          </div>
          <img class="accidentShadeImg" :src="StorehouseShade" alt="" />
          <!-- <div class="accidentShadeImg"></div> -->
          <img class="accidentShelfImg" :src="Storehouse" alt="" />
          <img
            class="accidentWaterImg accidentNormalWaterImg"
            :src="StorehouseWater"
            :style="{ height: (dataSource['成品焦仓DSC4205D'] && dataSource['成品焦仓DSC4205D'].height ? (dataSource['成品焦仓DSC4205D'].stock / dataSource['成品焦仓DSC4205D'].height) ? (dataSource['成品焦仓DSC4205D'].stock / dataSource['成品焦仓DSC4205D'].height) > 1 ? 1.35 : (dataSource['成品焦仓DSC4205D'].stock / dataSource['成品焦仓DSC4205D'].height) * 1.35: 0 : 0 )+ 'rem', }"
            alt=""
          />
        <div class="accidentShelfRight">
          <img :src="TipsMax" :style="{ top: '1rem' }" alt="" />
          <div :style="{ top: '1rem' }">
            <span class="word_14">当前料位</span>
            <div>
              <span class="word_24">{{dataSource['成品焦仓DSC4205D'] && dataSource['成品焦仓DSC4205D'].stock}}</span>
              <span class="word_14 word_unit" v-if="dataSource['成品焦仓DSC4205D'] && dataSource['成品焦仓DSC4205D'].stock">mm</span>
            </div>
          </div>
        </div>
          <div class="equipmentInfo word_Bold_12">
            <span>成品焦仓D</span>
            <span>SC4205D</span>
            <span>（0-4mm）</span>
          </div>
        </div>
      </div>
      <div class="oilDepotA positionOilDepotDiv">
        <div class="accidentShelf">
          <div class="unqualifiedModal" v-if="reportInfoObj && reportInfoObj['成品焦仓ESC4205E'] && reportInfoObj['成品焦仓ESC4205E'].flag">
            <img class="forkImg" @click="$emit('updateReportInfoFlagFuc','成品焦仓ESC4205E')" :src="ForkImg" alt="">
            <div>
              <span>取样地点:</span>
              <span>{{reportInfoObj['成品焦仓ESC4205E'].sampleAddr}}</span>
            </div>
            <div>
              <span>取料名称:</span>
              <span>{{reportInfoObj['成品焦仓ESC4205E'].materialName}}</span>
            </div>
            <div>
              <span>取样时间:</span>
              <span>{{reportInfoObj['成品焦仓ESC4205E'].sampleTime}}</span>
            </div>
            <div>
              <span>样品分类:</span>
              <span>{{reportInfoObj['成品焦仓ESC4205E'].sampleTypeName}}</span>
            </div>
            <div>
              <span>检验结果:</span>
              <span>不合格</span>
            </div>
            <div>
              <span>检验项:</span>
              <div class="inspection_Item" v-if="reportInfoObj['成品焦仓ESC4205E'].itemsAuditVOList">
                  <span v-for="item of reportInfoObj['成品焦仓ESC4205E'].itemsAuditVOList" :key="item.id">
                    <span>{{item.name}}</span>
                    <span>{{item.place}}</span>
                  </span>
              </div>
            </div>
          </div>
          <img class="accidentShadeImg" :src="StorehouseShade" alt="" />
          <!-- <div class="accidentShadeImg"></div> -->
          <img class="accidentShelfImg" :src="Storehouse" alt="" />
          <img
            class="accidentWaterImg accidentNormalWaterImg"
            :src="StorehouseWater"
            :style="{ height: (dataSource['成品焦仓ESC4205E'] && dataSource['成品焦仓ESC4205E'].height ? (dataSource['成品焦仓ESC4205E'].stock / dataSource['成品焦仓ESC4205E'].height) ? (dataSource['成品焦仓ESC4205E'].stock / dataSource['成品焦仓ESC4205E'].height) > 1 ? 1.35 : (dataSource['成品焦仓ESC4205E'].stock / dataSource['成品焦仓ESC4205E'].height) * 1.35: 0 : 0 )+ 'rem', }"
            alt=""
          />
        <div class="accidentShelfRight">
          <img :src="TipsMax" :style="{ top: '1rem' }" alt="" />
          <div :style="{ top: '1rem' }">
            <span class="word_14">当前料位</span>
            <div>
              <span class="word_24">{{dataSource['成品焦仓ESC4205E'] && dataSource['成品焦仓ESC4205E'].stock}}</span>
              <span class="word_14 word_unit" v-if="dataSource['成品焦仓ESC4205E'] && dataSource['成品焦仓ESC4205E'].stock">mm</span>
            </div>
          </div>
        </div>
          <div class="equipmentInfo word_Bold_12">
            <span>成品焦仓E</span>
            <span>SC4205E</span>
            <span>（4-8mm）</span>
          </div>
        </div>
      </div>
      <div class="oilDepotA positionOilDepotDiv">
        <div class="accidentShelf">
          <div class="unqualifiedModal" v-if="reportInfoObj && reportInfoObj['成品焦仓FSC4205F'] && reportInfoObj['成品焦仓FSC4205F'].flag">
            <img class="forkImg" @click="$emit('updateReportInfoFlagFuc','成品焦仓FSC4205F')" :src="ForkImg" alt="">
            <div>
              <span>取样地点:</span>
              <span>{{reportInfoObj['成品焦仓FSC4205F'].sampleAddr}}</span>
            </div>
            <div>
              <span>取料名称:</span>
              <span>{{reportInfoObj['成品焦仓FSC4205F'].materialName}}</span>
            </div>
            <div>
              <span>取样时间:</span>
              <span>{{reportInfoObj['成品焦仓FSC4205F'].sampleTime}}</span>
            </div>
            <div>
              <span>样品分类:</span>
              <span>{{reportInfoObj['成品焦仓FSC4205F'].sampleTypeName}}</span>
            </div>
            <div>
              <span>检验结果:</span>
              <span>不合格</span>
            </div>
            <div>
              <span>检验项:</span>
              <div class="inspection_Item" v-if="reportInfoObj['成品焦仓FSC4205F'].itemsAuditVOList">
                  <span v-for="item of reportInfoObj['成品焦仓FSC4205F'].itemsAuditVOList" :key="item.id">
                    <span>{{item.name}}</span>
                    <span>{{item.place}}</span>
                  </span>
              </div>
            </div>
          </div>
          <img class="accidentShadeImg" :src="StorehouseShade" alt="" />
          <!-- <div class="accidentShadeImg"></div> -->
          <img class="accidentShelfImg" :src="Storehouse" alt="" />
          <img
            class="accidentWaterImg accidentNormalWaterImg"
            :src="StorehouseWater"
            :style="{ height: (dataSource['成品焦仓FSC4205F'] && dataSource['成品焦仓FSC4205F'].height ? (dataSource['成品焦仓FSC4205F'].stock / dataSource['成品焦仓FSC4205F'].height) ? (dataSource['成品焦仓FSC4205F'].stock / dataSource['成品焦仓FSC4205F'].height) > 1 ? 1.35 : (dataSource['成品焦仓FSC4205F'].stock / dataSource['成品焦仓FSC4205F'].height) * 1.35: 0 : 0 )+ 'rem', }"
            alt=""
          />
        <div class="accidentShelfRight">
          <img :src="TipsMax" :style="{ top: '1rem' }" alt="" />
          <div :style="{ top: '1rem' }">
            <span class="word_14">当前料位</span>
            <div>
              <span class="word_24">{{dataSource['成品焦仓FSC4205F'] && dataSource['成品焦仓FSC4205F'].stock}}</span>
              <span class="word_14 word_unit" v-if="dataSource['成品焦仓FSC4205F'] && dataSource['成品焦仓FSC4205F'].stock">mm</span>
            </div>
          </div>
        </div>
          <div class="equipmentInfo word_Bold_12">
            <span>成品焦仓F</span>
            <span>SC4205F</span>
            <span>（8-12mm）</span>
          </div>
        </div>
      </div>
    </div>
    <div class="equipment_parameter_info equipment_parameter_info_main">
      <div class="equipment_parameter_info_160width">
          <div class="moduleItem">
            <table>
              <tbody>
                <tr class="item_header">
                  <td>
                    进料量（SC4201A_A1）
                  </td>
                </tr>
                <tr class="item_data tableTwoRowCol">
                  <td class="item_data data_unit_td">
                      <span class="item_data" :style="{color: equipmentListData['SC-4201A'] && equipmentListData['SC-4201A']['SC4201A_AIC'] && equipmentListData['SC-4201A']['SC4201A_AIC'].type}">{{equipmentListData['SC-4201A'] && equipmentListData['SC-4201A']['SC4201A_AIC'] && equipmentListData['SC-4201A']['SC4201A_AIC'].data}}</span>
                      <span class="item_unit">t/h</span>
                  </td>
                </tr>
                <tr class="item_header">
                  <td>
                    进料量（SC4201B_A1）
                  </td>
                </tr>
                <tr class="item_data tableTwoRowCol">
                  <td class="item_data data_unit_td">
                      <span class="item_data" :style="{color: equipmentListData['SC-4201B'] && equipmentListData['SC-4201B']['SC4201B_AIC'] && equipmentListData['SC-4201B']['SC4201B_AIC'].type}">{{equipmentListData['SC-4201B'] && equipmentListData['SC-4201B']['SC4201B_AIC'] && equipmentListData['SC-4201B']['SC4201B_AIC'].data}}</span>
                      <span class="item_unit">t/h</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="equipment_parameter_info_347width">
          <div class="moduleItem">
            <table>
              <tbody>
                <tr class="item_header">
                  <td>
                    <div>煅烧带温度</div>
                    <div>(TT_4221A)</div>
                  </td>
                  <td>
                    <div>煅烧带温度</div>
                    <div>(TT_4221B)</div>
                  </td>
                  <td>
                    <div>煅烧带温度</div>
                    <div>(PT_4221)</div>
                  </td>
                </tr>
                <tr class="item_data">
                  <td class="item_data" :style="{color: equipmentListData['F-4221'] && equipmentListData['F-4221']['TT_4221A'] && equipmentListData['F-4221']['TT_4221A'].type}">{{equipmentListData['F-4221'] && equipmentListData['F-4221']['TT_4221A'] && equipmentListData['F-4221']['TT_4221A'].data}}</td>
                  <td class="item_data" :style="{color: equipmentListData['F-4221'] && equipmentListData['F-4221']['TT_4221B'] && equipmentListData['F-4221']['TT_4221B'].type}">{{equipmentListData['F-4221'] && equipmentListData['F-4221']['TT_4221B'] && equipmentListData['F-4221']['TT_4221B'].data}}</td>
                  <td class="item_data" :style="{color: equipmentListData['F-4221'] && equipmentListData['F-4221']['PT_4221'] && equipmentListData['F-4221']['PT_4221'].type}">{{equipmentListData['F-4221'] && equipmentListData['F-4221']['PT_4221'] && equipmentListData['F-4221']['PT_4221'].data}}</td>
                </tr>
                <tr class="item_unit">
                  <td>℃</td>
                  <td>℃</td>
                  <td>Pa</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="equipment_parameter_info_226width">
          <div class="moduleItem">
            <table>
              <tbody>
                <tr class="item_header">
                  <td>
                    <div>窑头温度</div>
                    <div>(TT_4221)</div>
                  </td>
                  <td>
                    <div>窑头温度</div>
                    <div>(TT_4225)</div>
                  </td>
                </tr>
                <tr class="item_data">
                  <td class="item_data" :style="{color: equipmentListData['F-4221'] && equipmentListData['F-4221']['TT_4221'] && equipmentListData['F-4221']['TT_4221'].type}">{{equipmentListData['F-4221'] && equipmentListData['F-4221']['TT_4221'] && equipmentListData['F-4221']['TT_4221'].data}}</td>
                  <td class="item_data" :style="{color: equipmentListData['F-4221'] && equipmentListData['F-4221']['TT_4225'] && equipmentListData['F-4221']['TT_4225'].type}">{{equipmentListData['F-4221'] && equipmentListData['F-4221']['TT_4225'] && equipmentListData['F-4221']['TT_4225'].data}}</td>
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
    <div class="equipment_parameter_info equipment_parameter_info_main2">
        <div class="equipment_parameter_info_452width">
          <div class="moduleItem">
            <table>
              <tbody>
                <tr class="item_header">
                  <td>
                    <div>冷却后温度</div>
                    <div>(TE_4222)</div>
                  </td>
                  <td>
                    <div>冷却后温度</div>
                    <div>(TE_4224_2)</div>
                  </td>
                  <td>
                    <div>冷却后温度</div>
                    <div>(TE_4224_3)</div>
                  </td>
                  <td>
                    <div>冷却后温度</div>
                    <div>(TE_4224_4)</div>
                  </td>
                </tr>
                <tr class="item_data">
                  <td :style="{color: equipmentListData['E-4221'] && equipmentListData['E-4221']['TE_4222'] && equipmentListData['E-4221']['TE_4222'].type}">{{equipmentListData['E-4221'] && equipmentListData['E-4221']['TE_4222'] && equipmentListData['E-4221']['TE_4222'].data}}</td>
                  <td :style="{color: equipmentListData['E-4221'] && equipmentListData['E-4221']['TE_4224_2'] && equipmentListData['E-4221']['TE_4224_2'].type}">{{equipmentListData['E-4221'] && equipmentListData['E-4221']['TE_4224_2'] && equipmentListData['E-4221']['TE_4224_2'].data}}</td>
                  <td :style="{color: equipmentListData['E-4221'] && equipmentListData['E-4221']['TE_4224_3'] && equipmentListData['E-4221']['TE_4224_3'].type}">{{equipmentListData['E-4221'] && equipmentListData['E-4221']['TE_4224_3'] && equipmentListData['E-4221']['TE_4224_3'].data}}</td>
                  <td :style="{color: equipmentListData['E-4221'] && equipmentListData['E-4221']['TE_4224_4'] && equipmentListData['E-4221']['TE_4224_4'].type}">{{equipmentListData['E-4221'] && equipmentListData['E-4221']['TE_4224_4'] && equipmentListData['E-4221']['TE_4224_4'].data}}</td>
                </tr>
                <tr class="item_unit">
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
    <div class="equipment_parameter_info equipment_parameter_info_main3">
        <div class="equipment_parameter_info_272width">
          <div class="moduleItem">
            <table>
              <tbody>
                <tr class="item_data tableTwoRowCol">
                  <td class="item_header">
                    集尘室压力（PT_4223）
                  </td>
                  <td class="item_data data_unit_td">
                      <span class="item_data" :style="{color: equipmentListData['F-4221'] && equipmentListData['F-4221']['PT_4223'] && equipmentListData['F-4221']['PT_4223'].type}">{{equipmentListData['F-4221'] && equipmentListData['F-4221']['PT_4223'] && equipmentListData['F-4221']['PT_4223'].data}}</span>
                      <span class="item_unit">℃</span>
                  </td>
                </tr>
                <tr class="item_data tableTwoRowCol">
                  <td class="item_header">
                    集尘室温度（TE_4224_1）
                  </td>
                  <td class="item_data data_unit_td">
                      <span class="item_data" :style="{color: equipmentListData['F-4221'] && equipmentListData['F-4221']['TE_4224_1'] && equipmentListData['F-4221']['TE_4224_1'].type}">{{equipmentListData['F-4221'] && equipmentListData['F-4221']['TE_4224_1'] && equipmentListData['F-4221']['TE_4224_1'].data}}</span>
                      <span class="item_unit">℃</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
    </div>
    <div class="equipment_name" style="left: 5.85rem;top: 4.93rem;">
        <span>集尘室</span>
    </div>
    <div class="equipment_name" style="left: 10.1rem;top: 5.05rem;">
        <span>回转窑</span>
        <span>F-4221</span>
    </div>
    <div class="equipment_name" style="left: 18.25rem;top: 5.15rem;">
        <span>冷却窑</span>
        <span>E-4221</span>
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
      Dehydration: require("@/assets/image/coalTarScreen/dehydration.svg"),
      DehydrationShade: require("@/assets/image/coalTarScreen/dehydrationShade.svg"),
      DehydrationWater: require("@/assets/image/coalTarScreen/dehydrationWater.svg"),
      Storehouse: require("@/assets/image/coalTarScreen/storehouse.svg"),
      StorehouseShade: require("@/assets/image/coalTarScreen/storehouseShade.svg"),
      StorehouseWater: require("@/assets/image/coalTarScreen/storehouseWater.svg"),
      TipsMax: require("@/assets/image/coalTarScreen/tipsMax.svg"),
      ArrowsError: require("@/assets/image/coalTarScreen/arrowsError.svg"),
      ArrowsWarning: require("@/assets/image/coalTarScreen/arrowsWarning.svg"),
      ForkImg: require("@/assets/image/coalTarScreen/fork.svg")
    };
  },
};
</script>

<style lang="scss">
.coalTarScreen_roastingCom {
  width: 21.7rem;
  height: 100%;
  position: relative;
  .borDehydrationLine{
    position: absolute;
    left: 33.1%;
    transform: translateX(-50%);
    width: 2.2rem;
    height: 0.25rem;
    border-radius: 70%;
    z-index: 99;
  }
  .accidentArrows{
    transform: translateX(2.4rem);
  }
  .positionMinisDiv {
    position: absolute;
    display: flex;
    width: 3.82rem;
    height: 9rem;
    // border: 1px solid #ccc;
    flex-direction: column;
    top: .3rem;
    left: .3rem;
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
          left: 3%;
          top: 25%;
          transform: translateY(-18%);
        }
        .accidentShelfImg {
          top: .3rem;
          width: 2.5rem;
          height: 2.48rem;
          z-index: 99;
        }
        .accidentShadeImg{
          width: 3rem;
          height: 3.16rem;
          z-index: 10;
          left: -.25rem;
          top: -.05rem;
        }
        .accidentWaterImg {
          left: 0.18rem;
          width: 2.14rem;
          bottom: .23rem;
          z-index: 1;
        }
        .accidentShelfRight {
          position: absolute;
          left: 2.6rem;
          width: 1.5rem;
          height: 100%;
          display: flex;
          flex-direction: column;
          img {
            width: 1.08rem;
            height: 0.6rem;
            left: 0;
          }
          & > div {
            position: absolute;
            width: 1.08rem;
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
            }
          }
        }
        .equipmentInfo {
          position: absolute;
          width: 1.2rem;
          height: 0.52rem;
          left: 0.65rem;
          border: 0.02rem solid rgba(12, 105, 255, 0.33);
          background: rgba(20, 40, 71, 0.74);
          opacity: 0.74;
          bottom: 0.65rem;
          z-index: 200;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }
  .positionMiniStockBin{
    position: absolute;
    display: flex;
    height: 2.8rem;
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
          left: 3%;
          top: 15%;
          transform: translateY(-18%);
        }
        .accidentShelfImg {
          top: .3rem;
          width: 2rem;
          height: 1.7rem;
          z-index: 99;
        }
        .accidentShadeImg{
          width: 2rem;
          height: 2.16rem;
          z-index: -99;
          left: 0rem;
          top: 0.03rem;
        }
        .accidentWaterImg {
          left: 0.4rem;
          width: 1.2rem;
          bottom: .87rem;
          z-index: -100;
        }
        .accidentShelfRight {
          position: absolute;
          left: 1.8rem;
          width: 1.5rem;
          height: 100%;
          display: flex;
          flex-direction: column;
          img {
            width: 1.08rem;
            height: 0.6rem;
            left: 0;
          }
          & > div {
            position: absolute;
            width: 1.08rem;
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
            }
          }
        }
        .equipmentInfo {
          position: absolute;
          width: .88rem;
          height: 0.56rem;
          left: 0.56rem;
          border: 0.02rem solid rgba(12, 105, 255, 0.33);
          background: rgba(20, 40, 71, 0.74);
          opacity: 0.74;
          bottom: 1.05rem;
          z-index: 200;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }
  .positionMinisDiv_top{
    top: .2rem;
    left: 4.08rem;
    width: 17.7rem;
  }
  .positionMinisDiv_bottom{
    top: 6.9rem;
    left: 4.08rem;
    width: 17rem;
  }
  .equipment_parameter_info {
    position: absolute;
    display: flex;
    align-items: center;
  }
  .equipment_parameter_info_main {
    left: 5.27rem;
    top: 2.67rem;
    width: 8.17rem;
    height: 1.52rem;
    .equipment_parameter_info_160width{
      margin-right: .06rem;
    }
    .equipment_parameter_info_347width{
      margin-right: .06rem;
    }
    .data_unit_td{
      span:first-child{
        width:1.25rem;
      }
    }
  }
  .equipment_parameter_info_main2 {
    left: 15.9rem;
    top: 2.67rem;
    width: 4.76rem;
    height: 1.52rem;
  }
  .equipment_parameter_info_main3{
    left: 7.7rem;
    top: 5.7rem;
    .equipment_parameter_info_272width{
      .moduleItem{
        table{
          tr{
            display: flex;
            .data_unit_td{
              span:first-child{
                width:.7rem;
              }
            }
          }
          tr td:first-child{
            width: 1.74rem;
          }
          tr td:last-child{
            flex: 1;
          }
        }
      }
    }
  }
}
</style>