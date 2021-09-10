<template>
  <scroll class="content" ref="scroll">
    <cart-list-item
      v-for="(item, index) in cartList"
      :key="index"
      :goods-info="item"/>
  </scroll>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";
import CartListItem from "./CartListItem";

export default {
  components: {
    Scroll,
    CartListItem,
  },
  props: {
    cartList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  activated() {
    this.$refs.scroll.refresh();
  },
};
</script>

<style scoped>
.content {
  height: calc(100% - 49px - 44px - 40px);
  overflow: hidden;
}
</style>