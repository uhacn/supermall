<template>
   <div class="recommend-info">
    <div class="info-header">热门推荐</div>
    <goods-list :goods="recommendInfo"/>
  </div>
</template>

<script>
import GoodsList from "components/content/goods/GoodsList";
import GoodsListItem from "components/content/goods/GoodsListItem";

export default {
  props: {
    recommendInfo: {
      type: Array,
    },
  },
  components: {
    GoodsList,
    GoodsListItem
  },
};
</script>

<style>
.recommend-info {
    padding: 5px;
    text-align: center;
  }

  .info-header {
    line-height: 40px;
    padding-left: 8px;
    font-size: 15px;
    color: #333;
  }

</style>