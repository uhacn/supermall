<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  props: {
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    // 1.创建BScroll对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      observeDOM: true,
      click: true,
      probeType: 3,
      pullUpLoad: this.pullUpLoad,
    });

    // 2.监听滚动的位置
    this.scroll.on("scroll", (position) => {
      this.$emit("scroll", position);
    });

    // 3.监听上拉事件
    this.scroll.on("pullingUp", () => {
      this.$emit("pullingUp");
      // 完成加载
      this.scroll && this.scroll.finishPullUp();
    });
  },
  methods: {
    refresh() {
      this.scroll && this.scroll.refresh();
    },
  },
};
</script>

<style scoped>
.wrapper {
  height: 100%;
}
</style>