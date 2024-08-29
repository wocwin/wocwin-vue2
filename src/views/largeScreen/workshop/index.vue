<template>
	<div class="largeScreen_page">
		<t-screen :title="title" class="largeScreenCom" @transFormaTion="transFormaTion">
			<div class="kanban_menu">
				<div
					v-for="(item, index) of tabOptions"
					:class="{active: activeIndex == index}"
					:key="index"
					@click="activeClickFuc(item,index)"
				>
					<div class="leftSpan spanDiv">
						<span class="sp1"></span>
						<span class="sp2"></span>
					</div>
					<div class="rightSpan spanDiv">
						<span class="sp1"></span>
						<span class="sp2"></span>
					</div>
					<div
						v-if="item.children"
						class="selectOpDiv"
						:tabindex="activeIndex"
						@blur="item.show = false"
						@click="changeSelectFuc(item,index)"
					>
						<div>
							{{item.name}}
							<img :src="DownSvg" alt />
						</div>
						<div class="selectOption" v-show="item.show">
							<div
								v-for="ele in item.children"
								:class="{active: item.name == ele.name,option: true}"
								@click.stop="changeOptionFuc(index,ele)"
								:key="ele.name"
							>{{ele.name}}</div>
						</div>
						<div v-show="item.show" class="popper__arrow"></div>
					</div>
					<span v-else>{{item.name}}</span>
				</div>
				<span class="openDiv">
					<img v-show="!isOpen" @click="isOpenSlideFuc(true)" :src="OpenSvg" alt />
					<img v-show="isOpen" @click="isOpenSlideFuc(false)" :src="SuspendSvg" alt />
				</span>
			</div>
			<div class="selectDiv">
				<div>
					<span class="selectDiv_title">切换时间：</span>
					<el-select
						style="width: 1rem"
						v-model="tabTimeValue"
						@change="tabTimeValueFuc"
						placeholder="请选择"
					>
						<el-option
							v-for="item in tabTimeList"
							:key="item.value"
							:label="item.name + item.unit"
							:value="item.value"
						></el-option>
					</el-select>
				</div>
			</div>
			<div class="largeScreen_page_main">
				<div class="largeScreenDiv" id="largeScreenDiv">
					<div class="largeScreenDivBg">
						<TankFarmCom
							:dataSource="dataSource"
							:inventoryData="inventoryData"
							:planAmountData="planAmountData"
							:equipmentListData="equipmentListData"
							:cumulativeProductionData="cumulativeProductionData"
							:purchaseNumberObj="purchaseNumberObj"
							:reportInfoObj="reportInfoObj"
							@updateReportInfoFlagFuc="updateReportInfoFlagFuc"
						/>
						<TarDistillationCom
							v-if="tabOptions[1].name == tabOptions[1].children[0].name"
							:dataSource="dataSource"
							:inventoryData="inventoryData"
							:planAmountData="planAmountData"
							:equipmentListData="equipmentListData"
							:cumulativeProductionData="cumulativeProductionData"
							:reportInfoObj="reportInfoObj"
							@updateReportInfoFlagFuc="updateReportInfoFlagFuc"
						/>
						<TarDistillationCom2
							v-else
							:dataSource="dataSource"
							:inventoryData="inventoryData"
							:planAmountData="planAmountData"
							:equipmentListData="equipmentListData"
							:cumulativeProductionData="cumulativeProductionData"
							:reportInfoObj="reportInfoObj"
							@updateReportInfoFlagFuc="updateReportInfoFlagFuc"
						/>
						<CommercialNaphthaleneCom
							v-if="tabOptions[2].name == tabOptions[2].children[0].name"
							:dataSource="dataSource"
							:inventoryData="inventoryData"
							:planAmountData="planAmountData"
							:equipmentListData="equipmentListData"
							:cumulativeProductionData="cumulativeProductionData"
							:reportInfoObj="reportInfoObj"
							@updateReportInfoFlagFuc="updateReportInfoFlagFuc"
						/>
						<CommercialNaphthaleneCom2
							v-else
							:dataSource="dataSource"
							:inventoryData="inventoryData"
							:planAmountData="planAmountData"
							:equipmentListData="equipmentListData"
							:cumulativeProductionData="cumulativeProductionData"
							:reportInfoObj="reportInfoObj"
							@updateReportInfoFlagFuc="updateReportInfoFlagFuc"
						/>
						<RefinedNaphthaleneCom
							:dataSource="dataSource"
							:inventoryData="inventoryData"
							:planAmountData="planAmountData"
							:equipmentListData="equipmentListData"
							:cumulativeProductionData="cumulativeProductionData"
							:reportInfoObj="reportInfoObj"
							@updateReportInfoFlagFuc="updateReportInfoFlagFuc"
						/>
						<RestructuringAsphaltCom
							:dataSource="dataSource"
							:inventoryData="inventoryData"
							:planAmountData="planAmountData"
							:equipmentListData="equipmentListData"
							:cumulativeProductionData="cumulativeProductionData"
							:reportInfoObj="reportInfoObj"
							@updateReportInfoFlagFuc="updateReportInfoFlagFuc"
						/>
						<PreprocessingCom
							v-if="tabOptions[5].name == tabOptions[5].children[0].name"
							:dataSource="dataSource"
							:inventoryData="inventoryData"
							:planAmountData="planAmountData"
							:equipmentListData="equipmentListData"
							:cumulativeProductionData="cumulativeProductionData"
							:reportInfoObj="reportInfoObj"
							@updateReportInfoFlagFuc="updateReportInfoFlagFuc"
						/>
						<PreprocessingCom2
							v-else
							:dataSource="dataSource"
							:inventoryData="inventoryData"
							:planAmountData="planAmountData"
							:equipmentListData="equipmentListData"
							:cumulativeProductionData="cumulativeProductionData"
							:reportInfoObj="reportInfoObj"
							@updateReportInfoFlagFuc="updateReportInfoFlagFuc"
						/>
						<DelayedCokingCom
							v-if="tabOptions[6].name == tabOptions[6].children[0].name"
							:dataSource="dataSource"
							:inventoryData="inventoryData"
							:planAmountData="planAmountData"
							:equipmentListData="equipmentListData"
							:cumulativeProductionData="cumulativeProductionData"
							:reportInfoObj="reportInfoObj"
							@updateReportInfoFlagFuc="updateReportInfoFlagFuc"
						/>
						<DelayedCokingCom2
							v-else
							:dataSource="dataSource"
							:inventoryData="inventoryData"
							:planAmountData="planAmountData"
							:equipmentListData="equipmentListData"
							:cumulativeProductionData="cumulativeProductionData"
							:reportInfoObj="reportInfoObj"
							@updateReportInfoFlagFuc="updateReportInfoFlagFuc"
						/>
						<RoastingCom
							v-if="tabOptions[7].name == tabOptions[7].children[0].name"
							:dataSource="dataSource"
							:inventoryData="inventoryData"
							:planAmountData="planAmountData"
							:equipmentListData="equipmentListData"
							:cumulativeProductionData="cumulativeProductionData"
							:reportInfoObj="reportInfoObj"
							@updateReportInfoFlagFuc="updateReportInfoFlagFuc"
						/>
						<RoastingCom2
							v-else
							:dataSource="dataSource"
							:inventoryData="inventoryData"
							:planAmountData="planAmountData"
							:equipmentListData="equipmentListData"
							:cumulativeProductionData="cumulativeProductionData"
							:reportInfoObj="reportInfoObj"
							@updateReportInfoFlagFuc="updateReportInfoFlagFuc"
						/>
					</div>
					<div class="batchMaterial">
						<BatchMaterialCom />
					</div>
				</div>
				<div class="container">
					<!-- 煤焦油前四车间动画 -->
					<div>
						<div class="arrow arrow_dou" v-for="(item , j) in arrNum" :key="'arrow_dou' + j"></div>
					</div>
					<div>
						<div class="arrow arrow_dou_two" v-for="(item , j) in arrNum_two" :key="'arrow_dou_two' + j"></div>
					</div>

					<!-- 炭黑油物料动画 -->
					<div>
						<div
							:class="{arrow: true, arrow_after_three: item % 3 == 1,arrow_after_dou: item % 3 == 2,arrow_after_one: item % 3 == 0}"
							v-for="(item, j) in afterNum"
							:key="'arrow_after' + j"
						></div>
					</div>
					<div>
						<div
							:class="{arrow: true, arrow_after_three2: item % 3 == 1,arrow_after_dou2: item % 3 == 2,arrow_after_one2: item % 3 == 0}"
							v-for="(item, j) in afterNum_two"
							:key="'arrow_after_two' + j"
						></div>
					</div>
					<!-- 改质沥青车间动画 -->
					<div>
						<div
							:class="{arrow: true, arrow_pitch_1: item % 21 == 1,arrow_pitch_2: item % 21 == 2,arrow_pitch_3: item % 21 == 3,arrow_pitch_4: item % 21 == 4,arrow_pitch_5: item % 21 == 5,arrow_pitch_6: item % 21 == 6,arrow_pitch_7: item % 21 == 7,arrow_pitch_8: item % 21 == 8,arrow_pitch_9: item % 21 == 9,arrow_pitch_10: item % 21 == 10,arrow_pitch_11: item % 21 == 11,arrow_pitch_12: item % 21 == 12,arrow_pitch_13: item % 21 == 13,arrow_pitch_14: item % 21 == 14,arrow_pitch_15: item % 21 == 15,arrow_pitch_16: item % 21 == 16,arrow_pitch_17: item % 21 == 17,arrow_pitch_18: item % 21 == 18,arrow_pitch_19: item % 21 == 19,arrow_pitch_20: item % 21 == 20,arrow_pitch_21: item % 21 == 30}"
							v-for="(item, j) in pitchNum"
							:key="'arrow_pitch' + j"
						></div>
					</div>
					<div>
						<div
							:class="{arrow: true, arrow_pitch_two_1: item % 21 == 1,arrow_pitch_two_2: item % 21 == 2,arrow_pitch_two_3: item % 21 == 3,arrow_pitch_two_4: item % 21 == 4,arrow_pitch_two_5: item % 21 == 5,arrow_pitch_two_6: item % 21 == 6,arrow_pitch_two_7: item % 21 == 7,arrow_pitch_two_8: item % 21 == 8,arrow_pitch_two_9: item % 21 == 9,arrow_pitch_two_10: item % 21 == 10,arrow_pitch_two_11: item % 21 == 11,arrow_pitch_two_12: item % 21 == 12,arrow_pitch_two_13: item % 21 == 13,arrow_pitch_two_14: item % 21 == 14,arrow_pitch_two_15: item % 21 == 15,arrow_pitch_two_16: item % 21 == 16,arrow_pitch_two_17: item % 21 == 17,arrow_pitch_two_18: item % 21 == 18,arrow_pitch_two_19: item % 21 == 19,arrow_pitch_two_20: item % 21 == 20,arrow_pitch_two_21: item % 21 == 30}"
							v-for="(item, j) in pitchNum_two"
							:key="'arrow_pitch_two' + j"
						></div>
					</div>

					<!-- 预处理车间及延迟焦化车间动画 -->
					<div>
						<div
							:class="{arrow: true, arrow_some_1: item % 58 == 1,arrow_some_2: item % 58 == 2,arrow_some_3: item % 58 == 3,arrow_some_4: item % 58 == 4,arrow_some_5: item % 58 == 5,arrow_some_6: item % 58 == 6,arrow_some_7: item % 58 == 7,arrow_some_8: item % 58 == 8,arrow_some_9: item % 58 == 9,arrow_some_10: item % 58 == 10,arrow_some_11: item % 58 == 11,arrow_some_12: item % 58 == 12,arrow_some_13: item % 58 == 13,arrow_some_14: item % 58 == 14,arrow_some_15: item % 58 == 15,arrow_some_16: item % 58 == 16,arrow_some_17: item % 58 == 17,arrow_some_18: item % 58 == 18,arrow_some_19: item % 58 == 19,arrow_some_20: item % 58 == 20,arrow_some_21: item % 58 == 21,arrow_some_22: item % 58 == 22,arrow_some_23: item % 58 == 23,arrow_some_24: item % 58 == 24,arrow_some_25: item % 58 == 25,arrow_some_26: item % 58 == 26,arrow_some_27: item % 58 == 27,arrow_some_28: item % 58 == 28,arrow_some_29: item % 58 == 29,arrow_some_30: item % 58 == 30,arrow_some_31: item % 58 == 31,arrow_some_32: item % 58 == 32,arrow_some_33: item % 58 == 33,arrow_some_34: item % 58 == 34,arrow_some_35: item % 58 == 35,arrow_some_36: item % 58 == 36,arrow_some_37: item % 58 == 37,arrow_some_38: item % 58 == 38,arrow_some_39: item % 58 == 39,arrow_some_40: item % 58 == 40,arrow_some_41: item % 58 == 41,arrow_some_42: item % 58 == 42,arrow_some_43: item % 58 == 43,arrow_some_44: item % 58 == 44,arrow_some_45: item % 58 == 45,arrow_some_46: item % 58 == 46,arrow_some_47: item % 58 == 47,arrow_some_48: item % 58 == 48,arrow_some_49: item % 58 == 49,arrow_some_50: item % 58 == 50,arrow_some_51: item % 58 == 51,arrow_some_52: item % 58 == 52,arrow_some_53: item % 58 == 53,arrow_some_54: item % 58 == 54,arrow_some_55: item % 58 == 55,arrow_some_56: item % 58 == 56,arrow_some_57: item % 58 == 57,arrow_some_58: item % 58 == 0,}"
							v-for="(item, j) in pretreatmentSomeNum"
							:key="'arrow_some' + j"
						></div>
					</div>
					<div>
						<div
							:class="{arrow: true, arrow_some_two_1: item % 58 == 1,arrow_some_two_2: item % 58 == 2,arrow_some_two_3: item % 58 == 3,arrow_some_two_4: item % 58 == 4,arrow_some_two_5: item % 58 == 5,arrow_some_two_6: item % 58 == 6,arrow_some_two_7: item % 58 == 7,arrow_some_two_8: item % 58 == 8,arrow_some_two_9: item % 58 == 9,arrow_some_two_10: item % 58 == 10,arrow_some_two_11: item % 58 == 11,arrow_some_two_12: item % 58 == 12,arrow_some_two_13: item % 58 == 13,arrow_some_two_14: item % 58 == 14,arrow_some_two_15: item % 58 == 15,arrow_some_two_16: item % 58 == 16,arrow_some_two_17: item % 58 == 17,arrow_some_two_18: item % 58 == 18,arrow_some_two_19: item % 58 == 19,arrow_some_two_20: item % 58 == 20,arrow_some_two_21: item % 58 == 21,arrow_some_two_22: item % 58 == 22,arrow_some_two_23: item % 58 == 23,arrow_some_two_24: item % 58 == 24,arrow_some_two_25: item % 58 == 25,arrow_some_two_26: item % 58 == 26,arrow_some_two_27: item % 58 == 27,arrow_some_two_28: item % 58 == 28,arrow_some_two_29: item % 58 == 29,arrow_some_two_30: item % 58 == 30,arrow_some_two_31: item % 58 == 31,arrow_some_two_32: item % 58 == 32,arrow_some_two_33: item % 58 == 33,arrow_some_two_34: item % 58 == 34,arrow_some_two_35: item % 58 == 35,arrow_some_two_36: item % 58 == 36,arrow_some_two_37: item % 58 == 37,arrow_some_two_38: item % 58 == 38,arrow_some_two_39: item % 58 == 39,arrow_some_two_40: item % 58 == 40,arrow_some_two_41: item % 58 == 41,arrow_some_two_42: item % 58 == 42,arrow_some_two_43: item % 58 == 43,arrow_some_two_two_44: item % 58 == 44,arrow_some_two_45: item % 58 == 45,arrow_some_two_46: item % 58 == 46,arrow_some_two_47: item % 58 == 47,arrow_some_two_48: item % 58 == 48,arrow_some_two_49: item % 58 == 49,arrow_some_two_50: item % 58 == 50,arrow_some_two_51: item % 58 == 51,arrow_some_two_52: item % 58 == 52,arrow_some_two_53: item % 58 == 53,arrow_some_two_54: item % 58 == 54,arrow_some_two_55: item % 58 == 55,arrow_some_two_56: item % 58 == 56,arrow_some_two_57: item % 58 == 57,arrow_some_two_58: item % 58 == 0,}"
							v-for="(item, j) in pretreatmentSomeNum_two"
							:key="'arrow_some_two' + j"
						></div>
					</div>

					<div>
						<div
							:class="{arrow: true, arrow_roasting_one: item % 3 == 1,arrow_roasting_dou: item % 3 != 1}"
							v-for="(item , j) in roastingNum"
							:key="'arrow_roasting' + j"
						></div>
					</div>
					<div>
						<div
							:class="{arrow: true, arrow_roasting_two_one: item % 3 == 1,arrow_roasting_two_dou: item % 3 != 1}"
							v-for="(item , j) in roastingNum_two"
							:key="'arrow_roasting' + j"
						></div>
					</div>
					<!-- <div class="donghua_twisting"></div> -->
				</div>
			</div>
		</t-screen>
	</div>
