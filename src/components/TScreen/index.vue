<template>
	<div
		:class="{'full-box':true,'active-full':isFull,'quit-full':!isFull}"
		:style="`${isActiveFull?'  position: fixed;top: 0;left: 0;bottom: 0;right: 0;z-index: 9999;':''}font-size:${fontSize}`"
		@dblclick="isFullClick"
	>
		<slot name="header">
			<el-row class="header-box">
				<div class="header-left">
					<!-- 标题左边插槽 -->
					<slot name="header-left"></slot>
				</div>
				<div v-if="title" style="font-size: .40rem">{{title}}</div>
				<div v-else style="font-size: .40rem">
					<slot name="title"></slot>
				</div>
				<div class="header-time">
					<slot name="header-right"></slot>
					<div v-if="nowTimeShow" style="min-width: 1.90rem">{{nowTime}}</div>
				</div>
			</el-row>
		</slot>
		<div class="view-main">
			<!-- 默认内容插槽 -->
			<slot></slot>
		</div>
	</div>
</template>

<script>
import screenfull from "screenfull";
import moment from "moment";
export default {
  name: "TScreen",
  data() {
    return {
      isFull: false, //是否全屏
      record: true, //是否需要记录全屏前的屏幕状态
      cacheFull: false, //保存看板全屏前的浏览器状态
      intervalId: null, //保存计时器地址,用于停止计时器
      keyupEsc: null, //保存全局监听esc地址
      nowTime: null,
      fontSize: null,//父级字体大小
      route: null,
    };
  },
  props: {
    //标题
    title: {
      type: String,
      default: ""
    },
    //是否显示时间
    nowTimeShow: {
      type: Boolean,
      default: true
    },
    //是否覆盖屏幕
    isActiveFull: {
      type: Boolean,
      default: false
    }
  },
  activated() {
    window.addEventListener("resize", this.setFontSize);
    this.stopInterval();
    this.setFontSize()
  },
  deactivated() {
    this.stopInterval();
    window.removeEventListener("resize", this.setFontSize);
    document.documentElement.style.fontSize = '14px'
  },
  mounted() {
    window.addEventListener("resize", this.setFontSize);
    this.addInterval();
    this.setFontSize()
  },
  destroyed() {
    this.stopInterval();
    window.removeEventListener("resize", this.setFontSize);
    document.documentElement.style.fontSize = '14px'
  },
  methods: {
    //点击全屏
    isFullClick() {
      if (this.record) {
        this.cacheFull = this.isFullScreen();
        this.record = false;
      }
      this.isFull = !this.isFull;
      if (!this.isFull) this.record = true;
      if (this.isFull && !this.isFullScreen()) screenfull.toggle();
      else if (!this.isFull && this.cacheFull != this.isFullScreen())
        screenfull.toggle();
    },
    //获取当前屏幕状态
    isFullScreen: () =>
      document.isFullScreen ||
      document.mozIsFullScreen ||
      document.webkitIsFullScreen,
    //启动时钟
    addInterval() {
      if (this.intervalId != null) return;
      this.intervalId = setInterval(() => {
        this.nowTime = moment().format("YYYY-MM-DD HH:mm:ss");
      }, 1000);
    },
    // 停止定时器
    stopInterval() {
      clearInterval(this.intervalId);
      this.intervalId = null;
    },
    setFontSize() {
      let hei = this.$el.offsetHeight;
      let wid = this.$el.offsetWidth;
      // console.log("走了这里了", this.$el)
      if (hei / 1080 <= wid / 1920) {
        this.fontSize = 100 * (hei / 1080);
        document.documentElement.style.fontSize = this.fontSize + 'px'
        // console.log(hei)
      } else {
        this.fontSize = 100 * (wid / 1920)
        document.documentElement.style.fontSize = this.fontSize + 'px'

        // console.log(hei*wid/1920)
      }
      // console.log(this.fontSize)
      this.$emit("transFormaTion", hei, wid, this.fontSize)
    }
  }
};
</script>

<style lang="scss" scoped>
::-webkit-scrollbar {
	width: 0.01rem;
}
.full-box {
	background: #101a32;
	-moz-user-select: none; /*火狐*/
	-webkit-user-select: none; /*webkit浏览器*/
	-ms-user-select: none; /*IE10*/
	-khtml-user-select: none; /*早期浏览器*/
	user-select: none;
}
.active-full {
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	z-index: 1500;
}

.quit-full {
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
}

.header-box {
	width: auto;
	margin-bottom: 0.1rem;
	height: 0.76rem;
	display: flex;
	justify-content: space-between;
	background: url('../../assets/image/header_img.png') no-repeat center top;

	& > div {
		display: flex;
		flex: 1;
		align-items: center;
		height: 100%;
		width: 1rem;
		padding: 0.1rem;
		// background: #f4f4f5;

		&:first-child {
			justify-content: start;
		}
		&:nth-child(2) {
			flex-grow: 1.5;
			justify-content: center;
			font-size: 0.36rem;
			font-weight: bold;
			color: rgba(0, 106, 255, 1);
		}

		&:last-child {
			justify-content: flex-end;
			color: #fff;
			font-size: 0.22rem;
			font-family: DS-Digital-Bold, DS-Digital;
		}
	}
	.header-time {
		display: flex;
		font-family: 'timefont' !important;
	}
}

.view-main {
	height: calc(100% - 0.86rem);
	width: auto;
	overflow-y: auto;
}
</style>
