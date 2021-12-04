<template>
  <div class="grid-view" ref="gridView">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "GridView",
  props: {
    cols: {
      type: Number,
      default: 2,
    },
    hMargin: {
      type: Number,
      default: 8,
    },
    vMargin: {
      type: Number,
      default: 8,
    },
    itemSpace: {
      type: Number,
      default: 8,
    },
    lineSpace: {
      type: Number,
      default: 8,
    },
  },
  mounted() {
    setTimeout(this._autoLayout, 20);
  },
  updated() {
    this._autoLayout();
  },
  methods: {
    _autoLayout() {
      // 1.获取gridView和children
      // 注: 这里为什么不用document.querySelector呢?
      // 答: 因为如果在项目中, 多处都用到了grid-view, 那么这里就不确定获取的是哪一个了.
      let gridView = this.$refs.gridView;
      let children = gridView.children;

      // 2.设置gridView的内边距
      gridView.style.padding = `${this.vMargin}px ${this.hMargin}px`;

      // 3.计算item的宽度
      let itemWidth =
        (gridView.clientWidth -
          2 * this.hMargin -
          (this.cols - 1) * this.itemSpace) /
        this.cols;

      // 4.设置item的间距
      for (let i = 0; i < children.length; i++) {
        let item = children[i];
        item.style.width = itemWidth + "px";
        if ((i + 1) % this.cols !== 0) {
          item.style.marginRight = this.itemSpace + "px";
        }
        if (i >= this.cols) {
          item.style.marginTop = this.lineSpace + "px";
        }
      }
    },
  },
};
</script>

<style scoped>
.grid-view {
  display: flex;
  flex-wrap: wrap;
}
</style>