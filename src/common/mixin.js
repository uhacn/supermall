import { debounce } from "./utils";

export const imgListenerMixin = {
  data() {
    return {
      imgListener: null
    }
  },
  mounted() {
    const refresh = debounce(this.$refs.thisscroll.refresh, 10);
    // 事件总线
    this.imgListener =  () => {
      refresh();
    }
    this.$bus.$on("goodsImageLoad", () => {
      refresh();
    });
  }
}