</template>

<script>
import TScreen from '@/components/TScreen/index.vue'
import SockJS from "sockjs-client";
import Stomp from "stompjs";
import Cookies from "js-cookie";
import TankFarmCom from "./components/tankFarmCom.vue" //油库车间
import TarDistillationCom from "./components/tarDistillationCom.vue" //焦油蒸馏一部
import TarDistillationCom2 from "./components/tarDistillationCom2.vue" //焦油蒸馏二部
import CommercialNaphthaleneCom from "./components/commercialNaphthaleneCom.vue" //萘蒸馏一部
import CommercialNaphthaleneCom2 from "./components/commercialNaphthaleneCom2.vue" //萘蒸馏二部
import RefinedNaphthaleneCom from "./components/refinedNaphthaleneCom.vue" //萘精制
import RestructuringAsphaltCom from "./components/restructuringAsphaltCom.vue" //改质沥青
import PreprocessingCom from "./components/preprocessingCom.vue" //预处理一部
import PreprocessingCom2 from "./components/preprocessingCom2.vue" //预处理二部
import DelayedCokingCom from "./components/delayedCokingCom.vue" //延迟焦化一部
import DelayedCokingCom2 from "./components/delayedCokingCom2.vue" //延迟焦化二部
import RoastingCom from "./components/roastingCom.vue" //煅烧一部
import RoastingCom2 from "./components/roastingCom2.vue" //煅烧二部
import BatchMaterialCom from "./components/batchMaterialCom.vue" //批次物料

