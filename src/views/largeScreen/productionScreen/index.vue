 <template>
	<div class="largeScreen_page" ref="productionScreen">
		<t-screen title="生产运行监控大屏" @trans-forma-tion="transFormaTionFuc">
			<div class="largeScreen_page_main">
				<div class="selectDiv">
					<div class="tip">双击页面，全屏预览！</div>
					<div v-for="(item, index) of statusList" :key="index" class="item">
						<span :style="{ background: item.color }"></span>
						<span>{{ item.name }}</span>
					</div>
					<div class="select_item">
						<span>分页切换时间：</span>
						<el-select
							style="width: 1rem"
							v-model="tabTimeValue"
							@change="workShopAutoPageFuc(true)"
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
					<div class="select_item switchDiv">
						<span>自动切换开关：</span>
						<el-switch active-color="#355DB4" v-model="autoTabFlag"></el-switch>
					</div>
				</div>
				<div class="headerTabDiv">
					<div
						@click="tabChange(item, index)"
						:class="{
              item: true,
              active: item.deptNum == activeId,
              bor: item.deptNum == activeId
            }"
						v-for="(item, index) of tabOptions"
						:key="index"
					>
						<span>{{ item.deptName }}</span>
					</div>
				</div>
				<div class="container">
					<div class="oilview-img">
						<i
							:style="{
                height: setSize(8),
                left: '.16rem',
                fontSize: setSize(8)
              }"
							@dblclick.stop
							@click.stop="arrowClick(false)"
							class="el-icon-arrow-left"
						></i>
						<i
							:style="{
                height: setSize(8),
                right: '.16rem',
                fontSize: setSize(8)
              }"
							@dblclick.stop
							@click.stop="arrowClick(true)"
							class="el-icon-arrow-right"
						></i>
					</div>
					<div
						class="itemDiv"
						:style="{ border: `0.02rem solid ${item.color}` }"
						v-for="(item, index) of tableData"
						:key="index"
						@click="handelItem(item)"
					>
						<div
							v-if="item.text == '闲置' && item.data.length"
							class="prepurgingDiv"
							:style="{ color: item.color }"
						>清炉中</div>
						<div :style="{ color: item.color }" class="titleDiv">
							<div>{{ item.text != "闲置" || item.data.length ? item.furnaceNo + "-" + item.furnaceCount : item.furnaceNo }}</div>
							<div>
								<div>
									<span :style="{ background: item.color }"></span>
									{{ item.text }}
									<span v-if="item.yield">{{ item.yield + "%" }}</span>
								</div>
								<div v-if="item.yield">
									<span :style="{ width: item.yield + '%', background: item.color }"></span>
								</div>
							</div>
						</div>
						<table class="table" v-if="item.text != '闲置' || item.data.length">
							<thead>
								<tr>
									<th align="center" style="width: 1rem">品名</th>
									<th align="center">批号</th>
									<th style="width: 0.75rem">坩埚数量</th>
									<th style="width: 0.6rem">重量(t)</th>
									<th style="width: 0.75rem">装炉数量</th>
									<th style="width: 0.75rem">出炉数量</th>
								</tr>
							</thead>
							<tfoot>
								<div class="tfooter" :style="{ color: item.color }">
									<div v-if="item.chargeFurnaceWeightTotal">装炉重量：{{ item.chargeFurnaceWeightTotal + "T" }}</div>
									<div v-if="item.powerDeliveryTime">送电时长：{{ item.powerDeliveryTime + "h" }}</div>
									<div v-if="item.electricChrQty">送电量：{{ item.electricChrQty + "KW" }}</div>
									<div v-if="item.singleConsumption">单耗：{{ item.singleConsumption + "t/kWh" }}</div>
								</div>
							</tfoot>
							<tbody
								:class="{
                  itemMar: item.workOrderBatchRecordVOList && item.workOrderBatchRecordVOList.length > 5 ? true : false
                }"
							>
								<tr v-for="(ele, eleindex) of item.data" :key="eleindex">
									<td align="center" style="width: 1rem">
										<div class="marqueeDiv">
											<marquee
												scrolldelay="300"
												v-if="ele.materialName && ele.materialName.length > 7"
												direction="left"
												style="position: relative; max-width: 1.1rem"
											>{{ ele.materialName }}</marquee>
											<span v-else>{{ ele.materialName }}</span>
										</div>
									</td>
									<td align="center">
										<div class="marqueeDiv">
											<marquee
												scrolldelay="300"
												v-if="ele.batchNum && ele.batchNum.length > 7"
												direction="left"
												align="middle"
												height=".4rem"
												style="max-width: 1.5rem"
											>{{ ele.batchNum }}</marquee>
											<span v-else>{{ ele.batchNum }}</span>
										</div>
									</td>
									<td align="center" style="width: 0.75rem">{{ ele.crucibleAmount }}</td>
									<td align="center" style="width: 0.6rem">{{ ele.weight }}</td>
									<td align="center" style="width: 0.75rem">{{ ele.furnaceAmount }}</td>
									<td align="center" style="width: 0.75rem">{{ ele.releaseAmount }}</td>
								</tr>
							</tbody>
						</table>
						<div class="tabBar" v-if="item.text != '闲置' || item.data.length">
							<div :style="{ color: item.color }">
								<span>{{ item.monitorTimeVO && item.monitorTimeVO.startName && item.monitorTimeVO.startName + "：" }}</span>
								<span>{{ item.monitorTimeVO && item.monitorTimeVO.startTime }}</span>
							</div>
							<div :style="{ color: item.color }">
								<span>{{ item.monitorTimeVO && item.monitorTimeVO.endName && item.monitorTimeVO.endName + "：" }}</span>
								<span>{{ item.monitorTimeVO && item.monitorTimeVO.endTime }}</span>
							</div>
						</div>
						<div v-if="item.text == '闲置' && !item.data.length" class="idleImgDiv">
							<img src="@/assets/image/idle.png" alt />
							<span>暂无数据</span>
						</div>
					</div>
				</div>
				<div class="pagetionDiv">
					<span
						v-for="item of getPages"
						:key="item"
						@click.stop="tabPageFuc(item - 1)"
						@dblclick.stop
						:class="{ active: item === dataIndex + 1 }"
					></span>
				</div>
			</div>
		</t-screen>
	</div>
