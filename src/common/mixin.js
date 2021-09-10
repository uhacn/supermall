import { debounce } from "./utils";
import BackTop from "components/content/backtop/BackTop";


// 防抖
export const imgListenerMixin = {
  data() {
    return {
      imgListener: null
    }
  },
  mounted() {
    const refresh = debounce(this.$refs.thisscroll.refresh, 10);
    // 事件总线
    this.imgListener = () => {
      refresh();
    }
    this.$bus.$on("goodsImageLoad", () => {
      refresh();
    });
  }
}

export const backTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      backTopShow: false
    }
  },
  methods: {
    // 点击回到顶部
    backClick() {
      this.$refs.thisscroll.scroll.scrollTo(0, 0, 500);
    },
  }

}