export default {
  name: "coalTarScreen",
  components: {
    TScreen,
    TankFarmCom,
    TarDistillationCom,
    TarDistillationCom2,
    CommercialNaphthaleneCom,
    CommercialNaphthaleneCom2,
    RefinedNaphthaleneCom,
    RestructuringAsphaltCom,
    PreprocessingCom,
    PreprocessingCom2,
    DelayedCokingCom,
    DelayedCokingCom2,
    RoastingCom,
    RoastingCom2,
    BatchMaterialCom
  },
  data() {
    return {
      DownSvg: require("@/assets/image/coalTarScreen/down.svg"),
      OpenSvg: require("@/assets/image/coalTarScreen/open.svg"),
      SuspendSvg: require("@/assets/image/coalTarScreen/suspend.svg"),
      activeId: 'W1', //当前选中tag栏id
      activeIndex: 0,
      workshop: null,
      refreshTimeValue: 5, //刷新时间
      deptCode: '', //工厂编码

      arrNum: 0, //煤焦油前四车间
      afterNum: 0, //炭黑油物料
      pitchNum: 0, //改制沥青车间 
      pretreatmentSomeNum: 0, //预处理车间及延迟焦化车间
      roastingNum: 0, //煅烧车间

      numArrInterval: null, //煤焦油前四车间 流向动画生成定时器
      afterNumInterval: null, //炭黑油物料 流向动画生成定时器
      pitchNumInterval: null, //改制沥青车间 流向动画生成定时器
      pretreatmentSomeNumInterval: null, //预处理车间及延迟焦化车间 流向动画生成定时器
      roastingNumInterval: null, //煅烧车间流向动画生成器

      arrNum_flag: false, //煤焦油前四车间两套动画切换开关
      arrNum_two: 0, //煤焦油前四车间第二套动画
      afterNum_flag: false, //炭黑油物料两套动画切换开关
      afterNum_two: 0, //炭黑油物料第二套动画
      pitchNum_flag: false, //改制沥青车间两套动画切换开关
      pitchNum_two: 0, //改制沥青车间第二套动画
      pitchNum_flag: false, //预处理车间及延迟焦化车间两套动画切换开关
      pretreatmentSomeNum_two: 0, //预处理车间及延迟焦化车间第二套动画
      roastingNum_flag: false, //煅烧车间两套动画切换开关
      roastingNum_two: 0, //煅烧车间第二套动画

      isOpen: true,
      refreshTimeList: [
        {
          name: '5',
          unit: '秒',
          value: 5
        },
        {
          name: '10',
          unit: '秒',
          value: 10
        },
        {
          name: '15',
          unit: '秒',
          value: 15
        },
        {
          name: '20',
          unit: '秒',
          value: 20
        },
        {
          name: '25',
          unit: '秒',
          value: 25
        },
        {
          name: '30',
          unit: '秒',
          value: 30
        }
      ], //刷新时间集合
      tabTimeValue: JSON.parse(localStorage.getItem('liquidTabTimeValue')) || 30, //切换时间
      tabTimer: null, //定时切换时间 定时器
      sendTime: null, //定时发送消息到服务端  提醒服务器推送数据过来
      initApiTime: null, //定时请求Api接口
      tabTimeList: [
        {
          name: '10',
          unit: '秒',
          value: 10
        },
        {
          name: '20',
          unit: '秒',
          value: 20
        },
        {
          name: '30',
          unit: '秒',
          value: 30
        },
        {
          name: '1',
          unit: '分钟',
          value: 60
        },
        {
          name: '2',
          unit: '分钟',
          value: 120
        },
        {
          name: '3',
          unit: '分钟',
          value: 180
        },
        {
          name: '4',
          unit: '分钟',
          value: 240
        },
        {
          name: '5',
          unit: '分钟',
          value: 300
        },
        {
          name: "10",
          unit: "分钟",
          value: 600,
        },
        {
          name: "30",
          unit: "分钟",
          value: 1800,
        }
      ], //刷新时间集合
      title: "煤焦油&针状焦",
      viewHeight: 600,
      tabOptions: [
        {
          name: "油库",
          num: "W1",
          width: 13.3
        },
        {
          name: '焦油蒸馏一部',
          num: "W2",
          width: 20.6,
          show: false,
          children: [
            {
              name: "焦油蒸馏一部",
              num: "W2",
            },
            {
              name: "焦油蒸馏二部",
              num: "W3",
            },
          ]
        },
        {
          name: '萘蒸馏一部',
          num: "W4",
          width: 18.55,
          show: false,
          children: [
            {
              name: "萘蒸馏一部",
              num: "W4",
            },
            {
              name: "萘蒸馏二部",
              num: "W5",
            },
          ]
        },
        {
          name: "萘精制",
          num: "W6",
          width: 16.1,
        },
        {
          name: "改质沥青",
          num: "W7",
          width: 19.1,
        },
        {
          name: '预处理一部',
          num: "W8",
          width: 33.5,
          show: false,
          children: [
            {
              name: "预处理一部",
              num: "W8",
            },
            {
              name: "预处理二部",
              num: "W9",
            },
          ]
        },
        {
          name: '延迟焦化一部',
          num: "W10",
          width: 17.2,
          show: false,
          children: [
            {
              name: "延迟焦化一部",
              num: "W10",
            },
            {
              name: "延迟焦化二部",
              num: "W11",
            },
          ]
        },
        {
          name: "煅烧一部",
          num: "W12",
          width: 21.7,
          show: false,
          children: [
            {
              name: "煅烧一部",
              num: "W12",
            },
            {
              name: "煅烧二部",
              num: "W13",
            },
          ]
        },
        {
          width: 20.5,
          name: "批次物料",
          num: "W14",
        }
      ],
      dataBase: [], //socket数据
      counterNumber: 0, //断线重连次数
      counterNumber2: 0, //设备短线重连次数
      dataSource: {}, //槽罐数据
      inventoryData: {}, //库存数据
      planAmountData: {}, //计划量数据
      equipmentListData: {}, //设备数据
      cumulativeProductionData: {}, //累计产量
      purchaseNumberObj: {}, //购入量
      reportInfoObj: {}, //检验信息对象
      fontSize: null,
      dictionaries: [
        {
          "dictLabel": "车样",
          "dictValue": "1",
        },
        {
          "dictLabel": "点样",
          "dictValue": "2",
        },
        {
          "dictLabel": "槽样",
          "dictValue": "3",
        }
      ], //检验信息-样品分类
      moveScrollLeftTime: null, //水平滚动距离
    };
  },
  methods: {
    transFormaTion(size) {
      this.fontSize = size
    },
    //库存量查询
    async stockPageInventoryPage() {
      const res = await this.$api.stockPageInventoryPage()
      if (res.success) {
        Object.keys(res.data).forEach(item => {
          res.data[item].startStock = Number(res.data[item].startStock).toFixed(2)
        })
        this.inventoryData = res.data
        // console.log(this.inventoryData,'895995')
      }
    },
    //计划量数据
    async planManagerProductionPlanCount() {
      const res = await this.$api.planManagerProductionPlanCount()
      if (res.success) {
        this.planAmountData = res.data || {}
        // console.log(this.planAmountData,'123')
      }
    },
    //累计产量
    async coalTarScreenDailyMaterialConsumption() {
      const res = await this.$api.coalTarScreenDailyMaterialConsumption()
      if (res.success) {
        Object.keys(res.data).forEach(item => {
          res.data[item].totalMonthAmount = Number(res.data[item].totalMonthAmount).toFixed(2)
        })
        this.cumulativeProductionData = res.data
        // console.log(this.cumulativeProductionData,'345')
      }
    },
    //购入量
    async balanceCountList() {
      const res = await this.$api.balanceCountList({ materialName: '煤焦油' })
      if (res.success) {
        this.purchaseNumberObj = res.data || {}
      }
    },
    //检验信息查询
    async reportInfoList() {
      const res = await this.$api.reportInfoList()
      if (res.success) {
        if (res.data) {
          res.data.map((item, index) => {
            item.flag = this.reportInfoObj[item.materialName] && JSON.stringify(item.itemsAuditVOList) == JSON.stringify(this.reportInfoObj[item.materialName].itemsAuditVOList) ? this.reportInfoObj[item.materialName].flag : true
            item.sampleTypeName = this.dictionaries.find(ele => ele.dictValue == item.sampleType)?.dictLabel
            return item
          })
          let obj = {}
          res.data.forEach(item => {
            obj[item.materialName] = item
          })
          this.reportInfoObj = { ...obj }
        }
        // console.log(this.reportInfoObj,'890-0')
      }
    },
    //更新检验信息弹窗状态
    updateReportInfoFlagFuc(type) {
      this.reportInfoObj[type].flag = false
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
          // console.log(frame);
          // 订阅服务端提供的某个topic
          _that.stompClient.subscribe(`/topic/liquidMaterial`, (msg) => {
            //msg.body存放的是服务端发送给我们的信息
            let rows = JSON.parse(msg.body)
            //  rows['煤焦油'].stock = '60000'
            this.dataSource = rows
            this.dataSource['混合溶剂'] = {
              alarmLower: rows['混合溶剂T-4008A'] && rows['混合溶剂T-4008A'].alarmLower,
              alarmUpper: rows['混合溶剂T-4008A'] && rows['混合溶剂T-4008A'].alarmUpper,
              height: rows['混合溶剂T-4008A'] && rows['混合溶剂T-4008A'].height,
              stock: (rows['混合溶剂T-4008A'] && rows['混合溶剂T-4008A'].stock) + (rows['混合溶剂T-4008B'] && rows['混合溶剂T-4008B'].stock) + (rows['混合溶剂2T-4008A'] && rows['混合溶剂2T-4008A'].stock) + (rows['混合溶剂2T-4008B'] && rows['混合溶剂2T-4008B'].stock),
            }
            console.log(this.dataSource, '89001')
          });
          // 订阅服务端提供的某个topic
          _that.stompClient.subscribe(`/topic/liquidDeviceData`, (msg) => {
            //msg.body存放的是服务端发送给我们的信息
            let rows = JSON.parse(msg.body)
            for (let key in rows) {
              rows[key.trim()] = rows[key]
            }
            this.equipmentListData = rows || {}
            //  console.log(this.equipmentListData,'000')
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
    //定时发消息提醒服务端推送
    // sendFuc(){
    //   let _that = this
    //   if(_that.sendTime) clearInterval(_that.sendTime)
    //   _that.sendTime = setInterval(() => {
    //     _that.stompClient.send(`/user/topic/${this.deptCode}`, {
    //       Authorization: Cookies.get("authorization"),
    //       deptCode: this.deptCode,
    //     });
    //   }, _that.refreshTimeValue * 1000);
    // },
    disconnect() {
      if (this.stompClient != null) {
        this.stompClient.disconnect({ Authorization: Cookies.get("authorization") });
      }
    },
    monitorHei() {
      this.viewHeight = this.$el.offsetHeight;
    },
    setSize(size) {
      return this.viewHeight / size + "px";
    },
    moveScrollLeftFuc(dom, positionNum) {
      dom.scroll({
        left: positionNum,
        behavior: 'smooth'
      })
      // let num = positionNum - dom.scrollLeft
      // let timer = null
      // function updateAnimation() {
      //   if(num >= 0){
      //     dom.scrollLeft += 5
      //     console.log(dom.scrollLeft,positionNum,'123456')
      //     if(dom.scrollLeft >= positionNum) return cancelAnimationFrame(timer)
      //   }else{
      //     dom.scrollLeft -= 5
      //     console.log(dom.scrollLeft,positionNum,'654321')
      //     if(dom.scrollLeft <= positionNum) return cancelAnimationFrame(timer)
      //   }
      //   window.requestAnimationFrame(updateAnimation)
      // }
      // window.requestAnimationFrame(updateAnimation)


      // this.moveScrollLeftTime = setInterval(() => {
      //   if(num >= 0){
      //     dom.scrollLeft += 2
      //     console.log(dom.scrollLeft,positionNum,'123456')
      //     if(dom.scrollLeft >= positionNum) {
      //       dom.scrollLeft = positionNum
      //       clearInterval(this.moveScrollLeftTime)
      //     }
      //   }else{
      //     dom.scrollLeft -= 2
      //     console.log(dom.scrollLeft,positionNum,'654321')
      //     if(dom.scrollLeft <= positionNum) {
      //       dom.scrollLeft = positionNum
      //       clearInterval(this.moveScrollLeftTime)
      //     }
      //   }
      // },1)
    },
    //切换
    activeClickFuc(item, index) {
      let largeScreenDiv = document.querySelector('.view-main')
      // if(this.tabOptions[this.activeIndex].children && this.tabOptions[this.activeIndex].name == this.tabOptions[this.activeIndex].children[this.tabOptions[this.activeIndex].children.length - 1].name){
      //   this.tabOptions[this.activeIndex].name = this.tabOptions[this.activeIndex].children[0].name
      // }
      let data = this.tabOptions.filter((ele, eleIndex) => eleIndex < index)
      // this.moveScrollLeftFuc(largeScreenDiv,data.reduce((prev,next) => prev += next.width,0) * this.fontSize)
      largeScreenDiv.scrollLeft = data.reduce((prev, next) => prev += next.width, 0) * this.fontSize
      this.activeIndex = index
      // console.log(item,'111')
    },
    //点击下拉框
    changeSelectFuc(item, index) {
      this.tabOptions[index].show = true
    },
    //tab 下拉框选中某一项
    changeOptionFuc(index, ele) {
      this.tabOptions[index].name = ele.name
      this.tabOptions[index].show = false
    },
    //tab切换时间
    tabTimeValueFuc() {
      localStorage.setItem('liquidTabTimeValue', this.tabTimeValue)
      this.slideshowFuc()
      // if(this.tabTimer) clearInterval(this.tabTimer)
      // this.tabTimer = setInterval(() => {
      //     this.activeIndex++
      //     if(this.activeIndex == this.tabOptions.length) this.activeIndex = 0
      //     this.activeId = this.tabOptions[this.activeIndex].id
      //     this.$nextTick(() => {
      //       this.$refs.largeScreenItem[0].dealDataFuc(this.dataBase.find(item => item.monitorId == this.activeId)?.warehouseMonitorDetailVOList)
      //     })
      // },this.tabTimeValue * 1000)
    },
    //自动切换车间
    updateTagFuc() {
      this.activeIndex++
      if (this.activeIndex == this.tabOptions.length) this.activeIndex = 0
      this.activeId = this.tabOptions[this.activeIndex].id
      this.$nextTick(() => {
        this.$refs.largeScreenItem[0].dealDataFuc(this.dataBase.find(item => item.monitorId == this.activeId)?.warehouseMonitorDetailVOList, true)
      })
    },
    //获取实时信息接口
    async workshopTransparencyVO(params = {}) {
      params.monitorId = this.activeId;
      params.deptCode = this.deptCode;
      params.currentTime = this.moment().format("yyyy-MM-DD HH:mm:ss");
      const res = await this.$api.workshopTransparencyVO(params);
      if (res.success) {
        if (res.data && res.data.length) {
          this.$refs.largeScreenItem[0].dealDataFuc(res.data, true)
        }
      }
    },
    //是否开启轮播
    isOpenSlideFuc(flag) {
      if (this.isOpen != flag) {
        this.isOpen = flag
        this.slideshowFuc()
      }
    },
    //轮播方法
    slideshowFuc() {
      let largeScreenDiv = document.querySelector('.view-main')
      if (this.tabTimer) clearInterval(this.tabTimer)
      if (this.isOpen) {
        this.tabTimer = setInterval(() => {
          if (!this.tabOptions[this.activeIndex].children || (this.tabOptions[this.activeIndex].children && this.tabOptions[this.activeIndex].name == this.tabOptions[this.activeIndex].children[this.tabOptions[this.activeIndex].children.length - 1].name)) {
            this.activeIndex++
            if (this.activeIndex == this.tabOptions.length) {
              this.activeIndex = 0
              // this.moveScrollLeftFuc(largeScreenDiv,0)
              largeScreenDiv.scrollLeft = 0
            } else {
              let data = this.tabOptions.filter((ele, eleIndex) => eleIndex < this.activeIndex)
              console.log(data, '789933', this.activeIndex)
              // largeScreenDiv.scrollLeft = data.reduce((prev,next) => prev += next.width,0) * this.fontSize
              this.moveScrollLeftFuc(largeScreenDiv, data.reduce((prev, next) => prev += next.width, 0) * this.fontSize)
              if (this.tabOptions[this.activeIndex - 1].children && this.tabOptions[this.activeIndex - 1].name == this.tabOptions[this.activeIndex - 1].children[this.tabOptions[this.activeIndex - 1].children.length - 1].name) {
                this.tabOptions[this.activeIndex - 1].name = this.tabOptions[this.activeIndex - 1].children[0].name
              }
            }
          } else {
            this.tabOptions[this.activeIndex].name = this.tabOptions[this.activeIndex].children[this.tabOptions[this.activeIndex].children.length - 1].name
            this.$message({
              showClose: true,
              message: '已切换至二部',
              type: 'warning',
              customClass: 'largeScreenPageMessage'
            });
          }
        }, this.tabTimeValue * 1000)
      }
    },
    handelScroll() {
      let leftRem = (document.querySelector('.view-main').scrollLeft + 100) / this.fontSize
      this.tabOptions.forEach((item, index) => {
        if (leftRem > this.tabOptions.filter((ele, eleIndex) => eleIndex < index).reduce((prev, next) => prev += next.width, 0)) {
          // if(this.tabOptions[this.activeIndex].children && this.tabOptions[this.activeIndex].name == this.tabOptions[this.activeIndex].children[this.tabOptions[this.activeIndex].children.length - 1].name){
          //   this.tabOptions[this.activeIndex].name = this.tabOptions[this.activeIndex].children[0].name
          // }
          this.activeIndex = index
        }
      })
    },
    windowAddMouseWheel() {
      let largeScreenDiv = document.querySelector('#largeScreenDiv')
      largeScreenDiv.addEventListener('wheel', (event) => {
        event.preventDefault();
        largeScreenDiv.scrollLeft += event.deltaY;
        console.log(event, largeScreenDiv.scrollLeft, '7788')
      })
    },
    //刷新时间切换
    // refreshTimeFuc(){
    //   this.$nextTick(() => {
    //     this.$refs.largeScreenItem[0].sendFuc()
    //   })
    // }
    //
    //接口轮询
    initApiFuc() {
      // this.stockPageInventoryPage()
      // this.planManagerProductionPlanCount()
      // this.coalTarScreenDailyMaterialConsumption()
      // this.reportInfoList()
      // this.balanceCountList()
      this.initApiTime = setInterval(() => {
        // this.stockPageInventoryPage()
        // this.planManagerProductionPlanCount()
        // this.coalTarScreenDailyMaterialConsumption()
        // this.reportInfoList()
        // this.balanceCountList()
      }, 20 * 1000)
    },
    //煤焦油分厂 前四车间动画生成器
    numArrIntervalFuc() {
      if (this.numArrInterval) clearInterval(this.numArrInterval)
      this.numArrInterval = setInterval(() => {
        if (!this.arrNum_flag) {
          this.arrNum++
          if (this.arrNum == 112) {
            this.arrNum_flag = true
            this.arrNum_two = 0
            this.numArrIntervalFuc()
          }
        } else {
          this.arrNum_two++
          if (this.arrNum_two == 112) {
            this.arrNum_flag = false
            this.arrNum = 0
            this.numArrIntervalFuc()
          }
        }
      }, 500)
    },
    //煤焦油分厂  炭黑油物料动画生成器
    afterNumIntervalFuc() {
      if (this.afterNumInterval) clearInterval(this.afterNumInterval)
      this.afterNumInterval = setInterval(() => {
        if (!this.afterNum_flag) {
          this.afterNum++
          if (this.afterNum == 24) {
            this.afterNum_flag = true
            this.afterNum_two = 0
            this.afterNumIntervalFuc()
          }
        } else {
          this.afterNum_two++
          if (this.afterNum_two == 24) {
            this.afterNum_flag = false
            this.afterNum = 0
            this.afterNumIntervalFuc()
          }
        }
      }, 1000)
    },
    //改质沥青车间动画生成器
    pitchNumIntervalFuc() {
      if (this.pitchNumInterval) clearInterval(this.pitchNumInterval)
      this.pitchNumInterval = setInterval(() => {
        if (!this.pitchNum_flag) {
          this.pitchNum++
          if (this.pitchNum == 48) {
            this.pitchNum_flag = true
            this.pitchNum_two = 0
            this.pitchNumIntervalFuc()
          }
        } else {
          this.pitchNum_two++
          if (this.pitchNum_two == 48) {
            this.pitchNum_flag = false
            this.pitchNum = 0
            this.pitchNumIntervalFuc()
          }
        }
      }, 1000)
    },
    //预处理车间及延迟焦化车间动画生成器
    pretreatmentSomeNumIntervalFuc() {
      if (this.pretreatmentSomeNumInterval) clearInterval(this.pretreatmentSomeNumInterval)
      this.pretreatmentSomeNumInterval = setInterval(() => {
        if (!this.pretreatmentSomeNum_flag) {
          this.pretreatmentSomeNum++
          if (this.pretreatmentSomeNum == 116) {
            this.pretreatmentSomeNum_flag = true
            this.pretreatmentSomeNum_two = 0
            this.pitchNumIntervalFuc()
          }
        } else {
          this.pretreatmentSomeNum_two++
          if (this.pretreatmentSomeNum_two == 116) {
            this.pretreatmentSomeNum_flag = false
            this.pretreatmentSomeNum = 0
            this.pitchNumIntervalFuc()
          }
        }
      }, 500)
    },
    //改质沥青车间动画生成器
    roastingNumIntervalFuc() {
      if (this.roastingNumInterval) clearInterval(this.roastingNumInterval)
      this.roastingNumInterval = setInterval(() => {
        if (!this.roastingNum_flag) {
          this.roastingNum++
          if (this.roastingNum == 12) {
            this.roastingNum_flag = true
            this.roastingNum_two = 0
            this.roastingNumIntervalFuc()
          }
        } else {
          this.roastingNum_two++
          if (this.roastingNum_two == 12) {
            this.roastingNum_flag = false
            this.roastingNum = 0
            this.roastingNumIntervalFuc()
          }
        }
      }, 1000)
    },
  },
  created() {
    this.initApiFuc()
    // this.connection()
    this.numArrIntervalFuc()
    this.afterNumIntervalFuc()
    this.pitchNumIntervalFuc()
    this.pretreatmentSomeNumIntervalFuc()
    this.roastingNumIntervalFuc()
  },
  mounted() {
    this.monitorHei();
    this.slideshowFuc()
    window.addEventListener("resize", this.monitorHei);
    // this.windowAddMouseWheel()
    document.querySelector('.view-main').addEventListener('scroll', (event) => this.handelScroll(event.target.scrollLeft))
  },
  //销毁页面之前，断开连接
  beforeDestroy() {
    //页面离开时断开连接,清除定时器
    clearInterval(this.tabTimer)
    this.disconnect();
    clearInterval(this.timer);
    clearInterval(this.numArrInterval)
    clearInterval(this.afterNumInterval)
    clearInterval(this.pitchNumInterval)
    clearInterval(this.initApiTime)
    clearInterval(this.moveScrollLeftTime)
    // clearInterval(this.sendTime)
  },
};
</script>
<style lang="scss">
.el-dialog__wrapper {
	font-size: 16px;
}
.largeScreenPageMessage {
	font-size: 0.3rem;
	.el-message__content {
		font-size: 0.3rem;
	}
}
</style>
<style lang="scss">
.largeScreen_page {
	position: absolute;
	width: 100%;
	height: calc(100% - 84px);
	.largeScreenDiv {
		position: absolute;
		// width: 183.55rem;
		// width: 179.3rem;
		width: 180.5rem;
		height: 100%;
		display: flex;
		overflow-x: auto;
		.largeScreenDivBg {
			position: relative;
			top: 0;
			left: 0;
			width: 160rem;
			height: 100%;
			background: url('~@/assets/image/coalTarScreen/bg-2.svg') no-repeat center;
			// z-index: 999;
			background-size: 100% 100%;
			display: flex;
			// .adapterImg{
			//     position: absolute;
			//     z-index: 999;
			//     width: .58rem;
			//     height: .58rem;
			// }
			.adapterRightTopImg {
				transform: rotate(90deg);
			}
			.adapterLeftBottomImg {
				transform: rotate(270deg);
			}
			.adapterRightBottomImg {
				transform: rotate(180deg);
			}
		}
		.batchMaterial {
			// width: 23.55rem;
			width: 20.5rem;
			height: 100%;
			position: absolute;
			top: 0;
			left: 160rem;
		}
	}
	.largeScreen_page_main {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
		position: relative;
		// overflow-x: auto;
	}
	.selectDiv {
		// flex: 1;
		position: absolute;
		right: 0.16rem;
		width: 2.3rem;
		z-index: 99;
		display: flex;
		align-items: center;
		color: #67758a;
		justify-content: flex-end;
		& > div {
			display: flex;
			align-items: center;
			.selectDiv_title {
				display: inline-block;
				font-size: 0.14rem;
			}
		}
		& > div:last-child {
			.selectDiv_title {
				margin-left: 0.2rem;
			}
		}
		.el-input--medium {
			width: 1.18rem;
			.el-input__icon {
				line-height: 0.3rem;
			}
			.el-input__inner {
				height: 0.3rem;
				// width: 1.2rem;
				background: #243047;
				border-color: #243047;
				color: #fff;
			}
		}
		& > div {
			margin: 0 0.12rem 0 0;
		}
	}
	.kanban_menu {
		display: flex;
		width: 14rem;
		justify-content: center;
		font-size: 0.12rem;
		margin: 0 0.12rem;
		position: absolute;
		top: 0.8rem;
		left: 50%;
		z-index: 9900;
		flex-wrap: wrap;
		display: flex;
		font-size: 0.16rem;
		color: #fff;
		height: 0.4rem;
		z-index: 2000;
		transform: translateX(-50%);
		z-index: 100;
		& > div {
			margin: 0 0.12rem 0 0;
		}
		.openDiv {
			img {
				width: 0.35rem;
				height: 0.35rem;
				cursor: pointer;
			}
		}
		& > div {
			width: 1.35rem;
			height: 0.35rem;
			display: flex;
			justify-content: center;
			align-items: center;
			border: 0.02rem solid #2f71db;
			padding: 0.04rem 0.08rem;
			margin: 0 0.1rem 0.1rem 0;
			border-radius: 0.04rem;
			cursor: pointer;
			position: relative;
			.spanDiv {
				position: absolute;
				width: 0.2rem;
				height: 0.04rem;
				background: #398cff;
				margin: 0;
				padding: 0;
				position: absolute;
				margin-bottom: 16px;
				overflow: hidden;
				z-index: 100;
				span {
					position: absolute;
					width: 0px;
					height: 0px;
				}

				.sp1 {
					left: 0px;
					top: 0;
					border: 0.06rem solid transparent;
					border-left-color: #052d5e !important;
				}

				.sp2 {
					right: -1px;
					top: 0;
					border: 0.06rem solid transparent;
					border-right-color: #052d5e !important;
				}
			}
			.selectOpDiv {
				position: relative;
				color: #fff;
				img {
					width: 0.12rem;
					height: 0.08rem;
				}
				.selectOption {
					position: absolute;
					top: 0.35rem;
					left: -0.1rem;
					width: 1.1rem;
					background: #fff;
					padding: 0.04rem;
					border-radius: 0.04rem;
					border: solid 1px #dfe4ed;
					margin: 5px 0;
					.option {
						line-height: 0.3rem;
						color: #606266;
					}
					& > div.active {
						color: #355db4;
					}
				}
				.popper__arrow {
					position: absolute;
					top: 0.33rem;
					width: 0;
					height: 0;
					border-left: 0.05rem solid transparent;
					border-right: 0.05rem solid transparent;
					border-bottom: 0.1rem solid #fff;
					left: 0.2rem;
				}
			}
		}
		.leftSpan {
			left: -0.1rem;
			top: 0.13rem;
			transform: rotate(270deg);
		}
		.rightSpan {
			right: -0.1rem;
			top: 0.13rem;
			transform: rotate(90deg);
		}
		& > div.active {
			background: radial-gradient(125.89% 125.89% at 50% 50%, rgba(12, 105, 255, 0) 0%, #0c69ff 100%);
			.sp1 {
				border-left-color: #0846a0 !important;
			}
			.sp2 {
				border-right-color: #0846a0 !important;
			}
		}
	}
}
@import './style/kanban.scss';
@import './style/foo1.scss';
@import './style/move.scss';
@import './style/pitchWorkShop.scss';
@import './style/pretreatmentSomeWorkShop.scss';
@import './style/roastingWorkShop.scss';
</style>