</template>
<script>
import TScreen from '@/components/TScreen/index.vue'
import deptList from './getData/getDeptList.json'
import listMonitor from './getData/getListMonitor.json'
import websocket from './getData/websocket.json'
export default {
  name: 'productionScreen',
  components: {
    TScreen
  },
  data() {
    return {
      statusList: [
        {
          name: "装炉中",
          text: "装炉",
          color: "#f6bd16"
        },
        {
          name: "送电中",
          text: "送电",
          color: "#F08BB4"
        },
        {
          name: "冷却中",
          text: "冷却",
          color: "#5b8ff9"
        },
        {
          name: "出炉中",
          text: "出炉",
          color: "#61ddaa"
        },
        {
          name: "闲置中",
          text: "闲置",
          color: "#67758a"
        },
        {
          name: "中途断电",
          text: "中途断电",
          color: "#FF8831"
        }
      ],
      tabTimeList: [
        {
          name: "30",
          unit: "秒",
          value: 30
        },
        {
          name: "1",
          unit: "分钟",
          value: 60
        },
        {
          name: "2",
          unit: "分钟",
          value: 120
        },
        {
          name: "3",
          unit: "分钟",
          value: 180
        },
        {
          name: "4",
          unit: "分钟",
          value: 240
        },
        {
          name: "5",
          unit: "分钟",
          value: 300
        },
        {
          name: "10",
          unit: "分钟",
          value: 600
        },
        {
          name: "30",
          unit: "分钟",
          value: 1800
        }
      ],
      remSize: 100,
      tabTimeValue: 30, // 切换时间
      activeId: null, // 当前选中tag栏id
      activeIndex: null, // 当前选中tag栏索引
      furnaceDataAutoPageTime: null, // 炉室自动切换页码定时器
      refreshTimeValue: null, // 车间数据切换定时器
      viewHeight: 600,
      dataIndex: 0,
      initSockFlag: false, // 是否初始化推送  初始化推送全部车间数据，后续哪个车间更新了只推送一个车间数据
      autoTabFlag: true, // 是否自动切换车间
      tableBaseData: [], //data备份数据
      tableData: [], //data数据
      tabOptions: [],
      dataBase: [] //socket数据
    }
  },
  computed: {
    getPages() {
      return Math.ceil(this.tableBaseData.length / 8)
    }
  },
  mounted() {
    this.getDeptList();
    this.monitorHei();
    window.addEventListener("resize", this.monitorHei);
  },
  beforeDestroy() {
    clearInterval(this.refreshTimeValue)
  },
  methods: {
    transFormaTionFuc(hei, wid, size) {
      this.remSize = size
    },
    async getDeptList() {
      const res = await deptList;
      if (res.success) {
        this.tabOptions = res.data || [];
        if (this.tabOptions.length) {
          this.activeId = this.tabOptions[0].deptNum;
          this.activeIndex = 0;
          await this.getListMonitor();
          await this.connection();
        }
      }
    },
    monitorHei() {
      this.viewHeight = this.$refs?.productionScreen?.offsetHeight
    },
    setSize(size) {
      return this.viewHeight / size + "px"
    },
    handelItem(item) {
      if (item.text == "闲置" && !item.data.length) {
        this.$message.warning("该炉闲置中");
        return;
      }
      this.$message.success("点击了");
    },
    // 切换车间
    tabChange(item, index) {
      this.activeId = item.deptNum;
      this.activeIndex = index;
      this.dataIndex = 0;
      this.dealDataFuc(this.dataBase.find((item) => item.deptCode == this.activeId)?.monitorVOList || []);
    },
    // 获取主界面信息接口
    async getListMonitor() {
      const res = await listMonitor;
      if (res.success) {
        this.dealDataFuc(res.data || []);
      }
    },
    //处理数据方法
    dealDataFuc(resData) {
      this.tableBaseData = resData.map(
        (item) => {
          if (item.processStatusLabel == "出炉结束") {
            item.text = "闲置";
            item.color = this.statusList[4].color;
          } else {
            item.text = this.statusList.find(ele => item.processStatusLabel.includes(ele.text))?.name;
            item.color = this.statusList.find(ele => item.processStatusLabel.includes(ele.text))?.color;
          }
          item.pages = (item.workOrderBatchRecordVOList && Math.ceil(item.workOrderBatchRecordVOList.length / 4)) || 0; //页数
          item.pageNum = 0;
          item.data = item.workOrderBatchRecordVOList ? this.getListMonitorPages(item.workOrderBatchRecordVOList, 0) : []; //获取第一页
          return item;
        }
      );
      this.tableData = this.tableBaseData.filter((item, index) => index < 8);
      // console.log("this.tableData--", this.tableData);
      this.workShopAutoPageFuc(false); //每个车间超过八个炉室自动分页
      this.autoTabPageFuc(); //每个表格超过四条自动分页
    },
    // 获取当前页数据
    getListMonitorPages(data, index) {
      let tableBaseData = data.filter((item, idx) => {
        return idx >= index * 4 && idx < index * 4 + 4;
      });
      return tableBaseData;
    },
    autoTabPageFuc() {
      if (this.furnaceDataAutoPageTime) clearInterval(this.furnaceDataAutoPageTime);
      this.furnaceDataAutoPageTime = setInterval(() => {
        this.tableData = this.tableData.map((item) => {
          if (item.pages) {
            item.pageNum++;
            if (item.pageNum == item.pages) item.pageNum = 0;
            if (item.pages > 1) item.data = this.getListMonitorPages(item.workOrderBatchRecordVOList, item.pageNum);
          }
          return item;
        });
      }, 10000);
    },
    async connection() {
      const res = await websocket;
      if (res.success) {
        let resData = res.data || [];
        // console.log("777---", resData, this.dataBase);
        if (!this.initSockFlag) {
          //初始化推送
          this.dataBase = resData;
          this.initSockFlag = true;
        } else {
          resData.forEach((item) => {
            if (this.dataBase.findIndex((ele) => ele.deptCode == item.deptCode) >= 0) {
              this.dataBase[this.dataBase.findIndex((ele) => ele.deptCode == item.deptCode)].monitorVOList =
                item.monitorVOList;
            }
          });
        }
        // console.log("this.dataBase", this.dataBase);
        this.dealDataFuc(this.dataBase.find((item) => item.deptCode == this.activeId)?.monitorVOList || []);
      }
    },
    // 手动切换分页
    tabPageFuc(index) {
      this.dataIndex = index;
      this.tableData = this.tableBaseData.filter(
        (item, index) => index < (this.dataIndex + 1) * 8 && index >= this.dataIndex * 8
      );
      this.workShopAutoPageFuc(false);
    },
    // 左右切换分页
    workShopAutoPageFuc(flag) {
      if (this.refreshTimeValue) clearInterval(this.refreshTimeValue);
      let pages = Math.ceil(this.tableBaseData.length / 8);
      this.refreshTimeValue = setInterval(() => {
        if (!flag) this.dataIndex++;
        if (this.dataIndex >= pages) {
          this.dataIndex = 0;
          //如需要停止车间切换 在这里阻止
          if (!this.autoTabFlag) {
            if (!flag)
              this.tableData = this.tableBaseData.filter(
                (item, index) => index < (this.dataIndex + 1) * 8 && index >= this.dataIndex * 8
              );
            return;
          }
          this.activeIndex++;
          if (this.activeIndex == this.tabOptions.length) this.activeIndex = 0;
          this.activeId = this.tabOptions[this.activeIndex].deptNum;
          this.dealDataFuc(this.dataBase.find((item) => item.deptCode == this.activeId)?.monitorVOList || []);
          return;
        }
        if (!flag)
          this.tableData = this.tableBaseData.filter(
            (item, index) => index < (this.dataIndex + 1) * 8 && index >= this.dataIndex * 8
          );
      }, this.tabTimeValue * 1000);
    }
  }
}
</script>
<style lang="scss">
@import './index.scss';
.largeScreen_page {
	width: 100%;
	height: 100%;
	position: absolute;
	.pagetionDiv {
		width: 100%;
		height: 0.3rem;
		display: flex;
		justify-content: center;
		span {
			width: 0.12rem;
			height: 0.12rem;
			border-radius: 50%;
			background: #0c69ff;
			opacity: 0.5;
			cursor: pointer;
			margin: 0 0.2rem;
		}
		span.active {
			opacity: 1;
		}
	}
	.oilview-img {
		i {
			position: absolute;
			height: 0.5rem !important;
			color: white;
			font-size: 0.5rem !important;
			cursor: pointer;
			z-index: 1000;
			// top: 50%;
			transform: translateY(-50%);
			display: none;
			background-color: rgb(0, 0, 0);
			opacity: 70%;
			border-radius: 50%;
			top: 56.2%;
		}
	}
	// .largeScreen_page_main{
	//   // height: calc(100% - 0.86rem);
	//   position: relative;
	// }
	.headerTabDiv {
		display: flex;
		font-size: 0.16rem;
		margin: 0 0.16rem;
		position: relative;
		z-index: 99;
		& > div {
			color: #67758a;
			flex: 1;
		}
		.item {
			color: #b8b8b8;
			padding: 0.12rem 0.16rem;
			border: 0.02rem solid #1f379d;
			margin-right: 0.12rem;
			text-align: center;
			cursor: pointer;
		}
		.item:last-child {
			margin-right: 0;
		}
		.item.active {
			color: #fff;
			background-color: #0f2a5b;
		}
	}
	.selectDiv {
		display: flex;
		font-size: 0.16rem;
		align-items: center;
		.tip {
			font-size: 0.28rem;
			color: #fff;
			position: absolute;
			left: 0.2rem;
		}
		.item {
			color: #fff;
			& > span:first-child {
				display: inline-block;
				width: 0.16rem;
				height: 0.08rem;
			}
		}
		& > div {
			margin: 0 0.16rem 0 0;
		}
		.select_item {
			display: flex;
			align-items: center;
			color: #67758a;
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
		}
		.switchDiv {
			margin-left: 0.16rem;
		}
		margin: 0 0.2rem 0.16rem;
		justify-content: flex-end;
	}
	.container:hover .oilview-img i {
		display: block;
		// color: rgba(27, 38, 254, 0.6);
	}
	.container {
		display: flex;
		flex-wrap: wrap;
		margin: 0.2rem 0.16rem 0;
		.itemDiv:nth-child(4n + 1) {
			margin-right: 0;
		}
		.itemDiv {
			margin-bottom: 16px;
			padding: 0.1rem;
			font-size: 0.16rem;
			position: relative;
			cursor: pointer;
			.prepurgingDiv {
				font-size: 0.6rem;
				position: absolute;
				left: 50%;
				top: 50%;
				z-index: 1;
				opacity: 0.3;
				transform: translate(-50%, -50%);
			}
			.table {
				width: 100%;
				font-size: 0.12rem;
				tr {
					line-height: 0.4rem;
				}
				th {
					color: #67758a;
					padding: 0 0.04rem;
					// padding: 0 0.12rem;
				}
				td {
					color: #fff;
					height: 0.4rem;
					padding: 0 0.04rem;
					// padding: 0 0.12rem;
				}
				.marqueeDiv {
					height: 0.4rem;
				}
				thead,
				tfoot {
					width: calc(100% - 1em);
				}
				.tfooter {
					display: flex;
					flex-wrap: wrap;
					& > div {
						line-height: 0.3rem;
						padding-right: 0.12rem;
						color: #fff;
						font-weight: bold;
					}
				}
				tbody {
					width: 100%;
					height: 1.8rem;
				}
				thead,
				tbody,
				tfoot {
					tr {
						display: table;
						width: 100%;
						table-layout: fixed;
					}
				}
				.itemMar {
					tr td:last-child {
						padding: 0 0.3rem;
					}
					tr td:nth-child(3) {
						padding: 0 0.25rem;
					}
				}
			}
			.titleDiv {
				display: flex;
				align-items: center;
				margin-bottom: 0.05rem;
				color: #fff;
				font-weight: bold;
				& > div:first-child {
					width: 1rem;
					text-align: left;
					font-size: 0.3rem;
				}
				& > div:last-child {
					flex: 1;
					display: flex;
					align-items: center;
					justify-content: flex-end;
					& > div:first-child {
						& > span:first-child {
							display: inline-block;
							width: 0.1rem;
							height: 0.1rem;
							border-radius: 50%;
						}
					}
					& > div:nth-child(2) {
						display: flex;
						margin-left: 0.05rem;
						width: 0.5rem;
						height: 0.1rem;
						background: #243047;
					}
				}
			}
			box-sizing: border-box;
			width: 24.7%;
			height: 4rem;
			position: relative;
			margin-right: 0.4%;
			.idleImgDiv {
				height: 3rem;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				img {
					width: 1rem;
					height: 1rem;
				}
				& > span {
					color: #65789b;
					font-size: 0.14rem;
				}
			}
			h3 {
				margin: 0 0 16px;
				text-align: center;
			}
			.tabBar {
				position: absolute;
				display: flex;
				justify-content: space-between;
				align-items: center;
				width: calc(100% - 0.2rem);
				color: #aeb8c7;
				height: 0.4rem;
				padding: 0 0.1rem;
				background: #243047;
				border-radius: 0.04rem;
				bottom: 0.1rem;
			}
		}
	}
}
</style>
